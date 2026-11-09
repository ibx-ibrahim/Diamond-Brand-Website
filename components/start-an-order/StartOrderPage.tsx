'use client';

import * as React from 'react';
import Box from '@mui/material/Box';

import { fluid } from '@/lib/fluid';
import Footer from '../sections/Footer';
import StartOrderHero from './StartOrderHero';
import TeamDetails from './TeamDetails';
import NeedHelp from './NeedHelp';

const SECTION_GAP = fluid(140, 56);

export default function StartOrderPage() {
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
    width: '100%',
    backgroundImage: 'linear-gradient(105deg, rgba(227, 190, 193, .72), rgba(148, 145, 160, .72)), url("/images/banners/bg-10.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
    <StartOrderHero/>
    <TeamDetails/>
    <NeedHelp/>
    </Box>
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