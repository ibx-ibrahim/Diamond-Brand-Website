'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';
import { cl, DISPLAY, EASE, HeadingPill, HERO_RADIUS, MotionBox, RED, RED_GRADIENT, vw } from './Shared';

/** Laptop + phone mockup. Put it at /public/images/banners/cta-bg-8.png, or change this path. */
const MOCKUP_SRC = '/images/banners/cta-bg-8.png';

/*
 * On laptop and larger screens the text sits on top of the mockup, so its sizes follow the viewport width
 * (the design is 1920px wide, see vw/cl in shared.tsx). That keeps the type and the picture in proportion.
 */

export default function StoreShowcase() {
  const reduce = useReducedMotion();
  const R = HERO_RADIUS;

  return (
    <Box
      component="section"
      aria-labelledby="showcase-title"
      sx={{
          position: 'relative',
          overflow: 'hidden',
          isolation: 'isolate',
          borderRadius: `${R} ${R} 0 0`,
          minHeight: { lg: '28.4vw' },
          background: {
            xs: 'linear-gradient(180deg, #d5d5d8 0%, #ebebee 55%, #f2f2f5 100%)',
            // soft grey strip on the left, then the mockup's own white backdrop
            lg: 'linear-gradient(90deg, #d0d0d2 0%, #e3e3e6 19.3%, #e9e9ec 19.3%, #f3f3f6 100%)',
          },
        }}
      >
        {/* text */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: EASE }}
          sx={{
            position: 'relative',
            zIndex: 1,
            px: GUTTER,
            pt: { xs: 8, md: 10, lg: vw(84) },
            pb: { xs: 5, md: 6, lg: vw(127) },
            width: { lg: '52%' },
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              height: { xs: 34, lg: cl(30, 34, 46) },
              px: { xs: 1.5, lg: cl(11, 13, 18) },
              border: `1px solid ${RED}`,
              borderRadius: '4px',
              color: RED,
              fontWeight: 400,
              fontSize: { xs: 13, lg: cl(12, 17, 23) },
              lineHeight: 1,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
            }}
          >
            See it in action
          </Box>

          <Box
            component="h2"
            id="showcase-title"
            sx={{
              m: 0,
              mt: { xs: 2, lg: vw(16) },
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.005em',
              lineHeight: 1,
              color: '#0a0a0a',
              fontSize: { xs: 'clamp(30px, 9.5vw, 54px)', md: 'clamp(40px, 6vw, 62px)', lg: cl(40, 65) },
            }}
          >
            <Box component="span" sx={{ display: 'block' }}>
              A store that feels
            </Box>
            <HeadingPill height={{ md: '66px', lg: cl(48, 88) }}>Like your team.</HeadingPill>
          </Box>

          <Box
            component="p"
            sx={{
              m: 0,
              mt: { xs: 2, lg: vw(15) },
              maxWidth: { xs: 520, lg: '35vw' },
              fontWeight: 400,
              fontSize: { xs: 16, md: 18, lg: cl(14, 20, 27) },
              lineHeight: 1.25,
              color: '#4d4d4f',
            }}
          >
            From custom branding to curated apparel collections, every detail is designed to give your team a unique
            shopping experience.
          </Box>

          <Box
            component={Link}
            href="#team-store-features"
            sx={{
              mt: { xs: 3, lg: vw(16) },
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: '8px', lg: cl(7, 10, 13) },
              height: { xs: 46, lg: cl(40, 43, 57) },
              px: { xs: 2.5, lg: cl(15, 19, 26) },
              borderRadius: '6px',
              color: '#fff',
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontWeight: 500,
              fontSize: { xs: 14, lg: cl(13, 17.5, 23) },
              whiteSpace: 'nowrap',
              background: RED_GRADIENT,
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 24px rgba(200,25,35,0.3)',
              transition: 'filter .25s, box-shadow .25s',
              '&:hover': {
                filter: 'brightness(1.1)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 14px 32px rgba(225,35,45,0.45)',
              },
              '& svg': { fontSize: '1.15em', transition: 'transform .3s cubic-bezier(.22,1,.36,1)' },
              '&:hover svg': { transform: 'translateX(4px)' },
              '&:focus-visible': { outline: '3px solid #0a0a0a', outlineOffset: 3 },
            }}
          >
            Explore Store Features
            <ArrowForward />
          </Box>
        </MotionBox>

        {/* mockup: below the text on small screens, filling the right side on laptop+ */}
        <Box
          sx={{
            position: { xs: 'relative', lg: 'absolute' },
            top: { lg: 0 },
            bottom: { lg: 0 },
            left: { lg: '19.3%' },
            right: { lg: 0 },
            width: { xs: '100%', lg: 'auto' },
            aspectRatio: { xs: '2.4 / 1', lg: 'auto' },
            zIndex: 0,
          }}
        >
          <Image
            src={MOCKUP_SRC}
            alt="The Diamond Brand website shown on a laptop and a phone"
            fill
            quality={90}
            sizes="(min-width: 1200px) 81vw, 100vw"
            style={{ objectFit: 'cover', objectPosition: '35% 50%' }}
          />
        </Box>
    </Box>
  );
}