import {describe, expect, it} from '@jest/globals';
import {render} from '@testing-library/react-native';
import React, {createContext, useContext, useMemo, useState} from 'react';
import {Text} from 'react-native';

const AuthContext = createContext(null);

export default AuthContext;

const AllTheProviders = (props: any) => {
  const [auth, setAuth] = useState({
    loggedIn: true,
  });

  const authValue = useMemo(() => ({auth, setAuth}), [auth, setAuth]);

  return (
    // @ts-ignore
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

const Profile = () => {
  const {auth} = useContext(AuthContext) ?? {auth: {loggedIn: false}};

  if (auth.loggedIn) {
    return <Text testID={'result'}>Welcome</Text>;
  }

  return <Text testID={'result'}>Not Logged In</Text>;
};

describe('로그인 사용자 환영하기', () => {
  it('로그인 되어 있는 경우', () => {
    const profile = render(<Profile />, {wrapper: AllTheProviders});

    expect(profile.getByTestId('result')).toHaveTextContent('Welcome');
  });

  it('로그인 안 되어 있는 경우', () => {
    const profile = render(<Profile />);

    expect(profile.getByTestId('result')).toHaveTextContent('Not Logged In');
  });
});
