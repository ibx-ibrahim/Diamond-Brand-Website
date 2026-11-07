import type { Metadata } from 'next';
import BoosterShirtsPage from '@/components/booster-shirts/BoosterShirtsPage';

export const metadata: Metadata = {
  title: 'Custom Booster Shirts | Diamond Brand',
  description:
    'Custom booster shirts for fans, supporters, booster clubs and schools. Team spirit, one identity.',
};

export default function Page() {
  return <BoosterShirtsPage />;
}