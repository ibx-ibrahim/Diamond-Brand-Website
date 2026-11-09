
'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { fluid } from '@/lib/fluid';
import { motion, type Variants } from 'framer-motion';

const MotionBox = motion.create(Box);

const RED = '#ed292f';

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const RED_GRADIENT = 'linear-gradient(180deg, #E52C32 0%, #A5141A 100%)';

const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};
const pillIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, x: -16 },
  show: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};

const contactItems = [
  {
    title: 'HEADQUARTERS',
    detail: 'USA',
    Icon: LocationOnOutlinedIcon,
    href: null,
  },
  {
    title: 'WHATSAPP US',
    detail: '123-45-678',
    Icon: WhatsAppIcon,
    href: 'https://wa.me/12345678',
  },
  {
    title: 'EMAIL US',
    detail: 'diamondbrand@gmail.com',
    Icon: EmailOutlinedIcon,
    href: 'mailto:diamondbrand@gmail.com',
  },
  {
    title: 'WORKING HOURS',
    detail: 'Mon–Sat, 9 AM – 10 PM (USA)',
    Icon: AccessTimeOutlinedIcon,
    href: null,
  },
];

export default function ContactUsHero() {
  return (
    <Box
      component="section"
      aria-labelledby="contact-hero-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        width: '100%',
        minHeight: {
        xs: '540px',
        sm: '560px',
        md: 'min(620px, 78vh)',
        lg: 'min(650px, 80vh)',
        xl: 'min(700px, 82vh)',
        },
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(5, 6, 9, 0.88) 0%,
            rgba(5, 6, 9, 0.68) 42%,
            rgba(5, 6, 9, 0.25) 75%,
            rgba(5, 6, 9, 0.40) 100%
          ),
          linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.85) 0%,
            transparent 30%
          ),
          url("/images/banners/bg-11.png")
        `,

        backgroundSize: 'cover',
        backgroundPosition: {
        xs: '62% 60%',
        sm: '65% 58%',
        md: 'center 52%',
        lg: 'center 0.01%',
        },
        backgroundRepeat: 'no-repeat',

        borderRadius: {
          xs: '0 0 20px 20px',
          md: '0 0 28px 28px',
        },

        px: {
          xs: '24px',
          sm: '5%',
          md: '6%',
          lg: '6.1%',
        },

        pt: {
        xs: '95px',
        sm: '105px',
        md: '130px',
        lg: '140px',
        },

        pb: {
          xs: '30px',
          sm: '35px',
          md: '28px',
        },

        color: '#fff',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1800px',
          mx: 'auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* HERO CONTENT */}
        <Box
          sx={{
            maxWidth: {
              xs: '100%',
              sm: '720px',
              md: '850px',
              lg: '960px',
            },
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Label */}
          <MotionBox
                    variants={rise}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: fluid(46, 32),
                      px: fluid(17, 12),
                      borderRadius: fluid(6, 4),
                      border: '1px solid #C4202A',
                      bgcolor: 'rgba(170,20,30,0.14)',
                      boxShadow: '0 0 24px rgba(210,30,40,0.18)',
                      fontWeight: 500,
                      fontSize: fluid(22, 12),
                      textTransform: 'uppercase',
                      letterSpacing: '0.01em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Custom team apparel
                  </MotionBox>

          {/* Heading */}
          <Box
          id="start-order-title"
          role="heading"
          aria-level={1}
          sx={{
            mt: fluid(26, 16),
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            columnGap: fluid(36, 12),
            rowGap: 0.5,
            fontFamily: DISPLAY,
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.005em',
            lineHeight: 1,
            fontSize: { xs: 'clamp(34px, 10.4vw, 62px)', md: fluid(144, 46) },
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          }}
        >
          <MotionBox variants={rise} sx={{ display: 'block' }}>
            Contact
          </MotionBox>

          <MotionBox
            variants={pillIn}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              height: { xs: 'auto', md: fluid(147, 60) },
              px: fluid(32, 16),
              py: { xs: 0.75, md: 0 },
              pb: { md: '0.03em' },
              borderRadius: fluid(25, 14),
              background: RED_GRADIENT,
              boxShadow:
                'inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -10px 24px rgba(90,0,8,0.35), 0 18px 60px rgba(220,30,40,0.35)',
            }}
          >
            Us
          </MotionBox>
        </Box>

          {/* Description */}
          <MotionBox
                    variants={rise}
                    sx={{
                      mt: fluid(26, 16),
                      maxWidth: { xs: 560, md: fluid(1260, 420) },
                      fontWeight: 400,
                      lineHeight: 1.66,
                      color: 'rgba(255,255,255,0.66)',
                      fontSize: { xs: 16, sm: 18, md: fluid(32, 15) },
                      textShadow: '0 2px 18px rgba(0,0,0,0.6)',
                    }}
                  >
                    Get your team&apos;s custom apparel in just a few steps. Share your requirements, and our team
                    will take care of the design, mockup, and production.
                  </MotionBox>
        </Box>

        {/* CONTACT INFORMATION */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              md: 'repeat(4, minmax(0, 1fr))',
            },
            columnGap: {
              xs: '20px',
              sm: '28px',
              md: 'clamp(18px, 2.2vw, 42px)',
            },
            rowGap: {
              xs: '28px',
              md: '18px',
            },
            mt: {
            xs: '40px',
            sm: '45px',
            md: '55px',
            lg: '60px',
            },
          }}
        >
          {contactItems.map(({ title, detail, Icon, href }) => (
            <Box
              key={title}
              component={href ? 'a' : 'div'}
              href={href || undefined}
              target={title === 'WHATSAPP US' ? '_blank' : undefined}
              rel={title === 'WHATSAPP US' ? 'noopener noreferrer' : undefined}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: {
                  xs: '9px',
                  sm: '12px',
                  md: '13px',
                },
                minWidth: 0,
                textDecoration: 'none',
                cursor: href ? 'pointer' : 'default',
                transition: 'opacity 0.25s ease',

                '&:hover': href ? { opacity: 0.75 } : {},
              }}
            >
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  color: RED,

                  '& svg': {
                    fontSize: {
                      xs: '27px',
                      sm: '31px',
                      md: '36px',
                      lg: '42px',
                    },
                  },
                }}
              >
                <Icon />
              </Box>

              <Box sx={{ minWidth: 0 }}>
                <Typography
                  component="h3"
                  sx={{
                    fontFamily:
                      'var(--font-display), "Barlow Condensed", sans-serif',
                    fontSize: {
                      xs: '12px',
                      sm: '14px',
                      md: 'clamp(15px, 1.25vw, 23px)',
                    },
                    fontWeight: 800,
                    lineHeight: 1.15,
                    color: '#fff',
                    whiteSpace: 'nowrap',
                    textTransform: 'uppercase',
                  }}
                >
                  {title}
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    m: 0,
                    mt: '2px',
                    color: '#dedbdc',
                    fontSize: {
                      xs: '11px',
                      sm: '13px',
                      md: 'clamp(13px, 1.05vw, 19px)',
                    },
                    lineHeight: 1.3,
                    overflowWrap: 'anywhere',
                  }}
                >
                  {detail}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
