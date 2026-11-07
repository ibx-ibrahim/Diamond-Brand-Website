'use client';

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import SchoolOutlined from '@mui/icons-material/SchoolOutlined';
import EmojiEventsOutlined from '@mui/icons-material/EmojiEventsOutlined';
import GroupsOutlined from '@mui/icons-material/GroupsOutlined';
import ApartmentOutlined from '@mui/icons-material/ApartmentOutlined';
import type { SvgIconComponent } from '@mui/icons-material';
import { useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';
import { DISPLAY, EASE, MotionBox, RED, SectionLabel } from './Shared';

/* Photos live in /public/images/team-stores/ */
const AUDIENCES: {
  title: string;
  src: string;
  alt: string;
  position: string;
  Icon: SvgIconComponent;
}[] = [
  {
    title: 'Schools & Universities',
    src: '/images/teams/building.png',
    alt: 'Historic school building with a clock tower',
    position: '22% 50%',
    Icon: SchoolOutlined,
  },
  {
    title: 'Sports Teams & Clubs',
    src: '/images/teams/team8.png',
    alt: 'Soccer players resting beside the pitch',
    position: '40% 50%',
    Icon: EmojiEventsOutlined,
  },
  {
    title: 'Booster Clubs',
    src: '/images/teams/team5.png',
    alt: 'Fans with painted faces cheering in a stadium',
    position: '20% 50%',
    Icon: GroupsOutlined,
  },
  {
    title: 'Organizations',
    src: '/images/teams/organization.png',
    alt: 'Classical office building with a landscaped lawn',
    position: '75% 50%',
    Icon: ApartmentOutlined,
  },
];

function AudienceCard({ item, index }: { item: (typeof AUDIENCES)[number]; index: number }) {
  const reduce = useReducedMotion();
  const { Icon } = item;

  return (
    <Box component="li" sx={{ listStyle: 'none', minWidth: 0 }}>
      <MotionBox
        initial={reduce ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
        sx={{
          position: 'relative',
          aspectRatio: '405 / 395',
          overflow: 'hidden',
          borderRadius: fluid(12, 10),
          bgcolor: '#111',
          boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
          '& img': { transition: 'transform .9s cubic-bezier(.22,1,.36,1)' },
          '&:hover img': { transform: 'scale(1.05)' },
        }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          quality={80}
          sizes="(max-width: 600px) 92vw, (max-width: 1200px) 46vw, 24vw"
          style={{ objectFit: 'cover', objectPosition: item.position }}
        />

        {/* fade to black at the bottom so the title is always readable */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0,0,0,0) 36%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.92) 100%)',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            px: 1.5,
            pb: fluid(28, 16),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <Icon aria-hidden sx={{ fontSize: fluid(56, 36) }} />
          <Box
            component="h3"
            sx={{
              m: 0,
              mt: fluid(16, 8),
              fontFamily: DISPLAY,
              fontWeight: 400,
              lineHeight: 1.1,
              fontSize: fluid(36, 18),
              textShadow: '0 2px 14px rgba(0,0,0,0.5)',
            }}
          >
            {item.title}
          </Box>
        </Box>
      </MotionBox>
    </Box>
  );
}

export default function StoreAudience() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      aria-labelledby="audience-title"
      sx={{ color: '#0a0a0a' }}
    >
      <Box sx={{ maxWidth: 2560, mx: 'auto', px: GUTTER }}>
        <MotionBox
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EASE }}
          sx={{ textAlign: 'center' }}
        >
          <SectionLabel>Made for every team</SectionLabel>

          <Box
            component="h2"
            id="audience-title"
            sx={{
              m: 0,
              mt: fluid(13, 10),
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: 1,
              letterSpacing: '0.005em',
              fontSize: { xs: 'clamp(26px, 7.8vw, 40px)', md: fluid(62, 30) },
            }}
          >
            <Box component="span" sx={{ display: 'block' }}>
              One store for your
            </Box>
            <Box component="span" sx={{ display: 'block', color: RED }}>
              Entire community.
            </Box>
          </Box>
        </MotionBox>

        <Box
          component="ul"
          sx={{
            m: 0,
            p: 0,
            mt: { xs: 4, md: fluid(44, 24) },
            display: 'grid',
            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(4, minmax(0, 1fr))',
            },
            gap: { xs: 2, md: fluid(28, 12) },
          }}
        >
          {AUDIENCES.map((a, i) => (
            <AudienceCard key={a.title} item={a} index={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}