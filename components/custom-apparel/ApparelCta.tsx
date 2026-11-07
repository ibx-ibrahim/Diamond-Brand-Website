'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const RED_GRADIENT = 'linear-gradient(180deg, #E52C32 0%, #A5141A 100%)';

/** Night-stadium photo for the banner. Put it here, or change the path. Without it a CSS backdrop is shown. */
const BG_SRC = '/images/banners/cta-bg-5.jpeg';

const stack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export default function ApparelCta() {
  const reduce = useReducedMotion();
  const [missing, setMissing] = React.useState(false);

  return (
<Box
  component="section"
  aria-labelledby="apparel-cta-title"
  sx={{
    position: 'relative',
    isolation: 'isolate',
    overflow: 'hidden',
    bgcolor: '#060a12',
    color: '#fff',
    textAlign: 'center',
    px: GUTTER,
    py: { xs: 8, lg: fluid(94, 56) }, // Keep original size
  }}
>
  {/* Stadium background */}
  <Box
    aria-hidden
    sx={{
      position: 'absolute',
      inset: 0,
      zIndex: -2,
      overflow: 'hidden',
    }}
  >
    {!missing && (
      <Image
        src={BG_SRC}
        alt=""
        fill
        sizes="100vw"
        priority
        onError={() => setMissing(true)}
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      />
    )}

    {/* Dark overlay for text readability */}
    <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
          pointerEvents: 'none',
        }}
      />
  </Box>

      {/* ── content ── */}
      <MotionBox
        variants={stack}
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        sx={{
          maxWidth: 2560,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <MotionBox
          variants={rise}
          id="apparel-cta-title"
          role="heading"
          aria-level={2}
          sx={{
            fontFamily: DISPLAY,
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.005em',
            lineHeight: 1.15,
            fontSize: { xs: 'clamp(30px, 9vw, 56px)', md: fluid(95, 39) },
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          }}
        >
          <Box component="span" sx={{ display: { xs: 'inline', md: 'block' } }}>
            Ready to create your{' '}
          </Box>
          <Box component="span" sx={{ display: { xs: 'inline', md: 'block' } }}>
            custom apparel?
          </Box>
        </MotionBox>

        <MotionBox
          variants={rise}
          sx={{
            mt: fluid(14, 14),
            maxWidth: { xs: 520, md: 'min(60vw, 1200px)' },
            fontWeight: 300,
            lineHeight: 1.2,
            color: 'rgba(255,255,255,0.85)',
            fontSize: { xs: 16, sm: 18, md: fluid(30, 14) },
            textShadow: '0 2px 18px rgba(0,0,0,0.55)',
          }}
        >
          Bring your ideas to life with custom apparel made for your team.
        </MotionBox>

        <MotionBox variants={rise} sx={{ mt: fluid(22, 22) }}>
          <MotionBox whileHover={reduce ? undefined : { y: -3 }} whileTap={{ scale: 0.97 }}>
            <Box
              component={Link}
              href="/customize"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: fluid(10, 8),
                height: fluid(62, 42),
                px: fluid(24, 16),
                borderRadius: fluid(9, 7),
                color: '#fff',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontWeight: 500,
                fontSize: fluid(25, 13),
                whiteSpace: 'nowrap',
                background: RED_GRADIENT,
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 28px rgba(200,25,35,0.4)',
                transition: 'filter .25s, box-shadow .25s',
                '&:hover': {
                  filter: 'brightness(1.1)',
                  boxShadow:
                    'inset 0 1px 0 rgba(255,255,255,0.3), 0 16px 38px rgba(225,35,45,0.55)',
                },
                '& svg': {
                  fontSize: '1.15em',
                  transition: 'transform .3s cubic-bezier(.22,1,.36,1)',
                },
                '&:hover svg': { transform: 'translateX(4px)' },
                '&:focus-visible': { outline: '3px solid #fff', outlineOffset: 3 },
              }}
            >
              Start your custom order
              <ArrowForward />
            </Box>
          </MotionBox>
        </MotionBox>
      </MotionBox>
    </Box>
  );
}