
'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

const RED = '#ed292f';

const features = [
  {
    title: 'Quick Response',
    description: 'we reply within 12 hours,',
    Icon: ChatOutlinedIcon,
  },
  {
    title: 'Secure & Private',
    description: 'your information is always safe,',
    Icon: VerifiedUserOutlinedIcon,
  },
  {
    title: 'Custom Solutions',
    description: 'for teams, clubs, and organizations,',
    Icon: DiamondOutlinedIcon,
  },
  {
    title: 'Dedicated Support',
    description: 'get expert help at every step,',
    Icon: HeadsetMicOutlinedIcon,
  },
];

export default function WhyContactUs() {
  return (
    <Box
      component="section"
      aria-labelledby="why-contact-title"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        width: '100%',
        overflow: 'hidden',
        color: '#fff',

        backgroundImage: `
          linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.24) 0%,
            rgba(0, 0, 0, 0.12) 50%,
            rgba(0, 0, 0, 0.28) 100%
          ),
          url('/images/banners/cta-bg-9.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',

        minHeight: {
          xs: 'auto',
          sm: '440px',
          md: 'clamp(440px, 28vw, 565px)',
        },

        display: 'flex',
        alignItems: 'center',

        px: {
          xs: '20px',
          sm: '4%',
          md: '5%',
          lg: '5.5%',
        },

        py: {
          xs: '55px',
          sm: '65px',
          md: 'clamp(65px, 5vw, 95px)',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1800px',
          mx: 'auto',
        }}
      >
        {/* SECTION HEADING */}
        <Box
          sx={{
            textAlign: 'center',
            mb: {
              xs: '42px',
              sm: '48px',
              md: 'clamp(42px, 3vw, 60px)',
            },
          }}
        >
          <Typography
            component="span"
            sx={{
              display: 'inline-block',
              color: RED,
              fontSize: {
                xs: '13px',
                sm: '15px',
                md: 'clamp(15px, 1.25vw, 24px)',
              },
              fontWeight: 500,
              textTransform: 'uppercase',
              lineHeight: 1.3,
              borderBottom: `1px solid ${RED}`,
              pb: '4px',
            }}
          >
            Why Contact Diamond Brand
          </Typography>

          <Typography
            id="why-contact-title"
            component="h2"
            sx={{
              mt: {
                xs: '12px',
                md: '15px',
              },
              mb: 0,
              fontFamily:
                'var(--font-display), "Barlow Condensed", "Inter", sans-serif',
              fontSize: {
                xs: 'clamp(35px, 8vw, 48px)',
                sm: 'clamp(45px, 6vw, 66px)',
                md: 'clamp(52px, 4.1vw, 82px)',
              },
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              textTransform: 'uppercase',
              color: '#fff',
            }}
          >
            WE&apos;RE HERE TO{' '}
            <Box
              component="span"
              sx={{
                color: RED,
                display: 'inline',
              }}
            >
              HELP
            </Box>
          </Typography>
        </Box>

        {/* FOUR FEATURES */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              md: 'repeat(4, minmax(0, 1fr))',
            },
            columnGap: {
              xs: '25px',
              sm: '35px',
              md: 'clamp(18px, 2vw, 42px)',
            },
            rowGap: {
              xs: '38px',
              sm: '45px',
              md: '20px',
            },
          }}
        >
          {features.map(({ title, description, Icon }) => (
            <Box
              key={title}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                minWidth: 0,
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  color: RED,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: {
                    xs: '15px',
                    md: '18px',
                  },
                  '& svg': {
                    fontSize: {
                      xs: '39px',
                      sm: '43px',
                      md: 'clamp(42px, 3vw, 58px)',
                    },
                    strokeWidth: 1.6,
                  },
                }}
              >
                <Icon />
              </Box>

              {/* TITLE */}
              <Typography
                component="h3"
                sx={{
                  fontFamily:
                    'var(--font-display), "Barlow Condensed", "Inter", sans-serif',
                  fontSize: {
                    xs: '21px',
                    sm: '23px',
                    md: 'clamp(19px, 1.8vw, 37px)',
                  },
                  fontWeight: 500,
                  lineHeight: 1.15,
                  textTransform: 'uppercase',
                  color: '#fff',
                  mb: 0,
                }}
              >
                {title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                component="p"
                sx={{
                  mt: {
                    xs: '8px',
                    md: '12px',
                  },
                  mb: 0,
                  color: '#aaa5a5',
                  fontSize: {
                    xs: '14px',
                    sm: '15px',
                    md: 'clamp(14px, 1.3vw, 25px)',
                  },
                  fontWeight: 400,
                  lineHeight: 1.4,
                  maxWidth: '100%',
                }}
              >
                {description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
