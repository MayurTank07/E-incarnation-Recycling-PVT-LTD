import { z } from 'zod';

// Strict email validation function
const strictEmailValidation = (email) => {
  // Basic email format check
  const emailRegex = /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z]{2,})+$/;
  
  if (!emailRegex.test(email)) {
    return false;
  }
  
  // Check for common fake patterns
  const lowerEmail = email.toLowerCase();
  
  // Reject emails with consecutive dots
  if (lowerEmail.includes('..')) {
    return false;
  }
  
  // Reject emails starting or ending with dot/hyphen/underscore
  const localPart = lowerEmail.split('@')[0];
  if (localPart.startsWith('.') || localPart.endsWith('.') || 
      localPart.startsWith('-') || localPart.endsWith('-') ||
      localPart.startsWith('_') || localPart.endsWith('_')) {
    return false;
  }
  
  // Reject common fake/test domains
  const fakeDomains = [
    'test.com', 'example.com', 'fake.com', 'temp.com', 
    'dummy.com', 'sample.com', 'invalid.com', 'null.com',
    'test.in', 'fake.in', 'temp.in'
  ];
  
  const domain = lowerEmail.split('@')[1];
  if (fakeDomains.includes(domain)) {
    return false;
  }
  
  // Ensure domain has valid TLD
  const domainParts = domain.split('.');
  const tld = domainParts[domainParts.length - 1];
  if (tld.length < 2 || !/^[a-z]+$/.test(tld)) {
    return false;
  }
  
  return true;
};

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  
  companyName: z.string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  
  email: z.string()
    .min(1, 'Email is required')
    .email('Invalid email format')
    .refine(strictEmailValidation, {
      message: 'Please enter a valid email address'
    }),
  
  phone: z.string()
    .min(10, 'Phone number must be at least 10 characters')
    .max(20, 'Phone number must be less than 20 characters')
    .regex(/^[0-9+\-\s()]+$/, 'Phone number can only contain digits, +, -, spaces, and parentheses'),
  
  city: z.string()
    .min(2, 'City must be at least 2 characters')
    .optional()
    .or(z.literal('')),
  
  state: z.string()
    .min(2, 'State must be at least 2 characters')
    .optional()
    .or(z.literal('')),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

export const contactPageFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  
  companyName: z.string()
    .min(2, 'Company name must be at least 2 characters')
    .optional()
    .or(z.literal('')),
  
  email: z.string()
    .min(1, 'Email is required')
    .email('Invalid email format')
    .refine(strictEmailValidation, {
      message: 'Please enter a valid email address'
    }),
  
  phone: z.string()
    .min(10, 'Phone number must be at least 10 characters')
    .max(20, 'Phone number must be less than 20 characters')
    .regex(/^[0-9+\-\s()]+$/, 'Phone number can only contain digits, +, -, spaces, and parentheses'),
  
  city: z.string().optional().or(z.literal('')),
  
  state: z.string().optional().or(z.literal('')),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});
