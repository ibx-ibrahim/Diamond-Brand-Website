'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';
import { DISPLAY, EASE, HERO_RADIUS, MotionBox, RED, RED_GRADIENT } from './Shared';

/** Red and black jersey fabric. Put it at /public/images/banners/cta-shirt3.png, or change this path. */
const BG_SRC = '/images/products/cta-shirt3.png';
/** Same logo file the footer uses. */
const LOGO_SRC = '/logos/logo.png';

export default function StoreCta() {
  const reduce = useReducedMotion();
  const R = HERO_RADIUS;
  const PANEL_R = fluid(43, 20);

  return (
    <Box
      component="section"
      aria-labelledby="store-cta-title"
      sx={{
          position: 'relative',
          overflow: 'hidden',
          isolation: 'isolate',
          bgcolor: '#121212',
          borderRadius: `0 0 ${R} ${R}`,
          px: GUTTER,
          pt: { xs: 4, md: fluid(61, 24) },
          pb: { xs: 4, md: fluid(68, 24) },
        }}
      >
        {/* fabric photo */}
        <Box aria-hidden sx={{ position: 'absolute', inset: 0, zIndex: -2 }}>
          <Image
            src={BG_SRC}
            alt=""
            fill
            quality={85}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </Box>
        <Box aria-hidden sx={{ position: 'absolute', inset: 0, zIndex: -1, bgcolor: 'rgba(0,0,0,0.16)' }} />

        {/* frosted panel */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: EASE }}
          sx={{
            maxWidth: 2560,
            mx: 'auto',
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: 'minmax(0, 1fr) auto minmax(0, 1fr)' },
            alignItems: 'center',
            rowGap: 3,
            columnGap: fluid(40, 20),
            px: { xs: 2.5, md: 4, lg: fluid(64, 20) },
            py: { xs: 4, lg: fluid(73, 28) },
            borderRadius: `0 0 ${PANEL_R} ${PANEL_R}`,
            bgcolor: 'rgba(214,214,216,0.74)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
          }}
        >
          {/* logo */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifySelf: { lg: 'start' },
            }}
          >
            <Image
              src={LOGO_SRC}
              alt=""
              width={216}
              height={246}
              loading="eager"
              style={{ width: fluid(108, 64), height: 'auto' }}
            />
            <Box
              component="span"
              sx={{
                mt: fluid(8, 6),
                fontWeight: 800,
                fontSize: fluid(16, 11),
                lineHeight: 1,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: '#0a0a0a',
              }}
            >
              Diamond Brand
            </Box>
          </Box>

          {/* copy */}
          <Box sx={{ textAlign: 'center' }}>
            <Box
              component="h2"
              id="store-cta-title"
              sx={{
                m: 0,
                fontFamily: DISPLAY,
                fontWeight: 400,
                textTransform: 'uppercase',
                lineHeight: 0.97,
                letterSpacing: '0.005em',
                color: '#0a0a0a',
                fontSize: { xs: 'clamp(26px, 8vw, 40px)', md: 'clamp(40px, 6vw, 56px)', lg: fluid(75, 28) },
              }}
            >
              <Box component="span" sx={{ display: 'block' }}>
                Ready to give your team
              </Box>
              <Box component="span" sx={{ display: 'block', color: RED }}>
                Its own store?
              </Box>
            </Box>

            <Box
              component="p"
              sx={{
                m: 0,
                mt: fluid(14, 8),
                mx: 'auto',
                maxWidth: { xs: 420, lg: 'min(36vw, 800px)' },
                fontWeight: 400,
                lineHeight: 1.3,
                color: '#4d4d4f',
                fontSize: { xs: 15, md: 18, lg: fluid(26, 15) },
              }}
            >
              Bring your team&apos;s identity online with a custom branded apparel store built around your needs.
            </Box>
          </Box>

          {/* divider + button */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', lg: 'flex-end' },
              gap: fluid(46, 20),
            }}
          >
            <Box
              aria-hidden
              sx={{
                display: { xs: 'none', lg: 'block' },
                width: '1px',
                height: fluid(108, 60),
                bgcolor: 'rgba(227,38,45,0.6)',
              }}
            />
            <MotionBox whileHover={reduce ? undefined : { y: -3 }} whileTap={{ scale: 0.97 }}>
              <Box
                component={Link}
                href="/customize"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: fluid(10, 8),
                  height: fluid(54, 44),
                  px: fluid(21, 16),
                  borderRadius: fluid(8, 6),
                  color: '#fff',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  fontSize: fluid(19, 13),
                  whiteSpace: 'nowrap',
                  background: RED_GRADIENT,
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 24px rgba(200,25,35,0.35)',
                  transition: 'filter .25s, box-shadow .25s',
                  '&:hover': {
                    filter: 'brightness(1.1)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 14px 32px rgba(225,35,45,0.5)',
                  },
                  '& svg': { fontSize: '1.05em', transition: 'transform .3s cubic-bezier(.22,1,.36,1)' },
                  '&:hover svg': { transform: 'translateX(4px)' },
                  '&:focus-visible': { outline: '3px solid #0a0a0a', outlineOffset: 3 },
                }}
              >
                Start Your Team Store
                <ArrowForward />
              </Box>
            </MotionBox>
          </Box>
        </MotionBox>
    </Box>
  );
}