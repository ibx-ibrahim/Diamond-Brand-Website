
'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const RED = '#ed292f';

const contacts = [
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

export default function NeedHelp() {
  return (
    <Box
      component="section"
      aria-label="Contact and support information"
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        minHeight: {
          xs: 'auto',
          md: '170px',
          lg: '190px',
          xl: '210px',
        },
        display: 'flex',
        alignItems: 'center',

        backgroundImage: 'url("/images/banners/cta-bg-4.png")',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        borderRadius: {
          xs: '20px 20px 0 0',
          md: '28px 28px 0 0',
        },

        px: {
          xs: '24px',
          sm: '5%',
          md: '6%',
          xl: '6.1%',
        },

        py: {
          xs: '38px',
          sm: '42px',
          md: '32px',
          lg: '38px',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1800px',
          mx: 'auto',

          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            lg: '1.65fr 0.7fr 0.9fr 1.05fr',
          },
          alignItems: 'center',

          columnGap: {
            xs: '28px',
            sm: '30px',
            lg: 'clamp(20px, 3vw, 58px)',
          },

          rowGap: {
            xs: '30px',
            sm: '28px',
            lg: '20px',
          },
        }}
      >
        {/* LEFT: INTRO */}
        <Box
          sx={{
            minWidth: 0,
            gridColumn: {
              xs: 'auto',
              sm: '1 / -1',
              lg: 'auto',
            },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontFamily:
                'var(--font-display), "Barlow Condensed", sans-serif',
              fontSize: {
                xs: '36px',
                sm: '40px',
                md: 'clamp(38px, 3vw, 52px)',
                xl: 'clamp(46px, 3.1vw, 58px)',
              },
              fontWeight: 800,
              lineHeight: 1,
              color: '#fff',
              textTransform: 'uppercase',
              mb: '8px',
              whiteSpace: 'nowrap',
            }}
          >
            NEED HELP?
          </Typography>

          <Typography
            component="p"
            sx={{
              m: 0,
              color: '#d0cdcd',
              fontSize: {
                xs: '14px',
                sm: '15px',
                md: 'clamp(15px, 1.15vw, 21px)',
              },
              lineHeight: 1.35,
            }}
          >
            Our team is here to guide you through the process.
          </Typography>
        </Box>

        {/* CONTACT ITEMS */}
        {contacts.map(({ title, detail, Icon, href }) => {
          const content = (
            <>
              <Box
                sx={{
                  flexShrink: 0,
                  color: RED,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  '& svg': {
                    fontSize: {
                      xs: '29px',
                      sm: '32px',
                      md: '36px',
                      xl: '42px',
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
                    color: '#fff',
                    fontFamily:
                      'var(--font-display), "Barlow Condensed", sans-serif',
                    fontSize: {
                      xs: '16px',
                      sm: '16px',
                      md: 'clamp(16px, 1.35vw, 24px)',
                    },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {title}
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    color: '#d4d0d0',
                    fontSize: {
                      xs: '13px',
                      sm: '13px',
                      md: 'clamp(13px, 1.05vw, 19px)',
                    },
                    lineHeight: 1.35,
                    mt: '2px',
                    mb: 0,
                    overflowWrap: 'anywhere',
                  }}
                >
                  {detail}
                </Typography>
              </Box>
            </>
          );

          return (
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
                  xs: '14px',
                  md: '12px',
                  xl: '16px',
                },
                minWidth: 0,
                textDecoration: 'none',
                cursor: href ? 'pointer' : 'default',
                transition: 'opacity 0.25s ease',

                '&:hover': href
                  ? { opacity: 0.78 }
                  : {},
              }}
            >
              {content}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
