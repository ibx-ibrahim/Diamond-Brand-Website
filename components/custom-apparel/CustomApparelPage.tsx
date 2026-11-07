'use client';

import * as React from 'react';
import Box from '@mui/material/Box';

import { fluid } from '@/lib/fluid';
import ApparelHero from './ApparelHero';
import CustomShirts from './CustomShirts';
import LayerUp from './LayerUp';
import BuiltForComfort from './BuiltForComfort';
import ApparelCta from './ApparelCta';
import Footer from '../sections/Footer';

const SECTION_GAP = fluid(140, 56);

export default function CustomApparelPage() {
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
      <ApparelHero />
      <CustomShirts />
      <LayerUp />
      <BuiltForComfort />
      {/* Keep CTA and footer together without an additional section gap */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
        <ApparelCta />
        <Footer />
      </Box>
    </Box>
  );
}