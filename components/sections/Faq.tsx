'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER, SECTION_PT, SECTION_PB } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E3262D';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Replace the placeholder answers with your real copy. */
const PLACEHOLDER = 'lorem ipsum is simply dummy text of the printing and typesetting industry.';

const FAQS = [
  { q: 'Do you have a minimum order for custom sports uniforms?', a: PLACEHOLDER },
  { q: 'How much do custom sports uniforms cost?', a: PLACEHOLDER },
  { q: 'Do you make uniforms for all sports?', a: PLACEHOLDER },
  { q: 'Are your uniforms made in the USA?', a: PLACEHOLDER },
  { q: 'Do you make uniforms for sports at every level?', a: PLACEHOLDER },
  { q: 'Can I design my own team uniform online?', a: PLACEHOLDER },
  { q: 'What makes Diamond one of the best sports uniforms manufacturers?', a: PLACEHOLDER },
];

/**
 * Red eyebrow label above the heading.
 * Design: full-width underline (min ~166px) plus a shorter second line beneath it.
 */
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

function PlusIcon({ open }: { open: boolean }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      aria-hidden
      sx={{
        width: fluid(24, 18),
        height: fluid(24, 18),
        flexShrink: 0,
        fill: 'none',
        stroke: RED,
        strokeWidth: 1.7,
        strokeLinecap: 'round',
        transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        transition: 'transform .45s cubic-bezier(.22,1,.36,1)',
      }}
    >
      <path d="M12 3v18M3 12h18" />
    </Box>
  );
}

function FaqItem({
  item,
  index,
  open,
  onToggle,
}: {
  item: (typeof FAQS)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  const buttonId = `faq-q-${index}`;
  const panelId = `faq-a-${index}`;

  return (
    <MotionBox
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.05 }}
      sx={{
        overflow: 'hidden',
        borderRadius: fluid(24, 18),
        bgcolor: open ? 'rgba(222,222,226,0.7)' : 'rgba(205,205,210,0.5)',
        backdropFilter: 'blur(14px) saturate(1.05)',
        WebkitBackdropFilter: 'blur(14px) saturate(1.05)',
        border: '1px solid',
        borderColor: open ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.55)',
        boxShadow: open
          ? '0 14px 34px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.7)'
          : '0 6px 18px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.55)',
        transition: 'background-color .35s, border-color .35s, box-shadow .35s',
        '&:hover': { borderColor: 'rgba(255,255,255,0.9)' },
      }}
    >
      <Box
        component="button"
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        sx={{
          width: '100%',
          minHeight: fluid(67, 56),
          py: { xs: 1.5, md: 0 },
          pl: fluid(42, 20),
          pr: fluid(60, 18),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          border: 0,
          bgcolor: 'transparent',
          cursor: 'pointer',
          textAlign: 'left',
          font: 'inherit',
          color: '#141414',
          fontWeight: 400,
          fontSize: { xs: 15, sm: 16, md: fluid(26, 15) },
          lineHeight: 1.25,
          '&:focus-visible': { outline: `2px solid ${RED}`, outlineOffset: -3, borderRadius: fluid(24, 18) },
        }}
      >
        <span>{item.q}</span>
        <PlusIcon open={open} />
      </Box>

      <AnimatePresence initial={false}>
        {open && (
          <MotionBox
            key="panel"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
            sx={{ overflow: 'hidden' }}
          >
            <Box
              sx={{
                pl: fluid(42, 20),
                pr: fluid(90, 20),
                pb: fluid(28, 18),
                color: '#55555a',
                fontSize: { xs: 14.5, sm: 15, md: fluid(23, 14) },
                lineHeight: 1.35,
              }}
            >
              {item.a}
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>
    </MotionBox>
  );
}

export default function Faq() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <Box
      component="section"
      aria-labelledby="faq-title"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        color: '#0a0a0a',
        backgroundColor: '#d3d3d5',
        backgroundImage: 'url(/images/banners/bg-3.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // equal spacing: same tokens as the other sections (see lib/fluid.ts)
        pt: SECTION_PT,
        pb: SECTION_PB,
      }}
    >
      {/* Edge blending: the top fades in from the section above (#d1d1d3, Trusted Teams) and the
          bottom fades into the top colour of the quote section (#b6b6b9), so there is no visible seam. */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          background: [
            'linear-gradient(180deg, #d1d1d3 0%, rgba(209,209,211,0.85) 6%, rgba(209,209,211,0) 24%)',
            'linear-gradient(0deg, #b6b6b9 0%, rgba(182,182,185,0.85) 6%, rgba(182,182,185,0) 26%)',
          ].join(','),
        }}
      />

      <Box sx={{ maxWidth: 2560, mx: 'auto', px: GUTTER }}>
        {/* Heading */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EASE }}
          sx={{ textAlign: 'center' }}
        >
          <SectionLabel>FAQs</SectionLabel>

          <Box
            component="h2"
            id="faq-title"
            sx={{
              m: 0,
              mt: fluid(26, 16),
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: 1.05,
              letterSpacing: '0.005em',
              fontSize: { xs: 'clamp(26px, 8vw, 42px)', md: fluid(72, 36) },
            }}
          >
            Frequently asked <Box component="span" sx={{ color: RED }}>questions</Box>
          </Box>
        </MotionBox>

        {/* Accordion */}
        <Box
          sx={{
            mx: 'auto',
            mt: { xs: 5, lg: fluid(68, 44) },
            width: { xs: '100%', md: 'min(100%, max(49.1vw, 680px), 1257px)' },
            display: 'flex',
            flexDirection: 'column',
            gap: fluid(17, 10),
          }}
        >
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}