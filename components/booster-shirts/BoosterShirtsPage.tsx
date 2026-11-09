'use client';

import * as React from 'react';
import Box from '@mui/material/Box';

import { fluid } from '@/lib/fluid';
import BoosterHero from './BoosterHero';
import BuiltForSupporters from './BuiltForSupporters';
import PopularStyles from './PopularStyles';
import MakeItYourOwn from './MakeItYourOwn';
import Footer from '../sections/Footer';
import CustomizationCTA from './CustomizationCTA';
import AudienceSection from './AudienceSection';

/**
 * ONE number controls the space between every section on this page
 * (design: about 134px at the 2560px frame, scaled down on smaller screens).
 */

export default function BoosterShirtsPage() {
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
      <BoosterHero />
      <BuiltForSupporters />
      <PopularStyles />
      <CustomizationCTA/>
      <MakeItYourOwn />
      <AudienceSection />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
      <Footer/>
      </Box>
    </Box>
  );
}