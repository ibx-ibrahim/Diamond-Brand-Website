'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import ArrowForward from '@mui/icons-material/ArrowForward';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import PhoneOutlined from '@mui/icons-material/PhoneOutlined';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

import { fluid } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const TEXT = '#4f4f4f';

const stack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

type FooterLink = { label: string; href: string };

// Update the hrefs to match your routes.
const SHOP: FooterLink[] = [
  { label: 'Custom Uniforms', href: '/shop/custom-uniforms' },
  { label: 'Custom Apparel', href: '/shop/custom-apparel' },
  { label: 'Shirts & Hoodies', href: '/shop/shirts-hoodies' },
  { label: 'Sports Accessories', href: '/shop/sports-accessories' },
  { label: 'Team Stores', href: '/team-stores' },
];
const QUICK: FooterLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Start an Order', href: '/customize' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'FAQs', href: '/faqs' },
];
const SUPPORT: FooterLink[] = [
  { label: 'Ordering Process', href: '/ordering-process' },
  { label: 'Shipping & Production', href: '/shipping' },
  { label: 'Artwork Guidelines', href: '/artwork-guidelines' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
];

const headingSx = {
  m: 0,
  fontSize: fluid(36, 18),
  fontWeight: 500,
  lineHeight: 1.1,
  letterSpacing: '0.005em',
  textTransform: 'uppercase' as const,
  color: '#0a0a0a',
};

const linkSx = {
  color: TEXT,
  textDecoration: 'none',
  fontSize: fluid(28, 15),
  lineHeight: 1.2,
  transition: 'color .2s',
  '&:hover, &:focus-visible': { color: '#E5282D' },
};

function LinkColumn({
  title,
  links,
  fullWidthOnPhone = false,
}: {
  title: string;
  links: FooterLink[];
  /** span both columns of the 2-col phone grid so an odd column isn't left alone */
  fullWidthOnPhone?: boolean;
}) {
  return (
    <Box
      component="nav"
      aria-label={title}
      sx={{
        textAlign: 'center',
        minWidth: 0,
        gridColumn: { xs: fullWidthOnPhone ? '1 / -1' : 'auto', sm: 'auto' },
      }}
    >
      <Box component="h3" sx={headingSx}>
        {title}
      </Box>
      <Box
        component="ul"
        sx={{
          listStyle: 'none',
          m: 0,
          mt: fluid(22, 12),
          p: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: fluid(18, 10),
        }}
      >
        {links.map((l) => (
          <li key={l.label}>
            <Box component={Link} href={l.href} sx={linkSx}>
              {l.label}
            </Box>
          </li>
        ))}
      </Box>
    </Box>
  );
}

export default function Footer() {
  const reduce = useReducedMotion();

  // Set after mount: reading the current date during render is not allowed in a Client Component
  // under Next 16 prerendering. The span reserves the width so nothing jumps when the year appears.
  const [year, setYear] = React.useState<number | null>(null);
  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        color: '#0a0a0a',
        background:
          'linear-gradient(180deg, #ffffff 0%, #ffffff 14%, #F6DADB 38%, #EFB9BB 62%, #EBA8AB 80%, #EBA9AC 100%)',
        pt: { xs: 3, sm: 4, md: fluid(55, 28) },
      }}
    >
      {/* ── Top: logo + tagline + columns ── */}
      <MotionBox
        variants={stack}
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 2560,
          mx: 'auto',
          px: { xs: 2.5, sm: 4, md: 6 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <MotionBox variants={rise} sx={{ lineHeight: 0 }}>
          <Link href="/" aria-label="Diamond Brand home">
            {/*
              The header logo is a LIGHT (white) SVG made for the dark hero, so on this light footer it
              disappears. invert(1) turns the white to dark; hue-rotate(180deg) puts any coloured
              accents (e.g. the red diamond) back to their original hue.
              If you export a dark version of the logo, use it here and delete the `filter` line.
            */}
            <Image
              src="/logos/logo.png"
              alt="Diamond Brand"
              width={216}
              height={246}
              unoptimized
              style={{
                width: 'clamp(96px, 8.5vw, 216px)',
                height: 'auto',
              }}
            />
          </Link>
        </MotionBox>

        <MotionBox
          variants={rise}
          sx={{ mt: { xs: 1.5, md: fluid(14, 8) }, maxWidth: 1400 }}
        >
          <Box
            component="p"
            sx={{
              m: 0,
              fontSize: fluid(28, 15),
              lineHeight: 1.5,
              color: '#050505',
            }}
          >
            <Box component="span" sx={{ display: 'block' }}>
              Custom uniforms and apparel built for teams, schools, organizations, and businesses.
            </Box>
            <Box component="span" sx={{ display: 'block' }}>
              Your team. Your identity.
            </Box>
          </Box>
        </MotionBox>

        {/* Columns: 2-up on phones, 3-up on tablets, one row from 1280px */}
        <MotionBox
          variants={rise}
          sx={{
            width: '100%',
            mt: { xs: 3.5, lg: fluid(48, 28) },
            display: { xs: 'grid', lg: 'flex' },
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              sm: 'repeat(3, minmax(0, 1fr))',
            },
            rowGap: { xs: 3.5, lg: 0 },
            columnGap: { xs: 2, lg: fluid(130, 40) },
            justifyContent: { lg: 'center' },
            alignItems: { lg: 'flex-start' },
          }}
        >
          <LinkColumn title="Shop" links={SHOP} />
          <LinkColumn title="Quick Links" links={QUICK} />
          <LinkColumn title="Customer Support" links={SUPPORT} fullWidthOnPhone />

          {/* Get in touch */}
          <Box
            sx={{
              textAlign: 'center',
              minWidth: 0,
              gridColumn: { xs: '1 / -1', lg: 'auto' },
              mt: { lg: fluid(11, 0) },
            }}
          >
            <Box component="h3" sx={headingSx}>
              Get in touch
            </Box>
            <Box
              component="p"
              sx={{
                m: 0,
                mt: fluid(22, 12),
                color: TEXT,
                fontSize: fluid(28, 15),
                lineHeight: 1.55,
              }}
            >
              <Box component="span" sx={{ display: 'block' }}>
                Have a team project in mind?
              </Box>
              <Box component="span" sx={{ display: 'block' }}>
                Let&apos;s create something custom.
              </Box>
            </Box>

            <Box
              component={Link}
              href="/customize"
              sx={{
                mt: fluid(16, 9),
                display: 'inline-flex',
                alignItems: 'center',
                gap: fluid(13, 8),
                color: '#3a3a3a',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: fluid(28, 15),
                lineHeight: 1.2,
                textTransform: 'uppercase',
                '& svg': { transition: 'transform .3s cubic-bezier(.22,1,.36,1)' },
                '&:hover svg': { transform: 'translateX(4px)' },
                '&:hover': { color: '#E5282D' },
              }}
            >
              Start your order
              <ArrowForward sx={{ fontSize: fluid(30, 18) }} />
            </Box>

            <Box
              sx={{
                mt: fluid(22, 14),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: fluid(18, 10),
              }}
            >
              <Box
                component="a"
                href="mailto:diamondbrand@gmail.com"
                sx={{ ...linkSx, display: 'inline-flex', alignItems: 'center', gap: fluid(12, 8) }}
              >
                <EmailOutlined sx={{ fontSize: fluid(36, 20), color: '#0a0a0a' }} />
                Email: diamondbrand@gmail.com
              </Box>
              <Box
                component="a"
                href="tel:+123-45-678"
                sx={{ ...linkSx, display: 'inline-flex', alignItems: 'center', gap: fluid(12, 8) }}
              >
                <PhoneOutlined sx={{ fontSize: fluid(36, 20), color: '#0a0a0a' }} />
                Phone: 123-45-678
              </Box>
            </Box>
          </Box>
        </MotionBox>
      </MotionBox>

      {/* ── Watermark: oversized wordmark that fades out.
          Phones: sized to fit the screen. Desktop: slightly cropped at both edges (as designed). ── */}
      <Box
        aria-hidden
        sx={{
          position: 'relative',
          zIndex: 0,
          mt: { xs: 5, md: fluid(110, 40) },
          height: { xs: '15.5vw', md: '15.5vw' },
          maxHeight: 460,
          overflow: 'hidden',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%) scaleY(1.32)',
            transformOrigin: 'top center',
            whiteSpace: 'nowrap',
            fontFamily: DISPLAY,
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: 1,
            letterSpacing: '0.01em',
            fontSize: { xs: '12.2vw', md: '12.6vw' },
            color: 'transparent',
            backgroundImage:
              'linear-gradient(180deg, rgba(80,25,30,0.42) 0%, rgba(80,25,30,0.34) 45%, rgba(80,25,30,0) 92%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          Diamond Brand
        </Box>
      </Box>

      {/* ── Copyright ── */}
      <Box
        component="p"
        sx={{
          position: 'relative',
          zIndex: 1,
          m: 0,
          px: 2,
          py: { xs: 2.5, md: fluid(10, 14) },
          textAlign: 'center',
          color: TEXT,
          fontSize: fluid(26, 13),
          lineHeight: 1.3,
        }}
      >
        &copy;{' '}
        <Box component="span" sx={{ display: 'inline-block', minWidth: '2.4em' }}>
          {year ?? ''}
        </Box>{' '}
        Diamond Brand. All rights reserved.
      </Box>
    </Box>
  );
}