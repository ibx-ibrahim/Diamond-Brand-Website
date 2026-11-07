'use client';

import * as React from 'react';
import Box from '@mui/material/Box';

import { fluid } from '@/lib/fluid';
import BoosterHero from './BoosterHero';
import BuiltForSupporters from './BuiltForSupporters';
import PopularStyles from './PopularStyles';
import MakeItTrulyYours from '../sections/MakeItTrulyYours';
import MakeItYourOwn from './MakeItYourOwn';
import WhoItsFor from './WhoItsFor';
import Footer from '../sections/Footer';

/**
 * ONE number controls the space between every section on this page
 * (design: about 134px at the 2560px frame, scaled down on smaller screens).
 */
const SECTION_GAP = fluid(134, 56);

export default function BoosterShirtsPage() {
  return (
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
      <BoosterHero />
      <BuiltForSupporters />
      <PopularStyles />
      <MakeItTrulyYours />

      {/*
        The "Customize your shirt" process section (circle diagram + "Pick Your Style & Fit" steps)
        goes here. Its screenshot wasn't included, so it hasn't been built yet.
      */}

      <MakeItYourOwn />
      <WhoItsFor />
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