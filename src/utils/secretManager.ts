import { 
  SecretsManagerClient, 
  GetSecretValueCommand 
} from '@aws-sdk/client-secrets-manager';

const secretsManager = new SecretsManagerClient({
  region: process.env.AWS_REGION || 'us-east-1',
});

/**
 * Retrieves a secret value from AWS Secrets Manager
 * @param secretName The name or ARN of the secret to retrieve
 * @returns The secret value as a string or null if not found
 */
export const getSecretValue = async (secretName: string): Promise<string | null> => {
  try {
    const command = new GetSecretValueCommand({
      SecretId: secretName,
    });

    const response = await secretsManager.send(command);
    return response.SecretString || null;
  } catch (error) {
    console.error(`Error retrieving secret ${secretName}:`, error);
    throw error;
  }
};
