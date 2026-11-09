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

/** Confetti stadium (bg-6.png). Lives at /public/images/banners/bg-6.png */
const BG_SRC = '/images/banners/bg-6.png';

const stack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};
const pillIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, x: -18 },
  show: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};

const buttonBase = {
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
  transition: 'filter .25s, box-shadow .25s, background-color .25s',
  '& svg': { fontSize: '1.15em', transition: 'transform .3s cubic-bezier(.22,1,.36,1)' },
  '&:hover svg': { transform: 'translateX(4px)' },
  '&:focus-visible': { outline: '3px solid #fff', outlineOffset: 3 },
} as const;

export default function BoosterHero() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="booster-hero-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        color: '#fff',
        bgcolor: '#020305',
        minHeight: `max(calc(100svh - ${fluid(42, 24)}), 700px)`,
        borderRadius: `0 0 ${fluid(52, 28)} ${fluid(52, 28)}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: GUTTER,
        pt: { xs: 21, sm: 23, lg: fluid(350, 190) },
        pb: { xs: 10, lg: fluid(120, 56) },
        textAlign: 'center',
      }}
    >
      {/* ── photo + darkening ── */}
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, zIndex: -2 }}>
        <Image
          src={BG_SRC}
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </Box>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          background: [
            'radial-gradient(ellipse at 50% 42%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.58) 70%, rgba(0,0,0,0.78) 100%)',
            'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.18) 24%, rgba(0,0,0,0.2) 58%, rgba(0,0,0,0.96) 100%)',
            'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
          ].join(','),
        }}
      />

      <MotionBox
        variants={stack}
        initial={reduce ? false : 'hidden'}
        animate="show"
        sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
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
          Custom booster shirts
        </MotionBox>

        {/* headline: one row on desktop, stacked on phones */}
        <Box
          id="booster-hero-title"
          role="heading"
          aria-level={1}
          sx={{
            mt: fluid(24, 16),
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: fluid(14, 8),
            rowGap: { xs: 0.5, md: 0 },
            fontFamily: DISPLAY,
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.005em',
            lineHeight: 1,
            fontSize: { xs: 36, sm: 38, md: fluid(127, 10) },
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          }}
        >
          <MotionBox variants={rise} sx={{ display: 'block' }}>
            Team spirit.
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
            One identity.
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
          Show your team pride with custom booster shirts designed for fans, supporters and
          communities. Create a unique look with your own colors, logos and designs.
        </MotionBox>

        {/* buttons */}
        <MotionBox
          variants={rise}
          sx={{
            mt: fluid(32, 24),
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: fluid(34, 14),
          }}
        >
          <MotionBox whileHover={reduce ? undefined : { y: -3 }} whileTap={{ scale: 0.97 }}>
            <Box
              component={Link}
              href="/customize"
              sx={{
                ...buttonBase,
                background: RED_GRADIENT,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 28px rgba(200,25,35,0.4)',
                '&:hover': {
                  filter: 'brightness(1.1)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 16px 38px rgba(225,35,45,0.55)',
                },
              }}
            >
              Design your shirt
              <ArrowForward />
            </Box>
          </MotionBox>

          <MotionBox whileHover={reduce ? undefined : { y: -3 }} whileTap={{ scale: 0.97 }}>
            <Box
              component={Link}
              href="/booster-shirts#styles"
              sx={{
                ...buttonBase,
                px: fluid(30, 22),
                border: '2px solid #fff',
                bgcolor: 'rgba(0,0,0,0.12)',
                backdropFilter: 'blur(6px)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.14)' },
              }}
            >
              Explore collection
              <ArrowForward />
            </Box>
          </MotionBox>
        </MotionBox>
      </MotionBox>
    </Box>
  );
}