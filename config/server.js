module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"), // Bind to all available hosts
  port: env.int("PORT", 1337), // Use the PORT environment variable
  app: {
    keys: env.array("APP_KEYS") // For secure cookie signing (ensure APP_KEYS is set)
  },

  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false)
  }
});
