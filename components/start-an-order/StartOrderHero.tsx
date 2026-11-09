'use client';

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const RED_GRADIENT = 'linear-gradient(180deg, #E52C32 0%, #A5141A 100%)';

/**
 * Background photo: dark action shot of a football player in a red helmet, brightest on the right.
 * It was not in the files sent, so put the photo here (or change the path). Until it exists, a dark
 * red-and-black CSS backdrop is shown so the hero never looks empty.
 */
const BG_SRC = '/images/banners/bg-9.png';

const stack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};
const pillIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, x: -16 },
  show: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};

/* ── small white icons (24x24 grid) ─────────────────────────── */
function Svg({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      aria-hidden
      sx={{
        display: 'block',
        width: '58%',
        height: '58%',
        fill: 'none',
        stroke: 'rgba(255,255,255,0.95)',
        strokeWidth: 1.7,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        overflow: 'visible',
      }}
    >
      {children}
    </Box>
  );
}

const MockupIcon = () => (
  <Svg>
    <rect x="3.500" y="4" width="17" height="16" rx="2" />
    <path d="M3.500 16l5-5 4 4 3-3 5 5" />
    <circle cx="15.500" cy="8.500" r="1.200" />
  </Svg>
);

const ClockIcon = () => (
  <Svg>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.500l3.500 2" />
  </Svg>
);

const ShieldIcon = () => (
  <Svg>
    <path d="M12 3l7.500 2.800V12c0 4.500-3.200 7.500-7.500 9-4.300-1.500-7.500-4.500-7.500-9V5.800z" />
    <path d="M8.500 12l2.500 2.500 4.500-5" />
  </Svg>
);

const HeadsetIcon = () => (
  <Svg>
    <path d="M4 14v-2a8 8 0 0116 0v2" />
    <path d="M4 14h3v5H5.500A1.500 1.500 0 014 17.500zM20 14h-3v5h1.500a1.500 1.500 0 001.500-1.500z" />
    <path d="M17 19v.500A2.500 2.500 0 0114.500 22H12" />
  </Svg>
);

const CHIPS = [
  { label: 'Free Design Mockup', Icon: MockupIcon },
  { label: 'Fast Response', note: '(Within 12 hours)', Icon: ClockIcon },
  { label: 'Premium Quality', Icon: ShieldIcon },
  { label: 'Dedicated Support', Icon: HeadsetIcon },
] as const;

function Chip({ item }: { item: (typeof CHIPS)[number] }) {
  const { label, Icon } = item;
  const note = 'note' in item ? item.note : undefined;

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: fluid(14, 8), minWidth: 0 }}>
      <Box
        sx={{
          width: fluid(35, 28),
          height: fluid(35, 28),
          flexShrink: 0,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          background: 'radial-gradient(circle at 35% 30%, rgba(190,40,46,0.75), rgba(110,16,22,0.7))',
          border: '1px solid rgba(255,255,255,0.14)',
        }}
      >
        <Icon />
      </Box>
      <Box sx={{ minWidth: 0, lineHeight: 1.1 }}>
        <Box
          component="span"
          sx={{
            display: 'block',
            color: 'rgba(255,255,255,0.94)',
            textTransform: note ? 'uppercase' : 'none',
            fontSize: { xs: 14, sm: 15, lg: fluid(note ? 21 : 22, 12.5) },
            letterSpacing: note ? '0.01em' : 0,
          }}
        >
          {label}
        </Box>
        {note && (
          <Box
            component="span"
            sx={{
              display: 'block',
              mt: '2px',
              color: 'rgba(255,255,255,0.7)',
              textTransform: 'uppercase',
              fontSize: { xs: 11, sm: 11.5, lg: fluid(15, 10) },
            }}
          >
            {note}
          </Box>
        )}
      </Box>
    </Box>
  );
}

