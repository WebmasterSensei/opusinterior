"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/content";
import { CheckIcon } from "../icons";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-line bg-ivory px-4 py-3.5 text-sm text-ink placeholder:text-muted transition-colors duration-300 focus:border-taupe focus:outline-none";

  if (sent) {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-3xl border border-line bg-ivory p-10 shadow-lift">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-taupe/15 text-taupe">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-medium text-ink">Thank you, {form.name.split(" ")[0]}</h3>
        <p className="mt-3 leading-relaxed text-ink-soft">
          Your enquiry has been received. A member of our design team will be in touch within one working day to
          arrange your free consultation.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initial);
            setSent(false);
          }}
          className="mt-8 text-sm font-semibold text-taupe underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-ivory p-8 shadow-lift sm:p-10" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-ink">
          Full name *
          <input className={inputCls} value={form.name} onChange={set("name")} placeholder="Jane Smith" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-ink">
          Email address *
          <input className={inputCls} type="email" value={form.email} onChange={set("email")} placeholder="jane@email.com" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-ink">
          Phone
          <input className={inputCls} type="tel" value={form.phone} onChange={set("phone")} placeholder="+44 7700 900123" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-ink">
          Service
          <select className={inputCls} value={form.service} onChange={set("service")}>
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Full home renovation">Full home renovation</option>
            <option value="Something else">Something else</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-ink sm:col-span-2">
          Tell us about your project *
          <textarea
            className={`${inputCls} min-h-36 resize-y`}
            value={form.message}
            onChange={set("message")}
            placeholder="Room, size, style, budget and timeline…"
          />
        </label>
      </div>

      {error && (
        <p className="mt-5 rounded-xl bg-taupe/10 px-4 py-3 text-sm font-medium text-taupe-dark">{error}</p>
      )}

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-ink py-4 text-sm font-semibold tracking-wide text-ivory transition-colors duration-300 hover:bg-taupe sm:w-auto sm:px-12"
      >
        Send Enquiry
      </button>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        By submitting you agree to be contacted about your enquiry. We never share your details.
      </p>
    </form>
  );
}