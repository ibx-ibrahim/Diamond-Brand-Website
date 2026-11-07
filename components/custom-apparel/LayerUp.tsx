'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED_GRADIENT = 'linear-gradient(180deg, #E52C32 0%, #A5141A 100%)';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Transparent smoke PNG (same one used on the home page CTA). Change the path if yours differs. */
const SMOKE_SRC = '/images/banners/cta-bg-2.png';

/* Product images: transparent PNGs in /public/images/apparel/ */
const JACKETS = [
  { title: 'Pullover Hoodie', href: '/custom-apparel/pullover-hoodie', src: '/images/products/red_hoodie1.png', alt: 'Red pullover hoodie' },
  { title: 'Zipper Hoodie', href: '/custom-apparel/zipper-hoodie', src: '/images/products/red_hoodie2.png', alt: 'Black and red zipper hoodie' },
  { title: 'Windbreaker Jackets', href: '/custom-apparel/windbreaker-jackets', src: '/images/products/red_hoodie3.png', alt: 'Black, white and red windbreaker jacket' },
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

function JacketCard({ item, index }: { item: (typeof JACKETS)[number]; index: number }) {
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
          aspectRatio: { lg: '377 / 495' },
          overflow: 'hidden',
          borderRadius: fluid(31, 22),
          pb: fluid(31, 20),
          bgcolor: 'rgba(120,120,124,0.5)',
          backgroundImage:
            'linear-gradient(180deg, rgba(160,160,164,0.28) 0%, rgba(90,90,94,0.18) 100%)',
          border: '1px solid rgba(255,255,255,0.22)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.22)',
          transition: 'transform .45s cubic-bezier(.22,1,.36,1), box-shadow .45s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 22px 50px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.28)',
          },
          '&:hover .cta-chev': { transform: 'translateX(3px)' },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            flex: 1,
            minHeight: { xs: 280, sm: 220, lg: 0 },
            mt: fluid(6, 8),
            mx: fluid(8, 8),
          }}
        >
          {!missing && (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 600px) 85vw, (max-width: 1280px) 30vw, 14vw"
              onError={() => setMissing(true)}
              style={{ objectFit: 'contain' }}
            />
          )}
        </Box>

        <Box
          component="h3"
          sx={{
            m: 0,
            mt: fluid(12, 10),
            px: fluid(10, 10),
            textAlign: 'center',
            fontFamily: DISPLAY,
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.01em',
            lineHeight: 1.1,
            color: '#fff',
            fontSize: { xs: 22, sm: 18, lg: fluid(28, 14) },
          }}
        >
          {item.title}
        </Box>

        <Box
          component={Link}
          href={item.href}
          sx={{
            mt: fluid(16, 12),
            mx: 'auto',
            width: '65%',
            height: fluid(40, 36),
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: fluid(8, 6),
            borderRadius: fluid(7, 6),
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: { xs: 14, lg: fluid(18, 13) },
            background: RED_GRADIENT,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
            transition: 'filter .25s',
            '&:hover': { filter: 'brightness(1.12)' },
            '&:focus-visible': { outline: '3px solid #fff', outlineOffset: 3 },
          }}
        >
          View Details
          <Box className="cta-chev" component="span" sx={{ display: 'inline-flex' }}>
            <Chevron />
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default function LayerUp() {
  const reduce = useReducedMotion();
  const [smokeMissing, setSmokeMissing] = React.useState(false);

  return (
    <Box
      component="section"
      aria-labelledby="layer-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        bgcolor: '#212122',
        color: '#fff',
        px: GUTTER,
        py: { xs: 7, lg: fluid(100, 56) },
      }}
    >
      {/* smoke drifting along the bottom-left */}
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

      <Box
        sx={{
          maxWidth: 2560,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: `minmax(0, 1fr) ${fluid(1242, 560)}` },
          columnGap: fluid(60, 40),
          rowGap: { xs: 5, lg: 0 },
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
            id="layer-title"
            sx={{
              m: 0,
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.005em',
              lineHeight: 1,
              fontSize: { xs: 'clamp(34px, 10.5vw, 56px)', md: fluid(90, 34) },
            }}
          >
            <Box component="span" sx={{ display: 'block' }}>
              Layer up.
            </Box>
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                mt: fluid(8, 6),
                px: fluid(19, 14),
                height: { xs: 'auto', md: fluid(120, 48) },
                py: { xs: 0.5, md: 0 },
                pb: { md: '0.03em' },
                borderRadius: fluid(15, 10),
                background: RED_GRADIENT,
                boxShadow:
                  'inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -8px 20px rgba(90,0,8,0.35), 0 14px 40px rgba(220,30,40,0.3)',
              }}
            >
              Stand out.
            </Box>
          </Box>

          <Box
            component="p"
            sx={{
              m: 0,
              mt: fluid(30, 18),
              maxWidth: { xs: 520, lg: fluid(980, 300) },
              fontWeight: 400,
              lineHeight: 1.18,
              color: 'rgba(255,255,255,0.96)',
              fontSize: { xs: 17, sm: 19, lg: fluid(43, 17) },
            }}
          >
            Custom outerwear designed to keep your team looking sharp on and off the field.
          </Box>
        </MotionBox>

        {/* cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(3, minmax(0, 1fr))' },
            columnGap: { xs: 2, lg: fluid(55, 14) },
            rowGap: 2.5,
            mx: { xs: 'auto', sm: 0 },
            maxWidth: { xs: 360, sm: 'none' },
            width: '100%',
          }}
        >
          {JACKETS.map((j, i) => (
            <JacketCard key={j.title} item={j} index={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}