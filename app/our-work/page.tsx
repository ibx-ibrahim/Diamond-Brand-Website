import type { Metadata } from 'next';
import OurWorkPage from '@/components/our-work/OurWorkPage';

export const metadata: Metadata = {
  title: 'Our Work | Diamond Brand',
  description:
    'Custom sports uniforms for football, baseball, softball, basketball, soccer, volleyball, cheerleading and more. Your team. Your identity.',
};

export default function Page() {
  return <OurWorkPage />;
}