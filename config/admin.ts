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
      allowedOrigins: [env('PREVIEW_URL', 'https://localmanager.app')],
      async handler(uid, { documentId, locale, status }) {
        try {
          const baseUrl = env('PREVIEW_URL', 'https://localmanager.app');

          // For blog content type, fetch the document to get the slug
          if (uid === 'api::blog.blog') {
            const document = await strapi.documents(uid).findOne({
              documentId,
              locale
            });

            if (document?.slug) {
              return `${baseUrl}/${locale}/blog/${document.slug}?preview=true`;
            }
          }

          // Fallback for other content types or if slug not found
          return `${baseUrl}/api/preview?documentId=${documentId}&locale=${locale}&status=${status}`;
        } catch (error) {
          strapi.log.error('Preview handler error:', error);
          // Return a safe fallback URL
          const baseUrl = env('PREVIEW_URL', 'https://localmanager.app');
          return `${baseUrl}/api/preview?documentId=${documentId}&locale=${locale}`;
        }
      },
    },
  },
});
