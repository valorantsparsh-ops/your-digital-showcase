import emailjs from '@emailjs/browser';
import { z } from 'zod';

// ✏️ EDIT: Replace these with your EmailJS credentials from https://www.emailjs.com/
export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID', // Get from EmailJS dashboard
  templateId: 'YOUR_TEMPLATE_ID', // Get from EmailJS dashboard
  publicKey: 'YOUR_PUBLIC_KEY', // Get from EmailJS dashboard
};

// Validation schema for contact form
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
        to_name: 'Your Name', // ✏️ EDIT: Your name
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
