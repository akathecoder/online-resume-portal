import React from 'react';
import LoginFormFooter from './LoginFormFooter';
import LoginFormOptions from './LoginFormOptions';
import LoginInput from './LoginInput';
import SignInButton from './SignInButton';

const LoginForm: React.FC = () => {
    return (
        <form className="mt-8 space-y-6">
            <LoginInput
                title="Email"
                type="email"
                placeholder="Enter your email address"
            />
            <LoginInput
                title="Password"
                type="password"
                placeholder="Enter your password"
            />

            <LoginFormOptions />

            <SignInButton>Sign in</SignInButton>

            <LoginFormFooter signUpLink="#" />
        </form>
    );
};

export default LoginForm;
