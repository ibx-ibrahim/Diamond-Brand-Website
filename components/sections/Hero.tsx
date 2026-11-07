'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowCircleRightOutlined from '@mui/icons-material/ArrowCircleRightOutlined';
import ArchitectureOutlined from '@mui/icons-material/ArchitectureOutlined';
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined';
import VerifiedOutlined from '@mui/icons-material/VerifiedOutlined';
import CorporateFareOutlined from '@mui/icons-material/CorporateFareOutlined';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Montserrat", "Inter", sans-serif';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const RED_GRADIENT = 'linear-gradient(180deg, #E52C32 0%, #A5141A 100%)';
const RED_BUTTON_SHADOW = 'inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 28px rgba(200,25,35,0.4)';

/* ──────────────────────────────────────────────────────────────
   Assets: export each shirt from the design as a transparent PNG
   (hanger included) into /public/shirts/ using these names.
   ────────────────────────────────────────────────────────────── */
const SHIRTS = [
  { src: '/images/hero/baseball-jersey.png', alt: 'White and navy baseball jersey, number 12' },
  { src: '/images/hero/football-jersey.png', alt: 'Black and red football jersey, number 23' },
  { src: '/images/hero/basketball-jersey.png', alt: 'Black and gold basketball jersey, number 10' },
  { src: '/images/hero/safety-shirt.png', alt: 'High-visibility long-sleeve work shirt' },
  { src: '/images/hero/purple-jersey.png', alt: 'Black and purple jersey, number 7' },
  { src: '/images/hero/pink-jersey.png', alt: 'Black and pink volleyball jersey, number 8' },
  { src: '/images/hero/red-hoodie.png', alt: 'Black and red custom hoodie' },
] as const;

const FEATURES = [
  { label: 'Fully custom designs', Icon: ArchitectureOutlined },
  { label: 'Work directly with a designer', Icon: PeopleAltOutlined },
  { label: 'High quality apparel', Icon: VerifiedOutlined },
  { label: 'Teams, schools & businesses', Icon: CorporateFareOutlined },
] as const;

/* ── Motion variants ─────────────────────────────────────────── */
const stack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

const pillIn: Variants = {
  hidden: { opacity: 0, scale: 0.9, x: -24 },
  show: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};

const shirtsRow: Variants = { hidden: {}, show: {} };

/** Shirts fall from above on a spring: all together, no stagger, no bounce. */
const drop: Variants = {
  hidden: { y: -320, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 24, // overdamped: settles with no overshoot
      mass: 1,
      delay: 0.6,
      opacity: { duration: 0.35, delay: 0.6 },
    },
  },
};

/* ═══════════════════════════════════════════════════════════════
   Backdrop: your own stadium image
   Put the file at /public/stadium-bg.jpg (use 2560x1440 or larger)
   ═══════════════════════════════════════════════════════════════ */
function Backdrop() {
  return (
    <Box aria-hidden sx={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
      <Image
        src="/images/hero/stadium.jpg"
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      {/* soft fade so the header stays readable; delete if your image already handles it */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 22%)',
        }}
      />
    </Box>
  );
}

/* ═══════════════════════════════════════════════════════════════
   One hanging shirt: spring drop-in only
   ═══════════════════════════════════════════════════════════════ */
function Shirt({ shirt, index }: { shirt: (typeof SHIRTS)[number]; index: number }) {
  const reduce = useReducedMotion();

  return (
    <MotionBox
      variants={reduce ? undefined : drop}
      sx={{
        flex: '0 0 auto',
        width: { xs: '44vw', sm: '30vw', lg: '13.2vw' },
        maxWidth: 338,
        scrollSnapAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* string */}
      <Box
        aria-hidden
        sx={{
          width: '1px',
          height: fluid(52, 20),
          background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.4))',
        }}
      />
      <Image
        src={shirt.src}
        alt={shirt.alt}
        width={330}
        height={440}
        priority={index < 4}
        sizes="(max-width: 600px) 44vw, (max-width: 1280px) 30vw, 13.2vw"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          filter: 'drop-shadow(0 22px 28px rgba(0,0,0,0.55))',
        }}
      />
    </MotionBox>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Hero
   ═══════════════════════════════════════════════════════════════ */
