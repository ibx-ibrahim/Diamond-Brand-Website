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
const BLACK = '#0a0a0a';
const RED_GRADIENT = 'linear-gradient(180deg, #E0292F 0%, #A5141A 100%)';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Product images: transparent PNGs in /public/images/apparel/ */
const BOTTOMS = [
  {
    title: 'Mesh Shorts',
    href: '/custom-apparel/mesh-shorts',
    src: '/images/products/shorts.png',
    alt: 'Black and red mesh shorts',
    position: 'center',
    bleed: false,
    textCol: 34.5,
  },
  {
    title: 'Joggers',
    href: '/custom-apparel/joggers',
    src: '/images/products/joggers.png',
    alt: 'Black and red joggers',
    position: '30% top',
    bleed: true,
    textCol: 39,
  },
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

function BottomCard({ item, index }: { item: (typeof BOTTOMS)[number]; index: number }) {
  const reduce = useReducedMotion();
  const [missing, setMissing] = React.useState(false);

  return (
    <MotionBox
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
      sx={{ minWidth: 0, containerType: 'inline-size' }}  // 👈 cqw units now refer to this
    >
      <Box
        component="article"
        sx={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: {
             xs: `minmax(0, 1fr) ${fluid(230, 112)}`,
             sm: `minmax(0, 1fr) max(112px, ${item.textCol}cqw)`,
          },
          alignItems: 'center',
          aspectRatio: { xs: '340 / 260', sm: '630 / 414' },
          overflow: 'hidden',
          bgcolor: '#fff',
          borderRadius: { xs: fluid(28, 20), sm: 'min(20px, 3.2cqw)' },
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
            ml: { xs: fluid(12, 6), sm: '2.4cqw' },
            height: item.bleed ? { xs: '100%', sm: '110%' } : '100%',
            alignSelf: item.bleed ? { xs: 'center', sm: 'start' } : 'center',
            mt: item.bleed ? { xs: 0, sm: '3cqw' } : 0,
          }}
        >
          {!missing && (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 600px) 45vw, (max-width: 1280px) 30vw, 14vw"
              onError={() => setMissing(true)}
              style={{
                objectFit: 'contain',
                objectPosition: item.position,
                transition: 'transform .9s cubic-bezier(.22,1,.36,1)',
              }}
            />
          )}
        </Box>

        {/* text */}
        <Box sx={{ minWidth: 0, pr: { xs: fluid(14, 8), sm: '3.5cqw' }, pt: { xs: fluid(12, 8), sm: '2cqw' } }}>
          <Box
            component="h3"
            sx={{
              m: 0,
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.01em',
              lineHeight: 1.1,
              color: BLACK,
              fontSize: { xs: 20, sm: 'max(20px, 7.8cqw)' },
              whiteSpace: item.title === 'Joggers' ? 'nowrap' : 'normal',
              overflowWrap: 'normal',
            }}
          >
            {item.title}
          </Box>

          <Box
            component={Link}
            href={item.href}
            sx={{
              mt: { xs: fluid(14, 10), sm: '2.2cqw' },
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxSizing: 'border-box',
              width: 'fit-content',
              maxWidth: '100%',
              gap: { xs: fluid(8, 5), sm: 'max(5px, 1.2cqw)' },
              height: { xs: fluid(40, 30), sm: 'max(30px, 6.5cqw)' },
              px: { xs: fluid(22, 12), sm: 'max(12px, 3.2cqw)' },
              borderRadius: { xs: fluid(7, 6), sm: 'max(6px, 1.1cqw)' },
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 400,
              lineHeight: 1,
              whiteSpace: 'nowrap',
              fontSize: { xs: 12.5, sm: 'max(12px, 2.5cqw)' },
              background: RED_GRADIENT,
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
              transition: 'filter .25s',
              '&:hover': { filter: 'brightness(1.12)' },
              '&:focus-visible': { outline: '3px solid #0a0a0a', outlineOffset: 3 },
            }}
          >
            View Details
            <Box className="cta-chev" component="span" sx={{ display: 'inline-flex' }}>
              <Chevron />
            </Box>
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default function BuiltForComfort() {
  const reduce = useReducedMotion();

  return (
    <Box component="section" aria-labelledby="comfort-title" sx={{ px: GUTTER }}>
      <Box
        sx={{
          maxWidth: 2560,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: `minmax(0, 1fr) ${fluid(1297, 600)}` },
          columnGap: fluid(90, 40),
          rowGap: { xs: 4, lg: 0 },
          alignItems: 'center',
        }}
      >
        {/* text */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <Box
            component="h2"
            id="comfort-title"
            sx={{
              m: 0,
              fontFamily: DISPLAY,
              fontWeight: 400,
              fontStyle: 'italic',
              textTransform: 'uppercase',
              letterSpacing: '0.005em',
              lineHeight: 1.12,
              fontSize: { xs: 'clamp(30px, 8.6vw, 48px)', md: fluid(80, 30) },
            }}
          >
            <Box component="span" sx={{ display: 'block', color: BLACK }}>
              Built for comfort.
            </Box>
            <Box component="span" sx={{ display: 'block', color: RED }}>
              Made for team.
            </Box>
          </Box>

          <Box
            component="p"
            sx={{
              m: 0,
              mt: fluid(14, 12),
              maxWidth: { xs: 520, lg: fluid(900, 300) },
              fontWeight: 400,
              lineHeight: 1.18,
              color: '#4d4d50',
              fontSize: { xs: 16, sm: 18, lg: fluid(32, 15) },
            }}
          >
            Complete your team&apos;s look with custom athletic bottoms designed for comfort and
            performance,
          </Box>
        </MotionBox>

        {/* cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))' },
            columnGap: { xs: 2, lg: fluid(37, 14) },
            rowGap: 2.5,
          }}
        >
          {BOTTOMS.map((b, i) => (
            <BottomCard key={b.title} item={b} index={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}