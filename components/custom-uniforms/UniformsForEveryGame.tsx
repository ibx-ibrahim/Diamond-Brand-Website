'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E3262D';
const RED_GRADIENT = 'linear-gradient(180deg, #E0292F 0%, #A5141A 100%)';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Blurred stadium photo behind the panel. Not part of the files you sent, so add one here
 * (or change the path). Until then a matching blue-grey CSS backdrop is shown.
 */
const PANEL_BG_SRC = '/images/uniforms/games-bg.jpg';

const BODY = 'lorem ipsum is simply dummy text of the printing and typesetting industry.';

const FILTERS = [
  { id: 'all', label: 'All Uniforms' },
  { id: 'football', label: 'Football' },
  { id: '7v7', label: '7v7 Football' },
  { id: 'baseball', label: 'Baseball' },
  { id: 'softball', label: 'Softball' },
  { id: 'basketball', label: 'Basketball' },
  { id: 'soccer', label: 'Soccer' },
  { id: 'volleyball', label: 'Volleyball' },
  { id: 'cheerleading', label: 'Cheerleading' },
  { id: 'other', label: 'Other Sports' },
] as const;

type Uniform = { title: string; tag: string[]; href: string; src: string; alt: string };

const UNIFORMS: Uniform[] = [
  { title: 'Football', tag: ['football'], href: '/custom-uniforms/football', src: '/images/products/u1.png', alt: 'White and purple custom football jersey, number 23' },
  { title: '7v7 Football', tag: ['7v7'], href: '/custom-uniforms/7v7-football', src: '/images/products/u2.png', alt: 'Black and purple custom 7v7 football jersey, number 7' },
  { title: 'Flag Football', tag: ['football'], href: '/custom-uniforms/flag-football', src: '/images/products/u3.png', alt: 'White, black and purple custom flag football jersey' },
  { title: 'Baseball', tag: ['baseball'], href: '/custom-uniforms/baseball', src: '/images/products/u4.png', alt: 'Navy pinstripe custom baseball jersey' },
  { title: 'Softball', tag: ['softball'], href: '/custom-uniforms/softball', src: '/images/products/u5.png', alt: 'White and maroon custom softball jersey' },
  { title: 'Basketball', tag: ['basketball'], href: '/custom-uniforms/basketball', src: '/images/products/u6.png', alt: 'Black and gold custom basketball jersey' },
  { title: 'Soccer', tag: ['soccer'], href: '/custom-uniforms/soccer', src: '/images/products/u7.png', alt: 'Green and lime custom soccer jersey' },
  { title: 'Volleyball', tag: ['volleyball'], href: '/custom-uniforms/volleyball', src: '/images/products/u8.png', alt: 'Purple and white custom volleyball jersey' },
  { title: 'Cheerleading', tag: ['cheerleading'], href: '/custom-uniforms/cheerleading', src: '/images/products/u9.png', alt: 'Black and pink custom cheerleading top' },
  { title: 'Other Sports', tag: ['other'], href: '/custom-uniforms/other-sports', src: '/images/products/u10.png', alt: 'Black and orange custom multi-sport jersey' },
];

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

