
'use client';

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion, useReducedMotion } from 'framer-motion';

const MotionBox = motion.create(Box);

const DISPLAY =
  'var(--font-display), "Bakbak One", "Inter", sans-serif';

const RED = '#E3262D';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const IMG_SRC = '/images/products/cta-shirt1.png';

const FEATURES = [
  { label: 'Fans & Supporters', Icon: GroupIcon },
  { label: 'Booster Clubs', Icon: TrophyIcon },
  { label: 'Schools & Teams', Icon: ShieldIcon },
];

/* ---------------- ICONS ---------------- */

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 64 64"
      aria-hidden="true"
      sx={{
        width: '100%',
        height: '100%',
        display: 'block',
        fill: 'none',
        stroke: RED,
        strokeWidth: 2.4,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    >
      {children}
    </Box>
  );
}

function GroupIcon() {
  return (
    <Svg>
      <circle cx="32" cy="17" r="8" />
      <path d="M16 52c0-9 7-15 16-15s16 6 16 15" />
      <circle cx="14" cy="26" r="6" />
      <path d="M3 50c0-7 4.5-12 11-12" />
      <circle cx="50" cy="26" r="6" />
      <path d="M61 50c0-7-4.5-12-11-12" />
    </Svg>
  );
}

function TrophyIcon() {
  return (
    <Svg>
      <path d="M20 8h24v14c0 9-5.5 15-12 15s-12-6-12-15z" />
      <path d="M20 13H9c0 9 4 14 11 15M44 13h11c0 9-4 14-11 15" />
      <path d="M32 37v10M21 56h22M25 47h14v9H25z" />
      <path d="M26 21l4 4 8-8" />
    </Svg>
  );
}

function ShieldIcon() {
  return (
    <Svg>
      <path d="M32 6l21 7.5V30c0 12-8.5 21-21 27C19.5 51 11 42 11 30V13.5z" />
      <path d="M22 31l7 7 13-14" />
    </Svg>
  );
}

/* ---------------- DECORATIVE SLASHES ---------------- */

function Slashes({
  position,
}: {
  position: 'top' | 'bottom';
}) {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        width: { xs: 27, sm: 34, lg: 45 },
        height: { xs: 55, sm: 70, lg: 92 },
        pointerEvents: 'none',
        zIndex: 3,

        ...(position === 'top'
          ? {
              top: '0%',
              left: '3%',
            }
          : {
              bottom: '0%',
              right: '3%',
            }),

        '& span': {
          position: 'absolute',
          width: { xs: 2, lg: 3 },
          height: '100%',
          borderRadius: 5,
          bgcolor: RED,
          transform: 'rotate(22deg)',
        },

        '& span:first-of-type': {
          left: '20%',
        },

        '& span:last-of-type': {
          left: '65%',
        },
      }}
    >
      <Box component="span" />
      <Box component="span" />
    </Box>
  );
}

/* ---------------- FEATURE CARD ---------------- */

function FeatureBox({
  item,
  index,
}: {
  item: (typeof FEATURES)[number];
  index: number;
}) {
  const reduce = useReducedMotion();
  const { label, Icon } = item;

  return (
    <MotionBox
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: reduce ? 0 : index * 0.1,
        ease: EASE,
      }}
      sx={{ minWidth: 0 }}
    >
      <Box
        sx={{
          width: '100%',
          minHeight: {
            xs: 145,
            sm: 155,
            lg: 'auto',
          },

          aspectRatio: {
            lg: '1.62 / 1',
          },

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',

          px: 1.5,
          py: 2,

          borderRadius: '12px',
          bgcolor: '#DADADB',
          border: '1.5px solid rgba(150,150,155,0.55)',

          transition:
            'transform .35s ease, background .35s ease, box-shadow .35s ease, border-color .35s ease',

          '&:hover': {
            transform: 'translateY(-4px)',
            bgcolor: '#E3E3E4',
            borderColor: 'rgba(227,38,45,0.5)',
            boxShadow: '0 12px 25px rgba(0,0,0,0.12)',
          },

          '&:hover .feature-icon': {
            filter: 'drop-shadow(0 0 5px rgba(227,38,45,0.25))',
          },
        }}
      >
        <Box
          className="feature-icon"
          sx={{
            width: {
              xs: 43,
              sm: 48,
              lg: 'clamp(42px, 3.1vw, 62px)',
            },
            height: {
              xs: 43,
              sm: 48,
              lg: 'clamp(42px, 3.1vw, 62px)',
            },
            transition: 'filter .3s ease',
          }}
        >
          <Icon />
        </Box>

        <Typography
          component="h3"
          sx={{
            mt: { xs: 1, lg: 1.2 },
            maxWidth: '100%',
            fontFamily: DISPLAY,
            fontSize: 'clamp(15px, 1.05vw, 22px)',
            fontWeight: 700,
            lineHeight: 1.08,
            color: '#090909',
          }}
        >
          {label}
        </Typography>
      </Box>
    </MotionBox>
  );
}

