module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),  // Ensure it binds to all IPs
  port: env.int('PORT', 10000),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