function UniformCard({ item }: { item: Uniform }) {
  const reduce = useReducedMotion();

  return (
    <MotionBox
      layout={reduce ? false : 'position'}
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: EASE }}
      sx={{ minWidth: 0 }}
    >
      <Box
        component="article"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: fluid(16, 14),
          bgcolor: 'rgba(212,216,224,0.55)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.3)',
          boxShadow: '0 12px 28px rgba(35,45,65,0.25), inset 0 1px 0 rgba(255,255,255,0.35)',
          transition: 'transform .45s cubic-bezier(.22,1,.36,1), box-shadow .45s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 44px rgba(35,45,65,0.35), inset 0 1px 0 rgba(255,255,255,0.4)',
          },
          '&:hover img': { transform: 'scale(1.04)' },
          '&:hover .view-arrow': { transform: 'translateX(4px)' },
        }}
      >
        {/* jersey photo (cropped to the top, like the design) */}
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            aspectRatio: '385 / 249',
            bgcolor: '#6d6d72',
          }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 600px) 92vw, (max-width: 900px) 46vw, (max-width: 1280px) 31vw, 18vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
              transition: 'transform .9s cubic-bezier(.22,1,.36,1)',
            }}
          />
        </Box>

        {/* copy */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            px: fluid(12, 14),
            pt: fluid(6, 10),
            pb: fluid(22, 16),
          }}
        >
          <Box
            component="h3"
            sx={{
              m: 0,
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.01em',
              lineHeight: 1.1,
              color: '#0e0e10',
              fontSize: { xs: 24, sm: 22, lg: fluid(36, 18) },
            }}
          >
            {item.title}
          </Box>

          <Box
            component="p"
            sx={{
              m: 0,
              mt: fluid(6, 6),
              fontWeight: 400,
              lineHeight: 1.18,
              color: '#5d6068',
              fontSize: { xs: 15, sm: 14, lg: fluid(23, 13) },
            }}
          >
            {BODY}
          </Box>

          <Box
            component={Link}
            href={item.href}
            sx={{
              mt: fluid(14, 12),
              display: 'inline-flex',
              alignItems: 'center',
              gap: fluid(14, 10),
              color: RED,
              textDecoration: 'none',
              fontWeight: 400,
              fontSize: { xs: 15, lg: fluid(22, 13.5) },
              '&:hover': { textDecoration: 'underline' },
              '&:focus-visible': { outline: `2px solid ${RED}`, outlineOffset: 3 },
            }}
          >
            View Details
            <ArrowForward
              className="view-arrow"
              sx={{ fontSize: '1em', transition: 'transform .3s cubic-bezier(.22,1,.36,1)' }}
            />
          </Box>

          <Box
            component={Link}
            href="/customize"
            sx={{
              mt: fluid(14, 12),
              display: 'inline-flex',
              alignItems: 'center',
              gap: fluid(6, 5),
              height: fluid(39, 34),
              px: fluid(12, 12),
              borderRadius: fluid(6, 6),
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: { xs: 13.5, lg: fluid(16, 12.5) },
              background: RED_GRADIENT,
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
              transition: 'filter .25s',
              '&:hover': { filter: 'brightness(1.12)' },
              '&:focus-visible': { outline: '3px solid #0a0a0a', outlineOffset: 3 },
            }}
          >
            Start Custom Order
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
              }}
            >
              <path d="M9 4.5L16.5 12 9 19.5" />
            </Box>
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default function UniformsForEveryGame() {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState<(typeof FILTERS)[number]['id']>('all');
  const [bgMissing, setBgMissing] = React.useState(false);

  const visible = React.useMemo(
    () => (active === 'all' ? UNIFORMS : UNIFORMS.filter((u) => u.tag.includes(active))),
    [active],
  );

  return (
    <Box
      component="section"
      aria-labelledby="games-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        color: '#0a0a0a',
        borderRadius: fluid(50, 28),
        pt: { xs: 6, lg: fluid(56, 44) },
        pb: { xs: 6, lg: fluid(78, 44) },
        px: GUTTER,
      }}
    >
      {/* ── panel background: blue-grey backdrop (CSS), photo on top when available ── */}
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, zIndex: -2 }}>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: [
              'linear-gradient(104deg, transparent 14%, rgba(255,255,255,0.13) 15.5%, rgba(255,255,255,0.13) 17.5%, transparent 19%)',
              'linear-gradient(76deg, transparent 80%, rgba(255,255,255,0.12) 81.5%, rgba(255,255,255,0.12) 84%, transparent 85.5%)',
              'radial-gradient(60% 40% at 50% 80%, rgba(40,52,78,0.35) 0%, transparent 75%)',
              'linear-gradient(180deg, #9aa2b0 0%, #8d95a5 45%, #7f889a 100%)',
            ].join(','),
          }}
        />
        {!bgMissing && (
          <Image
            src={PANEL_BG_SRC}
            alt=""
            fill
            sizes="100vw"
            onError={() => setBgMissing(true)}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        )}
      </Box>
      {/* grey-blue veil so text and cards stay readable over any photo */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          background: 'linear-gradient(180deg, rgba(150,158,176,0.5) 0%, rgba(122,131,150,0.45) 100%)',
        }}
      />

      <Box sx={{ maxWidth: 2560, mx: 'auto' }}>
        {/* Heading */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EASE }}
          sx={{ textAlign: 'center' }}
        >
          <SectionLabel>Explore our collection</SectionLabel>

          <Box
            component="h2"
            id="games-title"
            sx={{
              m: 0,
              mt: fluid(22, 14),
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: 1.05,
              letterSpacing: '0.005em',
              fontSize: { xs: 'clamp(26px, 8vw, 42px)', md: fluid(72, 36) },
            }}
          >
            Uniforms for{' '}
            <Box component="span" sx={{ color: RED }}>
              every game
            </Box>
          </Box>

          <Box
            component="p"
            sx={{
              m: '0 auto',
              mt: fluid(10, 10),
              maxWidth: { xs: 520, md: 'min(40vw, 920px)' },
              minWidth: { md: 420 },
              fontWeight: 400,
              lineHeight: 1.17,
              color: '#4a4e58',
              fontSize: { xs: 15, sm: 16, md: fluid(27, 15) },
            }}
          >
            Discover custom uniforms designed for every sport. Choose your style, customize your colors
            and represent your team with pride.
          </Box>
        </MotionBox>

        {/* Filter pills */}
        <Box
          role="group"
          aria-label="Filter uniforms by sport"
          sx={{
            mt: { xs: 4, lg: fluid(54, 30) },
            display: 'flex',
            flexWrap: { xs: 'wrap', lg: 'nowrap' },
            justifyContent: { xs: 'center', lg: 'space-between' },
            gap: { xs: 1.25, lg: fluid(12, 8) },
          }}
        >
          {FILTERS.map((f) => {
            const on = f.id === active;
            return (
              <Box
                key={f.id}
                component="button"
                type="button"
                aria-pressed={on}
                onClick={() => setActive(f.id)}
                sx={{
                  flex: '0 0 auto',
                  height: fluid(48, 40),
                  px: fluid(29, 16),
                  border: 0,
                  borderRadius: fluid(9, 8),
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontWeight: 400,
                  whiteSpace: 'nowrap',
                  fontSize: { xs: 14, lg: fluid(27, 13) },
                  color: on ? '#fff' : '#17171a',
                  background: on ? RED_GRADIENT : '#fff',
                  boxShadow: on
                    ? 'inset 0 1px 0 rgba(255,255,255,0.28), 0 8px 18px rgba(190,25,35,0.4)'
                    : '0 4px 12px rgba(30,40,60,0.16)',
                  transition: 'transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s, background .25s, color .25s',
                  '&:hover': { transform: 'translateY(-2px)' },
                  '&:focus-visible': { outline: '3px solid #0a0a0a', outlineOffset: 3 },
                }}
              >
                {f.label}
              </Box>
            );
          })}
        </Box>

        {/* Cards */}
        <Box
          sx={{
            mt: { xs: 4, lg: fluid(66, 36) },
            display: 'grid',
            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              sm: 'repeat(2, minmax(0, 1fr))',
              md: 'repeat(3, minmax(0, 1fr))',
              lg: 'repeat(5, minmax(0, 1fr))',
            },
            columnGap: { xs: 2, lg: fluid(29, 14) },
            rowGap: { xs: 2.5, lg: fluid(65, 22) },
            mx: { xs: 'auto', sm: 0 },
            maxWidth: { xs: 440, sm: 'none' },
          }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((u) => (
              <UniformCard key={u.title} item={u} />
            ))}
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
}