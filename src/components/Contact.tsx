import { useState, type FormEvent } from 'react';
import { ArrowRight, MessageCircle, Phone, Check } from 'lucide-react';
import { Reveal } from './Reveal';
import { siteConfig, whatsappLink, phoneLink } from '@/config/siteConfig';

interface ContactProps {
  /** Optional list of service names to populate the select. */
  serviceOptions?: string[];
}

export function Contact({ serviceOptions }: ContactProps) {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const defaultServices = [
    'Commercial Flex Banners',
    'LED Lighting Boards',
    'Vinyl Stickering',
    'Wall Stickering',
    'UV Lighting Boards',
    'ACP Elevation',
    'Acrylic Light Boards',
    'All Kind of Advertisements',
    'Other / General Enquiry',
  ];
  const options = serviceOptions ?? defaultServices;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
    else if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number.';
    if (!form.service) e.service = 'Please select a service.';
    if (!form.message.trim()) e.message = 'Please tell us a little about your requirement.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    // Frontend-ready: structure allows easy backend / email / WhatsApp integration.
    // For now, surface a success state.
    setSubmitted(true);
  };

const handleChange =
  (field: keyof typeof form) =>
  (ev: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = ev.currentTarget.value;

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const inputClass = (field: string) =>
    `w-full rounded-lg bg-ink-950/60 px-4 py-3 text-sm text-white ring-1 ring-inset transition-colors placeholder:text-ink-500 focus:outline-none ${
      errors[field] ? 'ring-red-500/60 focus:ring-red-500' : 'ring-white/15 focus:ring-accent-400'
    }`;

  return (
    <section id="contact" className="section-py bg-ink-950">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left — copy + CTAs */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow mb-4">
                <span className="h-px w-8 bg-accent-400" />
                Contact
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-lg text-white">
                Let's build something
                <br />
                that gets <span className="text-accent-400">noticed.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede mt-5 max-w-md">
                Tell us about your project and we'll get back to you with a quote. Reach out on
                WhatsApp, phone, or send an enquiry below.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
                <a href={phoneLink()} className="btn-outline group">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-10 space-y-4 text-sm">
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-ink-400">Phone</dt>
                  <dd className="text-white">{siteConfig.phone}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-ink-400">Email</dt>
                  <dd className="break-all text-white">{siteConfig.email}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-ink-400">Location</dt>
                  <dd className="text-white">{siteConfig.address}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="surface p-6 sm:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-400/15 text-accent-400 ring-1 ring-inset ring-accent-400/40">
                      <Check className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-white">Enquiry sent</h3>
                    <p className="mt-2 max-w-sm text-sm text-ink-300">
                      Thank you, {form.name.split(' ')[0]}. We've received your enquiry and will get
                      back to you shortly. For a faster response, message us on WhatsApp.
                    </p>
                    <a
                      href={whatsappLink(`Hi VUA DIGITALS, I'm ${form.name}. ${form.message}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary mt-6"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Send on WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-white">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange('name')}
                          className={inputClass('name')}
                          placeholder="Your full name"
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-white">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange('phone')}
                          className={inputClass('phone')}
                          placeholder="e.g. +91 99999 99999"
                          aria-invalid={!!errors.phone}
                        />
                        {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-white">
                        Service Required
                      </label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={handleChange('service')}
                        className={inputClass('service')}
                        aria-invalid={!!errors.service}
                      >
                        <option value="">Select a service…</option>
                        {options.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.service && <p className="mt-1.5 text-xs text-red-400">{errors.service}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-white">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange('message')}
                        className={inputClass('message')}
                        placeholder="Tell us about your project — size, location, timeline…"
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                    </div>

                    <button type="submit" className="btn-primary w-full group">
                      Send Enquiry
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
