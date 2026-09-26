"use client";

import { Camera, Check, Music2 } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  role: string;
  projectType: string;
  budget: string;
  message: string;
  consent: boolean;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  company: "",
  role: "Brand",
  projectType: "",
  budget: "",
  message: "",
  consent: false,
};

const fieldClassName =
  "w-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.03)] px-3 py-3 text-[var(--ivory)] placeholder:text-[rgba(252,250,247,0.4)] focus:border-[var(--champagne)] focus:outline-none";
const labelClassName = "mb-2 block text-[0.68rem] uppercase tracking-[0.16rem] text-[rgba(252,250,247,0.7)]";

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (field: keyof FormState, value: string | boolean) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!formData.email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = "Please enter a valid email address.";
    if (!formData.company.trim()) nextErrors.company = "Please enter your company or creator name.";
    if (!formData.projectType.trim()) nextErrors.projectType = "Please tell us the project type.";
    if (!formData.consent) nextErrors.consent = "Please confirm you agree to be contacted.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section id="contact" className="bg-[#171717] py-20 text-[var(--ivory)] md:py-24">
      <div className="section-shell relative">
        <div className="absolute left-2 top-0 hidden h-full items-start pt-8 text-[2.2rem] font-medium text-[var(--ivory)] lg:flex">
          <span className="inline-block -rotate-90 text-[1.2rem] uppercase tracking-[0.2rem]">6</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="label text-[rgba(252,250,247,0.7)]">Let’s make something worth stopping for.</p>
            <h2 className="mt-4 font-display text-4xl leading-[0.94] tracking-[-0.06em] text-[var(--ivory)] md:text-5xl lg:text-[4rem]">
              Your next scroll-stopping campaign starts here.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[rgba(252,250,247,0.75)]">
              Tell us what you are building, launching or trying to grow. We will come back with the right next step.
            </p>

            <div className="mt-8 space-y-5 text-sm text-[var(--ivory)]">
              <div className="flex flex-col gap-2">
                <span className="text-[0.7rem] uppercase tracking-[0.16rem] text-[rgba(252,250,247,0.7)]">For general enquiries</span>
                <a href="mailto:hello@createandcapture.co" className="text-lg font-medium text-[var(--ivory)] underline decoration-[rgba(255,255,255,0.3)] underline-offset-4 transition hover:decoration-white">
                  hello@createandcapture.co
                </a>
              </div>
              <div className="flex items-center gap-4 pt-2 text-[var(--ivory)]">
                <a href="https://instagram.com" aria-label="Instagram" className="rounded-full border border-[rgba(255,255,255,0.2)] p-2 transition hover:border-white hover:bg-white/5">
                  <Camera size={18} />
                </a>
                <a href="https://tiktok.com" aria-label="TikTok" className="rounded-full border border-[rgba(255,255,255,0.2)] p-2 transition hover:border-white hover:bg-white/5">
                  <Music2 size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-5 shadow-[0_16px_30px_rgba(23,23,23,0.18)] md:p-7">
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className={labelClassName}>Full name</span>
                  <input
                    value={formData.fullName}
                    onChange={(event) => handleInput("fullName", event.target.value)}
                    className={fieldClassName}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.fullName)}
                  />
                  {errors.fullName && <span className="mt-2 block text-xs text-[#f5c4bc]">{errors.fullName}</span>}
                </label>

                <label className="block">
                  <span className={labelClassName}>Email address</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) => handleInput("email", event.target.value)}
                    className={fieldClassName}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <span className="mt-2 block text-xs text-[#f5c4bc]">{errors.email}</span>}
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className={labelClassName}>Company / creator name</span>
                  <input
                    value={formData.company}
                    onChange={(event) => handleInput("company", event.target.value)}
                    className={fieldClassName}
                    placeholder="Brand or creator name"
                    aria-invalid={Boolean(errors.company)}
                  />
                  {errors.company && <span className="mt-2 block text-xs text-[#f5c4bc]">{errors.company}</span>}
                </label>

                <label className="block">
                  <span className={labelClassName}>I am a</span>
                  <select
                    value={formData.role}
                    onChange={(event) => handleInput("role", event.target.value)}
                    className={fieldClassName}
                  >
                    <option value="Brand">Brand</option>
                    <option value="Creator">Creator</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className={labelClassName}>Project type</span>
                  <input
                    value={formData.projectType}
                    onChange={(event) => handleInput("projectType", event.target.value)}
                    className={fieldClassName}
                    placeholder="Campaign, UGC, management..."
                    aria-invalid={Boolean(errors.projectType)}
                  />
                  {errors.projectType && <span className="mt-2 block text-xs text-[#f5c4bc]">{errors.projectType}</span>}
                </label>

                <label className="block">
                  <span className={labelClassName}>Budget range</span>
                  <input
                    value={formData.budget}
                    onChange={(event) => handleInput("budget", event.target.value)}
                    className={fieldClassName}
                    placeholder="Optional"
                  />
                </label>
              </div>

              <label className="block">
                <span className={labelClassName}>Message</span>
                <textarea
                  value={formData.message}
                  onChange={(event) => handleInput("message", event.target.value)}
                  className={`min-h-[120px] ${fieldClassName}`}
                  placeholder="Tell us about your goals..."
                />
              </label>

              <label className="flex items-start gap-3 text-sm text-[rgba(252,250,247,0.8)]">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(event) => handleInput("consent", event.target.checked)}
                  className="mt-1 h-4 w-4 rounded border border-[rgba(255,255,255,0.2)] bg-transparent accent-[var(--champagne)]"
                />
                <span>I agree to be contacted about my enquiry.</span>
              </label>
              {errors.consent && <span className="block text-xs text-[#f5c4bc]">{errors.consent}</span>}

              <div className="flex items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-sm bg-[var(--champagne)] px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.16rem] text-[#171717] transition hover:-translate-y-0.5 hover:bg-[#d8b673] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d79f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
                >
                  Send enquiry
                </button>
                {submitted && (
                  <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12rem] text-[#d8f0d5]">
                    <Check size={14} /> Enquiry drafted
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
