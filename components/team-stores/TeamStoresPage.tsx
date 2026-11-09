'use client';

import * as React from 'react';
import Box from '@mui/material/Box';

import { fluid } from '@/lib/fluid';

import Footer from '../sections/Footer';
import StoreCta from './StoreCta';
import TeamStoresHero from './TeamStoresHero';
import StoreBenefits from './StoreBenefits';
import StoreSteps from './StoreSteps';
import StoreAudience from './StoreAudience';
import StoreShowcase from './StoreShowcase';

const SECTION_GAP = fluid(140, 56);

export default function TeamStoresPage() {
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
    <Box
    sx={{
        position: 'relative',
        bgcolor: '#DCDCDD',
        overflow: 'hidden',
         backgroundImage: `
      linear-gradient(
        rgba(225,225,226,0.68),
        rgba(225,225,226,0.68)
      ),
      url('/images/banners/bg-2.png')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    }}
    >
    <TeamStoresHero />
    <StoreBenefits />
    </Box>
    <StoreSteps />
    <StoreAudience />
    <StoreShowcase />
      {/* Keep CTA and footer together without an additional section gap */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          position: 'relative',
          background: 'linear-gradient(180deg, #ffffff 0%, #fff0f1 100%)',
          overflow: 'hidden',
        }}
      >
        <StoreCta />
        <Footer />
      </Box>
    </Box>
  );
}