
/** Identifier capture is intentionally separate from validation and verification. */
export const ABHA_PATTERN = /^\d{2}-\d{4}-\d{4}-\d{4}$/

export function normalizeAbha(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 14)
  return digits.replace(/(\d{2})(\d{0,4})(\d{0,4})(\d{0,4})/, (_, a, b, c, d) =>
    [a, b, c, d].filter(Boolean).join("-"),
  )
}

export function extractAbhaIdentifier(value: string) {
  // QR payloads may contain labels, tabs, newlines, or repeated separators.
  const match = value.match(/(?<!\d)(?:\d[\s-]*){14}(?!\d)/u)
  return match ? normalizeAbha(match[0]) : null
}

export function validateAbha(value: string) {
  return ABHA_PATTERN.test(value)
    ? null
    : "Enter the 14-digit ABHA ID in the format 12-3456-7890-1234."
}