export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="hero-title"
      sx={{
        position: 'relative',
        minHeight: 'max(100svh, 780px)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        bgcolor: '#04070C',
        color: '#fff',
      }}
    >
      <Backdrop />

      {/* ── Copy ───────────────────────────────────── */}
      <MotionBox
        variants={stack}
        initial="hidden"
        animate="show"
        sx={{
          position: 'relative',
          zIndex: 2,
          px: GUTTER,
          pt: { xs: 18, sm: 20, lg: fluid(310, 190) },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Badge */}
        <MotionBox
          variants={rise}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            height: fluid(40, 30),
            px: fluid(14, 12),
            borderRadius: fluid(5, 4),
            border: '1px solid #C4202A',
            bgcolor: 'rgba(170,20,30,0.14)',
            boxShadow: '0 0 24px rgba(210,30,40,0.18)',
            fontWeight: 500,
            fontSize: fluid(20, 11.5),
            textTransform: 'uppercase',
            letterSpacing: '0.01em',
            whiteSpace: 'nowrap',
          }}
        >
          Custom sports apparel &amp; uniforms
        </MotionBox>

        {/* Headline */}
        <Box id="hero-title" role="heading" aria-level={1} sx={{ width: '100%' }}>
          <MotionBox
            variants={stack}
            sx={{
              mt: fluid(22, 16),
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 1, md: fluid(10) },
              fontFamily: DISPLAY,
              fontWeight: 900,
              fontSize: { xs: 'clamp(30px, 10.5vw, 56px)', md: fluid(128, 46) },
              lineHeight: 1,
              letterSpacing: '-0.012em',
              textTransform: 'uppercase',
              textShadow: '0 4px 30px rgba(0,0,0,0.45)',
            }}
          >
            <MotionBox variants={rise} sx={{ display: "block" }}>
              Your team.
            </MotionBox>

            <MotionBox
              variants={pillIn}
              sx={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                height: { xs: 'auto', md: fluid(116, 62) },
                px: fluid(30, 14),
                py: { xs: 0.5, md: 0 },
                pb: { md: '0.03em' },
                borderRadius: fluid(16, 10),
                background: RED_GRADIENT,
                boxShadow:
                  'inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -10px 24px rgba(90,0,8,0.35), 0 18px 60px rgba(220,30,40,0.35)',
              }}
            >
              {/* slow light sweep */}
              {!reduce && (
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    overflow: 'hidden',
                    borderRadius: 'inherit',
                    pointerEvents: 'none',
                  }}
                >
                  <MotionBox
                    initial={{ x: '-130%' }}
                    animate={{ x: '130%' }}
                    transition={{ duration: 1.6, delay: 2.4, repeat: Infinity, repeatDelay: 5.5, ease: 'easeInOut' }}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      width: '38%',
                      background:
                        'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                      transform: 'skewX(-18deg)',
                    }}
                  />
                </Box>
              )}
              <Box component="span" sx={{ position: 'relative' }}>
                Your identity.
              </Box>
            </MotionBox>
          </MotionBox>
        </Box>

        {/* Tagline */}
        <MotionBox
          variants={rise}
          sx={{
            m: 0,
            mt: fluid(30, 18),
            maxWidth: 720,
            fontWeight: 400,
            fontSize: fluid(32, 16),
            lineHeight: 1.3,
            color: 'rgba(255,255,255,0.94)',
            textShadow: '0 2px 18px rgba(0,0,0,0.5)',
          }}
        >
          Custom uniforms. Personalized apparel. Built around your team.
        </MotionBox>

        {/* CTAs */}
        <MotionBox
          variants={rise}
          sx={{
            mt: fluid(36, 22),
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: fluid(27, 12),
          }}
        >
          <MotionBox whileHover={reduce ? undefined : { y: -3 }} whileTap={{ scale: 0.97 }}>
            <Button
              component={Link}
              href="/start-an-order"
              endIcon={<ArrowCircleRightOutlined className="cta-icon" sx={{ fontSize: `${fluid(30, 20)} !important` }} />}
              sx={{
                height: fluid(66, 48),
                px: fluid(24, 20),
                borderRadius: fluid(9, 7),
                color: '#fff',
                fontWeight: 500,
                fontSize: fluid(28, 15),
                textTransform: 'uppercase',
                background: RED_GRADIENT,
                boxShadow: RED_BUTTON_SHADOW,
                transition: 'filter .25s, box-shadow .25s',
                '&:hover': {
                  background: RED_GRADIENT,
                  filter: 'brightness(1.1)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 16px 38px rgba(225,35,45,0.55)',
                },
                '& .MuiButton-endIcon': { ml: fluid(10, 8) },
                '& .cta-icon': { transition: 'transform .3s cubic-bezier(.22,1,.36,1)' },
                '&:hover .cta-icon': { transform: 'translateX(4px)' },
              }}
            >
              Start your order
            </Button>
          </MotionBox>

          <MotionBox whileHover={reduce ? undefined : { y: -3 }} whileTap={{ scale: 0.97 }}>
            <Button
              component={Link}
              href="/our-work"
              sx={{
                height: fluid(66, 48),
                px: fluid(24, 20),
                borderRadius: fluid(9, 7),
                color: '#fff',
                fontWeight: 500,
                fontSize: fluid(28, 15),
                textTransform: 'uppercase',
                border: '1px solid rgba(255,255,255,0.55)',
                bgcolor: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(8px)',
                transition: 'background-color .25s, border-color .25s',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.14)', borderColor: '#fff' },
              }}
            >
              Explore our work
            </Button>
          </MotionBox>
        </MotionBox>
      </MotionBox>

      {/* ── Hanging shirts ─────────────────────────── */}
      <MotionBox
        variants={shirtsRow}
        initial="hidden"
        animate="show"
        sx={{
          position: 'relative',
          zIndex: 2,
          flex: 1,
          mt: fluid(14, 10),
          px: { xs: 2, lg: '3.1vw' },
          pb: 1,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: { xs: 'flex-start', lg: 'space-between' },
          gap: { xs: 2, lg: 0 },
          overflowX: { xs: 'auto', lg: 'visible' },
          overflowY: { xs: 'hidden', lg: 'visible' },
          scrollSnapType: { xs: 'x mandatory', lg: 'none' },
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {SHIRTS.map((shirt, i) => (
          <Shirt key={shirt.src} shirt={shirt} index={i} />
        ))}
      </MotionBox>

      {/* ── Feature bar ────────────────────────────── */}
      <MotionBox
        initial={reduce ? false : { y: 70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.3, ease: EASE }}
        sx={{
          position: 'relative',
          zIndex: 3,
          mt: fluid(40, 24),
          minHeight: fluid(90, 64),
          px: GUTTER,
          py: { xs: 2.5, md: 0 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: `${fluid(32, 20)} ${fluid(32, 20)} 0 0`,
          background: 'linear-gradient(180deg, rgba(220,220,222,0.92), rgba(190,190,193,0.9))',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 -14px 50px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.5)',
          color: '#151515',
        }}
      >
        <Box
          component="ul"
          sx={{
            m: 0,
            p: 0,
            listStyle: 'none',
            width: { xs: '100%', md: 'auto' },
            display: { xs: 'grid', md: 'flex' },
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: fluid(42, 20),
            rowGap: 2,
          }}
        >
          {FEATURES.map(({ label, Icon }, i) => (
            <Box
              component="li"
              key={label}
              sx={{ display: 'flex', alignItems: 'center', columnGap: fluid(42, 20) }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: fluid(12, 8),
                  fontWeight: 500,
                  fontSize: fluid(26, 12.5),
                  textTransform: 'uppercase',
                  whiteSpace: { xs: 'normal', md: 'nowrap' },
                  lineHeight: 1.2,
                  '& svg': { fontSize: fluid(46, 26), strokeWidth: 0.3 },
                }}
              >
                <Icon />
                {label}
              </Box>
              {i < FEATURES.length - 1 && (
                <Box
                  aria-hidden
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    width: '1.5px',
                    height: fluid(44, 26),
                    bgcolor: 'rgba(0,0,0,0.75)',
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </MotionBox>
    </Box>
  );
}