function Backdrop() {
  const [missing, setMissing] = React.useState(false);

  return (
    <>
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, zIndex: -3 }}>
        {/* CSS fallback: black room with red light on the right, where the player sits */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: [
              'radial-gradient(34% 62% at 70% 46%, rgba(170,22,28,0.55) 0%, transparent 70%)',
              'radial-gradient(26% 40% at 92% 30%, rgba(220,220,225,0.14) 0%, transparent 70%)',
              'radial-gradient(30% 40% at 52% 40%, rgba(120,14,20,0.3) 0%, transparent 70%)',
              'linear-gradient(180deg, #050506 0%, #0a0606 55%, #060505 100%)',
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
            style={{ objectFit: 'cover', objectPosition: '72% center' }}
          />
        )}
      </Box>

      {/* darkest on the left where the text sits, lighter on the right so the player stays visible */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -2,
          background: [
            'linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 42%, rgba(0,0,0,0.3) 100%)',
            'linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 24%, rgba(0,0,0,0) 62%, rgba(0,0,0,0.85) 100%)',
          ].join(','),
        }}
      />
    </>
  );
}

export default function StartOrderHero() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="start-order-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        color: '#fff',
        bgcolor: '#050506',
        minHeight: `max(calc(100svh - ${fluid(265, 100)}), 500px)`,
        borderRadius: `0 0 ${fluid(52, 28)} ${fluid(52, 28)}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: GUTTER,
        pt: { xs: 21, sm: 23, lg: fluid(190, 150) },
        pb: { xs: 8, lg: fluid(98, 56) },
      }}
    >
      <Backdrop />

      <MotionBox
        variants={stack}
        initial={reduce ? false : 'hidden'}
        animate="show"
        sx={{
          width: '100%',
          maxWidth: 2560,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
        }}
      >
        {/* badge */}
        <MotionBox
          variants={rise}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            height: fluid(46, 32),
            px: fluid(17, 12),
            borderRadius: fluid(6, 4),
            border: '1px solid #C4202A',
            bgcolor: 'rgba(170,20,30,0.14)',
            boxShadow: '0 0 24px rgba(210,30,40,0.18)',
            fontWeight: 500,
            fontSize: fluid(22, 12),
            textTransform: 'uppercase',
            letterSpacing: '0.01em',
            whiteSpace: 'nowrap',
          }}
        >
          Custom team apparel
        </MotionBox>

        {/* headline: "START AN" plain, "ORDER" inside the red pill */}
        <Box
          id="start-order-title"
          role="heading"
          aria-level={1}
          sx={{
            mt: fluid(26, 16),
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            columnGap: fluid(36, 12),
            rowGap: 0.5,
            fontFamily: DISPLAY,
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.005em',
            lineHeight: 1,
            fontSize: { xs: 'clamp(34px, 10.4vw, 62px)', md: fluid(144, 46) },
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          }}
        >
          <MotionBox variants={rise} sx={{ display: 'block' }}>
            Start an
          </MotionBox>

          <MotionBox
            variants={pillIn}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              height: { xs: 'auto', md: fluid(147, 60) },
              px: fluid(32, 16),
              py: { xs: 0.75, md: 0 },
              pb: { md: '0.03em' },
              borderRadius: fluid(25, 14),
              background: RED_GRADIENT,
              boxShadow:
                'inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -10px 24px rgba(90,0,8,0.35), 0 18px 60px rgba(220,30,40,0.35)',
            }}
          >
            Order
          </MotionBox>
        </Box>

        {/* subtitle */}
        <MotionBox
          variants={rise}
          sx={{
            mt: fluid(26, 16),
            maxWidth: { xs: 560, md: fluid(1260, 420) },
            fontWeight: 400,
            lineHeight: 1.66,
            color: 'rgba(255,255,255,0.66)',
            fontSize: { xs: 16, sm: 18, md: fluid(32, 15) },
            textShadow: '0 2px 18px rgba(0,0,0,0.6)',
          }}
        >
          Get your team&apos;s custom apparel in just a few steps. Share your requirements, and our team
          will take care of the design, mockup, and production.
        </MotionBox>

        {/* assurance chips */}
        <MotionBox
          variants={rise}
          sx={{
            mt: fluid(22, 20),
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            columnGap: fluid(34, 18),
            rowGap: { xs: 1.5, lg: 1 },
            maxWidth: '100%',
            px: fluid(25, 16),
            py: { xs: 1.5, lg: fluid(9, 8) },
            borderRadius: { xs: '20px', lg: fluid(14, 14) },
            bgcolor: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.26)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          {CHIPS.map((c) => (
            <Chip key={c.label} item={c} />
          ))}
        </MotionBox>
      </MotionBox>
    </Box>
  );
}