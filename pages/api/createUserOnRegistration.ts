import { createUser } from '@utilities/dataFunctions';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        console.log(req.body);

        if (req.body.email && req.body.username && req.body.apiKey) {
            if (req.body.apiKey === process.env.AUTH0_CREATE_USER_API_KEY) {
                await createUser(req.body.email, req.body.username);
                res.status(200).send('User Created');
            } else {
                console.log('API KEY ERROR');
                res.status(401).send('API KEY ERROR');
            }
        } else {
            res.status(400).json({
                message: 'Username not provided',
            });
            console.log('username not provided');
        }
    } else {
        res.status(400).json({
            message: 'Only POST allowed',
        });
    }
};
