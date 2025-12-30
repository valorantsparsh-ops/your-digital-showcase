/**
 * ═══════════════════════════════════════════════════════════════════════════
 * EMAILJS CONFIGURATION - Contact form email service
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * This file handles sending emails from the contact form using EmailJS.
 * 
 * HOW TO SET UP:
 * 1. Create account at https://www.emailjs.com/
 * 2. Add an email service (Gmail, Outlook, etc.)
 * 3. Create an email template with variables:
 *    - {{from_name}} - Sender's name
 *    - {{from_email}} - Sender's email
 *    - {{subject}} - Email subject
 *    - {{message}} - Email message
 *    - {{to_name}} - Your name (recipient)
 * 4. Copy your credentials below
 * 
 * WHAT TO EDIT:
 * - Line 28: Your EmailJS Service ID
 * - Line 29: Your EmailJS Template ID
 * - Line 30: Your EmailJS Public Key
 * - Line 58: Your name (recipient name in emails)
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import emailjs from '@emailjs/browser';
import { z } from 'zod';

/* ═══════════════════════════════════════════════════════════════════════════
 * ✏️ EDIT: Your EmailJS credentials
 * Get these from your EmailJS dashboard
 * ═══════════════════════════════════════════════════════════════════════════ */
export const EMAILJS_CONFIG = {
  serviceId: 'service_7mq36t7',     // ✏️ EDIT: Your Service ID
  templateId: 'template_m92zz1x',   // ✏️ EDIT: Your Template ID
  publicKey: 'mo9nslnBBQDYnqjjq',   // ✏️ EDIT: Your Public Key
};

/* ═══════════════════════════════════════════════════════════════════════════
 * Form Validation Schema
 * Validates contact form inputs before sending
 * ═══════════════════════════════════════════════════════════════════════════ */
export const contactFormSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject must be less than 200 characters'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface EmailJSResponse {
  success: boolean;
  message: string;
}

/* ═══════════════════════════════════════════════════════════════════════════
 * Send Email Function
 * Validates form data and sends email via EmailJS
 * ═══════════════════════════════════════════════════════════════════════════ */
export const sendEmail = async (formData: ContactFormData): Promise<EmailJSResponse> => {
  // Validate form data
  const validationResult = contactFormSchema.safeParse(formData);
  
  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.error.errors[0]?.message || 'Validation failed',
    };
  }

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Your Name',  // ✏️ EDIT: Your name (appears in email template)
      },
      EMAILJS_CONFIG.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Message sent successfully!',
      };
    }

    return {
      success: false,
      message: 'Failed to send message. Please try again.',
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
    };
  }
};
