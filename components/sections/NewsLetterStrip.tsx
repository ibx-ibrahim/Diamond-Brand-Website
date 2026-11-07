'use client';

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

import { fluid } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED_GRADIENT = 'linear-gradient(180deg, #E0292F 0%, #A5141A 100%)';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const stack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterStrip() {
  const reduce = useReducedMotion();
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<Status>('idle');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      // TODO: wire this up to your newsletter endpoint, e.g.
      // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
      await new Promise((r) => setTimeout(r, 600));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Box
      component="section"
      aria-labelledby="newsletter-title"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        bgcolor: '#0c0c0d',
        color: '#fff',
        py: { xs: 5, sm: 6, md: fluid(84, 40) },
        px: { xs: 2.5, sm: 4, md: fluid(155, 40) },
      }}
    >
      {/* Background artwork */}
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, zIndex: -1 }}>
        <Image
          src="/images/banners/cta-bg-4.png"
          alt=""
          fill
          sizes="100vw"
          quality={80}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </Box>

      <MotionBox
        variants={stack}
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        sx={{
          maxWidth: 2560,
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'stretch', md: 'center' },
          justifyContent: 'space-between',
          gap: { xs: 3, md: fluid(60, 32) },
        }}
      >
        {/* Copy */}
        <MotionBox variants={rise} sx={{ textAlign: { xs: 'center', md: 'left' }, minWidth: 0 }}>
          <Box
            id="newsletter-title"
            role="heading"
            aria-level={2}
            sx={{
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: 1,
              letterSpacing: '0.005em',
              fontSize: { xs: 'clamp(24px, 7.2vw, 38px)', md: fluid(66, 28) },
            }}
          >
            Get updates &amp; exclusive offers
          </Box>
          <Box
            component="p"
            sx={{
              m: 0,
              mt: { xs: 1, md: fluid(6, 6) },
              lineHeight: 1.25,
              fontWeight: 400,
              fontSize: { xs: 14, md: fluid(28, 14) },
              color: 'rgba(255,255,255,0.95)',
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Box>
        </MotionBox>

        {/* Form */}
        <MotionBox
          variants={rise}
          sx={{ flex: { md: '0 0 auto' }, width: { xs: '100%', md: '38%' }, maxWidth: { md: 1000 } }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={onSubmit}
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              height: fluid(70, 52),
              pl: fluid(22, 16),
              pr: fluid(8, 5),
              bgcolor: '#fff',
              borderRadius: fluid(14, 10),
              border: '1px solid rgba(255,255,255,0.55)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.35)',
              outline: status === 'error' ? '2px solid #E5282D' : 'none',
              outlineOffset: 2,
            }}
          >
            <InputBase
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== 'idle') setStatus('idle');
              }}
              placeholder="Enter Your Email Address"
              autoComplete="email"
              fullWidth
              inputProps={{ 'aria-label': 'Email address', 'aria-invalid': status === 'error' }}
              sx={{
                color: '#222',
                fontSize: fluid(26, 15),
                '& input': { p: 0, textOverflow: 'ellipsis' },
                '& input::placeholder': { color: '#8a8a8a', opacity: 1 },
              }}
            />
            <Button
              type="submit"
              disabled={status === 'loading'}
              sx={{
                flex: '0 0 auto',
                height: '100%',
                minWidth: 0,
                px: fluid(30, 16),
                borderRadius: fluid(10, 8),
                color: '#fff',
                fontWeight: 500,
                fontSize: fluid(26, 14),
                textTransform: 'uppercase',
                background: RED_GRADIENT,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28)',
                transition: 'filter .25s',
                '&:hover': { background: RED_GRADIENT, filter: 'brightness(1.1)' },
                '&.Mui-disabled': { color: 'rgba(255,255,255,0.7)', background: RED_GRADIENT, opacity: 0.8 },
              }}
            >
              Subscribe
            </Button>
          </Box>

          <Box
            role="status"
            aria-live="polite"
            sx={{
              minHeight: 20,
              mt: 1,
              fontSize: fluid(18, 13),
              textAlign: { xs: 'center', md: 'left' },
              color: status === 'error' ? '#ff6b70' : 'rgba(255,255,255,0.85)',
            }}
          >
            {status === 'error' && 'Please enter a valid email address.'}
            {status === 'success' && 'Thanks for subscribing!'}
          </Box>
        </MotionBox>
      </MotionBox>
    </Box>
  );
}