'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { motion, type Variants } from 'framer-motion';

import { fluid } from '@/lib/fluid';

export const MotionBox = motion.create(Box);

export const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
export const RED = '#E3262D';
export const RED_GRADIENT = 'linear-gradient(180deg, #E52C32 0%, #A5141A 100%)';
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Page greys. If your real greys differ, change them here and every section follows. */
export const HALFTONE_BG = '#d0d0d2'; // sections that carry the halftone texture
export const PAGE_GRAY = '#c0c0c1'; // page background (the grey that shows in the gaps between sections)

/**
 * ONE number controls the space between every section on the page
 * (about 135px at the 2560px frame, scaled down on smaller screens). Same idea as CustomUniformsPage.
 */
export const SECTION_GAP = fluid(135, 56);
/** Bottom corner radius of the hero (the texture band tucks in behind it). */
export const HERO_RADIUS = fluid(52, 28);

/** Viewport-proportional size from a 1920px design value, with a floor and a ceiling. */
export const vw = (designPx: number) => `${(designPx / 19.2).toFixed(3)}vw`;
export const cl = (minPx: number, designPx: number, maxPx?: number) =>
  `clamp(${minPx}px, ${vw(designPx)}, ${maxPx ?? Math.round(designPx * 1.334)}px)`;

export const stack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};
export const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

/* ── Red eyebrow label with the double underline ─────────────── */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        position: 'relative',
        display: 'inline-block',
        px: '6px',
        pb: fluid(6, 4),
        color: RED,
        textAlign: 'center',
        fontWeight: 400,
        fontSize: fluid(16, 12),
        lineHeight: 1.2,
        textTransform: 'uppercase',
        letterSpacing: '0.01em',
        borderBottom: `1px solid ${RED}`,
        '&::after': {
          content: '""',
          position: 'absolute',
          left: fluid(14, 10),
          right: fluid(14, 10),
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

/* ── Red gradient pill used inside headings ──────────────────── */
export function HeadingPill({
  children,
  height,
}: {
  children: React.ReactNode;
  /** a CSS length (applies from md up) or a responsive object */
  height: string | Record<string, string>;
}) {
  const h = typeof height === 'string' ? { md: height } : height;
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        height: { xs: 'auto', ...h },
        mt: fluid(8, 6),
        px: fluid(19, 12),
        py: { xs: 0.5, md: 0 },
        pb: { md: '0.03em' },
        color: '#fff',
        textShadow: 'none',
        borderRadius: fluid(14, 10),
        background: RED_GRADIENT,
        boxShadow:
          'inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -8px 20px rgba(90,0,8,0.35), 0 14px 40px rgba(220,30,40,0.3)',
      }}
    >
      {children}
    </Box>
  );
}

/* ── Outline icons (64x64 grid, no fill) ─────────────────────── */
type IconBaseProps = { stroke?: string; strokeWidth?: number; children: React.ReactNode };
export type GlyphProps = { stroke?: string; strokeWidth?: number };

function OutlineIcon({ children, stroke = RED, strokeWidth = 2.6 }: IconBaseProps) {
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
        stroke,
        strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        overflow: 'visible',
      }}
    >
      {children}
    </Box>
  );
}

/** storefront with striped awning */
export const StoreIcon = (p: GlyphProps) => (
  <OutlineIcon {...p}>
    <path d="M10 6h44l8 18H2z" />
    <path d="M25 6l-4 18M39 6l4 18" />
    <path d="M2 24a7.5 7 0 0 0 15 0a7.5 7 0 0 0 15 0a7.5 7 0 0 0 15 0a7.5 7 0 0 0 15 0" />
    <path d="M8 27v29h48V27" />
    <path d="M18 56V40h28v16M32 40v16" />
  </OutlineIcon>
);

/** t-shirt */
export const ShirtIcon = (p: GlyphProps) => (
  <OutlineIcon {...p}>
    <path d="M22 6L4 15l7 15 8-4v32h26V26l8 4 7-15-18-9c-1.5 5-8 8-10 8s-8.5-3-10-8z" />
  </OutlineIcon>
);

/** shopping cart */
export const CartIcon = (p: GlyphProps) => (
  <OutlineIcon {...p}>
    <path d="M2 8h9l7 31h33l8-24H15" />
    <circle cx="23" cy="52" r="3.4" />
    <circle cx="46" cy="52" r="3.4" />
  </OutlineIcon>
);

/** shipping box */
export const BoxIcon = (p: GlyphProps) => (
  <OutlineIcon {...p}>
    <path d="M32 4l26 14v30L32 62 6 48V18z" />
    <path d="M6 18l26 14 26-14M32 32v30" />
    <path d="M19 11l26 14v9" />
  </OutlineIcon>
);

/** document with lines */
export const DocIcon = (p: GlyphProps) => (
  <OutlineIcon {...p}>
    <path d="M16 4h26l12 12v44H16z" />
    <path d="M42 4v12h12" />
    <path d="M24 34h20M24 44h12" />
  </OutlineIcon>
);

/** desktop monitor */
export const MonitorIcon = (p: GlyphProps) => (
  <OutlineIcon {...p}>
    <path d="M4 8h56v36H4z" />
    <path d="M32 44v10M20 56h24" />
  </OutlineIcon>
);