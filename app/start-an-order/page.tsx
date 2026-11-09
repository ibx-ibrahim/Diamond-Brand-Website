import type { Metadata } from 'next';
import StartOrderPage from '@/components/start-an-order/StartOrderPage';

export const metadata: Metadata = {
  title: 'Start An Order | Diamond Brand',
  description:
    'Custom booster shirts for fans, supporters, booster clubs and schools. Team spirit, one identity.',
};

export default function Page() {
  return <StartOrderPage />;
}