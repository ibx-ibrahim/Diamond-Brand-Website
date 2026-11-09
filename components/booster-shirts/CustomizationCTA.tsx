
'use client';

import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, Button } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Palette,
  Hash,
  Gem,
  Ruler,
  ArrowRight,
} from 'lucide-react';

const MotionBox = motion.create(Box);

const RED = '#E3262D';

const features = [
  { title: 'Choose Your Colors', Icon: Palette },
  { title: 'Add Team Name & Numbers', Icon: Hash },
  { title: 'Include Logos & Graphics', Icon: Gem },
  { title: 'Pick Your Style & Fit', Icon: Ruler },
];

export default function CustomizationCTA() {
  const reduceMotion = useReducedMotion();

  const floatAnimation = reduceMotion
    ? {}
    : {
        y: [0, -9, 0],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut' as const,
        },
      };

  return (
    <Box
      component="section"
      id="customize"
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        bgcolor: '#BDBDBD',
        color: '#101116',
        py: { xs: 7, sm: 9, lg: 12 },
        px: { xs: 2.5, sm: 4, lg: 7 },
      }}
    >
      {/* Background lighting */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.22), transparent 65%)',
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1800,
          mx: 'auto',

          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'minmax(0, 1fr) minmax(0, 1fr)',
            lg: 'minmax(0, .95fr) minmax(0, 1.1fr) minmax(0, 1fr)',
          },
          gridTemplateAreas: {
            xs: '"copy" "visual" "features"',
            md: '"copy visual" "features features"',
            lg: '"copy visual features"',
          },

          alignItems: 'center',
          gap: {
            xs: 3,
            md: 4,
            lg: 5,
          },
        }}
      >
        {/* LEFT CONTENT */}
        <MotionBox
          sx={{
            gridArea: 'copy',
            position: 'relative',
            zIndex: 3,
          }}
          initial={reduceMotion ? false : { opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            component="h2"
            sx={{
              fontFamily: 'var(--font-display), sans-serif',
              fontWeight: 900,
              textTransform: 'uppercase',
              fontSize: {
                xs: 'clamp(37px, 9vw, 54px)',
                sm: 'clamp(48px, 5vw, 66px)',
                lg: 'clamp(42px, 3.3vw, 76px)',
              },
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
              color: '#080A10',
            }}
          >
            MAKE IT
            <Box
              component="span"
              sx={{
                display: 'block',
                color: RED,
              }}
            >
              TRULY YOURS
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              maxWidth: 480,
              fontSize: {
                xs: 16,
                sm: 19,
                lg: 21,
              },
              lineHeight: 1.45,
              fontWeight: 500,
              color: '#424249',
            }}
          >
            Fully customizable booster shirts designed around your
            team&apos;s identity.
          </Typography>

          <Button
            href="#contact"
            variant="contained"
            endIcon={<ArrowRight size={19} />}
            sx={{
              mt: 2.5,
              px: 2.5,
              py: 1.25,
              borderRadius: '10px',
              textTransform: 'none',
              fontSize: { xs: 15, sm: 17 },
              fontWeight: 700,
              color: '#fff',
              background:
                'linear-gradient(180deg, #F13A3A 0%, #A91419 100%)',
              boxShadow: '0 7px 18px rgba(180,20,25,0.22)',
              transition: 'all .3s ease',

              '&:hover': {
                background:
                  'linear-gradient(180deg, #FF4848 0%, #BD171D 100%)',
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 24px rgba(180,20,25,0.3)',
              },
            }}
          >
            Customize Your Shirt
          </Button>
        </MotionBox>

        {/* CENTER SHIRT VISUAL */}
        <Box
          sx={{
            gridArea: 'visual',
            position: 'relative',
            width: '100%',
            maxWidth: { xs: 440, md: 480, lg: 560 },
            aspectRatio: '1 / 1',
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            isolation: 'isolate',
          }}
        >
          {/* Ambient glow */}
          <Box
            sx={{
              position: 'absolute',
              inset: '20%',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(227,38,45,0.13), transparent 70%)',
              filter: 'blur(25px)',
              zIndex: 0,
            }}
          />

          {/* Orbit ring 1 */}
          <Box
            sx={{
              position: 'absolute',
              width: '96%',
              height: '96%',
              borderRadius: '50%',
              border: '1px solid rgba(227,38,45,0.5)',
              zIndex: 0,
              animation: reduceMotion
                ? 'none'
                : 'orbitOne 32s linear infinite',

              '@keyframes orbitOne': {
                from: { transform: 'rotate(0deg)' },
                to: { transform: 'rotate(360deg)' },
              },

              '&::before': {
                content: '""',
                position: 'absolute',
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: 'rgba(227,38,45,0.7)',
                top: '0%',
                left: '50%',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 12px rgba(227,38,45,0.3)',
              },
            }}
          />

          {/* Orbit ring 2 */}
          <Box
            sx={{
              position: 'absolute',
              width: '79%',
              height: '79%',
              borderRadius: '50%',
              border: '1px solid rgba(227,38,45,0.36)',
              zIndex: 0,
              animation: reduceMotion
                ? 'none'
                : 'orbitTwo 24s linear infinite reverse',

              '@keyframes orbitTwo': {
                from: { transform: 'rotate(0deg)' },
                to: { transform: 'rotate(360deg)' },
              },

              '&::before': {
                content: '""',
                position: 'absolute',
                width: 7,
                height: 7,
                borderRadius: '50%',
                bgcolor: 'rgba(227,38,45,0.65)',
                top: '50%',
                right: '-3px',
              },
            }}
          />

          {/* Orbit ring 3 */}
          <Box
            sx={{
              position: 'absolute',
              width: '112%',
              height: '112%',
              borderRadius: '50%',
              border: '1px dashed rgba(227,38,45,0.15)',
              zIndex: 0,
              animation: reduceMotion
                ? 'none'
                : 'orbitThree 55s linear infinite',

              '@keyframes orbitThree': {
                from: { transform: 'rotate(0deg)' },
                to: { transform: 'rotate(360deg)' },
              },
            }}
          />

          {/* Floating particles */}
          {[
            { top: '15%', left: '12%', delay: '0s' },
            { top: '24%', right: '8%', delay: '1s' },
            { bottom: '17%', left: '14%', delay: '2s' },
            { bottom: '22%', right: '12%', delay: '0.5s' },
          ].map((particle, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                ...particle,
                width: i % 2 === 0 ? 5 : 7,
                height: i % 2 === 0 ? 5 : 7,
                borderRadius: '50%',
                bgcolor: RED,
                opacity: 0.55,
                boxShadow: '0 0 10px rgba(227,38,45,0.35)',
                zIndex: 1,
                animation: reduceMotion
                  ? 'none'
                  : `particleFloat ${3 + i * 0.5}s ease-in-out ${particle.delay} infinite alternate`,

                '@keyframes particleFloat': {
                  from: { transform: 'translateY(0px)', opacity: 0.25 },
                  to: { transform: 'translateY(-15px)', opacity: 0.8 },
                },
              }}
            />
          ))}

          {/* Shirt image - always in front of particles */}
          <MotionBox
            animate={floatAnimation}
            sx={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/images/products/cta-shirt2.png"
              alt="Custom black and red booster jersey"
              width={1312}
              height={1199}
              priority
              sizes="(max-width: 600px) 90vw, (max-width: 1200px) 45vw, 32vw"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '100%',
                objectFit: 'contain',
                filter:
                  'drop-shadow(0 18px 22px rgba(0,0,0,0.16))',
              }}
            />
          </MotionBox>
        </Box>

        {/* RIGHT FEATURE CARDS */}
        <Box
          sx={{
            gridArea: 'features',
            position: 'relative',
            zIndex: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: '1fr',
            },
            gap: { xs: 1.5, sm: 2, lg: 2.1 },
            width: '100%',
          }}
        >
          {features.map(({ title, Icon }, i) => (
            <MotionBox
              key={title}
              initial={
                reduceMotion ? false : { opacity: 0, x: 25 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
              }}
              whileHover={reduceMotion ? {} : { x: 5 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                minHeight: { xs: 56, sm: 62, lg: 66 },
                px: { xs: 1.7, sm: 2 },
                py: 1.2,

                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.8)',
                bgcolor: 'rgba(255,255,255,0.32)',

                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',

                boxShadow: '0 3px 12px rgba(0,0,0,0.025)',
                transition: 'background .3s, box-shadow .3s',

                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.55)',
                  boxShadow: '0 7px 18px rgba(0,0,0,0.08)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: RED,
                }}
              >
                <Icon size={25} strokeWidth={1.8} />
              </Box>

              <Typography
                sx={{
                  fontSize: {
                    xs: 15,
                    sm: 16,
                    lg: 'clamp(16px, 1.25vw, 22px)',
                  },
                  fontWeight: 600,
                  lineHeight: 1.25,
                  color: '#111116',
                }}
              >
                {title}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
