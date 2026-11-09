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

/**
 * Background photo: dark locker-room shot with hanging red, white and black jerseys.
 * It was not in the files sent, so put the photo here (or change the path). Until it exists, a dark
 * red-and-black CSS backdrop is shown so the hero never looks empty.
 */
const BG_SRC = '/images/banners/bg-8.png';

/** The page's projects section id (the button scrolls to it) */
const CTA_HREF = '/our-work#projects';

/* ── motion ─────────────────────────────────────────────────── */
const stack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};
const pillIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE } },
};

/* ── white outline icons for the strip (64x64 grid) ─────────── */
function Svg({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 64 64"
      aria-hidden
      sx={{
        display: 'block',
        width: '100%',
        height: '100%',
        fill: 'none',
        stroke: 'rgba(255,255,255,0.92)',
        strokeWidth: 2.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        overflow: 'visible',
      }}
    >
      {children}
    </Box>
  );
}

/** group of people */
const UsersIcon = () => (
  <Svg>
    <circle cx="32" cy="17" r="8" />
    <path d="M16 52c0-9 7-15 16-15s16 6 16 15" />
    <circle cx="14" cy="26" r="6" />
    <path d="M3 50c0-7 4.500-12 11-12" />
    <circle cx="50" cy="26" r="6" />
    <path d="M61 50c0-7-4.500-12-11-12" />
  </Svg>
);

/** t-shirt */
const ShirtIcon = () => (
  <Svg>
    <path d="M22 6L4 15l7 15 8-4v32h26V26l8 4 7-15-18-9c-1.5 5-8 8-10 8s-8.5-3-10-8z" />
  </Svg>
);

/** geometric mesh (the identity / graphics mark from the design) */
const MeshIcon = () => (
  <Svg>
    <path d="M6 14l52 12-26 32z" />
    <path d="M6 14l26 18M58 26L32 32M32 58V32M20 20l12 12M44 24L32 32" />
    <path d="M6 14l26-6 26 18" />
  </Svg>
);

const FEATURES = [
  { label: 'Team projects', Icon: UsersIcon },
  { label: 'Premium sportswear', Icon: ShirtIcon },
  { label: 'Made for your identity', Icon: MeshIcon },
] as const;

/* ── backdrop ───────────────────────────────────────────────── */
function Backdrop() {
  const [missing, setMissing] = React.useState(false);

  return (
    <>
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, zIndex: -3 }}>
        {/* CSS fallback: black room with red light spilling from the right */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: [
              'radial-gradient(40% 55% at 78% 48%, rgba(150,18,26,0.5) 0%, transparent 70%)',
              'radial-gradient(34% 40% at 90% 28%, rgba(210,210,214,0.18) 0%, transparent 70%)',
              'radial-gradient(30% 40% at 12% 62%, rgba(120,14,20,0.32) 0%, transparent 70%)',
              'linear-gradient(180deg, #050506 0%, #0a0707 55%, #060505 100%)',
            ].join(','),
          }}
        />
        {!missing && (
          <Image
            src={BG_SRC}
            alt=""
            fill
            priority
            quality={85}
            sizes="100vw"
            onError={() => setMissing(true)}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        )}
      </Box>

      {/* dark overlay so the white text always reads, without crushing the jersey detail */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -2,
          background: [
            'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.72))',
            'radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 60%)',
            'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 22%)',
          ].join(','),
        }}
      />
    </>
  );
}

