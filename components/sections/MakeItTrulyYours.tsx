'use client';

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E5282D';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};
const spin: Variants = {
  hidden: {},
  show: { rotate: 360 },
};

/** SVG helper for step icons */
function Svg({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 64 64"
      aria-hidden
      sx={{
        display: 'block',
        width: '100%',
        height: '100%',
        fill: 'none',
        stroke: 'rgba(255,255,255,0.92)',
        strokeWidth: 2.4,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        overflow: 'visible',
      }}
    >
      {children}
    </Box>
  );
}

/** step icons */
const PaletteIcon = () => (
  <Svg>
    <path d="M32 6C17 6 6 17 6 31s11 25 22 25c5 0 6-4 4-7s0-6 4-7h8c8 0 14-5 14-13C58 17 46 6 32 6z" />
    <circle cx="20" cy="30" r="3.5" />
    <circle cx="27" cy="19" r="3.5" />
    <circle cx="40" cy="19" r="3.5" />
    <circle cx="47" cy="30" r="3.5" />
  </Svg>
);

const NumberIcon = () => (
  <Svg>
    <path d="M32 8L12 30h40zM32 42l-12 14h24l-12-14z" />
  </Svg>
);

const ShirtIcon = () => (
  <Svg>
    <path d="M22 6L4 15l7 15 8-4v32h26V26l8 4 7-15-18-9c-1.5 5-8 8-10 8s-8.5-3-10-8z" />
  </Svg>
);

const GraphicsIcon = () => (
  <Svg>
    <path d="M6 14l52 12-26 32z" />
    <path d="M6 14l26 18M58 26L32 32M32 58V32M20 20l12 12M44 24L32 32" />
  </Svg>
);

const ICONS: Record<string, React.ComponentType<{}>> = {
  palette: PaletteIcon,
  number: NumberIcon,
  shirt: ShirtIcon,
  graphics: GraphicsIcon,
};

type STEP_ID = keyof typeof ICONS;

const STEPS: { id: STEP_ID; title: string }[] = [
  { id: 'palette', title: 'Choose Your Colors' },
  { id: 'number', title: 'Add Team Name & Numbers' },
  { id: 'graphics', title: 'Include Logos & Graphics' },
  { id: 'shirt', title: 'Pick Your Style & Fit' },
];

/**
 * Premium "Make It Truly Yours" section with split shirt and circular particle motion.
 */
export default function MakeItTrulyYours() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="truly-yours-title"
      sx={{
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: GUTTER,
        bgcolor: '#04060b',
        color: '#fff',
      }}
    >
      {/* Split shirt image - red/black on left, wireframe on right */}
      <Box
        sx={{
          position: 'relative',
          width: '85%',
          maxWidth: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: fluid(40, 24),
          overflow: 'hidden',
          boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
        }}
      >
        {/* Left side - red and black jersey */}
        <Box
          sx={{
            width: '45%',
            height: '100%',
            backgroundImage: 'linear-gradient(135deg, #E52C32 0%, #A5141A 100%)',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 1,
          }}
        >
          <Image
            src="/images/hero/red-hoodie.png"
            alt="Red and black booster shirt"
            fill
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))',
            }}
          />
        </Box>

        {/* Right side - wireframe/black design */}
        <Box
          sx={{
            width: '45%',
            height: '100%',
            backgroundColor: '#0a0a0a',
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 1,
          }}
        >
          <Image
            src="/images/hero/red-hoodie.png"
            alt="Wireframe booster shirt"
            fill
            style={{
              opacity: 0.85,
              filter: 'grayscale(100%) contrast(1.2)',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </Box>
      </Box>

      {/* Circular particle background with premium motion */}
      <motion.div
        animate={reduce ? undefined : { rotate: 360 }}
        transition={reduce ? undefined : { duration: 15, ease: 'linear', repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '180%',
          height: '180%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <motion.span
          animate={
            reduce
              ? undefined
              : { x: 150, y: 150, opacity: 0.15 }
          }
          initial={reduce ? undefined : { x: -150, y: -150, opacity: 0.05 }}
          transition={reduce ? undefined : { duration: 12, ease: 'easeInOut', repeat: Infinity, delay: 3 }}
          style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#ff4d4d',
            opacity: 0.8,
            boxShadow: '0 0 15px rgba(255, 77, 77, 0.6)',
          }}
        />
      </motion.div>

      {/* Subtle glow effect */}
      <motion.div
        animate={reduce ? undefined : { scale: [1, 1.4, 1] }}
        transition={reduce ? undefined : { duration: 6, ease: 'easeInOut', repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '150%',
          height: '150%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <motion.span
          animate={reduce ? undefined : { opacity: 0.08 }}
          initial={reduce ? undefined : { opacity: 0.03 }}
          transition={reduce ? undefined : { duration: 6, ease: 'easeInOut', repeat: Infinity }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 77, 77, 0.1) 0%, transparent 70%)',
            opacity: 0.6,
          }}
        />
      </motion.div>

      {/* Main content */}
      <Box
        component="div"
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '700px',
          textAlign: 'center',
        }}
      >
        {/* Headline */}
        <Box
          id="truly-yours-title"
          role="heading"
          aria-level={2}
          sx={{
            fontFamily: DISPLAY,
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.005em',
            lineHeight: 1.1,
            fontSize: { xs: 'clamp(32px, 9vw, 56px)', md: fluid(120, 34) },
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
            marginBottom: fluid(24, 16),
          }}
        >
          <MotionBox variants={rise} sx={{ display: 'block' }}>
            Make every shirt
          </MotionBox>
          <MotionBox variants={rise} sx={{ display: 'block', color: RED }}>
            Your own
          </MotionBox>
        </Box>

        {/* Description */}
        <Box
          sx={{
            mt: fluid(24, 16),
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.5,
            color: 'rgba(255,255,255,0.9)',
            fontSize: { xs: 16, sm: 18, lg: fluid(32, 15) },
          }}
        >
          Fully customizable booster shirts designed around your team's identity. Choose colors, add logos, personalize numbers, and pick the perfect fit for your supporters.
        </Box>

        {/* Step cards */}
        <MotionBox variants={rise} sx={{ mt: fluid(40, 24), display: 'grid', justifyContent: 'center' }}>
          <Box
            sx={{
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
              },
              gap: fluid(24, 16),
            }}
          >
            {STEPS.map((step, i) => (
              <StepCard key={step.id} step={step} index={i} />
            ))}
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
}

function StepCard({ step, index }: { step: { id: STEP_ID; title: string }; index: number }) {
  const reduce = useReducedMotion();
  const Icon = ICONS[step.id];

  return (
    <MotionBox variants={rise} initial={reduce ? false : 'hidden'} whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.1 }} sx={{
      aspectRatio: '156 / 120',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'rgba(255,255,255,0.16)',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: fluid(8, 6),
      px: fluid(12, 10),
      py: fluid(10, 8),
      transition: 'all 0.3s ease',
      '&:hover': { transform: 'translateY(-4px)', bgcolor: 'rgba(255,255,255,0.24)' },
    }}>
      <Box sx={{ width: fluid(48, 34), height: fluid(48, 34) }}>
        <Icon />
      </Box>
      <Box
        sx={{
          mt: fluid(10, 8),
          fontWeight: 400,
          lineHeight: 1.1,
          color: 'rgba(255,255,255,0.92)',
          fontSize: { xs: 13, sm: 12, lg: fluid(16, 11.5) },
          textAlign: 'center',
        }}
      >
        {step.title}
      </Box>
    </MotionBox>
  );
}