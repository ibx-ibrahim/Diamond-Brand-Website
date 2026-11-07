import type { Metadata } from 'next';
import CustomUniformsPage from '@/components/custom-uniforms/CustomUniformsPage';

export const metadata: Metadata = {
  title: 'Custom Uniforms | Diamond Brand',
  description:
    'Custom sports uniforms for football, baseball, softball, basketball, soccer, volleyball, cheerleading and more. Your team. Your identity.',
};

export default function Page() {
  return <CustomUniformsPage />;
}