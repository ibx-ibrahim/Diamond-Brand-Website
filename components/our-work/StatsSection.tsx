
'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion, useReducedMotion } from 'framer-motion';

const MotionBox = motion.create(Box);

const STATS = [
  { value: '15+', label: 'Team Projects' },
  { value: '50+', label: 'Custom Designs' },
  { value: '20+', label: 'Sports Categories' },
  { value: '100%', label: 'Team Focused' },
];

const EASE: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

export default function StatsSection() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-label="Diamond Brand statistics"
      sx={{
        width: '100%',
        bgcolor: '#BDBDBD',
        pt: { xs: '24px', md: '36px' },
        pb: { xs: '60px', md: '100px' },
        overflow: 'hidden',
      }}
    >
      {/* Statistics panel */}
      <Box
        sx={{
          width: '100%',
          minHeight: { xs: 'auto', md: '192px' },
          borderRadius: { xs: '18px', md: '28px' },
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.17) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4, lg: '6%' },
          py: { xs: 3, md: 3 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '1500px',
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              md: 'repeat(4, minmax(0, 1fr))',
            },
            alignItems: 'center',
          }}
        >
          {STATS.map((stat, index) => (
            <MotionBox
              key={stat.label}
              initial={
                reduce ? false : { opacity: 0, y: 22 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.75,
                ease: EASE,
                delay: index * 0.1,
              }}
              sx={{
                minWidth: 0,
                minHeight: { xs: '115px', md: '88px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',

                // Desktop vertical dividers
                '&:not(:first-of-type)': {
                  borderLeft: {
                    xs: 'none',
                    md: '1.5px solid rgba(0,0,0,0.35)',
                  },
                },

                // Subtle mobile row dividers
                '&:nth-of-type(2)': {
                  borderBottom: {
                    xs: '1px solid rgba(0,0,0,0.18)',
                    md: 'none',
                  },
                },

                '&:nth-of-type(1)': {
                  borderBottom: {
                    xs: '1px solid rgba(0,0,0,0.18)',
                    md: 'none',
                  },
                },
              }}
            >
              <Typography
                component="div"
                sx={{
                  fontFamily:
                    'var(--font-display), "Inter", sans-serif',
                  fontWeight: 800,
                  color: '#050505',
                  fontSize: {
                    xs: '38px',
                    sm: '48px',
                    md: '60px',
                  },
                  lineHeight: 0.95,
                  letterSpacing: '-0.025em',
                }}
              >
                {stat.value}
              </Typography>

              <Typography
                component="div"
                sx={{
                  mt: { xs: 1, md: '10px' },
                  fontFamily: 'var(--font-body), "Inter", sans-serif',
                  fontWeight: 500,
                  color: '#080808',
                  fontSize: {
                    xs: '12px',
                    sm: '16px',
                    md: '23px',
                  },
                  lineHeight: 1.2,
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {stat.label}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
