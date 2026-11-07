'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER, SECTION_PT, SECTION_PB } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E3262D';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Product = {
  title: string;
  href: string;
  src: string;
};

type RowSpec = {
  ratio: string;
  bar: [number, number];
  font: [number, number];
  chevron: [number, number];
  items: Product[];
};

const ROWS: RowSpec[] = [
  {
    ratio: '542 / 532',
    bar: [80, 52],
    font: [28, 16],
    chevron: [30, 20],
    items: [
      { title: 'T-Shirt', href: '/custom-apparel/t-shirt', src: '/images/products/red1.png' },
      { title: 'Long Sleeve Shirt', href: '/custom-apparel/long-sleeve-shirt', src: '/images/products/red2.png' },
      { title: 'Long Sleeve with Hood', href: '/custom-apparel/long-sleeve-with-hood', src: '/images/products/red3.png' },
      { title: 'Construction Hi-Viz Shirts', href: '/custom-apparel/hi-viz-shirts', src: '/images/products/safety.png' },
    ],
  },
  {
    ratio: '729 / 413',
    bar: [64, 50],
    font: [28, 16],
    chevron: [28, 20],
    items: [
      { title: 'Pullover Hoodie', href: '/custom-apparel/pullover-hoodie', src: '/images/products/blue1.png' },
      { title: 'Zipper Hoodie', href: '/custom-apparel/zipper-hoodie', src: '/images/products/blue2.png' },
      { title: 'Windbreaker Jackets', href: '/custom-apparel/windbreaker-jackets', src: '/images/products/blue3.png' },
    ],
  },
  {
    ratio: '1113 / 478',
    bar: [72, 50],
    font: [28, 16],
    chevron: [34, 20],
    items: [
      { title: 'Mesh Shorts', href: '/custom-apparel/mesh-shorts', src: '/images/products/purple.png' },
      { title: 'Joggers', href: '/custom-apparel/joggers', src: '/images/products/green.png' },
    ],
  },
  {
    ratio: '430 / 420',
    bar: [58, 46],
    font: [22, 15],
    chevron: [24, 18],
    items: [
      { title: 'Mouth PCS', href: '/accessories/mouth-pcs', src: '/images/products/1.png' },
      { title: 'Flag Football Flag Sets', href: '/accessories/flag-football-flag-sets', src: '/images/products/2.png' },
      { title: 'Soft Shell Helmets', href: '/accessories/soft-shell-helmets', src: '/images/products/3.png' },
      { title: 'Soft Shell Headbands', href: '/accessories/soft-shell-headbands', src: '/images/products/4.png' },
      { title: 'Umbrellas', href: '/accessories/umbrellas', src: '/images/products/5.png' },
    ],
  },
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

function Chevron({ size }: { size: string }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      aria-hidden
      sx={{
        width: size,
        height: size,
        flexShrink: 0,
        fill: 'none',
        stroke: '#fff',
        strokeWidth: 3.2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    >
      <path d="M9 4.5L16.5 12 9 19.5" />
    </Box>
  );
}

function ProductCard({
  product,
  row,
  delay,
}: {
  product: Product;
  row: RowSpec;
  delay: number;
}) {
  const reduce = useReducedMotion();
  const [missing, setMissing] = React.useState(false);

  return (
    <MotionBox
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      sx={{ minWidth: 0 }}
    >
      <Box
        component={Link}
        href={product.href}
        aria-label={`${product.title}: shop now`}
        sx={{
          position: 'relative',
          display: 'block',
          overflow: 'hidden',
          width: '100%',
          aspectRatio: {
            xs: '1 / 0.86',
            sm: '1 / 0.9',
            lg: row.ratio,
          },
          borderRadius: fluid(10, 10),
          color: '#fff',
          textDecoration: 'none',

          // Studio background fallback
          backgroundColor: '#55575c',
          backgroundImage:
            'radial-gradient(ellipse 75% 85% at 50% 42%, #85868a 0%, #77787c 30%, #606166 58%, #414348 82%, #303237 100%)',

          boxShadow:
            '0 12px 28px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.06) inset',

          transition: 'box-shadow .35s',

          '&:hover': {
            boxShadow:
              '0 18px 40px rgba(0,0,0,0.32), 0 1px 0 rgba(255,255,255,0.1) inset',
          },

          '&:hover img': {
            transform: 'scale(1.045)',
          },

          '&:hover .bar': {
            bgcolor: 'rgba(110,112,120,0.62)',
          },

          '&:hover .chev': {
            transform: 'translateX(4px)',
          },

          '&:focus-visible': {
            outline: '3px solid #fff',
            outlineOffset: 3,
          },
        }}
      >
        {!missing && (
          <Image
            src={product.src}
            alt={product.title}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1280px) 33vw, 25vw"
            onError={() => setMissing(true)}
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
              transition: 'transform .9s cubic-bezier(.22,1,.36,1)',
            }}
          />
        )}

        {/* Bottom glass label */}
        <Box
          className="bar"
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: {
              xs: 54,
              sm: 56,
              lg: fluid(row.bar[0], row.bar[1]),
            },
            pl: fluid(22, 16),
            pr: fluid(30, 16),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,

            bgcolor: 'rgba(110,112,120,0.46)',
            backdropFilter: 'blur(14px) saturate(1.1)',
            WebkitBackdropFilter: 'blur(14px) saturate(1.1)',

            borderTop: '1px solid rgba(255,255,255,0.22)',
            transition: 'background-color .3s',
          }}
        >
          <Box
            component="span"
            sx={{
              minWidth: 0,
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.012em',
              lineHeight: 1.1,
              fontSize: {
                xs: 17,
                sm: 16,
                lg: fluid(row.font[0], row.font[1]),
              },
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              textShadow: '0 1px 8px rgba(0,0,0,0.35)',
            }}
          >
            {product.title}
          </Box>

          <Box
            className="chev"
            component="span"
            sx={{
              display: 'inline-flex',
              flexShrink: 0,
              transition: 'transform .3s',
            }}
          >
            <Chevron size={fluid(row.chevron[0], row.chevron[1])} />
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default function ShopByCategory() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="shop-title"
      sx={{
        position: 'relative',
        bgcolor: '#d1d1d3',
        color: '#0a0a0a',
        // equal spacing: same top/bottom tokens as the other sections (see lib/fluid.ts)
        pt: SECTION_PT,
        pb: SECTION_PB,
      }}
    >
      <Box
        sx={{
          maxWidth: 2560,
          mx: 'auto',
          px: GUTTER,
        }}
      >
        {/* Section heading */}
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
            id="shop-title"
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
            Shop by{' '}
            <Box component="span" sx={{ color: RED }}>
              category
            </Box>
          </Box>

          <Box
            component="p"
            sx={{
              m: 0,
              mt: fluid(10, 8),
              fontWeight: 400,
              textTransform: 'uppercase',
              color: '#5a5a5e',
              fontSize: {
                xs: 13,
                sm: 14,
                md: fluid(26, 14),
              },
              letterSpacing: '0.01em',
            }}
          >
            Custom gear. Your team. Your identity.
          </Box>
        </MotionBox>

        {/* Four separate rows to preserve the exact desktop layout */}
        <Box
          sx={{
            mt: { xs: 5, lg: fluid(72, 44) },
            display: 'flex',
            flexDirection: 'column',
            gap: {
              xs: 2,
              sm: 2.5,
              lg: fluid(40, 18),
            },
          }}
        >
          {ROWS.map((row, rowIndex) => (
            <Box
              key={rowIndex}
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, minmax(0, 1fr))',
                  md: 'repeat(3, minmax(0, 1fr))',
                  lg: `repeat(${row.items.length}, minmax(0, 1fr))`,
                },
                columnGap: {
                  xs: 2,
                  sm: 2.5,
                  lg: fluid(26, 14),
                },
                rowGap: {
                  xs: 2,
                  sm: 2.5,
                  lg: fluid(26, 14),
                },
              }}
            >
              {row.items.map((product, index) => (
                <ProductCard
                  key={product.href}
                  product={product}
                  row={row}
                  delay={index * 0.06}
                />
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}