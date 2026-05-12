"use client";

import React, { useState } from 'react';
import { homepageData } from '@/config/homepageData';

export default function ContactPage() {
  const { contact } = homepageData;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // IMPORTANT: Replace this URL with your deployed Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwFjjXkmN3FQK8NOAdNljfkonQJ5j4bVvhmsSTyRI1JeheRAbUdMMFGAd5_J-LZi9h4/exec';

    try {
      // We use FormData so Google Apps Script can easily parse it in e.parameter
      const data = new FormData();
      data.append('firstName', formData.firstName);
      data.append('lastName', formData.lastName);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('message', formData.message);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors' // Required for cross-origin requests to Google Apps Script
      });

      // With no-cors, we can't read the response directly, so we assume success if no network error
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F0F2F5] dark:bg-[#0B141A] pt-28 pb-20 px-5 md:px-12 lg:px-24 flex flex-col transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Blur Gradients for Glass Effect - WhatsApp Green Theme */}
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-[#25D366]/20 dark:bg-[#00A884]/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 dark:bg-teal-800/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10 mt-4 md:mt-8">
        
        {/* Left Column: Info */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase text-[#111B21] dark:text-[#E9EDEF] mb-10 md:mb-16 leading-tight">
            {contact.title}
          </h1>

          <div className="space-y-10 md:space-y-12">
            <div>
              <h3 className="text-lg md:text-2xl font-semibold text-[#111B21] dark:text-[#E9EDEF] mb-2">
                {contact.email.label}
              </h3>
              <a 
                href={`mailto:${contact.email.value}`} 
                className="text-base md:text-lg text-[#54656F] dark:text-[#8696A0] hover:text-[#25D366] dark:hover:text-[#00A884] transition-colors duration-300"
              >
                {contact.email.value}
              </a>
            </div>

            <div>
              <h3 className="text-lg md:text-2xl font-semibold text-[#111B21] dark:text-[#E9EDEF] mb-2">
                {contact.location.label}
              </h3>
              <p className="text-base md:text-lg text-[#54656F] dark:text-[#8696A0] max-w-sm leading-relaxed">
                {contact.location.value}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full lg:w-7/12 mt-4 lg:mt-0">
          <p className="text-base md:text-lg text-[#54656F] dark:text-[#8696A0] mb-6 md:mb-8 max-w-md px-2 md:px-0">
            {contact.form.tagline}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5 mt-4">
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={contact.form.placeholders.firstName}
                required
                className="w-full bg-white dark:bg-[#111B21] border border-[#D1D7DB] dark:border-[#222E35] rounded-2xl px-6 py-4 text-base text-[#111B21] dark:text-[#E9EDEF] placeholder:text-[#8696A0] placeholder:font-medium focus:outline-none focus:border-[#25D366] dark:focus:border-[#00A884] focus:ring-1 focus:ring-[#25D366] dark:focus:ring-[#00A884] transition-all duration-300 shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={contact.form.placeholders.lastName}
                required
                className="w-full bg-white dark:bg-[#111B21] border border-[#D1D7DB] dark:border-[#222E35] rounded-2xl px-6 py-4 text-base text-[#111B21] dark:text-[#E9EDEF] placeholder:text-[#8696A0] placeholder:font-medium focus:outline-none focus:border-[#25D366] dark:focus:border-[#00A884] focus:ring-1 focus:ring-[#25D366] dark:focus:ring-[#00A884] transition-all duration-300 shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={contact.form.placeholders.email}
                required
                className="w-full bg-white dark:bg-[#111B21] border border-[#D1D7DB] dark:border-[#222E35] rounded-2xl px-6 py-4 text-base text-[#111B21] dark:text-[#E9EDEF] placeholder:text-[#8696A0] placeholder:font-medium focus:outline-none focus:border-[#25D366] dark:focus:border-[#00A884] focus:ring-1 focus:ring-[#25D366] dark:focus:ring-[#00A884] transition-all duration-300 shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={contact.form.placeholders.phone}
                className="w-full bg-white dark:bg-[#111B21] border border-[#D1D7DB] dark:border-[#222E35] rounded-2xl px-6 py-4 text-base text-[#111B21] dark:text-[#E9EDEF] placeholder:text-[#8696A0] placeholder:font-medium focus:outline-none focus:border-[#25D366] dark:focus:border-[#00A884] focus:ring-1 focus:ring-[#25D366] dark:focus:ring-[#00A884] transition-all duration-300 shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={contact.form.placeholders.message}
              required
              rows={4}
              className="w-full bg-white dark:bg-[#111B21] border border-[#D1D7DB] dark:border-[#222E35] rounded-2xl px-6 py-4 text-base text-[#111B21] dark:text-[#E9EDEF] placeholder:text-[#8696A0] placeholder:font-medium focus:outline-none focus:border-[#25D366] dark:focus:border-[#00A884] focus:ring-1 focus:ring-[#25D366] dark:focus:ring-[#00A884] transition-all duration-300 shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full relative group overflow-hidden bg-[#25D366] dark:bg-[#00A884] text-white font-bold text-lg py-4 rounded-full transition-all duration-300 mt-4 shadow-[0_0_30px_-10px_rgba(37,211,102,0.5)] dark:shadow-[0_0_30px_-10px_rgba(0,168,132,0.4)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : contact.form.submitText}
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
            
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center text-sm mt-2">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
