'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E3262D';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const BODY_COPY = 'lorem ipsum is simply dummy text of the printing and typesetting industry.';

type Category = {
  title: string;
  href: string;
  src: string;
  alt: string;
  /** keeps the subject framed the way the design crops it */
  position: string;
};

const CATEGORIES: Category[] = [
  { title: 'Football', href: '/custom-uniforms/football', src: '/images/categories/cat-1.png', alt: 'Player kicking a ball in an empty stadium', position: '50% 38%' },
  { title: 'Baseball', href: '/custom-uniforms/baseball', src: '/images/categories/cat-2.png', alt: 'Two baseball players celebrating in pinstripe uniforms', position: '50% 28%' },
  { title: 'Football', href: '/custom-uniforms/american-football', src: '/images/categories/cat-4.png', alt: 'American football player running with the ball', position: '50% 50%' },
  { title: 'Basketball', href: '/custom-uniforms/basketball', src: '/images/categories/cat-3.png', alt: 'Two basketball players competing for the ball', position: '50% 50%' },
  { title: 'Wrestling', href: '/custom-uniforms/wrestling', src: '/images/categories/cat-5.png', alt: 'Two fighters sparring inside a lit arena cage', position: '50% 55%' },
  { title: 'Lacrosse', href: '/custom-uniforms/lacrosse', src: '/images/categories/cat-6.png', alt: 'Goalkeeper in an orange jersey on the field', position: '50% 22%' },
  { title: 'Cricket', href: '/custom-uniforms/cricket', src: '/images/categories/cat-7.png', alt: 'Cricket batter running in front of the crowd', position: '50% 50%' },
  { title: 'Custom Apparel', href: '/custom-apparel', src: '/images/categories/cat-8.png', alt: 'Custom red and black sublimated jersey on a hanger', position: '50% 50%' },
];

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

function CategoryCard({ item, priority }: { item: Category; priority: boolean }) {
  const reduce = useReducedMotion();

  return (
    <MotionBox
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE }}
      sx={{ minWidth: 0 }}
    >
      <Box
        component={Link}
        href={item.href}
        aria-label={`${item.title}: view uniforms`}
        sx={{
          position: 'relative',
          display: 'block',
          aspectRatio: { xs: '542 / 440', sm: '542 / 420' },
          overflow: 'hidden',
          borderRadius: fluid(20, 14),
          border: '1px solid rgba(214,38,46,0.85)',
          bgcolor: '#0b0d12',
          color: '#fff',
          textDecoration: 'none',
          boxShadow: '0 14px 34px rgba(0,0,0,0.18)',
          transition: 'border-color .3s, box-shadow .3s',
          '&:hover': {
            borderColor: '#F0343B',
            boxShadow: '0 18px 44px rgba(190,25,35,0.3)',
          },
          '&:hover img': { transform: 'scale(1.05)' },
          '&:hover .view-btn svg': { transform: 'translateX(2px)' },
          '&:focus-visible': { outline: '3px solid #fff', outlineOffset: 3 },
        }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          priority={priority}
          sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 25vw"
          style={{
            objectFit: 'cover',
            objectPosition: item.position,
            transition: 'transform .8s cubic-bezier(.22,1,.36,1)',
          }}
        />

        {/* legibility gradient */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, transparent 38%, rgba(0,0,0,0.5) 62%, rgba(0,0,0,0.82) 100%)',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            px: fluid(14, 14),
            pb: fluid(26, 16),
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
              lineHeight: 1.05,
              fontSize: { xs: 24, sm: 22, lg: fluid(30, 20) },
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            }}
          >
            {item.title}
          </Box>

          <Box
            component="p"
            sx={{
              m: 0,
              mt: fluid(8, 6),
              maxWidth: '82%',
              fontWeight: 400,
              lineHeight: 1.2,
              color: 'rgba(255,255,255,0.92)',
              fontSize: { xs: 14, sm: 13.5, lg: fluid(20, 13) },
              textShadow: '0 1px 8px rgba(0,0,0,0.5)',
            }}
          >
            {BODY_COPY}
          </Box>

          <Box
            className="view-btn"
            sx={{
              mt: fluid(14, 12),
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2px',
              height: { xs: 30, sm: 28, lg: fluid(26, 26) },
              px: fluid(10, 10),
              borderRadius: fluid(5, 4),
              bgcolor: '#D4202A',
              fontWeight: 500,
              textTransform: 'uppercase',
              fontSize: { xs: 12, sm: 11.5, lg: fluid(13, 11) },
              letterSpacing: '0.01em',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22)',
            }}
          >
            View uniforms
            <ChevronRight sx={{ fontSize: '1.3em', transition: 'transform .25s' }} />
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default function Categories() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="categories-title"
      // sx={{
      //   position: 'relative',
      //   overflow: 'hidden',
      //   color: '#0a0a0a',
      //   backgroundColor: '#d3d3d6',
      //   backgroundImage: 'url(/images/categories/bg2.png)',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'top right',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundBlendMode: 'multiply',
      //   pt: { xs: 9, sm: 10, lg: fluid(145, 80) },
      //   pb: { xs: 8, lg: fluid(100, 56) },
      // }}
      sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  isolation: 'isolate',
                  color: '#0a0a0a',
                  backgroundColor: '#d9d9db',
                  backgroundImage: 'url(/images/categories/bg2.png)',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  // backgroundPosition: "center",
                  backgroundPosition: 'top left',
                  backgroundBlendMode: 'multiply',
                  pt: { xs: 9, sm: 10, lg: fluid(145, 80) },
                  pb: { xs: 9, lg: fluid(125, 64) },
              }}
    >
      <Box sx={{ maxWidth: 2560, mx: 'auto', px: GUTTER }}>
        {/* Heading */}
        {/* Heading */}
<MotionBox
  initial={reduce ? false : { opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.6 }}
  transition={{ duration: 0.8, ease: EASE }}
  sx={{ textAlign: 'center' }}
>
  <SectionLabel>Custom Apparel</SectionLabel>

  <Box
    component="h2"
    id="categories-title"
    sx={{
      m: 0,
      mt: fluid(22, 14),
      fontFamily: DISPLAY,
      fontWeight: 400,
      textTransform: 'uppercase',
      lineHeight: 1.05,
      letterSpacing: '0.005em',
      fontSize: {
        xs: 'clamp(28px, 9vw, 44px)',
        md: fluid(72, 38),
      },
    }}
  >
    Custom apparel &amp;{' '}
    <Box component="span" sx={{ color: RED }}>
      uniforms
    </Box>
  </Box>
</MotionBox>

        {/* Grid */}
        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            m: 0,
            p: 0,
            mt: { xs: 5, lg: fluid(70, 40) },
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(4, minmax(0, 1fr))',
            },
            columnGap: { xs: 2, sm: 2.5, lg: fluid(28, 16) },
            rowGap: { xs: 2, sm: 2.5, lg: fluid(33, 16) },
          }}
        >
          {CATEGORIES.map((item, i) => (
            <Box component="li" key={`${item.title}-${i}`} sx={{ display: 'contents' }}>
              <CategoryCard item={item} priority={i < 4} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}