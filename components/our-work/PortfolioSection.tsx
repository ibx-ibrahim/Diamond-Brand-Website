'use client';

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import { DISPLAY, MotionBox, RED, SectionLabel } from './Shared';

type Category = 'All Uniforms' | 'Football' | 'Baseball' | 'Basketball' | 'Soccer' | 'Volleyball' | 'Apparel';
type Project = {
  id: string;
  title: string;
  category: Exclude<Category, 'All Uniforms'> | 'Other Sports';
  image: string;
  description: string;
  imagePosition?: string;
};

const FILTERS: Category[] = ['All Uniforms', 'Football', 'Baseball', 'Basketball', 'Soccer', 'Volleyball', 'Apparel'];

const PROJECTS: Project[] = [
  {
    id: 'football', title: 'Football', category: 'Football',
    image: '/images/categories/cat-9.png',
    description: 'Player wearing jersey and helmet in a cinematic stadium setting.',
    imagePosition: 'center 36%',
  },
  {
    id: 'baseball', title: 'Baseball', category: 'Baseball',
    image: '/images/categories/cat-10.png',
    description: 'Custom front-and-back jersey with matching cap and baseball gear.',
    imagePosition: 'center 48%',
  },
  {
    id: 'basketball', title: 'Basketball', category: 'Basketball',
    image: '/images/categories/cat-11.png',
    description: 'Personalized sleeveless jerseys with bold team colors and numbers.',
    imagePosition: 'center 48%',
  },
  {
    id: 'soccer', title: 'Soccer', category: 'Soccer',
    image: '/images/categories/cat-12.png',
    description: 'Custom soccer shirt designed around a distinctive team identity.',
    imagePosition: 'center 40%',
  },
  {
    id: 'volleyball', title: 'Volleyball', category: 'Volleyball',
    image: '/images/categories/cat-13.png',
    description: 'Coordinated volleyball jerseys and shorts with a bold finish.',
    imagePosition: 'center 45%',
  },
  {
    id: 'cheerleading', title: 'Cheerleading', category: 'Apparel',
    image: '/images/categories/cat-14.png',
    description: 'Custom cheer uniforms with coordinated colors and premium detailing.',
    imagePosition: 'center 42%',
  },
  {
    id: 'custom-apparel', title: 'Custom Apparel', category: 'Apparel',
    image: '/images/categories/cat-15.png',
    description: 'Custom hoodies, T-shirts and outerwear made for your team.',
    imagePosition: 'center 44%',
  },
  {
    id: 'other-sports', title: 'Other Sports', category: 'Other Sports',
    image: '/images/categories/cat-16.png',
    description: 'Custom sportswear for different athletic activities and team identities.',
    imagePosition: 'center 44%',
  },
];

function ProjectCard({ project, index, reduceMotion }: { project: Project; index: number; reduceMotion: boolean }) {
  return (
    <MotionBox
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.045 }}
      sx={{
        position: 'relative', minWidth: 0, aspectRatio: '1 / 1.02', overflow: 'hidden',
        borderRadius: { xs: '15px', md: '21px' }, bgcolor: '#16181d', isolation: 'isolate',
        boxShadow: '0 10px 26px rgba(0,0,0,.12)',
        '& .portfolio-image': { transition: 'transform .85s cubic-bezier(.22,1,.36,1)' },
        '&:hover .portfolio-image': { transform: 'scale(1.055)' },
        '&:hover .portfolio-arrow': { bgcolor: RED, borderColor: RED, transform: 'translate(2px,-2px)' },
      }}
    >
      <Image
        className="portfolio-image"
        src={project.image}
        alt={`${project.title} custom sportswear project`}
        fill
        sizes="(max-width: 599px) 46vw, (max-width: 899px) 46vw, (max-width: 1399px) 23vw, 400px"
        style={{ objectFit: 'cover', objectPosition: project.imagePosition ?? 'center' }}
      />
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(0,0,0,0) 43%, rgba(0,0,0,.12) 57%, rgba(0,0,0,.88) 100%)' }} />
      <Box sx={{ position: 'absolute', zIndex: 2, left: { xs: 12, sm: 16, md: 22 }, right: { xs: 12, sm: 16, md: 20 }, bottom: { xs: 12, sm: 15, md: 18 }, color: '#fff' }}>
        <Box sx={{ height: '1px', bgcolor: 'rgba(255,255,255,.48)', mb: { xs: 1, md: 1.2 } }} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
          <Typography component="h3" sx={{ fontFamily: DISPLAY, fontSize: { xs: 15, sm: 18, md: 'clamp(18px, 1.25vw, 24px)' }, fontWeight: 400, lineHeight: 1.1, color: '#fff' }}>
            {project.title}
          </Typography>
          <Box className="portfolio-arrow" aria-hidden sx={{ width: { xs: 27, md: 34 }, height: { xs: 27, md: 34 }, flex: '0 0 auto', display: 'grid', placeItems: 'center', border: '1px solid rgba(255,255,255,.38)', borderRadius: '6px', bgcolor: 'rgba(30,30,30,.58)', transition: 'all .28s ease' }}>
            <ArrowOutwardRounded sx={{ fontSize: { xs: 19, md: 23 }, color: '#fff' }} />
          </Box>
        </Box>
        <Typography sx={{ mt: .35, maxWidth: '88%', color: 'rgba(255,255,255,.72)', fontSize: { xs: 9, sm: 10, md: 11 }, lineHeight: 1.25 }}>
          {project.description}
        </Typography>
      </Box>
    </MotionBox>
  );
}

