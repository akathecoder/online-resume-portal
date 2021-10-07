import React, { useState } from 'react';
import LoginFormFooter from './LoginFormFooter';
import LoginFormOptions from './LoginFormOptions';
import LoginInput from './LoginInput';
import SignInButton from './SignInButton';
import { checkEmail, checkPassword } from '@utilities/yupValidations';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setPassword(event.currentTarget.value);
    };

    const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!checkEmail(email)) {
            alert('Invalid Email');
            return;
        }

        if (!checkPassword(password)) {
            alert('Password required');
            return;
        }

        alert(`Signed In\nEmail = ${email}\nPassword = ${password}`);

        // TODO: Add Sign in Logic
    };

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSignIn} noValidate>
            <LoginInput
                title="Email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onValueChange={handleEmailChange}
            />
            <LoginInput
                title="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onValueChange={handlePasswordChange}
            />

            <LoginFormOptions />

            <SignInButton>Sign in</SignInButton>

            <LoginFormFooter signUpLink="#" />
        </form>
    );
};

export default LoginForm;
