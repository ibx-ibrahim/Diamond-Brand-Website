'use client';

import * as React from 'react';
import Box from '@mui/material/Box';

import { fluid } from '@/lib/fluid';
import ContactUsHero from './ContactUsHero';
import Footer from '../sections/Footer';
import ContactForm from './ContactForm';
import WhyContactUs from './WhyContactUs';

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
    <ContactUsHero/>
    <ContactForm/>
    <WhyContactUs/>
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