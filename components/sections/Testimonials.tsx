'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Star from '@mui/icons-material/Star';
import { keyframes } from '@mui/system';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E5282D';
const RED_SOFT = 'rgba(229,40,45,0.62)';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

// Track holds the list twice, so sliding by exactly half loops seamlessly.
const marquee = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

type Testimonial = {
  name: string;
  date: string;
  avatar: string;
  text: string;
};

const TEXT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London,";

// Replace with real avatars in /public/images/testimonials/
const TESTIMONIALS: Testimonial[] = [
  { name: 'James Anderson', date: '10-5-26', avatar: '/images/testimonials/avatar-1.jpg', text: TEXT },
  { name: 'Ethan Walker', date: '10-5-26', avatar: '/images/testimonials/avatar-2.jpg', text: TEXT },
  { name: 'Michael Bennett', date: '10-5-26', avatar: '/images/testimonials/avatar-3.jpg', text: TEXT },
  { name: 'Ryan Mitchell', date: '10-5-26', avatar: '/images/testimonials/avatar-4.jpg', text: TEXT },
];

const CARD_W = { xs: '84vw', sm: '56vw', md: '40vw', lg: '31vw', xl: '26vw' };
const GAP = fluid(19, 14);

function Card({ item }: { item: Testimonial }) {
  return (
    <Box
      component="article"
      sx={{
        position: 'relative',
        flex: '0 0 auto',
        width: CARD_W,
        maxWidth: 760,
        mr: GAP,
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#fff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: fluid(30, 18),
        boxShadow: '0 10px 40px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
        px: fluid(44, 20),
        pt: fluid(22, 14),
        pb: fluid(28, 18),
      }}
    >
      {/* Opening quote + stars */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: fluid(38, 14) }}>
        <Box
          aria-hidden
          sx={{
            fontFamily: DISPLAY,
            color: RED_SOFT,
            fontSize: fluid(110, 56),
            lineHeight: 0.9,
            ml: fluid(-20, -6),
            userSelect: 'none',
          }}
        >
          &ldquo;
        </Box>
        <Box
          role="img"
          aria-label="5 out of 5 stars"
          sx={{ display: 'flex', gap: fluid(4, 2), mt: fluid(14, 8), color: RED }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} sx={{ fontSize: fluid(40, 18) }} />
          ))}
        </Box>
      </Box>

      {/* Review text */}
      <Box
        component="p"
        sx={{
          m: 0,
          flex: 1,
          mt: fluid(-6, -4),
          pr: fluid(30, 20),
          fontSize: fluid(24, 14.5),
          lineHeight: 1.55,
          fontWeight: 400,
          color: '#3a3a3a',
        }}
      >
        {item.text}
      </Box>

      {/* Closing quote */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          right: fluid(44, 18),
          bottom: fluid(56, 40),
          fontFamily: DISPLAY,
          color: RED_SOFT,
          fontSize: fluid(110, 56),
          lineHeight: 0.6,
          userSelect: 'none',
        }}
      >
        &rdquo;
      </Box>

      {/* Author */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: fluid(16, 10), mt: fluid(20, 14) }}>
        <Avatar
          src={item.avatar}
          alt={item.name}
          sx={{ width: fluid(58, 40), height: fluid(58, 40), ml: fluid(-24, -4) }}
        >
          {item.name[0]}
        </Avatar>
        <Box>
          <Box sx={{ fontSize: fluid(24, 15), lineHeight: 1.2, color: '#222' }}>{item.name}</Box>
          <Box sx={{ fontSize: fluid(20, 12), lineHeight: 1.3, color: '#7a7a7a', mt: '2px' }}>
            {item.date}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="testimonials-title"
      sx={{
        bgcolor: '#fff',
        overflow: 'hidden',
        py: { xs: 7, sm: 9, md: fluid(150, 70) },
      }}
    >
      <MotionBox
        variants={rise}
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        id="testimonials-title"
        role="heading"
        aria-level={2}
        sx={{
          px: GUTTER,
          mb: { xs: 3.5, md: fluid(52, 30) },
          textAlign: 'center',
          fontFamily: DISPLAY,
          fontWeight: 400,
          textTransform: 'uppercase',
          lineHeight: 1,
          letterSpacing: '0.005em',
          color: '#0a0a0a',
          fontSize: { xs: 'clamp(28px, 8.5vw, 48px)', md: fluid(80, 36) },
        }}
      >
        What our{' '}
        <Box component="span" sx={{ color: RED }}>
          customers say
        </Box>
      </MotionBox>

      {/* Marquee viewport (cards run edge to edge, like the design) */}
      <Box
        sx={{
          overflowX: 'hidden',
          '@media (prefers-reduced-motion: reduce)': {
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
          },
          '&:hover > .track, &:focus-within > .track': { animationPlayState: 'paused' },
        }}
      >
        <Box
          className="track"
          sx={{
            display: 'flex',
            width: 'max-content',
            alignItems: 'stretch',
            animation: `${marquee} 60s linear infinite`,
            willChange: 'transform',
            '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
          }}
        >
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} item={t} />
          ))}
          {/* Duplicate set for the seamless loop — hidden from assistive tech */}
          <Box aria-hidden sx={{ display: 'contents' }}>
            {TESTIMONIALS.map((t) => (
              <Card key={`${t.name}-dup`} item={t} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}