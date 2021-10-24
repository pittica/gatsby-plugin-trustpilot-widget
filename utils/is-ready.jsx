export default function isReady() {
  return typeof window !== "undefined" && window.Trustpilot
}