export default function OurWorkHero() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="our-work-hero-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        color: '#fff',
        bgcolor: '#050506',
        minHeight: `max(calc(100svh - ${fluid(42, 24)}), 700px)`,
        borderRadius: `0 0 ${fluid(52, 28)} ${fluid(52, 28)}`,
        display: 'flex',
        flexDirection: 'column',
        pt: { xs: 21, sm: 23, lg: fluid(324, 190) },
      }}
    >
      <Backdrop />

      {/* ── centred content ── */}
      <MotionBox
        variants={stack}
        initial={reduce ? false : 'hidden'}
        animate="show"
        sx={{
          flex: 1,
          px: GUTTER,
          py: { xs: 5, lg: fluid(40, 28) },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {/* badge */}
        <MotionBox
          variants={fade}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            height: fluid(47, 32),
            px: fluid(17, 12),
            borderRadius: fluid(6, 4),
            border: '1px solid #C4202A',
            bgcolor: 'transparent',
            fontWeight: 500,
            fontSize: fluid(22, 12),
            textTransform: 'uppercase',
            letterSpacing: '0.01em',
            whiteSpace: 'nowrap',
          }}
        >
          Our work
        </MotionBox>

        {/* headline */}
        <Box
          id="our-work-hero-title"
          role="heading"
          aria-level={1}
          sx={{
            mt: fluid(22, 16),
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            rowGap: { xs: 0.5, md: fluid(4, 2) },
            fontFamily: DISPLAY,
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.005em',
            lineHeight: 1,
            fontSize: { xs: 38, sm: 48, md: fluid(135, 15) },
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          }}
        >
          <MotionBox variants={rise} sx={{ display: 'block' }}>
            Built for teams.
          </MotionBox>

          <MotionBox
            variants={pillIn}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              columnGap: '0.28em',
              height: { xs: 'auto', md: fluid(123, 54) },
              px: fluid(23, 13),
              py: { xs: 0.75, md: 0 },
              pb: { md: '0.03em' },
              fontSize: { xs: 33, sm: 32, md: fluid(127, 10) },
              maxWidth: '100%',
              borderRadius: fluid(18, 12),
              background: RED_GRADIENT,
              boxShadow:
                'inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -10px 24px rgba(90,0,8,0.35), 0 18px 60px rgba(220,30,40,0.35)',
            }}
          >
            <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>
              Designed to
            </Box>
            <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>
              stand out.
            </Box>
          </MotionBox>
        </Box>

        {/* subtitle */}
        <MotionBox
          variants={fade}
          sx={{
            mt: fluid(24, 16),
            maxWidth: { xs: 520, md: 'min(58vw, 1200px)' },
            fontWeight: 400,
            lineHeight: 1.16,
            color: 'rgba(255,255,255,0.82)',
            fontSize: { xs: 10, sm: 14, md: fluid(30, 8) },
            textShadow: '0 2px 18px rgba(0,0,0,0.5)',
          }}
        >
          Explore our collection of custom uniforms, team apparel, and sportswear designs crafted to
          bring every team&apos;s identity to life.
        </MotionBox>

        {/* CTA */}
        <MotionBox variants={rise} sx={{ mt: fluid(32, 24) }}>
          <MotionBox whileHover={reduce ? undefined : { y: -3 }} whileTap={{ scale: 0.97 }}>
            <Box
              component={Link}
              href={CTA_HREF}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: fluid(10, 8),
                height: fluid(62, 42),
                px: fluid(28, 22),
                borderRadius: fluid(9, 7),
                color: '#fff',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontWeight: 400,
                fontSize: { xs: 9, sm: 12, md: fluid(25, 13) },
                background: RED_GRADIENT,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 28px rgba(200,25,35,0.4)',
                transition: 'filter .25s, box-shadow .25s',
                '&:hover': {
                  filter: 'brightness(1.1)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 16px 38px rgba(225,35,45,0.55)',
                },
                '& svg': { fontSize: '1.15em', transition: 'transform .3s cubic-bezier(.22,1,.36,1)' },
                '&:hover svg': { transform: 'translateX(4px)' },
                '&:focus-visible': { outline: '3px solid #fff', outlineOffset: 3 },
              }}
            >
              Explore our projects
              <ArrowForward />
            </Box>
          </MotionBox>
        </MotionBox>
      </MotionBox>

      {/* ── feature strip, attached to the bottom edge of the hero ── */}
      <MotionBox
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.9 }}
        sx={{
          position: 'relative',
          bgcolor: 'rgba(96,96,98,0.82)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderTop: '1px solid rgba(255,255,255,0.22)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        <Box
          component="ul"
          sx={{
            m: 0,
            p: 0,
            mx: 'auto',
            maxWidth: 2560,
            px: GUTTER,
            minHeight: { xs: 0, md: fluid(93, 64) },
            py: { xs: 2.5, md: 0 },
            listStyle: 'none',
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'repeat(3, minmax(0, 1fr))' },
            rowGap: { xs: 2, md: 0 },
            alignItems: 'center',
          }}
        >
          {FEATURES.map(({ label, Icon }) => (
            <Box
              component="li"
              key={label}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: fluid(20, 12),
                py: { md: fluid(20, 14) },
                listStyle: 'none',
              }}
            >
              <Box sx={{ width: fluid(56, 26), height: fluid(56, 26), flexShrink: 0 }}>
                <Icon />
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.01em',
                  lineHeight: 1.1,
                  color: 'rgba(255,255,255,0.94)',
                  whiteSpace: { xs: 'normal', lg: 'nowrap' },
                  fontSize: { xs: 15, sm: 16, md: fluid(35, 13) },
                }}
              >
                {label}
              </Box>
            </Box>
          ))}
        </Box>
      </MotionBox>
    </Box>
  );
}