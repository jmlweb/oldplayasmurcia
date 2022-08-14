import AWS from 'aws-sdk';

let cachedS3: AWS.S3;

const getS3 = () => {
  if (!cachedS3) {
    AWS.config.update({
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    });
    cachedS3 = new AWS.S3();
  }
  return cachedS3;
};

const getFromS3 = async <D>(key: string): Promise<D> => {
  const s3 = getS3();
  const bucketName = process.env.S3_BUCKET_NAME;
  if (!bucketName) {
    throw new Error('bucketName not found');
  }
  const data = await s3
    .getObject({
      Bucket: bucketName,
      Key: key,
    })
    .promise();
  if (!data.Body) {
    throw new Error('no body found');
  }
  return JSON.parse(data.Body.toString('utf-8'));
};

export default getFromS3;
