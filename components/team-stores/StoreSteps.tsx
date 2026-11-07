'use client';

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';
import { CartIcon, cl, DISPLAY, DocIcon, EASE, HeadingPill, MonitorIcon, MotionBox } from './Shared';

/** Transparent smoke PNG (same one used on the home page CTA). Change the path if yours differs. */
const SMOKE_SRC = '/images/banners/cta-bg-2.png';

const DESC = 'lorem ipsum is simply dummy text of the printing and typesetting industry.,';

const STEPS: { title: string; Icon: React.ComponentType<{ stroke?: string; strokeWidth?: number }> }[] = [
  { title: 'Tell us about your team', Icon: DocIcon },
  { title: 'We build your store', Icon: MonitorIcon },
  { title: 'Start ordering', Icon: CartIcon },
];

function StepCard({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  const reduce = useReducedMotion();
  const { title, Icon } = step;

  return (
    <Box component="li" sx={{ listStyle: 'none', minWidth: 0 }}>
      <MotionBox
        initial={reduce ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
        sx={{
          height: '100%',
          minHeight: { xs: 96, md: fluid(196, 120) },
          display: 'flex',
          alignItems: 'center',
          px: { xs: 2, md: cl(14, 17, 23) },
          py: 2,
          borderRadius: fluid(20, 14),
          bgcolor: 'rgba(120,120,124,0.5)',
          backgroundImage: 'linear-gradient(180deg, rgba(160,160,164,0.28) 0%, rgba(90,90,94,0.18) 100%)',
          border: '1px solid rgba(255,255,255,0.22)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.22)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 1.5, md: cl(10, 18, 24) }, minWidth: 0 }}>
          <Box sx={{ flex: '0 0 auto', width: { xs: 28, md: cl(26, 34, 45) }, height: { xs: 28, md: cl(26, 34, 45) } }}>
            <Icon stroke="#fff" strokeWidth={2.2} />
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Box
              component="h3"
              sx={{
                m: 0,
                fontWeight: 400,
                fontSize: { xs: 20, md: cl(15, 25.8, 34) },
                lineHeight: 1.05,
                textTransform: 'uppercase',
                color: '#fff',
              }}
            >
              {title}
            </Box>
            <Box
              component="p"
              sx={{
                m: 0,
                mt: fluid(9, 6),
                fontWeight: 400,
                fontSize: { xs: 14, md: cl(11, 13.5, 18) },
                lineHeight: 1.15,
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              {DESC}
            </Box>
          </Box>
        </Box>
      </MotionBox>
    </Box>
  );
}

export default function StoreSteps() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="steps-title"
      sx={{
        position: 'relative',
        zIndex: 1, // lets the drop shadow fall onto the next section
        isolation: 'isolate',
        overflow: 'hidden',
        bgcolor: '#212122',
        color: '#fff',
        px: GUTTER,
        py: { xs: 7, md: fluid(100, 56) },
        boxShadow: '0 16px 36px rgba(0,0,0,0.38)',
      }}
    >
      {/* smoke drifting along the bottom */}
      <MotionBox
        aria-hidden
        animate={reduce ? undefined : { x: ['-2.5%', '2.5%'] }}
        transition={{ duration: 24, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          left: '-5%',
          right: '-5%',
          bottom: 0,
          height: '100%',
          zIndex: -1,
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      >
        <Image
          src={SMOKE_SRC}
          alt=""
          fill
          sizes="110vw"
          style={{ objectFit: 'cover', objectPosition: 'bottom center' }}
        />
      </MotionBox>

      <Box
        sx={{
          maxWidth: 2560,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: `minmax(0, 1fr) ${fluid(1123, 600)}` },
          columnGap: fluid(94, 32),
          rowGap: { xs: 5, lg: 0 },
          alignItems: 'center',
        }}
      >
        {/* text */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              height: fluid(38, 30),
              px: fluid(14, 10),
              borderRadius: fluid(6, 4),
              border: '1px solid rgba(196,32,42,0.6)',
              bgcolor: 'rgba(170,20,30,0.12)',
              fontWeight: 500,
              fontSize: fluid(19, 12),
              textTransform: 'uppercase',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            Simple process
          </Box>

          <Box
            component="h2"
            id="steps-title"
            sx={{
              m: 0,
              mt: fluid(24, 14),
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.005em',
              lineHeight: 1,
              fontSize: { xs: 'clamp(30px, 9.5vw, 52px)', md: fluid(88, 34) },
            }}
          >
            <Box component="span" sx={{ display: 'block' }}>
              Your team store
            </Box>
            <HeadingPill height={fluid(106, 48)}>In 3 easy steps.</HeadingPill>
          </Box>
        </MotionBox>

        {/* cards */}
        <Box
          component="ol"
          sx={{
            m: 0,
            p: 0,
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'repeat(3, minmax(0, 1fr))' },
            gap: { xs: 2, md: fluid(30, 12) },
          }}
        >
          {STEPS.map((s, i) => (
            <StepCard key={s.title} step={s} index={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}