'use client';

import * as React from 'react';
import Box from '@mui/material/Box';

import { fluid } from '@/lib/fluid';
import Footer from '../sections/Footer';
import OurWorkHero from './OurWorkHero';
import StatsSection from './StatsSection';
import PortfolioSection from './PortfolioSection';
import FeaturedProject from './FeaturedProject';
import HowWeWork from './HowWeWork';
import MockupSection from './MockupSection';

const SECTION_GAP = fluid(140, 56);

export default function CustomApparelPage() {
  return (
    <Box
      component="div"
      sx={{
        bgcolor: '#c0c0c1',
        display: 'flex',
        flexDirection: 'column',
        pb: 0,
      }}
    >
      <OurWorkHero />
      <StatsSection/>
      <PortfolioSection/>
      <FeaturedProject/>
      <HowWeWork/>
      <MockupSection/>
      {/* Keep CTA and footer together without an additional section gap */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}