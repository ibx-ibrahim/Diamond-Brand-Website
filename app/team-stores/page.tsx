import type { Metadata } from 'next';

import Box from '@mui/material/Box';
import TeamStoresHero from '@/components/team-stores/TeamStoresHero';
// import StoreBenefits from '@/components/team-stores/StoreBenefits';
import StoreSteps from '@/components/team-stores/StoreSteps';
import StoreAudience from '@/components/team-stores/StoreAudience';
import StoreShowcase from '@/components/team-stores/StoreShowcase';
import StoreCta from '@/components/team-stores/StoreCta';
import Footer from '@/components/sections/Footer';
import { fluid } from '@/lib/fluid';

export const metadata: Metadata = {
  title: 'Team Stores | Diamond Brand',
  description:
    'Give your team a dedicated online store to shop custom apparel, represent their identity, and order their favorite gear with ease.',
};

const SECTION_GAP = fluid(135, 56);
/**
 * Section spacing lives inside each section (its own padding), so the sections simply stack with no gaps:
 * Hero -> Benefits -> Steps -> Audience -> Showcase -> CTA
 */
export default function TeamStoresPage() {
  return (
    <>
    <Box
      component="div"
      sx={{
        bgcolor: '#c0c0c1',
        display: 'flex',
        flexDirection: 'column',
        gap: SECTION_GAP,
        pb: 0,
      }}
    >
      <TeamStoresHero />
      {/* <StoreBenefits /> */}
      <StoreSteps />
      <StoreAudience />
      <StoreShowcase />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
      <StoreCta />
      <Footer/>
      </Box>
    </Box>
    </>
  );
}