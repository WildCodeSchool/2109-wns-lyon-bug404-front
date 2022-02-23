import {
  Arg,
  Authorized,
  Ctx,
  ID,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { getRepository } from "typeorm";
import { ResetPasswordInput, User, UserUpdateInput } from "../models/User";
import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";
import { UserRole } from "../enums/UserRole";

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
    @Arg("firstName") firstName: string,
    @Arg("familyName") familyName: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<User | Error> {
    try {
      const newUser = this.userRepo.create({
        firstName,
        familyName,
        email,
        password: await argon2.hash(password),
      });
      newUser.assigned_tasks = [];
      await newUser.save();
      return newUser;
    } catch (e) {
      return new Error("User already exists");
    }
  }

  // login
  @Mutation(() => String, { nullable: true })
  async signin(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<string> {
    const user = await this.userRepo.findOne({ email });

    if (user) {
      if (await argon2.verify(user.password, password)) {
        const token = jwt.sign({ userId: user.id }, "supersecret");
        return token;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  // update role
  @Mutation(() => User)
  async changeUserRole(
    @Arg("userId") id: number,
    @Arg("role") role: UserRole
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
    @Arg("data", () => UserUpdateInput) updateUser: User,
    @Arg("id", () => ID) id: number
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
    @Arg("id", () => ID) id: number
  ): Promise<User | null | undefined> {
    const user = await this.userRepo.findOne(id);

    return user ? (await this.userRepo.delete(id)) && user : null;
  }

  // reset password
  @Mutation(() => User!, { nullable: true })
  async resetUserPassword(
    @Arg("reset", () => ResetPasswordInput) reset: ResetPasswordInput,
    @Arg("id", () => ID) id: number
  ): Promise<User | null> {
    let user = await this.userRepo.findOne(id);

    if (user) {
      user.password = await argon2.hash(reset.password);
      await user.reload();
      return user;
    }
    return null;
  }
}
