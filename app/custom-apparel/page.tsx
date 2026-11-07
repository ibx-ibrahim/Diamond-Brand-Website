import type { Metadata } from 'next';
import CustomApparelPage from '@/components/custom-apparel/CustomApparelPage';

export const metadata: Metadata = {
  title: 'Custom Apparel | Diamond Brand',
  description:
    'Custom team shirts, hoodies, jackets, shorts and joggers. Built your way, designed around your colors and branding.',
};

export default function Page() {
  return <CustomApparelPage />;
}