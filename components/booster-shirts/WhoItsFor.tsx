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

/* ── White outline icons (64x64 grid) ─────────────────────── */
function Svg({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 64 64"
      aria-hidden
      sx={{
        display: 'block',
        width: '1.05em',
        height: '1.05em',
        flexShrink: 0,
        fill: 'none',
        stroke: '#fff',
        strokeWidth: 3,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        overflow: 'visible',
      }}
    >
      {children}
    </Box>
  );
}

const TrophyIcon = () => (
  <Svg>
    <path d="M20 8h24v14c0 9-5.5 15-12 15s-12-6-12-15z" />
    <path d="M20 13H9c0 9 4 14 11 15M44 13h11c0 9-4 14-11 15" />
    <path d="M32 37v10M21 56h22M25 47h14v9H25z" />
  </Svg>
);

const GroupIcon = () => (
  <Svg>
    <circle cx="32" cy="17" r="8" />
    <path d="M16 52c0-9 7-15 16-15s16 6 16 15" />
    <circle cx="14" cy="26" r="6" />
    <path d="M3 50c0-7 4.5-12 11-12" />
    <circle cx="50" cy="26" r="6" />
    <path d="M61 50c0-7-4.5-12-11-12" />
  </Svg>
);

const FlagIcon = () => (
  <Svg>
    <path d="M14 6v54" />
    <path d="M14 10h34l-9 11 9 11H14" />
  </Svg>
);

/* Photos live in /public/images/booster/ (team4 to team7) */
const AUDIENCES = [
  {
    label: 'Sports Teams',
    Icon: TrophyIcon,
    src: '/images/teams/team4.png',
    alt: 'A team in orange uniforms in a huddle on the field',
    position: 'center 72%',
  },
  {
    label: 'Booster Clubs',
    Icon: GroupIcon,
    src: '/images/teams/team5.png',
    alt: 'Families with painted faces watching a night game',
    position: 'center 40%',
  },
  {
    label: 'Parents & Families',
    Icon: GroupIcon,
    src: '/images/teams/team7.png',
    alt: 'A couple cheering together in the stands',
    position: 'center 30%',
  },
  {
    label: 'Fans & Supporters',
    Icon: FlagIcon,
    src: '/images/teams/team6.png',
    alt: 'Fans in yellow shirts cheering at a stadium',
    position: 'center 40%',
  },
];

function AudienceCard({ item, index }: { item: (typeof AUDIENCES)[number]; index: number }) {
  const reduce = useReducedMotion();
  const { label, Icon } = item;

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
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: { xs: '530 / 440', lg: '530 / 489' },
          borderRadius: fluid(24, 18),
          bgcolor: '#15171c',
          boxShadow: '0 14px 34px rgba(0,0,0,0.22)',
          transition: 'box-shadow .4s',
          '&:hover': { boxShadow: '0 22px 48px rgba(0,0,0,0.34)' },
          '&:hover img': { transform: 'scale(1.05)' },
        }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 600px) 92vw, (max-width: 1280px) 46vw, 22vw"
          style={{
            objectFit: 'cover',
            objectPosition: item.position,
            transition: 'transform .9s cubic-bezier(.22,1,.36,1)',
          }}
        />

        {/* dark fade behind the label */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(0deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 16%, rgba(0,0,0,0) 42%)',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            pb: fluid(30, 16),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: fluid(10, 8),
            color: '#fff',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.01em',
            lineHeight: 1.1,
            fontSize: { xs: 20, sm: 17, lg: fluid(31, 14) },
            textShadow: '0 2px 12px rgba(0,0,0,0.5)',
          }}
        >
          <Icon />
          {label}
        </Box>
      </Box>
    </MotionBox>
  );
}

export default function WhoItsFor() {
  const reduce = useReducedMotion();

  return (
    <Box component="section" aria-labelledby="who-title" sx={{ px: GUTTER }}>
      <Box sx={{ maxWidth: 2560, mx: 'auto' }}>
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EASE }}
          sx={{ textAlign: 'center' }}
        >
          <Box
            component="h2"
            id="who-title"
            sx={{
              m: 0,
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: 1.05,
              letterSpacing: '0.005em',
              color: '#06060a',
              fontSize: { xs: 'clamp(26px, 8vw, 44px)', md: fluid(100, 32) },
            }}
          >
            Who are{' '}
            <Box component="span" sx={{ color: RED }}>
              booster shirts
            </Box>{' '}
            for?
          </Box>
        </MotionBox>

        <Box
          sx={{
            mt: { xs: 4, lg: fluid(72, 36) },
            mx: 'auto',
            maxWidth: { xs: 440, sm: 'none' },
            display: 'grid',
            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(4, minmax(0, 1fr))',
            },
            columnGap: { xs: 2, sm: 2.5, lg: fluid(43, 16) },
            rowGap: { xs: 2.5, lg: fluid(43, 16) },
          }}
        >
          {AUDIENCES.map((a, i) => (
            <AudienceCard key={a.label} item={a} index={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}