'use client';

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E3262D';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Black jerseys in a night stadium with red corners (cta-bg-7.png). Lives at /public/images/banners/cta-bg-7.png */
const BG_SRC = '/images/banners/cta-bg-7.png';

const stack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

/* ── White outline icons (64x64 grid) ─────────────────────── */
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
        strokeWidth: 2.4,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        overflow: 'visible',
      }}
    >
      {children}
    </Box>
  );
}

/** paint palette */
const PaletteIcon = () => (
  <Svg>
    <path d="M32 6C17 6 6 17 6 31s11 25 22 25c5 0 6-4 4-7s0-6 4-6h8c8 0 14-5 14-13C58 17 46 6 32 6z" />
    <circle cx="20" cy="30" r="3.5" />
    <circle cx="27" cy="19" r="3.5" />
    <circle cx="40" cy="19" r="3.5" />
    <circle cx="47" cy="30" r="3.5" />
  </Svg>
);

/** diamond with sparkles */
const DiamondIcon = () => (
  <Svg>
    <path d="M16 18h32l10 12-26 28L6 30z" />
    <path d="M6 30h52M22 18l-6 12 16 28 16-28-6-12M32 18l-5 12 5 28 5-28z" />
    <path d="M10 6v8M6 10h8M54 4v6M51 7h6" />
  </Svg>
);

/** t-shirt */
const ShirtIcon = () => (
  <Svg>
    <path d="M22 6L4 15l7 15 8-4v32h26V26l8 4 7-15-18-9c-1.5 5-8 8-10 8s-8.5-3-10-8z" />
  </Svg>
);

/** geometric mesh */
const GraphicsIcon = () => (
  <Svg>
    <path d="M6 14l52 12-26 32z" />
    <path d="M6 14l26 18M58 26L32 32M32 58V32M20 20l12 12M44 24L32 32" />
    <path d="M6 14l26-6 26 18" />
  </Svg>
);

const OPTIONS = [
  { label: 'Custom Team Colors', Icon: PaletteIcon },
  { label: 'Team Logos', Icon: DiamondIcon },
  { label: 'Player Names & Numbers', Icon: ShirtIcon },
  { label: 'Custom Graphics', Icon: GraphicsIcon },
];

export default function MakeItYourOwn() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="own-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        bgcolor: '#04060b',
        color: '#fff',
        minHeight: { xs: 620, lg: fluid(774, 480) },
        display: 'flex',
        alignItems: 'center',
        px: GUTTER,
        py: { xs: 8, lg: fluid(90, 56) },
      }}
    >
      {/* photo: jerseys on the right, red corners baked into the image */}
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

      {/* readability fade behind the copy */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          background: {
            xs: 'linear-gradient(180deg, rgba(2,4,8,0.88) 0%, rgba(2,4,8,0.72) 60%, rgba(2,4,8,0.55) 100%)',
            md: 'linear-gradient(90deg, rgba(2,4,8,0.7) 0%, rgba(2,4,8,0.35) 45%, rgba(2,4,8,0) 68%)',
          },
        }}
      />

      <MotionBox
        variants={stack}
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        sx={{ width: '100%', maxWidth: 2560, mx: 'auto' }}
      >
        <Box sx={{ maxWidth: { xs: '100%', md: fluid(1180, 380) } }}>
          <Box
            id="own-title"
            role="heading"
            aria-level={2}
            sx={{
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.005em',
              lineHeight: 0.92,
              fontSize: { xs: 'clamp(30px, 9.6vw, 56px)', md: fluid(120, 34) },
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
            }}
          >
            <MotionBox variants={rise} sx={{ display: 'block' }}>
              Make every shirt
            </MotionBox>
            <MotionBox variants={rise} sx={{ display: 'block', color: RED }}>
              Your own
            </MotionBox>
          </Box>

          <MotionBox
            variants={rise}
            sx={{
              mt: fluid(16, 14),
              maxWidth: { xs: 520, md: fluid(1100, 340) },
              fontWeight: 400,
              lineHeight: 1.25,
              color: 'rgba(255,255,255,0.86)',
              fontSize: { xs: 16, sm: 18, md: fluid(38, 15) },
              textShadow: '0 2px 18px rgba(0,0,0,0.6)',
            }}
          >
            Create a booster shirt that truly represents your team with full customization options.
          </MotionBox>

          {/* option tiles */}
          <MotionBox
            variants={rise}
            sx={{
              mt: fluid(50, 26),
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, minmax(0, 1fr))',
                sm: `repeat(4, minmax(0, ${fluid(156, 96)}))`,
              },
              columnGap: { xs: 1.5, sm: fluid(35, 12) },
              rowGap: { xs: 1.5, sm: 0 },
            }}
          >
            {OPTIONS.map(({ label, Icon }) => (
              <Box
                key={label}
                sx={{
                  aspectRatio: { xs: '156 / 120', sm: '156 / 132' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  px: fluid(10, 8),
                  borderRadius: fluid(5, 5),
                  bgcolor: 'rgba(255,255,255,0.16)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18)',
                  transition: 'transform .35s cubic-bezier(.22,1,.36,1), background-color .3s',
                  '&:hover': { transform: 'translateY(-4px)', bgcolor: 'rgba(255,255,255,0.24)' },
                }}
              >
                <Box sx={{ width: fluid(48, 34), height: fluid(48, 34) }}>
                  <Icon />
                </Box>
                <Box
                  sx={{
                    mt: fluid(8, 6),
                    fontWeight: 400,
                    lineHeight: 1.1,
                    color: 'rgba(255,255,255,0.92)',
                    fontSize: { xs: 13, sm: 12, lg: fluid(20, 11.5) },
                  }}
                >
                  {label}
                </Box>
              </Box>
            ))}
          </MotionBox>
        </Box>
      </MotionBox>
    </Box>
  );
}