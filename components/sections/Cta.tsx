'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E5282D';
const RED_GRADIENT = 'linear-gradient(180deg, #E0292F 0%, #A5141A 100%)';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function Cta() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="cta-title"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        bgcolor: '#1a1c20',
        color: '#fff',
        textAlign: 'center',
        py: { xs: 10, sm: 12, lg: fluid(190, 100) },
        px: GUTTER,
      }}
    >
      {/* ── Layer 1: stadium photo (very slow push-in) ── */}
      <MotionBox
        aria-hidden
        animate={reduce ? undefined : { scale: [1, 1.06] }}
        transition={{ duration: 28, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        sx={{ position: 'absolute', inset: 0, zIndex: -3 }}
      >
        <Image
          src="/images/banners/cta-bg-1.png"
          alt=""
          fill
          sizes="100vw"
          quality={80}
          style={{ objectFit: 'cover', objectPosition: '50% 40%' }}
        />
      </MotionBox>

      {/* ── Layer 2: dark grade so the type stays crisp ── */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -2,
          background: [
            'linear-gradient(90deg, rgba(20,21,24,0.55) 0%, transparent 60%)',
            'linear-gradient(180deg, rgba(24,26,30,0.82) 0%, rgba(22,24,28,0.76) 55%, rgba(20,22,26,0.84) 100%)',
          ].join(','),
        }}
      />

      {/* ── Layer 3: smoke on top of the photo, drifting slowly ── */}
      <MotionBox
        aria-hidden
        animate={reduce ? undefined : { x: ['-2.5%', '2.5%'] }}
        transition={{ duration: 24, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          left: '-5%',
          right: '-5%',
          bottom: 0,
          height: '100%',
          zIndex: -1,
          opacity: 0.1,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/images/banners/cta-bg-2.png"
          alt=""
          fill
          sizes="110vw"
          style={{ objectFit: 'cover', objectPosition: 'bottom center' }}
        />
      </MotionBox>

      {/* ── Content ── */}
      <MotionBox
        variants={stack}
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        sx={{ position: 'relative', maxWidth: 2560, mx: 'auto' }}
      >
        <MotionBox
          variants={rise}
          id="cta-title"
          role="heading"
          aria-level={2}
          sx={{
            fontFamily: DISPLAY,
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: 1,
            letterSpacing: '0.005em',
            fontSize: { xs: 'clamp(40px, 13vw, 72px)', md: fluid(156, 56) },
            textShadow: '0 6px 40px rgba(0,0,0,0.45)',
          }}
        >
          <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>
            Real team{' '}
          </Box>
          <Box component="span" sx={{ display: { xs: 'block', md: 'inline' }, color: RED }}>
            Real results
          </Box>
        </MotionBox>

        <MotionBox
          variants={rise}
          sx={{
            mx: 'auto',
            mt: { xs: 2.5, lg: fluid(8, 16) },
            maxWidth: { xs: 560, md: 'min(62.5vw, 1600px)' },
            fontWeight: 400,
            lineHeight: 1.18,
            fontSize: { xs: 16, md: fluid(36, 17) },
            color: 'rgba(255,255,255,0.94)',
            textShadow: '0 2px 18px rgba(0,0,0,0.5)',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since 1966,
        </MotionBox>

        <MotionBox variants={rise} sx={{ mt: { xs: 4, lg: fluid(38, 28) }, display: 'flex', justifyContent: 'center' }}>
          <MotionBox whileHover={reduce ? undefined : { y: -3 }} whileTap={{ scale: 0.97 }}>
            <Button
              component={Link}
              href="/our-work"
              endIcon={<ArrowForward className="cta-arrow" sx={{ fontSize: `${fluid(32, 20)} !important` }} />}
              sx={{
                height: fluid(76, 52),
                px: fluid(28, 24),
                borderRadius: fluid(10, 8),
                color: '#fff',
                fontWeight: 500,
                fontSize: fluid(30, 16),
                textTransform: 'uppercase',
                background: RED_GRADIENT,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), 0 12px 32px rgba(200,25,35,0.4)',
                transition: 'filter .25s, box-shadow .25s',
                '&:hover': {
                  background: RED_GRADIENT,
                  filter: 'brightness(1.1)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 16px 40px rgba(225,35,45,0.55)',
                },
                '& .MuiButton-endIcon': { ml: fluid(12, 8) },
                '& .cta-arrow': { transition: 'transform .3s cubic-bezier(.22,1,.36,1)' },
                '&:hover .cta-arrow': { transform: 'translateX(4px)' },
              }}
            >
              View our work
            </Button>
          </MotionBox>
        </MotionBox>
      </MotionBox>
    </Box>
  );
}