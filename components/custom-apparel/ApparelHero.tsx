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

/** Dark stadium photo for the hero. Put it here, or change the path. Without it a CSS backdrop is shown. */
const BG_SRC = '/images/banners/bg-4.png';

const stack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};
const pillIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 18 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};


function Backdrop() {
  const [missing, setMissing] = React.useState(false);

  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        bgcolor: '#07090d',
      }}
    >
      {!missing && (
        <Image
          src={BG_SRC}
          alt=""
          fill
          priority
          sizes="100vw"
          onError={() => setMissing(true)}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      )}

      {/* Subtle dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.70)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
}


export default function ApparelHero() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="apparel-hero-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        color: '#fff',
        bgcolor: '#05070b',
        minHeight: `max(calc(100svh - ${fluid(42, 24)}), 700px)`,
        borderRadius: `0 0 ${fluid(52, 28)} ${fluid(52, 28)}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: GUTTER,
        pt: { xs: 21, sm: 23, lg: fluid(324, 190) },
        pb: { xs: 10, lg: fluid(120, 56) },
        textAlign: 'center',
      }}
    >
      <Backdrop />

      <MotionBox
        variants={stack}
        initial={reduce ? false : 'hidden'}
        animate="show"
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* badge */}
        <MotionBox
          variants={rise}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            height: fluid(47, 32),
            px: fluid(17, 12),
            borderRadius: fluid(6, 4),
            border: '1px solid #C4202A',
            bgcolor: 'rgba(170,20,30,0.14)',
            boxShadow: '0 0 24px rgba(210,30,40,0.18)',
            fontWeight: 500,
            fontSize: fluid(22, 12),
            textTransform: 'uppercase',
            letterSpacing: '0.01em',
            whiteSpace: 'nowrap',
          }}
        >
          Custom team apparel
        </MotionBox>

        {/* headline */}
        <Box
          id="apparel-hero-title"
          role="heading"
          aria-level={1}
          sx={{
            mt: fluid(24, 16),
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: DISPLAY,
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.005em',
            lineHeight: 1,
            fontSize: { xs: 38, sm: 48, md: fluid(135, 15) },
            textShadow: '0 4px 30px rgba(0,0,0,0.45)',
          }}
        >
          <MotionBox variants={rise} sx={{ display: 'block' }}>
            Custom apparel.
          </MotionBox>

          <MotionBox
            variants={pillIn}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              height: { xs: 'auto', md: fluid(123, 54) },
              px: fluid(23, 13),
              py: { xs: 0.75, md: 0 },
              pb: { md: '0.03em' },
              fontSize: { xs: 36, sm: 38, md: fluid(127, 10) },
              borderRadius: fluid(18, 12),
              background: RED_GRADIENT,
              boxShadow:
                'inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -10px 24px rgba(90,0,8,0.35), 0 18px 60px rgba(220,30,40,0.35)',
            }}
          >
            Built your way.
          </MotionBox>
        </Box>

        {/* subtitle */}
        <MotionBox
          variants={rise}
          sx={{
            mt: fluid(18, 16),
            maxWidth: { xs: 520, md: 'min(60vw, 1200px)' },
            fontWeight: 300,
            lineHeight: 1.14,
            color: 'rgba(255,255,255,0.82)',
            fontSize: { xs: 10, sm: 14, md: fluid(30, 8) },
            textShadow: '0 2px 18px rgba(0,0,0,0.5)',
          }}
        >
          From everyday team shirts to performance hoodies and athletic wear, <br /> create custom apparel that
          represents your style.
        </MotionBox>

        {/* CTA */}
        <MotionBox variants={rise} sx={{ mt: fluid(32, 24) }}>
          <MotionBox whileHover={reduce ? undefined : { y: -3 }} whileTap={{ scale: 0.97 }}>
            <Box
              component={Link}
              href="/custom-apparel#shirts"
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
                fontWeight: 400,
                fontSize: fluid(25, 13),
                whiteSpace: 'nowrap',
                background: RED_GRADIENT,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 28px rgba(200,25,35,0.4)',
                transition: 'filter .25s, box-shadow .25s',
                '&:hover': {
                  filter: 'brightness(1.1)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 16px 38px rgba(225,35,45,0.55)',
                },
                '& svg': {
                  fontSize: '1.15em',
                  transition: 'transform .3s cubic-bezier(.22,1,.36,1)',
                },
                '&:hover svg': { transform: 'translateX(4px)' },
                '&:focus-visible': { outline: '3px solid #fff', outlineOffset: 3 },
              }}
            >
              Explore apparel
              <ArrowForward />
            </Box>
          </MotionBox>
        </MotionBox>
      </MotionBox>
    </Box>
  );
}