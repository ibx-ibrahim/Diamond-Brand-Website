'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const RED_GRADIENT = 'linear-gradient(180deg, #E52C32 0%, #A5141A 100%)';

/** Three jerseys in a night stadium (cta-bg-6.png). Lives at /public/images/banners/cta-bg-6.png */
const BG_SRC = '/images/banners/cta-bg-6.png';

const stack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export default function UniformsCta() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="uniforms-cta-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        bgcolor: '#03050a',
        color: '#fff',
        minHeight: { xs: 560, lg: fluid(675, 440) },
        display: 'flex',
        alignItems: 'center',
        px: GUTTER,
        py: { xs: 8, lg: fluid(90, 56) },
      }}
    >
      {/* jerseys photo, anchored so the three shirts sit on the right */}
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, zIndex: -2 }}>
        <Image
          src={BG_SRC}
          alt=""
          fill
          sizes="100vw"
          quality={85}
          style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
        />
      </Box>

      {/* dark fade from the left (desktop) or the top (phones) so the text always reads */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          background: {
            xs: 'linear-gradient(180deg, rgba(2,4,8,0.9) 0%, rgba(2,4,8,0.72) 55%, rgba(2,4,8,0.5) 100%)',
            md: 'linear-gradient(90deg, rgba(2,4,8,0.97) 0%, rgba(2,4,8,0.92) 30%, rgba(2,4,8,0.55) 52%, rgba(2,4,8,0) 72%)',
          },
        }}
      />

      <MotionBox
        variants={stack}
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        sx={{
          width: '100%',
          maxWidth: 2560,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Box
          id="uniforms-cta-title"
          role="heading"
          aria-level={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            fontFamily: DISPLAY,
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.005em',
            lineHeight: 1.05,
            fontSize: { xs: 'clamp(28px, 8.6vw, 46px)', md: fluid(76, 30) },
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          }}
        >
          <MotionBox variants={rise} sx={{ display: 'block' }}>
            Ready to design your
          </MotionBox>

          <MotionBox
            variants={rise}
            sx={{
              mt: fluid(8, 6),
              px: fluid(17, 12),
              height: { xs: 'auto', md: fluid(102, 46) },
              py: { xs: 0.5, md: 0 },
              pb: { md: '0.03em' },
              display: 'inline-flex',
              alignItems: 'center',
              borderRadius: fluid(12, 9),
              background: RED_GRADIENT,
              boxShadow:
                'inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -8px 20px rgba(90,0,8,0.35), 0 14px 40px rgba(220,30,40,0.3)',
            }}
          >
            Team uniforms?
          </MotionBox>
        </Box>

        <MotionBox
          variants={rise}
          sx={{
            mt: fluid(22, 16),
            maxWidth: { xs: 520, md: fluid(1100, 340) },
            fontWeight: 400,
            lineHeight: 1.2,
            color: 'rgba(255,255,255,0.94)',
            fontSize: { xs: 16, sm: 18, md: fluid(33, 16) },
            textShadow: '0 2px 18px rgba(0,0,0,0.6)',
          }}
        >
          Tell us about your team and let&apos;s create something unique.
        </MotionBox>

        <MotionBox variants={rise} sx={{ mt: fluid(30, 24) }}>
          <MotionBox whileHover={reduce ? undefined : { y: -3 }} whileTap={{ scale: 0.97 }}>
            <Box
              component={Link}
              href="/customize"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: fluid(10, 8),
                height: fluid(64, 50),
                px: fluid(51, 28),
                borderRadius: fluid(8, 8),
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: fluid(30, 15),
                background: RED_GRADIENT,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 28px rgba(200,25,35,0.4)',
                transition: 'filter .25s, box-shadow .25s',
                '&:hover': {
                  filter: 'brightness(1.1)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 16px 38px rgba(225,35,45,0.55)',
                },
                '& svg': { transition: 'transform .3s cubic-bezier(.22,1,.36,1)' },
                '&:hover svg': { transform: 'translateX(4px)' },
                '&:focus-visible': { outline: '3px solid #fff', outlineOffset: 3 },
              }}
            >
              Start Custom Order
              <Box
                component="svg"
                viewBox="0 0 24 24"
                aria-hidden
                sx={{
                  width: '0.8em',
                  height: '0.8em',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: 3.6,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
              >
                <path d="M9 4.5L16.5 12 9 19.5" />
              </Box>
            </Box>
          </MotionBox>
        </MotionBox>
      </MotionBox>
    </Box>
  );
}