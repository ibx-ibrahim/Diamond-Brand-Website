'use client';

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import { motion, useReducedMotion } from 'framer-motion';
import ChevronLeftRounded from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import ZoomInRounded from '@mui/icons-material/ZoomInRounded';
import ZoomOutRounded from '@mui/icons-material/ZoomOutRounded';

const MotionBox = motion.create(Box);

const PROJECT_IMAGES = [
  {
    src: '/images/sports/sp-1.png',
    alt: 'Riverdale black and red custom team jersey, front and back',
    label: 'Full jersey design',
  },
  {
    src: '/images/sports/sp-2.png',
    alt: 'Close-up of the red and black performance fabric',
    label: 'Performance fabric',
  },
  {
    src: '/images/sports/sp-3.png',
    alt: 'Close-up of the embroidered diamond team logo',
    label: 'Custom embroidery',
  },
  {
    src: '/images/sports/sp-4.png',
    alt: 'Close-up of the red jersey collar and inside label',
    label: 'Precision finishing',
  },
];

const RED = '#ed292f';
const DISPLAY = 'var(--font-display), "Barlow Condensed", "Inter", sans-serif';

export default function FeaturedProject() {
  const reduceMotion = useReducedMotion();
  const [activeImage, setActiveImage] = React.useState(0);
  const [zoom, setZoom] = React.useState(1);

  const changeImage = (direction: number) => {
    setActiveImage((current) =>
      (current + direction + PROJECT_IMAGES.length) % PROJECT_IMAGES.length
    );
    setZoom(1);
  };

  const selected = PROJECT_IMAGES[activeImage];

  return (
    <Box
      component="section"
      aria-labelledby="featured-project-heading"
      sx={{
        width: '100%',
        bgcolor: '#bdbdbd',
        color: '#08090c',
        overflow: 'hidden',
        py: { xs: '64px', sm: '76px', md: 'clamp(84px, 7.2vw, 140px)' },
        px: { xs: '20px', sm: '4.5vw', lg: '6.1vw' },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1920px',
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: {
            xs: 'minmax(0, 1fr)',
            md: 'minmax(280px, 0.78fr) minmax(0, 1.42fr)',
            lg: 'minmax(390px, 0.82fr) minmax(0, 1.55fr)',
          },
          alignItems: 'center',
          columnGap: { xs: 5, md: 'clamp(34px, 5.2vw, 104px)' },
          rowGap: { xs: 4, md: 0 },
        }}
      >
        {/* Editorial heading and project introduction */}
        <MotionBox
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            minWidth: 0,
            maxWidth: { xs: '720px', md: 'none' },
            order: { xs: 0, md: 0 },
          }}
        >
          <Box
            component="span"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: { xs: '30px', md: '34px' },
              px: '12px',
              border: `1px solid ${RED}`,
              borderRadius: '5px',
              color: RED,
              fontSize: { xs: '11px', sm: '12px', md: '13px' },
              fontWeight: 500,
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '0.025em',
            }}
          >
            Featured Project
          </Box>

          <Typography
            id="featured-project-heading"
            component="h2"
            sx={{
              mt: { xs: 2, md: '17px' },
              mb: 0,
              fontFamily: DISPLAY,
              fontSize: {
                xs: 'clamp(42px, 10vw, 64px)',
                sm: 'clamp(54px, 7vw, 76px)',
                md: 'clamp(48px, 4.1vw, 76px)',
                xl: 'clamp(70px, 4.3vw, 88px)',
              },
              fontWeight: 800,
              lineHeight: 0.99,
              letterSpacing: '-0.025em',
              textTransform: 'uppercase',
            }}
          >
            <Box component="span" sx={{ display: 'block', whiteSpace: 'nowrap' }}>
              Every detail.
            </Box>
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                mt: '8px',
                px: { xs: '10px', sm: '13px' },
                py: { xs: '5px', sm: '7px' },
                color: '#fff',
                borderRadius: '12px',
                background: 'linear-gradient(180deg, #f02d32 0%, #a9141b 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,.22)',
                whiteSpace: 'nowrap',
              }}
            >
              Every design.
            </Box>
            <Box component="span" sx={{ display: 'block', mt: '8px', whiteSpace: 'nowrap' }}>
              Every team.
            </Box>
          </Typography>

          <Typography
            component="p"
            sx={{
              mt: { xs: 2, md: '19px' },
              mb: 0,
              maxWidth: '560px',
              color: '#414247',
              fontSize: {
                xs: '15px',
                sm: '17px',
                md: 'clamp(15px, 1.12vw, 21px)',
              },
              lineHeight: 1.25,
              fontWeight: 400,
              letterSpacing: '0.005em',
            }}
          >
            Take a closer look at one of our standout custom sportswear projects.
            From unique color combinations to personalized team graphics, every
            detail is designed to make an impact.
          </Typography>
        </MotionBox>

        {/* Interactive project image gallery */}
        <MotionBox
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          sx={{ minWidth: 0, width: '100%' }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'minmax(0, 1fr)',
                sm: 'minmax(0, 1fr) 112px',
                md: 'minmax(0, 1fr) clamp(112px, 14vw, 266px)',
              },
              gap: { xs: '12px', sm: '14px', md: '18px' },
              alignItems: 'stretch',
            }}
          >
            {/* Main image */}
            <Box
              sx={{
                position: 'relative',
                minWidth: 0,
                aspectRatio: { xs: '1.45 / 1', sm: '1.55 / 1', md: '1.74 / 1' },
                overflow: 'hidden',
                borderRadius: { xs: '16px', md: '21px' },
                bgcolor: '#101216',
                isolation: 'isolate',
              }}
            >
              <Image
                key={selected.src}
                src={selected.src}
                alt={selected.alt}
                fill
                priority
                sizes="(max-width: 600px) 92vw, (max-width: 1200px) 58vw, 42vw"
                style={{
                  objectFit: 'contain',
                  transform: `scale(${zoom})`,
                  transition: 'transform 220ms ease, opacity 260ms ease',
                }}
              />

              <IconButton
                aria-label="Previous project image"
                onClick={() => changeImage(-1)}
                sx={{
                  position: 'absolute',
                  zIndex: 2,
                  left: { xs: '10px', md: '16px' },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: { xs: 34, md: 40 },
                  height: { xs: 34, md: 40 },
                  color: '#f5f5f5',
                  border: '2px solid rgba(255,255,255,.72)',
                  bgcolor: 'rgba(20,20,20,.2)',
                  backdropFilter: 'blur(5px)',
                  '&:hover': { bgcolor: 'rgba(20,20,20,.65)' },
                }}
              >
                <ChevronLeftRounded />
              </IconButton>

              <IconButton
                aria-label="Next project image"
                onClick={() => changeImage(1)}
                sx={{
                  position: 'absolute',
                  zIndex: 2,
                  right: { xs: '10px', md: '16px' },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: { xs: 34, md: 40 },
                  height: { xs: 34, md: 40 },
                  color: '#f5f5f5',
                  border: '2px solid rgba(255,255,255,.72)',
                  bgcolor: 'rgba(20,20,20,.2)',
                  backdropFilter: 'blur(5px)',
                  '&:hover': { bgcolor: 'rgba(20,20,20,.65)' },
                }}
              >
                <ChevronRightRounded />
              </IconButton>

              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  px: 1.5,
                  py: 1,
                  display: { xs: 'block', sm: 'none' },
                  color: 'rgba(255,255,255,.82)',
                  fontSize: '11px',
                  textAlign: 'center',
                  background: 'linear-gradient(transparent, rgba(0,0,0,.55))',
                  pointerEvents: 'none',
                }}
              >
                {selected.label}
              </Box>
            </Box>

            {/* Detail thumbnails: vertical on desktop, horizontal on mobile */}
            <Box
              aria-label="Project image thumbnails"
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(3, minmax(0, 1fr))',
                  sm: 'minmax(0, 1fr)',
                },
                gridTemplateRows: {
                  xs: '1fr',
                  sm: 'repeat(3, minmax(0, 1fr))',
                },
                gap: { xs: '9px', sm: '8px', md: '10px' },
                minWidth: 0,
              }}
            >
              {PROJECT_IMAGES.slice(1).map((item, index) => {
                const imageIndex = index + 1;
                const isActive = activeImage === imageIndex;

                return (
                  <Box
                    component="button"
                    type="button"
                    key={item.src}
                    aria-label={`Show ${item.label}`}
                    aria-pressed={isActive}
                    onClick={() => {
                      setActiveImage(imageIndex);
                      setZoom(1);
                    }}
                    sx={{
                      position: 'relative',
                      display: 'block',
                      width: '100%',
                      minWidth: 0,
                      minHeight: { xs: '82px', sm: 0 },
                      aspectRatio: { xs: '1.65 / 1', sm: 'auto' },
                      overflow: 'hidden',
                      p: 0,
                      border: isActive ? `2px solid ${RED}` : '2px solid transparent',
                      borderRadius: { xs: '11px', md: '17px' },
                      bgcolor: '#151515',
                      cursor: 'pointer',
                      transition: 'border-color .2s ease, transform .2s ease',
                      '&:hover': { transform: 'translateY(-2px)' },
                      '&:focus-visible': {
                        outline: `3px solid ${RED}`,
                        outlineOffset: 3,
                      },
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 600px) 28vw, (max-width: 1200px) 15vw, 14vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Zoom control */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 1, md: 1.4 },
              width: { xs: '100%', sm: 'calc(100% - 126px)' },
              mt: { xs: 1.5, md: '14px' },
              px: 1,
              color: '#171717',
            }}
          >
            <ZoomInRounded sx={{ fontSize: { xs: 17, md: 19 } }} />
            <Slider
              aria-label="Zoom project image"
              min={1}
              max={1.35}
              step={0.01}
              value={zoom}
              onChange={(_, value) => setZoom(value as number)}
              size="small"
              sx={{
                maxWidth: '230px',
                color: '#777',
                py: 0,
                '& .MuiSlider-rail': { opacity: 1, bgcolor: '#888' },
                '& .MuiSlider-track': { border: 0, bgcolor: '#555' },
                '& .MuiSlider-thumb': {
                  width: 8,
                  height: 15,
                  borderRadius: '2px',
                  bgcolor: '#161616',
                  boxShadow: 'none',
                  '&:before': { boxShadow: 'none' },
                },
              }}
            />
            <ZoomOutRounded sx={{ fontSize: { xs: 17, md: 19 } }} />
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
}
