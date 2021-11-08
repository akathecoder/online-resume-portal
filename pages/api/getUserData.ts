import { getUserDataByUsername } from '@utilities/dataFunctions';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'GET') {
        if (req.query.username) {
            const data = await getUserDataByUsername(req.query.username + '');
            res.status(200).json(data);
        } else {
            res.status(400).json({
                message: 'Username not provided',
            });
        }
    } else {
        res.status(400).json({
            message: 'Only GET allowed',
        });
    }
};
