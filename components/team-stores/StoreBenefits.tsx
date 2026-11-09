'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E3262D';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Halftone texture (bg-2_1.png). Lives at /public/images/banners/bg-2_1.png */
const BG_SRC = '/images/banners/bg-2.png';

const DESC = 'lorem ipsum is simply dummy text of the printing and typesetting industry.,';

/** Red eyebrow label: full underline plus a shorter second line beneath it (left aligned here). */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        position: 'relative',
        display: 'inline-block',
        px: fluid(2, 2),
        pb: fluid(7, 5),
        color: RED,
        fontWeight: 400,
        fontSize: fluid(20, 13),
        lineHeight: 1.2,
        textTransform: 'uppercase',
        letterSpacing: '0.01em',
        borderBottom: `1px solid ${RED}`,
        '&::after': {
          content: '""',
          position: 'absolute',
          left: fluid(19, 12),
          right: '30%',
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

/** shop front with an awning */
const StoreIcon = () => (
  <Svg>
    <path d="M8 22l5-14h38l5 14" />
    <path d="M8 22c0 4 3.500 6 7 6s7-2 7-6c0 4 3.500 6 7 6s7-2 7-6c0 4 3.500 6 7 6s7-2 7-6c0 4 3.500 6 7 6" />
    <path d="M12 28v26h40V28" />
    <path d="M12 40h18M30 40v14M38 38h8v16h-8z" />
  </Svg>
);

/** t-shirt */
const ShirtIcon = () => (
  <Svg>
    <path d="M22 6L4 15l7 15 8-4v32h26V26l8 4 7-15-18-9c-1.5 5-8 8-10 8s-8.5-3-10-8z" />
  </Svg>
);

/** shopping cart */
const CartIcon = () => (
  <Svg>
    <path d="M3 8h9l8 33h34l6-26H15" />
    <circle cx="26" cy="54" r="3.4" fill={RED} />
    <circle cx="48" cy="54" r="3.4" fill={RED} />
  </Svg>
);

/** shipping box */
const BoxIcon = () => (
  <Svg>
    <path d="M32 4l26 14v30L32 62 6 48V18z" />
    <path d="M6 18l26 14 26-14M32 32v30" />
    <path d="M19 11l26 14v9" />
  </Svg>
);

const BENEFITS = [
  { title: 'Custom store branding', Icon: StoreIcon },
  { title: 'Tailored product lineup', Icon: ShirtIcon },
  { title: 'Easy online ordering', Icon: CartIcon },
  { title: 'Order fulfillment', Icon: BoxIcon },
] as const;

function Benefit({ item, index }: { item: (typeof BENEFITS)[number]; index: number }) {
  const reduce = useReducedMotion();
  const { title, Icon } = item;

  return (
    <MotionBox
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
      sx={{ display: 'flex', alignItems: 'flex-start', columnGap: fluid(34, 16), minWidth: 0 }}
    >
      <Box sx={{ width: fluid(66, 42), height: fluid(66, 42), flexShrink: 0, mt: fluid(4, 2) }}>
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
            fontSize: { xs: 19, sm: 20, lg: fluid(32, 14.5) },
          }}
        >
          {title}
        </Box>
        <Box
          component="p"
          sx={{
            m: 0,
            mt: fluid(10, 6),
            maxWidth: { xs: 420, lg: fluid(400, 200) },
            lineHeight: 1.15,
            color: '#5d5d60',
            fontSize: { xs: 15, lg: fluid(22, 12.5) },
          }}
        >
          {DESC}
        </Box>
      </Box>
    </MotionBox>
  );
}

/**
 * Full-width textured band. In the design it sits directly under the page hero and directly above the
 * next dark section with NO gap, so it carries its own top and bottom padding.
 * If your page wrapper adds a flex gap around sections, cancel it for this one with the `sx` prop, e.g.
 *   <StoreBenefits sx={{ my: 'calc(-1 * var(--section-gap))' }} />
 */
export default function StoreBenefits({ sx }: { sx?: SxProps<Theme> }) {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="store-benefits-title"
      sx={[
        {
          position: 'relative',
          overflow: 'hidden',
          bgcolor: '#DEDEDF',
          backgroundImage: `
            linear-gradient(
                rgba(225, 225, 226, 0.68),
                rgba(225, 225, 226, 0.68)
            ),
            url(${BG_SRC})
            `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#0a0a0a',
          px: GUTTER,
          pt: { xs: 8, lg: fluid(135, 56) },
          pb: { xs: 8, lg: fluid(177, 56) },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box sx={{ maxWidth: 2560, mx: 'auto' }}>
        {/* ── heading + side paragraph ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: `minmax(0, 1fr) ${fluid(948, 360)}` },
            columnGap: fluid(60, 32),
            rowGap: { xs: 3, lg: 0 },
            alignItems: 'center',
          }}
        >
          <MotionBox
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, ease: EASE }}
            sx={{ minWidth: 0 }}
          >
            <SectionLabel>Built around your team</SectionLabel>

            <Box
              component="h2"
              id="store-benefits-title"
              sx={{
                m: 0,
                mt: fluid(22, 14),
                fontFamily: DISPLAY,
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.005em',
                lineHeight: 1.08,
                fontSize: { xs: 'clamp(28px, 8.4vw, 48px)', md: fluid(64, 30) },
              }}
            >
              <Box component="span" sx={{ display: 'block', color: '#06060a' }}>
                One team. One store.
              </Box>
              <Box component="span" sx={{ display: 'block', color: RED }}>
                Endless possibilities.
              </Box>
            </Box>
          </MotionBox>

          <MotionBox
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
            sx={{
              position: 'relative',
              minWidth: 0,
              pl: fluid(26, 18),
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '4%',
                bottom: '4%',
                width: fluid(3, 3),
                borderRadius: 3,
                bgcolor: RED,
              },
            }}
          >
            <Box
              component="p"
              sx={{
                m: 0,
                lineHeight: 1.17,
                color: '#5a5a5d',
                fontSize: { xs: 15, sm: 16, lg: fluid(24, 13.5) },
              }}
            >
              Bring your team together with a custom online store designed around your identity. From
              jerseys and hoodies to everyday team apparel, make it easy for players, parents, and
              supporters to find and order their gear.
            </Box>
          </MotionBox>
        </Box>

        {/* ── four benefits: 4-up with dividers on desktop, 2-up on tablets, 1-up on phones ── */}
        <Box
          component="ul"
          sx={{
            m: 0,
            p: 0,
            mt: { xs: 5, lg: fluid(76, 40) },
            listStyle: 'none',
            display: { xs: 'grid', lg: 'flex' },
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))' },
            columnGap: { xs: 3, sm: 5 },
            rowGap: { xs: 4, sm: 5 },
            justifyContent: { lg: 'space-between' },
            alignItems: { lg: 'flex-start' },
          }}
        >
          {BENEFITS.flatMap((b, i) => {
            const nodes = [
              <Box component="li" key={b.title} sx={{ listStyle: 'none', minWidth: 0 }}>
                <Benefit item={b} index={i} />
              </Box>,
            ];
            if (i < BENEFITS.length - 1) {
              nodes.push(
                <Box
                  component="li"
                  key={`${b.title}-divider`}
                  aria-hidden
                  sx={{
                    display: { xs: 'none', lg: 'block' },
                    listStyle: 'none',
                    width: '1px',
                    height: fluid(90, 60),
                    flexShrink: 0,
                    bgcolor: 'rgba(60,60,66,0.45)',
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