export type PortfolioSectionProps = {
  /** Optional local or remote stadium/background image URL. If omitted, a soft stadium-like neutral backdrop is used. */
  backgroundImage?: string;
  /** Optional id for in-page navigation. */
  id?: string;
};

export default function PortfolioSection({ backgroundImage, id = 'portfolio' }: PortfolioSectionProps) {
  const [active, setActive] = React.useState<Category>('All Uniforms');
  const reduceMotion = Boolean(useReducedMotion());

  const visibleProjects = React.useMemo(() => {
    if (active === 'All Uniforms') return PROJECTS;
    if (active === 'Apparel') return PROJECTS.filter((project) => project.category === 'Apparel');
    return PROJECTS.filter((project) => project.category === active);
  }, [active]);

  return (
    <Box
      component="section"
      id={id}
      aria-labelledby="portfolio-heading"
      sx={{
        position: 'relative', isolation: 'isolate', overflow: 'hidden',
        width: '100%', maxWidth: '100%', mx: 'auto',
        borderRadius: { xs: '18px', md: '28px' },
        px: { xs: 2, sm: 3, md: 'clamp(28px, 5.8vw, 112px)' },
        pt: { xs: 5, sm: 6, md: 'clamp(58px, 4.2vw, 82px)' },
        pb: { xs: 5, sm: 6, md: 'clamp(58px, 4vw, 80px)' },
        backgroundColor: '#bfc0c2',
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(207,209,213,.72), rgba(207,209,213,.72)), url("${backgroundImage}")`
          : 'radial-gradient(ellipse at 50% 46%, rgba(245,246,247,.72) 0%, rgba(190,193,198,.84) 65%, rgba(167,170,176,.9) 100%), linear-gradient(135deg, #aeb2b8, #d5d6d8)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1720px', mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mx: 'auto' }}>
          {/* <Typography component="p" sx={{ m: 0, color: RED, textTransform: 'uppercase', letterSpacing: '.015em', fontSize: { xs: 10, sm: 12, md: 13 }, fontWeight: 500, lineHeight: 1.2, '&::after': { content: '""', display: 'block', width: 105, height: '1px', bgcolor: RED, mx: 'auto', mt: .65 } }}>
            Our Portfolio
          </Typography> */}
          <SectionLabel>Our Portfolio</SectionLabel>
          <Typography
            component="h2" id="portfolio-heading"
            sx={{ mt: { xs: 1.2, md: 1.5 }, mb: 0, fontFamily: DISPLAY, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '.005em', lineHeight: .99, fontSize: { xs: 'clamp(25px, 6.4vw, 38px)', sm: 'clamp(34px, 4.2vw, 48px)', md: 'clamp(42px, 2.65vw, 58px)' }, color: '#08090d' }}
          >
            <Box component="span" sx={{ display: 'block' }}>Designs that speak.</Box>
            <Box component="span" sx={{ display: 'block', color: RED }}>Teams that stand out.</Box>
          </Typography>
          <Typography sx={{ mt: { xs: 1, md: 1.15 }, color: '#393b40', fontSize: { xs: 12, sm: 14, md: 'clamp(15px, 1.15vw, 21px)' }, lineHeight: 1.35 }}>
            Explore our latest custom sportswear projects.
          </Typography>
        </Box>

        <Box
          role="group" aria-label="Filter portfolio projects"
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: { xs: 'nowrap', md: 'wrap' }, overflowX: { xs: 'auto', md: 'visible' }, gap: { xs: 1, sm: 1.5, md: 'clamp(12px, 1.8vw, 34px)' }, mt: { xs: 2.5, md: 3.1 }, mx: { xs: -2, sm: 0 }, px: { xs: 2, sm: 0 }, pb: { xs: .5, md: 0 }, scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}
        >
          {FILTERS.map((filter) => {
            const selected = active === filter;
            return (
              <Button
                key={filter}
                disableElevation
                disableRipple
                onClick={() => setActive(filter)}
                aria-pressed={selected}
                sx={{
                  flex: '0 0 auto', minWidth: 'auto', px: { xs: 1.7, sm: 2.1, md: 2.5 }, py: { xs: .65, md: .8 },
                  borderRadius: '9px', textTransform: 'none', whiteSpace: 'nowrap', fontWeight: 400,
                  fontSize: { xs: 11, sm: 13, md: 'clamp(14px, 1vw, 18px)' }, lineHeight: 1.2,
                  color: selected ? '#fff' : '#111318',
                  background: selected ? 'linear-gradient(180deg, #ed3035 0%, #a9151b 100%)' : '#fff',
                  boxShadow: selected ? '0 4px 12px rgba(155,20,25,.15)' : 'none',
                  '&:hover': { color: '#fff', background: 'linear-gradient(180deg, #ed3035 0%, #a9151b 100%)' },
                }}
              >
                {filter}
              </Button>
            );
          })}
        </Box>

        <Box
          sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' }, gap: { xs: 1.4, sm: 2, md: 'clamp(18px, 2vw, 40px)' }, mt: { xs: 2.5, md: 'clamp(30px, 2.1vw, 40px)' } }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} reduceMotion={reduceMotion} />
            ))}
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
}
