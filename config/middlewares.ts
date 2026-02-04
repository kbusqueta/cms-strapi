export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://pub-bc7149aa123c4990bb659f163365feff.r2.dev',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://pub-bc7149aa123c4990bb659f163365feff.r2.dev',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://seo.kevinbusqueta.fr',
        'https://localmanager.app',
        'https://www.localmanager.app',
        'http://localhost:3000', // For local development
        'http://localhost:30001', // For local preview
      ],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
