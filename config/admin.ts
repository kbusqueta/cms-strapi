export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: [env('PREVIEW_URL', 'http://localhost:30001')],
      async handler(uid, { documentId, locale, status }) {
        const document = await strapi.documents(uid).findOne({ documentId });
        const baseUrl = env('PREVIEW_URL', 'http://localhost:30001');

        // For blog content type, use the slug field
        if (uid === 'api::blog.blog' && document?.slug) {
          return `${baseUrl}/${locale}/blog/${document.slug}?status=${status}`;
        }

        // Fallback for other content types
        return `${baseUrl}/api/preview?id=${documentId}&status=${status}&locale=${locale}`;
      },
    },
  },
});
