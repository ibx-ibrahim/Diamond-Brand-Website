'use client';

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E3262D';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const DESC = 'lorem ipsum is simply dummy text of the printing and typesetting industry.,';

const TEAMS = [
  {
    tag: 'Custom baseball uniforms',
    name: 'Riverdale Wildcats',
    src: '/images/teams/team1.png',
    alt: 'Riverdale Wildcats players in orange uniforms celebrating together',
  },
  {
    tag: 'Custom basketball uniforms',
    name: 'Lakeview Rangers',
    src: '/images/teams/team2.png',
    alt: 'Lakeview Rangers team standing together in black uniforms',
  },
  {
    tag: 'Custom football uniforms',
    name: 'Westfield Titans',
    src: '/images/teams/team3.png',
    alt: 'Westfield Titans players in white and blue jerseys smiling arm in arm',
  },
] as const;

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

function TeamCard({ team, index }: { team: (typeof TEAMS)[number]; index: number }) {
  const reduce = useReducedMotion();

  return (
    <MotionBox
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: EASE, delay: index * 0.08 }}
      sx={{ minWidth: 0 }}
    >
      <Box
        component="article"
        sx={{
          height: '100%',
          p: fluid(15, 12),
          pb: fluid(40, 24),
          borderRadius: fluid(32, 22),
          bgcolor: '#dbdbdd',
          boxShadow: '0 8px 22px rgba(0,0,0,0.13), 0 1px 0 rgba(255,255,255,0.55) inset',
          transition: 'box-shadow .4s, transform .4s cubic-bezier(.22,1,.36,1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 16px 36px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.6) inset',
          },
          '&:hover img': { transform: 'scale(1.04)' },
        }}
      >
        {/* photo */}
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            aspectRatio: '702 / 733',
            borderRadius: fluid(24, 16),
            bgcolor: '#b9b9bc',
          }}
        >
          <Image
            src={team.src}
            alt={team.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 900px) 92vw, 30vw"
            style={{
              objectFit: 'cover',
              transition: 'transform .9s cubic-bezier(.22,1,.36,1)',
            }}
          />
        </Box>

        {/* copy */}
        <Box sx={{ px: 0, pt: fluid(33, 18) }}>
          <Box
            component="span"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              height: fluid(31, 24),
              px: fluid(8, 8),
              borderRadius: fluid(10, 8),
              border: `1px solid ${RED}`,
              color: RED,
              fontWeight: 500,
              fontSize: fluid(14, 10.5),
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            {team.tag}
          </Box>

          <Box
            component="h3"
            sx={{
              m: 0,
              mt: fluid(14, 10),
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: 1.05,
              letterSpacing: '0.01em',
              color: '#0a0a0a',
              fontSize: { xs: 26, sm: 28, md: fluid(40, 21) },
            }}
          >
            {team.name}
          </Box>

          <Box
            component="p"
            sx={{
              m: 0,
              mt: fluid(12, 8),
              maxWidth: { xs: '100%', md: '76%' },
              fontWeight: 400,
              lineHeight: 1.2,
              color: '#59595c',
              fontSize: { xs: 16, sm: 17, md: fluid(27, 13.5) },
            }}
          >
            {DESC}
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default function TrustedTeams() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="teams-title"
      sx={{
        position: 'relative',
        bgcolor: '#d1d1d3',
        color: '#0a0a0a',
        pt: { xs: 9, sm: 10, lg: fluid(145, 80) },
        pb: { xs: 9, lg: fluid(130, 64) },
      }}
    >
      <Box sx={{ maxWidth: 2560, mx: 'auto', px: GUTTER }}>
        {/* Heading */}
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EASE }}
          sx={{ textAlign: 'center' }}
        >
          <SectionLabel>Diamond Brand</SectionLabel>

          <Box
            component="h2"
            id="teams-title"
            sx={{
              m: 0,
              mt: fluid(22, 14),
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: 1.05,
              letterSpacing: '0.005em',
              fontSize: { xs: 'clamp(28px, 9vw, 44px)', md: fluid(72, 38) },
            }}
          >
            Trusted <Box component="span" sx={{ color: RED }}>teams</Box>
          </Box>

          <Box
            component="p"
            sx={{
              m: '0 auto',
              mt: fluid(8, 10),
              maxWidth: { xs: 520, md: 'min(34vw, 880px)' },
              minWidth: { md: 440 },
              fontWeight: 400,
              lineHeight: 1.2,
              color: '#111',
              fontSize: { xs: 15, sm: 16, md: fluid(25, 15) },
            }}
          >
            real teams. real stories. see how Diamond Brand helps teams bring their vision to life with
            custom uniforms that perform on and off the field.
          </Box>
        </MotionBox>

        {/* Cards */}
        <Box
          sx={{
            mt: { xs: 5, lg: fluid(52, 40) },
            mx: 'auto',
            maxWidth: { xs: 560, md: 'none' },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
            columnGap: { xs: 2, md: 2, lg: fluid(28, 16) },
            rowGap: 3,
          }}
        >
          {TEAMS.map((team, i) => (
            <TeamCard key={team.name} team={team} index={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}