/* ---------------- MAIN SECTION ---------------- */

export default function BuiltForSupporters() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="supporters-title"
      sx={{
        width: '100%',
        overflow: 'hidden',
        bgcolor: '#BDBDBD',
        px: 'clamp(20px, 6.05vw, 124px)',
        py: 'clamp(48px, 5vw, 100px)',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '2560px',
          mx: 'auto',

          display: 'grid',
          gridTemplateColumns: {
            xs: 'minmax(0, 1fr)',
            lg: 'minmax(0, 0.96fr) minmax(0, 1fr)',
          },

          alignItems: 'center',
          columnGap: {
            lg: 'clamp(28px, 3vw, 64px)',
          },

          rowGap: {
            xs: 5,
            lg: 0,
          },
        }}
      >
        {/* IMAGE SIDE */}

        <MotionBox
          initial={reduce ? false : { opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: EASE,
          }}
          sx={{
            position: 'relative',
            width: '100%',
            aspectRatio: '1.95 / 1',
          }}
        >
          {/* ANGLED IMAGE FRAME */}

          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '5%',
              width: '90%',

              overflow: 'hidden',
              borderRadius: {
                xs: '18px',
                sm: '24px',
                lg: '30px',
              },

              transform: 'skewX(-21.5deg)',
              bgcolor: '#111',

              boxShadow:
                '0 18px 42px rgba(0,0,0,0.24)',
            }}
          >
            {/* IMAGE COUNTER SKEW */}

            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                transform:
                  'skewX(21.5deg) scale(1.32)',
              }}
            >
              <Image
                src={IMG_SRC}
                alt="Close-up of premium red and black booster shirt fabric and collar"
                fill
                priority={false}
                sizes="(max-width: 1199px) 90vw, 43vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </Box>
          </Box>

          {/* DECORATIVE SLASHES */}

          <Slashes position="top" />
          <Slashes position="bottom" />
        </MotionBox>

        {/* CONTENT SIDE */}

        <Box sx={{ minWidth: 0 }}>
          {/* HEADING */}

          <MotionBox
            initial={reduce ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: EASE,
            }}
          >
            <Typography
              component="h2"
              id="supporters-title"
              sx={{
                m: 0,
                fontFamily: DISPLAY,
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.025em',
                lineHeight: 0.94,

                fontSize: {
                  xs: 'clamp(38px, 9vw, 58px)',
                  sm: 'clamp(48px, 6vw, 76px)',
                  lg: 'clamp(48px, 4.15vw, 88px)',
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  display: 'block',
                  color: '#08080D',
                }}
              >
                Built for
              </Box>

              <Box
                component="span"
                sx={{
                  display: 'block',
                  color: RED,

                  // Keep the second line together on wide screens
                  whiteSpace: {
                    xs: 'normal',
                    lg: 'nowrap',
                  },

                  // Allow natural wrapping if a laptop is too narrow
                  '@media (min-width: 1200px) and (max-width: 1450px)': {
                    fontSize: '0.88em',
                  },
                }}
              >
                Your supporters
              </Box>
            </Typography>

            {/* DESCRIPTION */}

            <Typography
              component="p"
              sx={{
                m: 0,
                mt: {
                  xs: 2,
                  lg: 'clamp(14px, 1.1vw, 23px)',
                },

                color: '#414147',
                fontFamily: 'inherit',
                fontWeight: 400,
                lineHeight: 1.38,

                fontSize: {
                  xs: 16,
                  sm: 18,
                  lg: 'clamp(16px, 1.48vw, 27px)',
                },

                maxWidth: '100%',
              }}
            >
              More than just a shirt it&apos;s a way to
              unite your team, boost morale and represent
              your community with pride.
            </Typography>
          </MotionBox>

          {/* FEATURE CARDS */}

          <Box
            sx={{
              mt: {
                xs: 3,
                sm: 3.5,
                lg: 'clamp(26px, 2vw, 42px)',
              },

              display: 'grid',
              gridTemplateColumns:
                'repeat(3, minmax(0, 1fr))',

              gap: {
                xs: 1.2,
                sm: 1.5,
                lg: 'clamp(12px, 1vw, 22px)',
              },
            }}
          >
            {FEATURES.map((item, index) => (
              <FeatureBox
                key={item.label}
                item={item}
                index={index}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
