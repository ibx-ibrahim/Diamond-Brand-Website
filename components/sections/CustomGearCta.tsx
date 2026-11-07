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

export default function CustomGearCta() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="custom-gear-title"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        bgcolor: '#2a2b2e',
        color: '#fff',
        textAlign: 'center',
        // Tall enough on phones that the jerseys stay visible; on larger
        // screens the padding drives height (matches the ~3.3:1 artwork).
        minHeight: { xs: 420, sm: 480, md: 'auto' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 9, sm: 11, md: fluid(190, 90) },
        px: GUTTER,
      }}
    >
      {/* ── Background: jersey wall (slow push-in) ── */}
      <MotionBox
        aria-hidden
        animate={reduce ? undefined : { scale: [1, 1.05] }}
        transition={{ duration: 28, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        sx={{ position: 'absolute', inset: 0, zIndex: -2 }}
      >
        <Image
          src="/images/banners/cta-bg-3.png"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          style={{ objectFit: 'cover', objectPosition: '50% 50%', filter: 'brightness(1.3) contrast(1.05)' }}
        />
      </MotionBox>

      {/* ── Light veil: lifts the dark artwork toward the lighter look in the UI ── */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          background: {
            xs: 'linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%)',
            md: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 100%)',
          },
        }}
      />

      {/* ── Content ── */}
      <MotionBox
        variants={stack}
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 2560,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Pill badge */}
        <MotionBox
          variants={rise}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.85)',
            borderRadius: 999,
            px: fluid(16, 12),
            height: fluid(42, 28),
            fontSize: { xs: 11, sm: 12, md: fluid(24, 12) },
            fontWeight: 400,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            color: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(2px)',
          }}
        >
          Bring your vision to life
        </MotionBox>

        {/* Heading */}
        <MotionBox
          variants={rise}
          id="custom-gear-title"
          role="heading"
          aria-level={2}
          sx={{
            mt: { xs: 2, md: fluid(22, 16) },
            fontFamily: DISPLAY,
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: 1,
            letterSpacing: '0.005em',
            fontSize: { xs: 'clamp(34px, 11vw, 64px)', md: fluid(140, 52) },
            textShadow: '0 6px 40px rgba(0,0,0,0.45)',
            textWrap: 'balance',
          }}
        >
          Custom gear made{' '}
          <Box component="span" sx={{ color: RED, whiteSpace: 'nowrap' }}>
            easy
          </Box>
        </MotionBox>

        {/* Sub-copy */}
        <MotionBox
          variants={rise}
          sx={{
            mt: { xs: 1.5, md: fluid(12, 10) },
            maxWidth: { xs: 520, md: 'min(80vw, 1700px)' },
            fontWeight: 400,
            lineHeight: 1.25,
            fontSize: { xs: 15, sm: 16, md: fluid(36, 17) },
            color: 'rgba(255,255,255,0.94)',
            textShadow: '0 2px 18px rgba(0,0,0,0.5)',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </MotionBox>

        {/* Button */}
        <MotionBox variants={rise} sx={{ mt: { xs: 3.5, md: fluid(38, 28) } }}>
          <MotionBox whileHover={reduce ? undefined : { y: -3 }} whileTap={{ scale: 0.97 }}>
            <Button
              component={Link}
              href="/customize"
              endIcon={<ArrowForward className="cta-arrow" sx={{ fontSize: `${fluid(30, 18)} !important` }} />}
              sx={{
                height: fluid(66, 46),
                px: fluid(26, 22),
                borderRadius: fluid(10, 8),
                color: '#fff',
                fontWeight: 500,
                fontSize: fluid(28, 15),
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                background: RED_GRADIENT,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), 0 12px 32px rgba(200,25,35,0.4)',
                transition: 'filter .25s, box-shadow .25s',
                '&:hover': {
                  background: RED_GRADIENT,
                  filter: 'brightness(1.1)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 16px 40px rgba(225,35,45,0.55)',
                },
                '& .MuiButton-endIcon': { ml: fluid(10, 8) },
                '& .cta-arrow': { transition: 'transform .3s cubic-bezier(.22,1,.36,1)' },
                '&:hover .cta-arrow': { transform: 'translateX(4px)' },
              }}
            >
              Start customizing
            </Button>
          </MotionBox>
        </MotionBox>
      </MotionBox>
    </Box>
  );
}