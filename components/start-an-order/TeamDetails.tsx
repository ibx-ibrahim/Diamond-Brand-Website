'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';

const MotionBox = motion.create(Box) as React.ComponentType<any>;

const RED = '#ed292f';
const steps = [
  { number: '01', title: 'Team Details', subtitle: 'Tell us about your team' },
  { number: '02', title: 'Customization', subtitle: 'Choose your design & options' },
  { number: '03', title: 'Your Information', subtitle: 'Share your contact details' },
  { number: '04', title: 'Submit Request', subtitle: "We'll get back with a free mockup" },
];

const sports = [
  'Baseball', 'Basketball', 'Cheerleading', 'Football',
  'Soccer', 'Volleyball', 'Other',
];
const apparelOptions = ['Jerseys', 'Shorts', 'Hoodies', 'Jackets', 'Tracksuits', 'Other'];
const quantities = ['1–10', '11–25', '26–50', '51–100', '101–250', '250+'];

export default function TeamDetails() {
  const reduceMotion = useReducedMotion();
  const [teamName, setTeamName] = React.useState('');
  const [sport, setSport] = React.useState('');
  const [apparel, setApparel] = React.useState<string[]>([]);
  const [quantity, setQuantity] = React.useState('');
  const [requiredBy, setRequiredBy] = React.useState('');

  const toggleApparel = (item: string) => {
    setApparel((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item],
    );
  };

  return (
    <Box
      component="section"
      aria-label="Team order request"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        width: '100%',
        overflow: 'hidden',
        px: { xs: 2, sm: 3, md: '5.8vw' },
        py: { xs: 5, sm: 6, md: 'clamp(64px, 7vw, 112px)' },
        // backgroundColor: '#aaa4a8',
        // backgroundImage: 'linear-gradient(105deg, rgba(227, 190, 193, .72), rgba(148, 145, 160, .72)), url("/images/banners/bg-10.png")',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // '&::before': {
        // content: '""',
        // position: 'absolute',
        
        // top: '-42px',
        // bottom: '-42px',
        // left: 0,
        // right: 0,
        //   zIndex: 0,
        //   background: 'linear-gradient(90deg, rgba(239, 190, 185, .20), rgba(104, 113, 139, .22))',
        // },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1700px',
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'minmax(300px, .72fr) minmax(0, 1fr)' },
          gap: { xs: 2.5, sm: 3, lg: 'clamp(18px, 1.1vw, 24px)' },
          alignItems: 'stretch',
        }}
      >
        {/* Step navigation */}
        <MotionBox
          initial={reduceMotion ? false : { opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            minWidth: 0,
            p: { xs: 1.5, sm: 2.25, md: 'clamp(18px, 1.2vw, 24px)' },
            border: '1px solid rgba(255,255,255,.72)',
            borderRadius: { xs: '20px', md: '26px' },
            background: 'rgba(255,255,255,.15)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: { xs: 1.5, sm: 1.8, md: 'clamp(16px, 1.2vw, 22px)' },
          }}
        >
          {steps.map((step, index) => {
            const active = index === 0;
            return (
              <Box
                key={step.number}
                sx={{
                  minHeight: { xs: 76, sm: 82, md: 'clamp(78px, 5.1vw, 94px)' },
                  px: { xs: 1.5, sm: 2, md: 2.25 },
                  py: 1.25,
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 1.5, sm: 2, md: 2.25 },
                  border: '1px solid rgba(255,255,255,.8)',
                  borderRadius: { xs: '17px', md: '23px' },
                  background: active
                    ? 'linear-gradient(110deg, rgba(255,255,255,.76), rgba(190,125,128,.72))'
                    : 'rgba(255,255,255,.34)',
                  boxShadow: active ? '0 8px 22px rgba(80,30,35,.07)' : 'none',
                }}
              >
                <Box
                  sx={{
                    flex: '0 0 auto',
                    width: { xs: 39, sm: 43, md: 48 },
                    height: { xs: 39, sm: 43, md: 48 },
                    borderRadius: '50%',
                    bgcolor: '#fff',
                    color: '#090a0e',
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: { xs: 19, sm: 21, md: 25 },
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: { xs: 18, sm: 21, md: 'clamp(20px, 1.75vw, 31px)' },
                      fontWeight: 800,
                      lineHeight: 1.05,
                      color: '#08090d',
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: .25,
                      fontSize: { xs: 12, sm: 13, md: 'clamp(13px, .95vw, 17px)' },
                      lineHeight: 1.2,
                      color: '#16151a',
                    }}
                  >
                    {step.subtitle}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </MotionBox>

        {/* Team details form */}
        <MotionBox
          initial={reduceMotion ? false : { opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            minWidth: 0,
            p: { xs: 2.25, sm: 3, md: 'clamp(28px, 2.7vw, 52px)' },
            border: `1px solid ${alpha(RED, .75)}`,
            borderRadius: { xs: '20px', md: '27px' },
            background: 'rgba(255,255,255,.18)',
            backdropFilter: 'blur(13px)',
            boxShadow: '0 12px 38px rgba(20,20,30,.035)',
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              border: `1px solid ${RED}`,
              borderRadius: '6px',
              px: 1.35,
              py: .7,
              color: RED,
              fontSize: { xs: 11, sm: 12, md: 14 },
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '.015em',
            }}
          >
            Step 1 of 4
          </Box>

          <Typography
            component="h2"
            sx={{
              mt: { xs: 1.4, md: 1.6 },
              fontSize: { xs: 27, sm: 31, md: 'clamp(30px, 2.1vw, 40px)' },
              fontWeight: 800,
              lineHeight: 1.08,
              color: '#08090e',
            }}
          >
            Team Details
          </Typography>
          <Typography
            sx={{
              mt: .65,
              color: '#56545b',
              fontSize: { xs: 13, sm: 15, md: 'clamp(15px, 1.1vw, 20px)' },
              lineHeight: 1.35,
            }}
          >
            Let&apos;s start with some basic information about your team and order.
          </Typography>

          <Box
            component="form"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}
            sx={{
              mt: { xs: 2.5, sm: 3, md: 'clamp(25px, 2vw, 36px)' },
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
              columnGap: { xs: 0, sm: 2 },
              rowGap: { xs: 2, sm: 2.2, md: 2.5 },
            }}
          >
            <Box sx={{ minWidth: 0 }}>
              <Typography component="label" htmlFor="team-name" sx={labelSx}>
                Team / Organization Name <Required />
              </Typography>
              <TextField
                id="team-name"
                fullWidth
                size="small"
                value={teamName}
                onChange={(event) => setTeamName(event.target.value)}
                placeholder="e.g. Riverdale Wolves"
                sx={fieldSx}
              />
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <Typography component="label" htmlFor="team-sport" sx={labelSx}>
                Sport <Required />
              </Typography>
              <FormControl fullWidth size="small" sx={fieldSx}>
                <Select
                  id="team-sport"
                  value={sport}
                  displayEmpty
                  onChange={(event) => setSport(event.target.value)}
                  renderValue={(value) => value || <span style={{ color: '#858591' }}>Select</span>}
                >
                  <MenuItem value="" disabled>Select</MenuItem>
                  {sports.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' }, minWidth: 0 }}>
              <Typography sx={labelSx}>
                Apparel Type <Required />
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  columnGap: { xs: 1.3, sm: 2.1, md: 3 },
                  rowGap: .25,
                  mt: .45,
                }}
              >
                {apparelOptions.map((item) => (
                  <FormControlLabel
                    key={item}
                    sx={{
                      mr: { xs: .4, sm: 1 },
                      ml: 0,
                      '& .MuiFormControlLabel-label': {
                        color: '#45434a',
                        fontSize: { xs: 12, sm: 13, md: 15 },
                        whiteSpace: 'nowrap',
                      },
                    }}
                    control={
                      <Checkbox
                        size="small"
                        checked={apparel.includes(item)}
                        onChange={() => toggleApparel(item)}
                        sx={{
                          p: '3px',
                          mr: .35,
                          color: RED,
                          '&.Mui-checked': { color: RED },
                          '& .MuiSvgIcon-root': { fontSize: { xs: 17, md: 19 } },
                        }}
                      />
                    }
                    label={item}
                  />
                ))}
              </Box>
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <Typography component="label" htmlFor="team-quantity" sx={labelSx}>
                Estimated Quantity <Required />
              </Typography>
              <FormControl fullWidth size="small" sx={fieldSx}>
                <Select
                  id="team-quantity"
                  value={quantity}
                  displayEmpty
                  onChange={(event) => setQuantity(event.target.value)}
                  renderValue={(value) => value || <span style={{ color: '#858591' }}>Select Quantity</span>}
                >
                  <MenuItem value="" disabled>Select Quantity</MenuItem>
                  {quantities.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <Typography component="label" htmlFor="required-by" sx={labelSx}>
                Required By <Box component="span" sx={{ color: '#66636a', fontWeight: 400 }}>(Optional)</Box>
              </Typography>
              <TextField
                id="required-by"
                type="date"
                fullWidth
                size="small"
                value={requiredBy}
                onChange={(event) => setRequiredBy(event.target.value)}
                sx={fieldSx}
                slotProps={{
                inputLabel: {
                    shrink: true,
                },
                }}
              />
            </Box>
          </Box>

        </MotionBox>
      </Box>
    </Box>
  );
}

function Required() {
  return <Box component="span" sx={{ color: RED, fontWeight: 700 }}>*</Box>;
}

const labelSx = {
  display: 'block',
  mb: .75,
  color: '#101116',
  fontSize: { xs: 13, sm: 14, md: 'clamp(14px, 1.1vw, 19px)' },
  fontWeight: 500,
  lineHeight: 1.3,
};

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    height: { xs: 38, sm: 40, md: 42 },
    borderRadius: '5px',
    bgcolor: '#fff',
    color: '#171820',
    fontSize: { xs: 12, sm: 13, md: 14 },
    '& fieldset': { borderColor: 'rgba(20,20,25,.12)' },
    '&:hover fieldset': { borderColor: 'rgba(20,20,25,.35)' },
    '&.Mui-focused fieldset': { borderColor: RED, borderWidth: 1 },
  },
  '& .MuiInputBase-input': {
    px: 1.4,
    py: 1,
    '&::placeholder': { color: '#858591', opacity: 1 },
  },
  '& .MuiSelect-select': {
    px: 1.4,
    py: 1,
    display: 'flex',
    alignItems: 'center',
  },
};
