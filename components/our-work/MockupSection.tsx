'use client';

import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Contact details and destinations: edit these in one place */
const PHONE_DISPLAY = '123-45-678';
const PHONE_TEL = 'tel:+12345678';
const WHATSAPP_URL = 'https://wa.me/12345678';
const EMAIL = 'diamondbrand@gmail.com';
const QUOTE_HREF = '/start-an-order';

/** White eyebrow label: full underline plus a shorter second line beneath it. */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        position: 'relative',
        display: 'inline-block',
        minWidth: fluid(208, 150),
        px: fluid(4, 4),
        pb: fluid(7, 5),
        color: '#fff',
        textAlign: 'center',
        fontWeight: 400,
        fontSize: fluid(20, 12.5),
        lineHeight: 1.2,
        textTransform: 'uppercase',
        letterSpacing: '0.01em',
        borderBottom: '1px solid rgba(255,255,255,0.9)',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: '18%',
          right: '18%',
          bottom: fluid(-5, -4),
          height: '1px',
          bgcolor: 'rgba(255,255,255,0.9)',
        },
      }}
    >
      {children}
    </Box>
  );
}

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
        stroke: '#fff',
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

const ClockIcon = () => (
  <Svg>
    <circle cx="32" cy="32" r="29" />
    <path d="M30 14v20l8 8" />
  </Svg>
);

const ChatIcon = () => (
  <Svg>
    <path d="M32 4C16.500 4 4 15.500 4 30c0 5.500 1.800 10.500 5 14.600L6 58l13-5c4 1.800 8.300 2.800 13 2.800 15.500 0 28-11.500 28-26S47.500 4 32 4z" />
    <circle cx="20" cy="30" r="2" fill="#fff" />
    <circle cx="32" cy="30" r="2" fill="#fff" />
    <circle cx="44" cy="30" r="2" fill="#fff" />
  </Svg>
);

const MailIcon = () => (
  <Svg>
    <rect x="3" y="10" width="58" height="44" rx="3" />
    <path d="M3 13l29 24 29-24" />
  </Svg>
);

type Card = {
  title: string;
  sub: string;
  Icon: () => React.ReactElement;
  href?: string;
  external?: boolean;
};

const CARDS: Card[] = [
  { title: 'Reply Within 12 Hours', sub: 'Mon–Sat, 9 AM–10 PM (USA)', Icon: ClockIcon },
  { title: 'WhatsApp Us', sub: PHONE_DISPLAY, Icon: ChatIcon, href: WHATSAPP_URL, external: true },
  { title: 'Email Us', sub: EMAIL, Icon: MailIcon, href: `mailto:${EMAIL}` },
];

function ContactCard({ card, index }: { card: Card; index: number }) {
  const reduce = useReducedMotion();
  const { title, sub, Icon, href, external } = card;

  const body = (
    <>
      <Box sx={{ width: fluid(64, 42), height: fluid(64, 42) }}>
        <Icon />
      </Box>
      <Box
        sx={{
          mt: fluid(30, 16),
          fontFamily: DISPLAY,
          fontWeight: 400,
          lineHeight: 1.1,
          color: '#fff',
          fontSize: { xs: 24, sm: 20, lg: fluid(38, 17) },
        }}
      >
        {title}
      </Box>
      <Box
        sx={{
          mt: fluid(4, 4),
          lineHeight: 1.2,
          color: 'rgba(255,255,255,0.68)',
          fontSize: { xs: 15, sm: 14, lg: fluid(22, 12.5) },
          overflowWrap: 'anywhere',
        }}
      >
        {sub}
      </Box>
    </>
  );

  const cardSx = {
    height: '100%',
    minHeight: { xs: 170, lg: 0 },
    aspectRatio: { lg: '466 / 238' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    px: fluid(20, 14),
    borderRadius: fluid(36, 24),
    color: '#fff',
    textDecoration: 'none',
    background: 'linear-gradient(180deg, rgba(110,16,22,0.5) 0%, rgba(70,8,12,0.48) 100%)',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 16px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.14)',
    transition: 'transform .4s cubic-bezier(.22,1,.36,1), border-color .3s, box-shadow .3s',
    '&:hover': href
      ? {
          transform: 'translateY(-5px)',
          borderColor: 'rgba(255,255,255,0.28)',
          boxShadow: '0 22px 52px rgba(0,0,0,0.5), 0 0 40px rgba(200,30,36,0.25), inset 0 1px 0 rgba(255,255,255,0.2)',
        }
      : {},
    '&:focus-visible': { outline: '3px solid #fff', outlineOffset: 3 },
  } as const;

  return (
    <MotionBox
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
      sx={{ minWidth: 0 }}
    >
      {href ? (
        <Box
          component="a"
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          sx={cardSx}
        >
          {body}
        </Box>
      ) : (
        <Box sx={cardSx}>{body}</Box>
      )}
    </MotionBox>
  );
}

