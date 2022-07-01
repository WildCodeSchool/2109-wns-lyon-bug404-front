import { gql, useMutation, useQuery } from '@apollo/client';
import { createContext, useContext, useEffect, useState } from 'react';

export const GET_PROFILE = gql`
  query GetProfile {
    getProfile {
      id
      email
      firstName
      familyName
      role
    }
  }
`;

// SignIn
export const SIGNIN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password)
  }
`;

// SignUp
export const SIGNUP = gql`
  mutation Signup(
    $password: String!
    $email: String!
    $familyName: String!
    $firstName: String!
  ) {
    signup(
      password: $password
      email: $email
      familyName: $familyName
      firstName: $firstName
    ) {
      email
      id
      firstName
      familyName
    }
  }
`;

// const CREATE_USER = gql`
//   mutation createUser($email: String!, $password: String!) {
//     createUser(email: $email, password: $password) {
//       id
//       email
//     }
//   }
// `;

export const AuthContext = createContext<{
  isConnected: boolean;
  user: {
    id: number;
    email: string;
    firstName: string;
    familyName: string;
  } | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signup: (
    email: string,
    password: string,
    firstName: string,
    familyName: string
  ) => Promise<boolean>;
  signout: () => Promise<void>;
} | null>(null);

export function AuthProvider({
  children
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  const [isConnected, setIsConnected] = useState(false);
  const [doSignin] = useMutation(SIGNIN);
  const [doSignUp] = useMutation(SIGNUP);
  const { data: getProfile, refetch } = useQuery(GET_PROFILE);

  useEffect(() => {
    if (getProfile) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [getProfile]);

  const signin = async (email: string, password: string): Promise<boolean> => {
    try {
      const result = await doSignin({
        variables: {
          email: email,
          password: password
        }
      });
      if (result.data.signin) {
        // success
        localStorage.setItem('token', result.data.signin);
        await refetch();
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const signup = async (
    email: string,
    password: string,
    firstName: string,
    familyName: string
  ): Promise<boolean> => {
    console.log(1);
    try {
      console.log(2);
      await doSignUp({
        variables: {
          firstName,
          familyName,
          email,
          password
        }
      });
      console.log(3);
      return true;
    } catch {
      console.log(4);
      return false;
    }
  };

  const signout = async (): Promise<void> => {
    localStorage.removeItem('token');
    refetch();
  };

  return (
    <AuthContext.Provider
      value={{
        isConnected,
        user: getProfile?.getProfile,
        signin,
        signup,
        signout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const authContext = useContext(AuthContext);
  if (authContext) {
    return authContext;
  } else {
    throw new Error('auth_context_not_set');
  }
}
