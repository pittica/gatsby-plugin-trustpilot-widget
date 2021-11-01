export default function filterLocale(language, culture) {
  const l = language.toLowerCase()
  const c = culture.toUpperCase()

  return {
    domain: l === "en" ? "www" : l,
    locale: `${l}-${c}`,
  }
}
