import { createUser } from '@utilities/dataFunctions';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        if (req.body.username) {
            await createUser(req.body.username);
            res.status(200).send('User Created');
        } else {
            res.status(400).json({
                message: 'Username not provided',
            });
        }
    } else {
        res.status(400).json({
            message: 'Only POST allowed',
        });
    }
};
