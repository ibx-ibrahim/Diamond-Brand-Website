'use client';

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E3262D';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Transparent smoke PNG (same one used on the home page CTA). Change the path if yours differs. */
const SMOKE_SRC = '/images/banners/cta-bg-2.png';

/**
 * Add more styles here and the dots appear automatically: the carousel shows 4 at a time on desktop,
 * so 8 styles = 5 dots (as in the design), 4 styles = no dots on desktop.
 * Images are transparent PNGs with the hanger included.
 */
const STYLES = [
  { title: 'Classic Tee', src: '/images/hero/baseball-jersey.png', alt: 'White and navy button-up booster jersey, number 12' },
  { title: 'Raglan Tee', src: '/images/hero/purple-jersey.png', alt: 'Black and purple booster shirt, number 7' },
  { title: 'Performance Tee', src: '/images/hero/pink-jersey.png', alt: 'Black and pink booster shirt, number 8' },
  { title: 'Fan Edition Tee', src: '/images/hero/sponsor-jersey.png', alt: 'Black, red and white sponsor booster shirt' },
  { title: 'Football Tee', src: '/images/hero/football-jersey.png', alt: 'Black and red football booster jersey' },
  { title: 'Basketball Tee', src: '/images/hero/basketball-jersey.png', alt: 'Black and gold basketball booster jersey, number 10' },
  { title: 'Safety Tee', src: '/images/hero/safety-shirt.png', alt: 'High-visibility booster work shirt' },
  { title: 'Spirit Hoodie', src: '/images/hero/red-hoodie.png', alt: 'Black and red custom booster hoodie' },
];

function StyleCard({ item }: { item: (typeof STYLES)[number] }) {
  return (
    <Box
      component="article"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        aspectRatio: '507 / 590',
        overflow: 'hidden',
        borderRadius: fluid(40, 24),
        bgcolor: 'rgba(118,118,120,0.5)',
        backgroundImage: 'linear-gradient(180deg, rgba(150,150,152,0.22) 0%, rgba(80,80,82,0.2) 100%)',
        border: '1px solid rgba(255,255,255,0.18)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 18px 44px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.18)',
        transition: 'transform .45s cubic-bezier(.22,1,.36,1), box-shadow .45s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 26px 56px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.22)',
        },
        '&:hover img': { transform: 'scale(1.03)' },
      }}
    >
      <Box sx={{ position: 'relative', flex: 1, minHeight: 0 }}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 600px) 90vw, (max-width: 900px) 46vw, (max-width: 1280px) 31vw, 20vw"
          style={{
            objectFit: 'contain',
            objectPosition: 'center top',
            transition: 'transform .9s cubic-bezier(.22,1,.36,1)',
          }}
        />
      </Box>
      <Box
        component="h3"
        sx={{
          m: 0,
          pt: fluid(10, 8),
          pb: fluid(34, 18),
          textAlign: 'center',
          fontFamily: DISPLAY,
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '0.01em',
          lineHeight: 1.1,
          color: '#fff',
          fontSize: { xs: 24, sm: 20, lg: fluid(36, 17) },
        }}
      >
        {item.title}
      </Box>
    </Box>
  );
}

export default function PopularStyles() {
  const reduce = useReducedMotion();
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const perView = isLg ? 4 : isMd ? 3 : isSm ? 2 : 1;

  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);
  const [smokeMissing, setSmokeMissing] = React.useState(false);

  const pages = Math.max(1, STYLES.length - perView + 1);

  const step = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el || !el.children[0]) return 1;
    const first = el.children[0] as HTMLElement;
    const gap = parseFloat(getComputedStyle(el).columnGap || '0') || 0;
    return first.offsetWidth + gap;
  }, []);

  const onScroll = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / step());
    setActive(Math.min(Math.max(i, 0), pages - 1));
  }, [pages, step]);

  const goTo = (i: number) => {
    scrollerRef.current?.scrollTo({ left: i * step(), behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <Box
      component="section"
      id="styles"
      aria-labelledby="styles-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        bgcolor: '#202021',
        color: '#fff',
        borderRadius: fluid(52, 28),
        px: GUTTER,
        pt: { xs: 6, lg: fluid(58, 44) },
        pb: { xs: 6, lg: fluid(82, 40) },
        scrollMarginTop: 80,
      }}
    >
      {/* smoke along the top and bottom edges */}
      {!smokeMissing && (
        <>
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              left: '-4%',
              right: '-4%',
              bottom: 0,
              height: '70%',
              zIndex: -1,
              opacity: 0.5,
              pointerEvents: 'none',
            }}
          >
            <Image
              src={SMOKE_SRC}
              alt=""
              fill
              sizes="110vw"
              onError={() => setSmokeMissing(true)}
              style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
            />
          </Box>
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              left: '-4%',
              right: '-4%',
              top: 0,
              height: '45%',
              zIndex: -1,
              opacity: 0.4,
              transform: 'rotate(180deg)',
              pointerEvents: 'none',
            }}
          >
            <Image
              src={SMOKE_SRC}
              alt=""
              fill
              sizes="110vw"
              style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
            />
          </Box>
        </>
      )}

      <Box sx={{ maxWidth: 2560, mx: 'auto' }}>
        {/* heading */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <Box
            component="h2"
            id="styles-title"
            sx={{
              m: 0,
              textAlign: 'center',
              fontWeight: 700,
              textTransform: 'uppercase',
              lineHeight: 1.05,
              letterSpacing: '-0.005em',
              fontSize: { xs: 'clamp(22px, 6.4vw, 38px)', md: fluid(80, 28) },
            }}
          >
            Popular booster shirt styles
          </Box>
        </MotionBox>

        {/* carousel */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
          sx={{ mt: { xs: 4, lg: fluid(56, 28) } }}
        >
          <Box
            ref={scrollerRef}
            onScroll={onScroll}
            role="region"
            aria-label="Booster shirt styles"
            tabIndex={0}
            sx={{
              '--per': { xs: 1, sm: 2, md: 3, lg: 4 },
              '--gap': { xs: '16px', lg: fluid(74, 16) },
              display: 'flex',
              gap: 'var(--gap)',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
              py: 1.5,
              outline: 'none',
              '&:focus-visible': { outline: '2px solid #fff', outlineOffset: 4, borderRadius: 2 },
              '& > *': {
                flex: '0 0 calc((100% - (var(--per) - 1) * var(--gap)) / var(--per))',
                scrollSnapAlign: 'start',
                minWidth: 0,
              },
            }}
          >
            {STYLES.map((s) => (
              <StyleCard key={s.title} item={s} />
            ))}
          </Box>

          {pages > 1 && (
            <Box
              role="group"
              aria-label="Choose a slide"
              sx={{
                mt: { xs: 3, lg: fluid(60, 24) },
                display: 'flex',
                justifyContent: 'center',
                gap: fluid(7, 7),
              }}
            >
              {Array.from({ length: pages }).map((_, i) => (
                <Box
                  key={i}
                  component="button"
                  type="button"
                  aria-label={`Go to style ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => goTo(i)}
                  sx={{
                    width: fluid(17, 13),
                    height: fluid(17, 13),
                    p: 0,
                    border: 0,
                    borderRadius: '50%',
                    cursor: 'pointer',
                    bgcolor: i === active ? RED : '#e6e6e8',
                    transition: 'background-color .3s, transform .3s',
                    '&:hover': { transform: 'scale(1.25)' },
                    '&:focus-visible': { outline: '2px solid #fff', outlineOffset: 3 },
                  }}
                />
              ))}
            </Box>
          )}
        </MotionBox>
      </Box>
    </Box>
  );
}