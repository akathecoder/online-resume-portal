import { CloudantV1 } from '@ibm-cloud/cloudant';
import { IamAuthenticator } from 'ibm-cloud-sdk-core';
import { StudentProfileType } from './profileDataTypes';

function dbClient(): CloudantV1 {
    const authenticator = new IamAuthenticator({
        apikey: process.env.CLOUDANT_APIKEY || '',
    });

    const client = new CloudantV1({
        authenticator: authenticator,
    });

    client.setServiceUrl(process.env.CLOUDANT_URL || '');

    return client;
}

export async function getUserDataByUsername(
    username: string,
): Promise<StudentProfileType> {
    const client = dbClient();
    const dbName = 'online_resume_portal_db';

    const getDocParams: CloudantV1.GetDocumentParams = {
        db: dbName,
        docId: username,
    };

    const result = await client.getDocument(getDocParams);
    const data: CloudantV1.Document = result.result;

    return data.data as StudentProfileType;
}
