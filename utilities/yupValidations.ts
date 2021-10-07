import * as yup from 'yup';

export const checkEmail = (email: string): boolean => {
    // TODO: Add regex to match only to JKLU email IDs
    return yup.string().email().required().isValidSync(email);
};

export const checkPassword = (password: string): boolean => {
    return yup.string().required().isValidSync(password);
};
