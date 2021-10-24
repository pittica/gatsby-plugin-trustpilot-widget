exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    username: Joi.string().required().description(`Trustpilot username.`),
    template: Joi.string().required().description(`Trustpilot template ID.`),
    business: Joi.string().required().description(`Trustpilot business unit ID.`)
  })
}
