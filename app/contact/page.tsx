import type { Metadata } from 'next';
import ContactUsPage from '@/components/contact-us/ContactUsPage';

export const metadata: Metadata = {
  title: 'Contact Us | Diamond Brand',
  description:
    'Custom team shirts, hoodies, jackets, shorts and joggers. Built your way, designed around your colors and branding.',
};

export default function Page() {
  return <ContactUsPage />;
}