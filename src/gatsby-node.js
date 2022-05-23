export function pluginOptionsSchema({ Joi }) {
  return Joi.object({
    language: Joi.string()
      .description("Widget default language.")
      .default("en"),
    culture: Joi.string().description("Widget default culture.").default("US"),
    theme: Joi.string().description("Widget default theme.").default("light"),
    height: Joi.string().description("Widget default height.").default("52px"),
    width: Joi.string().description("Widget default width.").default("100%"),
    template: Joi.string().description("Template ID."),
    business: Joi.string().description("Trustpilot business ID."),
    username: Joi.string().description("Trustpilot username."),
  })
}
