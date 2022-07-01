import {
  Arg,
  Authorized,
  Ctx,
  ID,
  Mutation,
  Query,
  Resolver
} from 'type-graphql';
import { getRepository } from 'typeorm';
import { ResetPasswordInput, User, UserUpdateInput } from '../models/User';
import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken';
import { UserRole } from '../enums/UserRole';
import sendEmail from '../utils/sendEmail';
import { createConfirmationUrl } from '../utils/createConfirmationUrl';
import { EmailInterface } from '../../interface/EmailInterface';

@Resolver(User)
export class UsersResolver {
  private userRepo = getRepository(User);

  // get all users
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  // get user profile
  @Authorized()
  @Query(() => User)
  async getProfile(@Ctx() context: { user: User }): Promise<User | null> {
    const user = context.user;
    return await this.userRepo.findOne(user.id);
  }

  // sign up
  @Mutation(() => User)
  async signup(
    @Arg('firstName') firstName: string,
    @Arg('familyName') familyName: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<User | Error> {
    try {
      const newUser = this.userRepo.create({
        firstName,
        familyName,
        email,
        password: await argon2.hash(password)
      });
      newUser.assigned_tasks = [];

      // const validateUrl = await createConfirmationUrl(email, 'confirm');
      // const emailObject: EmailInterface = {
      //   from: 'noreply@taskhub.com', // sender address
      //   to: email, // list of receivers
      //   subject: 'Confirmation compte TaskHub', // Subject line
      //   text: 'Veuillez cliquer sur le lien pour confirmer votre adresse email.', // plain text body
      //   html: `<p>Veuillez cliquer sur le lien pour confirmer votre adresse email.</p><a href="${validateUrl}">${validateUrl}</a>` // html body
      // };

      // await sendEmail(emailObject);
      await newUser.save();

      return newUser;
    } catch (e) {
      return e;
    }
  }

  // login
  @Mutation(() => String, { nullable: true })
  async signin(
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<string> {
    const user = await this.userRepo.findOne({ email });

    if (user && user.confirmed) {
      if (await argon2.verify(user.password, password)) {
        const token = jwt.sign({ userId: user.id }, 'supersecret', {
          expiresIn: '24h' // expires in 24 hours
        });

        return token;
      } else {
        return null;
      }
    } else {
      // console.log(3);
      // return null;
      throw new Error('User is not confirmed');
    }
  }

  // Confirm user email
  @Mutation(() => Boolean)
  async confirmUser(@Arg('token') token: string): Promise<boolean> {
    try {
      const decoded = jwt.verify(token, 'supersecret', {
        expiresIn: '24h' // expires in 24 hours
      });
      await User.update({ email: decoded.email }, { confirmed: true });
      return true;
    } catch (e) {
      return false;
    }
  }

  // update role
  @Mutation(() => User)
  async changeUserRole(
    @Arg('userId') id: number,
    @Arg('role') role: UserRole
  ): Promise<User | Error> {
    const user = await this.userRepo.findOne(id);
    if (role in UserRole) {
      user.role = role;
      await user.save();
      return user;
    }
    return new Error("Role doesn't exist");
  }

  // update User
  @Mutation(() => User!, { nullable: true })
  async updateUser(
    @Arg('data', () => UserUpdateInput) updateUser: User,
    @Arg('id', () => ID) id: number
  ): Promise<User | null> {
    const user = await this.userRepo.findOne(id);
    if (user) {
      await this.userRepo.update(id, updateUser);
      await user.reload();
      return user;
    }
    return null;
  }

  // remove user
  @Mutation(() => User!, { nullable: true })
  async removeUser(
    @Arg('id', () => ID) id: number
  ): Promise<User | null | undefined> {
    const user = await this.userRepo.findOne(id);

    return user ? (await this.userRepo.delete(id)) && user : null;
  }

  // reset password
  @Mutation(() => Boolean)
  async resetUserPassword(
    @Arg('reset', () => ResetPasswordInput) reset: ResetPasswordInput,
    @Arg('token') token: string
  ): Promise<boolean> {
    try {
      const decoded = jwt.verify(token, 'supersecret', {
        expiresIn: '24h' // expires in 24 hours
      });
      let newPassword = await argon2.hash(reset.password);

      console.log(decoded);

      await User.update({ email: decoded.email }, { password: newPassword });
      console.log(newPassword);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  // Forgot password
  @Mutation(() => Boolean)
  async forgotPassword(@Arg('email') email: string): Promise<boolean> {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return true;
    }
    const validateUrl = await createConfirmationUrl(email, 'reset-password');
    const emailObject: EmailInterface = {
      from: 'noreply@taskhub.com', // sender address
      to: email, // list of receivers
      subject: 'Mot de pass oublier', // Subject line
      text: 'Veuillez cliquer sur le lien pour réinitialiser votre mot de passe.', // plain text body
      html: `<a href="${validateUrl}">${validateUrl}</a>` // html body
    };
    await sendEmail(emailObject);
    return true;
  }
}
