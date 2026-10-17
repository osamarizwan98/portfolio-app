import { contactTopics } from "@/content/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FILL_MS = 2500;

const clean = (value) => (typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "");

/**
 * Validates contact FormData.
 * Returns { spam: true } for bot submissions, { fieldErrors, values } when invalid, or { data } when valid.
 */
export function validateContact(formData, now = Date.now()) {
  const values = {
    name: clean(formData.get("name")),
    email: clean(formData.get("email")).toLowerCase(),
    topic: clean(formData.get("topic")),
    message: String(formData.get("message") ?? "").trim(),
  };

  if (clean(formData.get("company"))) return { spam: true };

  const fieldErrors = {};
  if (values.name.length < 2 || values.name.length > 80) fieldErrors.name = "Please enter your name (2 to 80 characters).";
  if (!EMAIL_RE.test(values.email) || values.email.length > 254) fieldErrors.email = "Please enter a valid email address.";
  if (!contactTopics.includes(values.topic)) fieldErrors.topic = "Please choose an option.";
  if (values.message.length < 10 || values.message.length > 2000)
    fieldErrors.message = "Please add a few details (10 to 2000 characters).";

  if (Object.keys(fieldErrors).length) return { fieldErrors, values };

  // A complete form filled in under 2.5s is almost certainly a bot.
  const startedAt = Number(formData.get("startedAt"));
  if (startedAt > 0 && now - startedAt < MIN_FILL_MS) return { spam: true };

  return { data: values };
}
