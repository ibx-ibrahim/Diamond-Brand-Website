'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER, SECTION_PT, SECTION_PB } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E3262D';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Path to the halftone texture. Change this if your file lives somewhere else. */
const BG_SRC = '/images/banners/bg-2.png';

const DESC = 'lorem ipsum is simply dummy text of the printing and typesetting industry.,';

/**
 * Red eyebrow label above the heading.
 * Design: full-width underline (min ~166px) plus a shorter second line beneath it.
 */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        position: 'relative',
        display: 'inline-block',
        minWidth: fluid(166, 112),
        px: fluid(6, 6),
        pb: fluid(7, 5),
        color: RED,
        textAlign: 'center',
        fontWeight: 500,
        fontSize: fluid(20, 13),
        lineHeight: 1.2,
        textTransform: 'uppercase',
        letterSpacing: '0.01em',
        borderBottom: `1px solid ${RED}`,
        '&::after': {
          content: '""',
          position: 'absolute',
          left: fluid(19, 12),
          right: fluid(19, 12),
          bottom: fluid(-5, -4),
          height: '1px',
          bgcolor: RED,
        },
      }}
    >
      {children}
    </Box>
  );
}

/* ── Outline icons (64x64 grid, red stroke, no fill) ─────────── */
type IconProps = { children: React.ReactNode };

function Icon({ children }: IconProps) {
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

/** speech bubble with text lines */
const ChatIcon = () => (
  <Icon>
    <path d="M4 6h56v36H27L13 56V42H4z" />
    <path d="M16 18h32M16 29h32" />
  </Icon>
);

/** set-square ruler + pencil */
const DesignIcon = () => (
  <Icon>
    <path d="M6 6v50h50" />
    <path d="M6 6l36 50" />
    <path d="M14 36v12h12" />
    <path d="M14 26v4M14 16v4M22 34l2 3" />
    <path d="M44 16l5-9 5 9v28H44z" />
    <path d="M44 16h10M44 38h10" />
    <path d="M44 56h10" />
  </Icon>
);

/** t-shirt */
const ShirtIcon = () => (
  <Icon>
    <path d="M22 6L4 15l7 15 8-4v32h26V26l8 4 7-15-18-9c-1.5 5-8 8-10 8s-8.5-3-10-8z" />
  </Icon>
);

/** shipping box / cube */
const BoxIcon = () => (
  <Icon>
    <path d="M32 4l26 14v30L32 62 6 48V18z" />
    <path d="M6 18l26 14 26-14M32 32v30" />
    <path d="M19 11l26 14v9" />
  </Icon>
);

const STEPS = [
  { n: 1, title: 'Tell us about your team', Glyph: ChatIcon },
  { n: 2, title: 'Get a custom design', Glyph: DesignIcon },
  { n: 3, title: 'Review & approve', Glyph: ShirtIcon },
  { n: 4, title: 'We produce & deliver', Glyph: BoxIcon },
] as const;

const INDENT = fluid(84, 56); // badge → content offset (design: 84px)

function Step({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  const reduce = useReducedMotion();
  const { n, title, Glyph } = step;

  return (
    <Box component="li" sx={{ listStyle: 'none', minWidth: 0 }}>
    <MotionBox
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
      sx={{
        position: 'relative',
        pl: INDENT,
        pt: fluid(10, 4),
      }}
    >
      {/* number badge */}
      <MotionBox
        initial={reduce ? false : { scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 160, damping: 22, delay: 0.15 + index * 0.08 }}
        aria-hidden
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: fluid(47, 38),
          height: fluid(47, 38),
          borderRadius: '50%',
          bgcolor: RED,
          color: '#fff',
          display: 'grid',
          placeItems: 'center',
          fontFamily: DISPLAY,
          fontSize: fluid(30, 21),
          lineHeight: 1,
          boxShadow: '0 6px 16px rgba(200,30,40,0.35), inset 0 1px 0 rgba(255,255,255,0.25)',
        }}
      >
        <Box component="span" sx={{ pt: '0.06em' }}>{n}</Box>
      </MotionBox>

      {/* icon */}
      <Box sx={{ width: fluid(66, 46), height: fluid(66, 46) }}>
        <Glyph />
      </Box>

      {/* title */}
      <Box
        component="h3"
        sx={{
          m: 0,
          mt: fluid(26, 16),
          fontWeight: 400,
          fontSize: { xs: 19, sm: 20, lg: fluid(30, 14.5) },
          lineHeight: 1.15,
          textTransform: 'uppercase',
          color: '#0d0d0d',
          letterSpacing: '0.002em',
        }}
      >
        {title}
      </Box>

      {/* description */}
      <Box
        component="p"
        sx={{
          m: 0,
          mt: fluid(14, 8),
          maxWidth: { xs: 360, lg: fluid(410, 200) },
          fontWeight: 400,
          fontSize: { xs: 15, sm: 15, lg: fluid(21, 13) },
          lineHeight: 1.15,
          color: '#4d4d4f',
        }}
      >
        {DESC}
      </Box>
    </MotionBox>
    </Box>
  );
}

export default function HowItWorks() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="how-title"
      // sx={{
      //   position: 'relative',
      //   overflow: 'hidden',
      //   isolation: 'isolate',
      //   color: '#0a0a0a',
      //   backgroundColor: '#d9d9db',
      //   backgroundImage: `url(${BG_SRC})`,
      //   backgroundRepeat: 'repeat',
      //   backgroundSize: 'clamp(520px, 44vw, 1120px) auto',
      //   backgroundPosition: 'top left',
      //   backgroundBlendMode: 'multiply',
      //   pt: SECTION_PT,
      //   pb: SECTION_PB,
      // }}
      sx={{
            position: 'relative',
            overflow: 'hidden',
            isolation: 'isolate',
            color: '#0a0a0a',
            backgroundColor: '#d9d9db',
            backgroundImage: `url(${BG_SRC})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            // backgroundPosition: "center",
            backgroundPosition: 'top left',
            backgroundBlendMode: 'multiply',
            pt: { xs: 9, sm: 10, lg: fluid(145, 80) },
            pb: { xs: 9, lg: fluid(125, 64) },
        }}
    >
      {/* Readability veil on top of the texture: soft and light in the middle where the text sits,
          fading to the neighbouring sections' colours at the top and bottom edges. */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: [
            'linear-gradient(180deg, rgba(209,209,211,0.95) 0%, rgba(214,214,217,0.62) 28%, rgba(214,214,217,0.62) 72%, rgba(209,209,211,0.95) 100%)',
          ].join(','),
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 2560, mx: 'auto', px: GUTTER }}>
        {/* Heading */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EASE }}
          sx={{ textAlign: 'center' }}
        >
          <SectionLabel>Simple process</SectionLabel>

          <Box
            component="h2"
            id="how-title"
            sx={{
              m: 0,
              mt: fluid(22, 14),
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: 1.05,
              letterSpacing: '0.005em',
              fontSize: { xs: 'clamp(28px, 9vw, 44px)', md: fluid(72, 38) },
            }}
          >
            How it works
          </Box>
        </MotionBox>

        {/* Steps */}
        <Box
          component="ol"
          sx={{
            m: 0,
            p: 0,
            mt: { xs: 6, lg: fluid(70, 44) },
            display: { xs: 'grid', lg: 'flex' },
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
            justifyContent: 'space-between',
            columnGap: fluid(60, 32),
            rowGap: { xs: 5, md: 7 },
          }}
        >
          {STEPS.map((step, i) => (
            <Step key={step.n} step={step} index={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}