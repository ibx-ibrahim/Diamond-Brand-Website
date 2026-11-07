'use client';

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E3262D';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Close-up of the red and black collar (cta-shirt1.png). Lives at /public/images/booster/cta-shirt1.png */
const IMG_SRC = '/images/products/cta-shirt1.png';

/** Angle of the slanted photo edges, from the design */
const SKEW = 21.5;

/* ── Red outline icons (64x64 grid) ───────────────────────── */
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
        stroke: RED,
        strokeWidth: 2.6,
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
const GroupIcon = () => (
  <Svg>
    <circle cx="32" cy="17" r="8" fill="rgba(227,38,45,0.12)" />
    <path d="M16 52c0-9 7-15 16-15s16 6 16 15" />
    <circle cx="14" cy="26" r="6" fill="rgba(227,38,45,0.12)" />
    <path d="M3 50c0-7 4.5-12 11-12" />
    <circle cx="50" cy="26" r="6" fill="rgba(227,38,45,0.12)" />
    <path d="M61 50c0-7-4.5-12-11-12" />
  </Svg>
);

/** trophy */
const TrophyIcon = () => (
  <Svg>
    <path d="M20 8h24v14c0 9-5.5 15-12 15s-12-6-12-15z" />
    <path d="M20 13H9c0 9 4 14 11 15M44 13h11c0 9-4 14-11 15" />
    <path d="M32 37v10M21 56h22M25 47h14v9H25z" />
    <path d="M26 21l4 4 8-8" />
  </Svg>
);

/** shield with a check */
const ShieldIcon = () => (
  <Svg>
    <path d="M32 6l21 7.5V30c0 12-8.5 21-21 27C19.500 51 11 42 11 30V13.500z" />
    <path d="M22 31l7 7 13-14" />
  </Svg>
);

const FEATURES = [
  { label: 'Fans & Supporters', Icon: GroupIcon },
  { label: 'Booster Clubs', Icon: TrophyIcon },
  { label: 'Schools & Teams', Icon: ShieldIcon },
];

/** Two parallel red slashes */
function Slashes({ sx }: { sx: object }) {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        width: '6.8%',
        height: '23%',
        pointerEvents: 'none',
        ...sx,
      }}
    >
      {[0, 1].map((i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${i * 36}%`,
            width: fluid(5, 3),
            bgcolor: RED,
            borderRadius: 4,
            transform: `rotate(${SKEW}deg)`,
          }}
        />
      ))}
    </Box>
  );
}

function FeatureBox({ item, index }: { item: (typeof FEATURES)[number]; index: number }) {
  const reduce = useReducedMotion();
  const { label, Icon } = item;

  return (
    <MotionBox
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: EASE, delay: index * 0.08 }}
      sx={{ minWidth: 0 }}
    >
      <Box
        sx={{
          height: '100%',
          minHeight: { xs: 150, sm: 140 },
          aspectRatio: { lg: '352 / 213' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: fluid(14, 10),
          borderRadius: fluid(10, 8),
          bgcolor: '#dadadb',
          border: '1.5px solid rgba(160,160,166,0.6)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)',
          transition: 'transform .4s cubic-bezier(.22,1,.36,1), border-color .3s, box-shadow .3s',
          '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: 'rgba(227,38,45,0.55)',
            boxShadow: '0 12px 26px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.5)',
          },
        }}
      >
        <Box sx={{ width: fluid(70, 44), height: fluid(70, 44) }}>
          <Icon />
        </Box>
        <Box
          sx={{
            mt: fluid(8, 6),
            maxWidth: '64%',
            fontFamily: DISPLAY,
            fontWeight: 400,
            lineHeight: 0.98,
            color: '#0a0a0a',
            fontSize: { xs: 22, sm: 18, lg: fluid(36, 15) },
          }}
        >
          {label}
        </Box>
      </Box>
    </MotionBox>
  );
}

export default function BuiltForSupporters() {
  const reduce = useReducedMotion();

  return (
    <Box component="section" aria-labelledby="supporters-title" sx={{ px: GUTTER }}>
      <Box
        sx={{
          maxWidth: 2560,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: 'minmax(0, 1087fr) minmax(0, 1112fr)' },
          columnGap: fluid(40, 36),
          rowGap: { xs: 5, lg: 0 },
          alignItems: 'center',
        }}
      >
        {/* ── slanted photo ── */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.95, ease: EASE }}
          sx={{ position: 'relative', width: '100%', aspectRatio: '1087 / 557' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '10.07%',
              width: '79.85%',
              overflow: 'hidden',
              borderRadius: fluid(34, 18),
              transform: `skewX(-${SKEW}deg)`,
              bgcolor: '#111',
              boxShadow: '0 18px 44px rgba(0,0,0,0.28)',
            }}
          >
            {/* counter-skew keeps the photo upright inside the slanted frame */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                transform: `skewX(${SKEW}deg) scale(1.32)`,
              }}
            >
              <Image
                src={IMG_SRC}
                alt="Close-up of a black and red booster shirt collar and mesh fabric"
                fill
                sizes="(max-width: 1280px) 92vw, 42vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </Box>
          </Box>

          <Slashes sx={{ left: '9.9%', top: '-0.4%' }} />
          <Slashes sx={{ left: '84.9%', top: '78%' }} />
        </MotionBox>

        {/* ── text + features ── */}
        <Box sx={{ minWidth: 0 }}>
          <MotionBox
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            <Box
              component="h2"
              id="supporters-title"
              sx={{
                m: 0,
                fontFamily: DISPLAY,
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.005em',
                lineHeight: 0.9,
                fontSize: { xs: 'clamp(32px, 10vw, 60px)', md: fluid(124, 36) },
              }}
            >
              <Box component="span" sx={{ display: 'block', color: '#06060a' }}>
                Built for
              </Box>
              <Box component="span" sx={{ display: 'block', color: RED }}>
                Your supporters
              </Box>
            </Box>

            <Box
              component="p"
              sx={{
                m: 0,
                mt: fluid(18, 14),
                fontWeight: 400,
                lineHeight: 1.34,
                color: '#3f3f43',
                fontSize: { xs: 16, sm: 18, lg: fluid(32, 14.5) },
              }}
            >
              More than just a shirt it&apos;s a way to unite your team, boost morale and represent your
              community with pride.
            </Box>
          </MotionBox>

          <Box
            sx={{
              mt: fluid(52, 26),
              display: 'grid',
              gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(3, minmax(0, 1fr))' },
              columnGap: fluid(28, 12),
              rowGap: 1.5,
            }}
          >
            {FEATURES.map((f, i) => (
              <FeatureBox key={f.label} item={f} index={i} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}