export default ({ env }) => ({
    // Enable Content-Type Builder in production
    // ⚠️ WARNING: This allows schema modifications in production
    // Only enable this if you need to modify content types
    // For better security, disable this after making changes
    'content-type-builder': {
        enabled: env.bool('ENABLE_CONTENT_TYPE_BUILDER', true),
    },

    // Cloudflare R2 Storage Configuration
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                baseUrl: env('R2_PUBLIC_URL'),
                s3Options: {
                    accessKeyId: env('R2_ACCESS_KEY_ID'),
                    secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
                    region: env('R2_REGION', 'auto'),
                    endpoint: env('R2_ENDPOINT'),
                    params: {
                        Bucket: env('R2_BUCKET'),
                        ACL: 'public-read',
                    },
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});
