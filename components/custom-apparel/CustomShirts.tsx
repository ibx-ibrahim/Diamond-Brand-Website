'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E3262D';
const RED_GRADIENT = 'linear-gradient(180deg, #E0292F 0%, #A5141A 100%)';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Product images: transparent or white-background PNGs in /public/images/apparel/ */
const SHIRTS = [
  { title: 'T-Shirt', href: '/custom-apparel/t-shirt', src: '/images/products/red4.png', alt: 'Custom black and red sublimated t-shirt' },
  { title: 'Long Sleeve Shirt', href: '/custom-apparel/long-sleeve-shirt', src: '/images/products/red5.png', alt: 'Custom black and red long sleeve shirt' },
  { title: 'Long Sleeve with Hood', href: '/custom-apparel/long-sleeve-with-hood', src: '/images/products/red6.png', alt: 'Custom hooded long sleeve shirt in black, white and red' },
  { title: 'Construction Hi Viz Shirts', href: '/custom-apparel/hi-viz-shirts', src: '/images/products/safety2.png', alt: 'High-visibility construction shirt' },
];

function Chevron() {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      aria-hidden
      sx={{
        width: '0.85em',
        height: '0.85em',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 3.6,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        transition: 'transform .3s cubic-bezier(.22,1,.36,1)',
      }}
    >
      <path d="M9 4.5L16.5 12 9 19.5" />
    </Box>
  );
}

function ShirtCard({ shirt, index }: { shirt: (typeof SHIRTS)[number]; index: number }) {
  const reduce = useReducedMotion();
  const [missing, setMissing] = React.useState(false);

  return (
    <MotionBox
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.07 }}
      sx={{ minWidth: 0 }}
    >
      <Box
        component="article"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          aspectRatio: { lg: '533 / 703' },
          overflow: 'hidden',
          bgcolor: '#fff',
          borderRadius: fluid(24, 18),
          pb: fluid(39, 22),
          boxShadow: '0 12px 28px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.08)',
          transition: 'box-shadow .35s',
          '&:hover': { boxShadow: '0 18px 40px rgba(0,0,0,0.26), 0 2px 6px rgba(0,0,0,0.1)' },
          '&:hover img': { transform: 'scale(1.035)' },
          '&:hover .cta-chev': { transform: 'translateX(3px)' },
        }}
      >
        {/* image */}
        <Box
          sx={{
            position: 'relative',
            flex: 1,
            minHeight: { xs: 280, sm: 240, lg: 0 },
            mt: fluid(22, 12),
            mx: fluid(14, 10),
          }}
        >
          {!missing && (
            <Image
              src={shirt.src}
              alt={shirt.alt}
              fill
              priority={index < 2}
              sizes="(max-width: 600px) 90vw, (max-width: 1280px) 45vw, 22vw"
              onError={() => setMissing(true)}
              style={{
                objectFit: 'contain',
                transition: 'transform .9s cubic-bezier(.22,1,.36,1)',
              }}
            />
          )}
        </Box>

        {/* title */}
        <Box
          component="h3"
          sx={{
            m: 0,
            mt: fluid(14, 12),
            px: fluid(10, 10),
            textAlign: 'center',
            fontFamily: DISPLAY,
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.01em',
            lineHeight: 1.1,
            color: '#0a0a0a',
            fontSize: { xs: 22, sm: 20, lg: fluid(33, 16) },
          }}
        >
          {shirt.title}
        </Box>

        {/* button */}
        <Box
          component={Link}
          href="/customize"
          sx={{
            mt: fluid(20, 14),
            mx: 'auto',
            width: { xs: '76%', lg: '72%' },
            height: fluid(51, 44),
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: fluid(8, 6),
            borderRadius: fluid(8, 7),
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: { xs: 15, lg: fluid(22, 14) },
            background: RED_GRADIENT,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 6px 14px rgba(180,20,30,0.3)',
            transition: 'filter .25s',
            '&:hover': { filter: 'brightness(1.1)' },
            '&:focus-visible': { outline: '3px solid #0a0a0a', outlineOffset: 3 },
          }}
        >
          Start Custom Order
          <Box className="cta-chev" component="span" sx={{ display: 'inline-flex' }}>
            <Chevron />
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default function CustomShirts() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      id="shirts"
      aria-labelledby="shirts-title"
      sx={{ px: GUTTER, scrollMarginTop: 80 }}
    >
      <Box sx={{ maxWidth: 2560, mx: 'auto' }}>
        {/* Heading */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EASE }}
          sx={{ textAlign: 'center' }}
        >
          <Box
            component="h2"
            id="shirts-title"
            sx={{
              m: 0,
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: 1.05,
              letterSpacing: '0.005em',
              color: '#0a0a0a',
              fontSize: { xs: 'clamp(26px, 8vw, 42px)', md: fluid(72, 36) },
            }}
          >
            Custom shirts{' '}
            <Box component="span" sx={{ color: RED }}>
              for every team
            </Box>
          </Box>

          <Box
            component="p"
            sx={{
              m: '0 auto',
              mt: fluid(10, 10),
              maxWidth: { xs: 520, md: 'min(46vw, 1020px)' },
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#5b5b5e',
              fontSize: { xs: 15, sm: 16, md: fluid(26, 15) },
            }}
          >
            Make your team&apos;s identity stand out with personalized shirts designed around your colors
            and branding.
          </Box>
        </MotionBox>

        {/* Cards */}
        <Box
          sx={{
            mt: { xs: 4, lg: fluid(68, 40) },
            mx: 'auto',
            maxWidth: { xs: 440, sm: 'none' },
            display: 'grid',
            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(4, minmax(0, 1fr))',
            },
            columnGap: { xs: 2, sm: 2.5, lg: fluid(39, 16) },
            rowGap: { xs: 2.5, lg: fluid(39, 16) },
          }}
        >
          {SHIRTS.map((s, i) => (
            <ShirtCard key={s.title} shirt={s} index={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}