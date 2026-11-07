'use client';

import * as React from 'react';
import Box from '@mui/material/Box';

import { fluid } from '@/lib/fluid';
import UniformsHero from './UniformsHero';
import UniformsForEveryGame from './UniformsForEveryGame';
import FullyCustomizable from './FullyCustomizable';
import UniformsCta from './UniformsCta';
import Footer from '../sections/Footer';

/**
 * ONE number controls the space between every section on this page
 * (design: about 135px at the 2560px frame, scaled down on smaller screens).
 */
const SECTION_GAP = fluid(135, 56);

export default function CustomUniformsPage() {
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
      <UniformsHero />
      <UniformsForEveryGame />
      <FullyCustomizable />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
      <UniformsCta />
      <Footer/>
      </Box>
    </Box>
  );
}