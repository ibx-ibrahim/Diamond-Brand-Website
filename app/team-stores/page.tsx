import type { Metadata } from 'next';

import TeamStoresPage from '@/components/team-stores/TeamStoresPage';

export const metadata: Metadata = {
  title: 'Team Stores | Diamond Brand',
  description:
    'Give your team a dedicated online store to shop custom apparel, represent their identity, and order their favorite gear with ease.',
};

export default function Page() {
      return <TeamStoresPage />;
}