export default function MockupSection() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="mockup-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        bgcolor: '#000',
        color: '#fff',
        px: GUTTER,
        pt: { xs: 7, lg: fluid(98, 56) },
        pb: { xs: 7, lg: fluid(54, 48) },
      }}
    >
      {/* red light spilling from the top centre */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          background: [
            'radial-gradient(ellipse 52% 62% at 50% 0%, #c3272b 0%, #8a1519 30%, #4a0b0e 55%, rgba(20,3,4,0.6) 78%, transparent 100%)',
            'radial-gradient(ellipse 70% 40% at 50% 62%, rgba(110,14,18,0.28) 0%, transparent 70%)',
            '#000',
          ].join(','),
        }}
      />

      <Box sx={{ maxWidth: 2560, mx: 'auto' }}>
        {/* heading */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: EASE }}
          sx={{ textAlign: 'center' }}
        >
          <SectionLabel>Free design mockup</SectionLabel>

          <Box
            component="h2"
            id="mockup-title"
            sx={{
              m: 0,
              mt: fluid(14, 12),
              fontFamily: DISPLAY,
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '0.005em',
              textShadow: '0 4px 30px rgba(0,0,0,0.4)',
              fontSize: { xs: 'clamp(28px, 8.6vw, 46px)', md: fluid(72, 30) },
            }}
          >
            Want Something Like This?
          </Box>

          <Box
            component="p"
            sx={{
              m: '0 auto',
              mt: fluid(14, 10),
              maxWidth: { xs: 520, md: 'min(62vw, 1560px)' },
              fontWeight: 400,
              lineHeight: 1.25,
              color: 'rgba(255,255,255,0.62)',
              fontSize: { xs: 15, sm: 16, md: fluid(28, 14.5) },
            }}
          >
            Send us a photo from this gallery and your colors. We&apos;ll reply within 12 hours with a free
            mockup of your version.
          </Box>
        </MotionBox>

        {/* three contact cards */}
        <Box
          sx={{
            mt: { xs: 4, lg: fluid(70, 36) },
            mx: 'auto',
            maxWidth: { xs: 440, md: 'none', lg: fluid(1514, 640) },
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'repeat(3, minmax(0, 1fr))' },
            columnGap: { xs: 2, md: 2, lg: fluid(58, 16) },
            rowGap: 2,
          }}
        >
          {CARDS.map((c, i) => (
            <ContactCard key={c.title} card={c} index={i} />
          ))}
        </Box>

        {/* quote pill bar */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
          sx={{
            mt: { xs: 4, lg: fluid(90, 40) },
            mx: 'auto',
            width: '100%',
            maxWidth: { xs: 520, md: 'max(62.9vw, 620px)', lg: fluid(1610, 620) },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'stretch', md: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 2, md: 2 },
            p: fluid(12, 10),
            pl: { xs: 3, md: fluid(32, 22) },
            borderRadius: { xs: '30px', md: '999px' },
            background: 'linear-gradient(90deg, #a31319 0%, #8d1116 55%, #9c1419 100%)',
            boxShadow:
              '0 20px 54px rgba(150,15,22,0.38), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -2px 6px rgba(60,4,8,0.35)',
          }}
        >
          <Box
            component="p"
            sx={{
              m: 0,
              fontFamily: DISPLAY,
              fontWeight: 400,
              lineHeight: 1.1,
              textAlign: { xs: 'center', md: 'left' },
              fontSize: { xs: 'clamp(22px, 6.4vw, 30px)', md: fluid(50, 19) },
              textShadow: '0 2px 14px rgba(0,0,0,0.3)',
            }}
          >
            Let&apos;s Talk About Your Order
          </Box>

          <MotionBox whileHover={reduce ? undefined : { y: -2 }} whileTap={{ scale: 0.98 }} sx={{ flexShrink: 0 }}>
            <Box
              component={Link}
              href={QUOTE_HREF}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: fluid(88, 54),
                px: fluid(30, 22),
                borderRadius: {
                  xs: '22px',
                  md: `${fluid(14, 10)} 999px 999px ${fluid(14, 10)}`,
                },
                bgcolor: '#06080d',
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                fontWeight: 400,
                whiteSpace: 'nowrap',
                fontSize: { xs: 15, md: fluid(28, 13) },
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                transition: 'background-color .3s, color .3s',
                '&:hover': { bgcolor: '#10131b', color: '#fff' },
                '&:focus-visible': { outline: '3px solid #fff', outlineOffset: 3 },
              }}
            >
              Request a free quote
            </Box>
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  );
}