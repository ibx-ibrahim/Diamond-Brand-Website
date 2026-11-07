'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import PhoneOutlined from '@mui/icons-material/PhoneOutlined';
import MailOutline from '@mui/icons-material/MailOutlined';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import ArrowForward from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Custom Uniforms', href: '/custom-uniforms' },
  { label: 'Custom Apparel', href: '/custom-apparel' },
  { label: 'Booster Shirts', href: '/booster-shirts' },
  { label: 'Team Stores', href: '/team-stores' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Start an Order', href: '/start-an-order' },
] as const;

const RED_GRADIENT = 'linear-gradient(180deg, #E0292F 0%, #A5141A 100%)';

const infoItemSx = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: fluid(10, 6),
  color: 'inherit',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'opacity .2s',
  '&:hover': { opacity: 0.65 },
  '& svg': { fontSize: fluid(22, 16) },
} as const;

export default function Header() {
  const reduce = useReducedMotion();
  const [open, setOpen] = React.useState(false);

  return (
    <MotionBox
      initial={reduce ? false : { opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      <Box component="header">
        {/* ── Info bar ─────────────────────────────── */}
        <Box
          sx={{
            height: fluid(52, 34),
            px: GUTTER,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
            color: '#141414',
            bgcolor: 'rgba(214,214,214,0.97)',
            backdropFilter: 'blur(12px)',
            fontSize: fluid(16, 11.5),
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
          }}
        >
          <Box
            component="span"
            sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
          >
            Custom uniforms &amp; apparel for teams, schools &amp; organizations
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: fluid(26, 16),
              textTransform: 'none',
              flexShrink: 0,
            }}
          >
            <Box component="a" href="tel:12345678" sx={infoItemSx}>
              <PhoneOutlined /> 123-45-678
            </Box>
            <Box component="a" href="mailto:diamondbrand@gmail.com" sx={infoItemSx}>
              <MailOutline /> diamondbrand@gmail.com
            </Box>
            <Box component="span" sx={{ ...infoItemSx, '&:hover': {} }}>
              <HomeOutlined /> Lorem Ipsum is simply dummy text of the printing
            </Box>
          </Box>
        </Box>

        {/* ── Logo / nav / CTA ─────────────────────── */}
        <Box
          sx={{
            px: GUTTER,
            mt: fluid(43, 14),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Link href="/" aria-label="Diamond Brand home" style={{ display: 'block', lineHeight: 0 }}>
            <Box sx={{ position: 'relative', width: fluid(104, 62), aspectRatio: '104 / 120' }}>
              <Image src="/logos/DB-logo.svg" alt="Diamond Brand" fill priority sizes="104px" />
            </Box>
          </Link>

          {/* Nav pill (desktop) */}
          <Box
            component="nav"
            aria-label="Primary"
            sx={{
              display: { xs: 'none', lg: 'flex' },
              alignItems: 'center',
              height: fluid(52, 40),
              px: fluid(54, 24),
              gap: fluid(61, 22),
              borderRadius: fluid(14, 8),
              bgcolor: 'rgba(143,143,146,0.82)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.14)',
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Box
                key={item.href}
                component={Link}
                href={item.href}
                sx={{
                  position: 'relative',
                  color: '#fff',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  fontWeight: 500,
                  fontSize: fluid(20, 12.5),
                  lineHeight: 1,
                  py: 0.5,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: 2,
                    borderRadius: 2,
                    bgcolor: '#E0292F',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform .35s cubic-bezier(.22,1,.36,1)',
                  },
                  '&:hover::after, &:focus-visible::after': { transform: 'scaleX(1)' },
                  '&:focus-visible': { outline: '2px solid #fff', outlineOffset: 6, borderRadius: 1 },
                }}
              >
                {item.label}
              </Box>
            ))}
          </Box>

          {/* Right cluster */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <MotionBox whileHover={reduce ? undefined : { y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                component={Link}
                href="/contact"
                endIcon={<ArrowForward sx={{ fontSize: `${fluid(22, 16)} !important` }} />}
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  height: fluid(54, 40),
                  px: fluid(33, 18),
                  borderRadius: fluid(8, 6),
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: fluid(20, 13),
                  background: RED_GRADIENT,
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), 0 8px 24px rgba(200,25,35,0.38)',
                  transition: 'filter .25s, box-shadow .25s',
                  '&:hover': {
                    background: RED_GRADIENT,
                    filter: 'brightness(1.1)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 12px 30px rgba(220,30,40,0.5)',
                  },
                  '& .MuiButton-endIcon': { ml: fluid(10, 6), transition: 'transform .25s' },
                  '&:hover .MuiButton-endIcon': { transform: 'translateX(3px)' },
                }}
              >
                Contact us
              </Button>
            </MotionBox>

            <IconButton
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              sx={{
                display: { xs: 'inline-flex', lg: 'none' },
                color: '#fff',
                bgcolor: 'rgba(143,143,146,0.55)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                '&:hover': { bgcolor: 'rgba(143,143,146,0.8)' },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* ── Mobile drawer ─────────────────────────── */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 'min(86vw, 340px)',
              bgcolor: '#080D15',
              backgroundImage: 'radial-gradient(120% 60% at 100% 0%, rgba(40,90,150,.28), transparent 60%)',
              p: 3,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box component="nav" sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
          {NAV_ITEMS.map((item) => (
            <Box
              key={item.href}
              component={Link}
              href={item.href}
              onClick={() => setOpen(false)}
              sx={{
                color: '#fff',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontWeight: 500,
                fontSize: 17,
                py: 1.75,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                '&:hover': { color: '#E5383E' },
              }}
            >
              {item.label}
            </Box>
          ))}
        </Box>
        <Button
          component={Link}
          href="/contact"
          onClick={() => setOpen(false)}
          endIcon={<ArrowForward />}
          sx={{
            mt: 4,
            height: 52,
            color: '#fff',
            fontWeight: 600,
            borderRadius: 2,
            background: RED_GRADIENT,
          }}
        >
          Contact us
        </Button>
      </Drawer>
    </MotionBox>
  );
}
