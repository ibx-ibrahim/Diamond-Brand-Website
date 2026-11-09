
'use client';

import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Trophy,
  UsersRound,
  Flag,
} from 'lucide-react';

const MotionBox = motion.create(Box);

const RED = '#E3262D';

const audienceCards = [
  {
    title: 'SPORTS TEAMS',
    image: '/images/teams/team4.png',
    alt: 'Sports team gathering in a huddle before a match',
    Icon: Trophy,
  },
  {
    title: 'BOOSTER CLUBS',
    image: '/images/teams/team5.png',
    alt: 'Families and supporters cheering together at a stadium',
    Icon: UsersRound,
  },
  {
    title: 'PARENTS & FAMILIES',
    image: '/images/teams/team7.png',
    alt: 'Parents and families celebrating at a sporting event',
    Icon: UsersRound,
  },
  {
    title: 'FANS & SUPPORTERS',
    image: '/images/teams/team6.png',
    alt: 'Sports fans cheering enthusiastically in a stadium',
    Icon: Flag,
  },
];

export default function AudienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Box
      component="section"
      id="audiences"
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        bgcolor: '#BDBDBD',
        color: '#080A10',

        px: 'clamp(20px, 6.05vw, 124px)',
        pt: 'clamp(65px, 5.3vw, 108px)',
        pb: 'clamp(48px, 4.2vw, 86px)',

        m: 0,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1800,
          mx: 'auto',
        }}
      >
        {/* HEADING */}
        <MotionBox
          initial={
            reduceMotion ? false : { opacity: 0, y: 24 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Typography
            component="h2"
            sx={{
              m: 0,
              mb: 'clamp(32px, 3vw, 52px)',
              textAlign: 'center',

              fontFamily:
                'var(--font-display), sans-serif',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',

              fontSize: 'clamp(30px, 4vw, 76px)',
              color: '#080A10',
            }}
          >
            WHO ARE{' '}
            <Box
              component="span"
              sx={{ color: RED }}
            >
              BOOSTER SHIRTS
            </Box>{' '}
            FOR?
          </Typography>
        </MotionBox>

        {/* AUDIENCE CARDS */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(4, minmax(0, 1fr))',
            },

            gap: {
              xs: 2,
              sm: 2.5,
              lg: 'clamp(18px, 1.7vw, 34px)',
            },

            '@media (min-width: 400px) and (max-width: 599px)': {
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            },
          }}
        >
          {audienceCards.map(({ title, image, alt, Icon }, i) => (
            <MotionBox
              key={title}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 32 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: reduceMotion ? 0 : i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      y: -5,
                      transition: { duration: 0.3 },
                    }
              }
              sx={{
                position: 'relative',
                isolation: 'isolate',
                overflow: 'hidden',

                width: '100%',
                aspectRatio: '1.085 / 1',

                borderRadius: '18px',
                bgcolor: '#252525',

                boxShadow: '0 3px 9px rgba(0,0,0,0.10)',

                cursor: 'pointer',

                transition: 'box-shadow .4s ease',

                '&:hover': {
                  boxShadow:
                    '0 15px 30px rgba(0,0,0,0.19)',
                },

                '&:hover .audience-image': {
                  transform: 'scale(1.055)',
                },

                '&:hover .audience-overlay': {
                  opacity: 1,
                },
              }}
            >
              {/* IMAGE */}
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 599px) 90vw, (max-width: 1199px) 45vw, 24vw"
                className="audience-image"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition:
                    'transform .8s cubic-bezier(.22,1,.36,1)',
                }}
              />

              {/* DARK GRADIENT */}
              <Box
                className="audience-overlay"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,

                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.88) 100%)',

                  opacity: 0.95,
                  transition: 'opacity .4s ease',
                  pointerEvents: 'none',
                }}
              />

              {/* LABEL */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,

                  zIndex: 2,

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,

                  px: 1.2,
                  py: {
                    xs: 2,
                    sm: 2.2,
                    lg: 'clamp(17px, 1.5vw, 26px)',
                  },
                }}
              >
                <Icon
                  size={21}
                  strokeWidth={1.7}
                  color="#fff"
                  style={{ flexShrink: 0 }}
                />

                <Typography
                  component="h3"
                  sx={{
                    m: 0,
                    color: '#fff',

                    fontFamily:
                      'var(--font-display), sans-serif',

                    fontSize: {
                      xs: 12,
                      sm: 14,
                      md: 16,
                      lg: 'clamp(14px, 1.12vw, 23px)',
                    },

                    fontWeight: 500,
                    lineHeight: 1.2,
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {title}
                </Typography>
              </Box>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
