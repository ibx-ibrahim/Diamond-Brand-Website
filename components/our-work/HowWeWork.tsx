'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion, useReducedMotion } from 'framer-motion';
import EditOutlined from '@mui/icons-material/EditOutlined';
import DesignServicesOutlined from '@mui/icons-material/DesignServicesOutlined';
import TuneOutlined from '@mui/icons-material/TuneOutlined';
import LayersOutlined from '@mui/icons-material/LayersOutlined';

import { MotionBox, RED, SectionLabel } from './Shared';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      "We learn about your team, sport, goals, and the look you want your uniforms to achieve.",
    Icon: EditOutlined,
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Our team turns your ideas into a custom uniform concept with colors, graphics, and details.',
    Icon: DesignServicesOutlined,
  },
  {
    number: '03',
    title: 'Customize',
    description:
      'Review the design and personalize names, numbers, sizing, and finishing details.',
    Icon: TuneOutlined,
  },
  {
    number: '04',
    title: 'Produce',
    description:
      'Once approved, we bring your design to life with careful production and quality checks.',
    Icon: LayersOutlined,
  },
];

export default function HowWeWork() {
  const reduceMotion = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="how-we-work-title"
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        bgcolor: '#bdbdbd',
        color: '#08090c',
        px: { xs: '20px', sm: '4.5vw', lg: '6vw' },
        pt: { xs: '58px', sm: '68px', md: 'clamp(52px, 4.3vw, 82px)' },
        pb: { xs: '76px', sm: '86px', md: 'clamp(86px, 6.3vw, 120px)' },
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1720px', mx: 'auto' }}>
        {/* Centered section introduction */}
        <MotionBox
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          sx={{ textAlign: 'center', mx: 'auto', maxWidth: '1180px' }}
        >
          <SectionLabel>How We Work</SectionLabel>

          <Typography
            id="how-we-work-title"
            component="h2"
            sx={{
              mt: { xs: '12px', md: '13px' },
              mb: 0,
              fontFamily:
                'var(--font-display), "Barlow Condensed", "Inter", sans-serif',
              fontSize: {
                xs: 'clamp(34px, 8.5vw, 48px)',
                sm: 'clamp(42px, 5.4vw, 58px)',
                md: 'clamp(46px, 3.25vw, 66px)',
              },
              fontWeight: 800,
              lineHeight: 0.98,
              letterSpacing: '-0.025em',
              textTransform: 'uppercase',
            }}
          >
            <Box component="span" sx={{ display: 'block' }}>
              From first idea to
            </Box>
            <Box component="span" sx={{ display: 'block', color: RED }}>
              Game day.
            </Box>
          </Typography>

          <Typography
            component="p"
            sx={{
              mt: { xs: '15px', md: '16px' },
              mb: 0,
              mx: 'auto',
              maxWidth: '1120px',
              color: '#414247',
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: 'clamp(16px, 1.13vw, 21px)',
              },
              lineHeight: 1.28,
              fontWeight: 400,
            }}
          >
            Every great uniform starts with an idea. We turn your team&apos;s
            vision into custom sportswear through thoughtful design, detailed
            customization, and quality production.
          </Typography>
        </MotionBox>

        {/* Four-step process */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              md: 'repeat(4, minmax(0, 1fr))',
            },
            columnGap: { xs: '18px', sm: '28px', md: 'clamp(26px, 4vw, 78px)' },
            rowGap: { xs: '38px', sm: '46px', md: 0 },
            mt: { xs: '42px', sm: '50px', md: 'clamp(42px, 3.1vw, 60px)' },
          }}
        >
          {steps.map(({ number, title, description, Icon }, index) => (
            <MotionBox
              key={number}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              sx={{
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  height: { xs: '43px', sm: '48px', md: '52px' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: RED,
                  '& svg': {
                    fontSize: { xs: '38px', sm: '43px', md: '48px' },
                    strokeWidth: 1.35,
                  },
                }}
              >
                <Icon />
              </Box>

              <Typography
                component="h3"
                sx={{
                  mt: { xs: '10px', md: '12px' },
                  mb: 0,
                  fontFamily:
                    'var(--font-display), "Barlow Condensed", "Inter", sans-serif',
                  fontSize: {
                    xs: '20px',
                    sm: '22px',
                    md: 'clamp(21px, 1.5vw, 28px)',
                  },
                  fontWeight: 500,
                  lineHeight: 1.1,
                  textTransform: 'uppercase',
                }}
              >
                {title}
              </Typography>

              <Typography
                component="p"
                sx={{
                  mt: { xs: '8px', md: '10px' },
                  mb: 0,
                  maxWidth: { xs: '260px', md: '330px' },
                  color: '#48494e',
                  fontSize: {
                    xs: '12px',
                    sm: '13px',
                    md: 'clamp(13px, 0.94vw, 17px)',
                  },
                  lineHeight: 1.28,
                  fontWeight: 400,
                }}
              >
                {description}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
