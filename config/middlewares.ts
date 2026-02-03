export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
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
