"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContact } from "@/actions/contact";
import { contactTopics, site } from "@/content/site";

const initialState = { status: "idle" };

// A failed request (offline, server down) would otherwise throw into the page's error boundary.
async function submit(prevState, formData) {
  try {
    return await sendContact(prevState, formData);
  } catch {
    return {
      status: "error",
      message: "Couldn't reach the server. Check your connection and try again, or email me directly.",
      values: Object.fromEntries(formData),
    };
  }
}

function Field({ id, label, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="mono">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="m-0 text-sm text-[#f07178]">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submit, initialState);
  const startedRef = useRef(null);
  const errors = state.fieldErrors ?? {};
  const values = state.values ?? {};

  useEffect(() => {
    if (startedRef.current) startedRef.current.value = String(Date.now());
  }, [state]);

  const a11y = (name) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form action={formAction} className="relative flex min-w-0 flex-col gap-[18px]" noValidate>
      <Field id="name" label="Your name" error={errors.name}>
        <input id="name" name="name" type="text" autoComplete="name" required maxLength={80} defaultValue={values.name} className="field" {...a11y("name")} />
      </Field>
      <Field id="email" label="Email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} defaultValue={values.email} className="field" {...a11y("email")} />
      </Field>
      <Field id="topic" label="What do you need?" error={errors.topic}>
        <select id="topic" name="topic" defaultValue={values.topic ?? contactTopics[0]} className="field" {...a11y("topic")}>
          {contactTopics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </Field>
      <Field id="message" label="Details" error={errors.message}>
        <textarea id="message" name="message" rows={4} required maxLength={2000} defaultValue={values.message} className="field" {...a11y("message")} />
      </Field>

      {/* spam traps */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedRef} type="hidden" name="startedAt" defaultValue="" />

      <button type="submit" disabled={pending} className="btn btn-primary w-full">
        {pending ? "Sending…" : "Send message"}
      </button>

      <p aria-live="polite" className={`m-0 min-h-6 text-sm ${state.status === "error" ? "text-[#f07178]" : "text-accent"}`}>
        {state.message}
      </p>
      <noscript>
        <p className="m-0 text-sm text-muted">
          Prefer email? Write to <a className="text-accent" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </noscript>
    </form>
  );
}
