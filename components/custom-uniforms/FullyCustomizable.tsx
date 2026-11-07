'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E3262D';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const DESC = 'lorem ipsum is simply dummy text of the printing and typesetting industry.,';

/** Red eyebrow label: full underline plus a shorter second line beneath it. */
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

/** three overlapping circles */
const ColorsIcon = () => (
  <Svg>
    <circle cx="22" cy="25" r="15" />
    <circle cx="42" cy="25" r="15" fill="rgba(227,38,45,0.12)" />
    <circle cx="32" cy="43" r="15" fill="rgba(227,38,45,0.12)" />
  </Svg>
);

/** group of people */
const LogosIcon = () => (
  <Svg>
    <circle cx="32" cy="17" r="8" />
    <path d="M16 52c0-9 7-15 16-15s16 6 16 15" />
    <circle cx="14" cy="26" r="6" />
    <path d="M3 50c0-7 4.5-12 11-12" />
    <circle cx="50" cy="26" r="6" />
    <path d="M61 50c0-7-4.5-12-11-12" />
  </Svg>
);

/** the numeral 5 in the display font */
const NumberIcon = () => (
  <Box
    aria-hidden
    sx={{
      width: '100%',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      fontFamily: DISPLAY,
      color: RED,
      fontSize: fluid(64, 38),
      lineHeight: 1,
    }}
  >
    5
  </Box>
);

/** geometric mesh / graphic */
const GraphicsIcon = () => (
  <Svg>
    <path d="M6 14l52 12-26 32z" />
    <path d="M6 14l26 18M58 26L32 32M32 58V32M20 20l12 12M44 24L32 32" />
    <path d="M6 14l26-6 26 18" />
  </Svg>
);

const FEATURES = [
  { title: 'Custom colors', Icon: ColorsIcon },
  { title: 'Team logos', Icon: LogosIcon },
  { title: 'Player names & numbers', Icon: NumberIcon },
  { title: 'Custom graphics', Icon: GraphicsIcon },
] as const;

function Feature({ item, index }: { item: (typeof FEATURES)[number]; index: number }) {
  const reduce = useReducedMotion();
  const { title, Icon } = item;

  return (
    <MotionBox
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
      sx={{ display: 'flex', alignItems: 'flex-start', columnGap: fluid(32, 16), minWidth: 0 }}
    >
      <Box sx={{ width: fluid(50, 38), height: fluid(50, 38), flexShrink: 0, mt: fluid(2, 2) }}>
        <Icon />
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Box
          component="h3"
          sx={{
            m: 0,
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: 1.15,
            color: '#0e0e10',
            fontSize: { xs: 19, sm: 20, lg: fluid(33, 15) },
          }}
        >
          {title}
        </Box>
        <Box
          component="p"
          sx={{
            m: 0,
            mt: fluid(8, 6),
            maxWidth: { xs: 420, lg: fluid(380, 220) },
            lineHeight: 1.14,
            color: '#5d5d60',
            fontSize: { xs: 15, lg: fluid(23, 13) },
          }}
        >
          {DESC}
        </Box>
      </Box>
    </MotionBox>
  );
}

export default function FullyCustomizable() {
  const reduce = useReducedMotion();

  return (
    <Box component="section" aria-labelledby="custom-title" sx={{ px: GUTTER }}>
      <Box sx={{ maxWidth: 2560, mx: 'auto' }}>
        {/* Heading */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EASE }}
          sx={{ textAlign: 'center' }}
        >
          <SectionLabel>Make it your</SectionLabel>

          <Box
            component="h2"
            id="custom-title"
            sx={{
              m: 0,
              mt: fluid(22, 14),
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: 1.05,
              letterSpacing: '0.005em',
              color: '#0a0a0a',
              fontSize: { xs: 'clamp(26px, 8vw, 42px)', md: fluid(72, 34) },
            }}
          >
            Fully customizable{' '}
            <Box component="span" sx={{ color: RED }}>
              uniforms
            </Box>
          </Box>
        </MotionBox>

        {/* Features: 4-up with dividers on desktop, 2-up on tablets, 1-up on phones */}
        <Box
          component="ul"
          sx={{
            m: 0,
            p: 0,
            mt: { xs: 5, lg: fluid(80, 44) },
            listStyle: 'none',
            display: { xs: 'grid', lg: 'flex' },
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))' },
            columnGap: { xs: 3, sm: 5 },
            rowGap: { xs: 4, sm: 5 },
            justifyContent: { lg: 'space-between' },
            alignItems: { lg: 'flex-start' },
          }}
        >
          {FEATURES.flatMap((f, i) => {
            const nodes = [
              <Box component="li" key={f.title} sx={{ listStyle: 'none', minWidth: 0 }}>
                <Feature item={f} index={i} />
              </Box>,
            ];
            if (i < FEATURES.length - 1) {
              nodes.push(
                <Box
                  component="li"
                  key={`${f.title}-divider`}
                  aria-hidden
                  sx={{
                    display: { xs: 'none', lg: 'block' },
                    listStyle: 'none',
                    width: '1px',
                    height: fluid(89, 64),
                    flexShrink: 0,
                    bgcolor: 'rgba(60,60,66,0.5)',
                  }}
                />,
              );
            }
            return nodes;
          })}
        </Box>
      </Box>
    </Box>
  );
}