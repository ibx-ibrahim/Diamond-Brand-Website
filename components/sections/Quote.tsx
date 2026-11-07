'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { motion, useReducedMotion } from 'framer-motion';

import { fluid, GUTTER } from '@/lib/fluid';

const MotionBox = motion.create(Box);

const DISPLAY = 'var(--font-display), "Bakbak One", "Inter", sans-serif';
const RED = '#E3262D';
const RED_GRADIENT = 'linear-gradient(180deg, #E0292F 0%, #A5141A 100%)';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Content ─────────────────────────────────────────────────── */
const INTRO =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.";

const BENEFITS = [
  { title: 'Premium quality materials', text: 'Fabric that holds its color and shape through a full season.' },
  { title: 'Dedicated designer for each team', text: 'Expert designers creating custom uniforms for every sport.' },
  { title: 'Free design & mockups', text: 'Approve the exact look before a single stitch is cut.' },
  { title: 'Fast turnaround time', text: '7-14 business days from approval to delivery.' },
];

type FieldDef = {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: 'text' | 'email' | 'tel' | 'number';
  autoComplete?: string;
  options?: string[];
};

const FIELDS: FieldDef[] = [
  { name: 'firstName', label: 'First Name', placeholder: 'First Name', required: true, autoComplete: 'given-name' },
  { name: 'lastName', label: 'Last Name', placeholder: 'Last Name', required: true, autoComplete: 'family-name' },
  { name: 'email', label: 'Email', placeholder: 'Enter Email', required: true, type: 'email', autoComplete: 'email' },
  { name: 'phone', label: 'Phone Number', placeholder: 'Enter Number', required: true, type: 'tel', autoComplete: 'tel' },
  {
    name: 'sport',
    label: 'Sports',
    placeholder: 'Select',
    required: true,
    options: ['Baseball', 'Basketball', 'Football', 'Soccer', 'Lacrosse', 'Wrestling', 'Cricket', 'Volleyball', 'Other'],
  },
  {
    name: 'designation',
    label: 'Designations',
    placeholder: 'Select',
    options: ['Coach', 'Team manager', 'Athletic director', 'Player', 'Parent', 'Other'],
  },
  { name: 'teamName', label: 'Team Name', placeholder: 'Team Name', required: true },
  { name: 'players', label: 'No. of Players', placeholder: 'No. of Players', required: true, type: 'number' },
  { name: 'state', label: 'State/Region', placeholder: 'Enter State / Region', required: true, autoComplete: 'address-level1' },
  { name: 'city', label: 'City', placeholder: 'Enter City', required: true, autoComplete: 'address-level2' },
  {
    name: 'needBy',
    label: 'Need By Date',
    placeholder: 'Select',
    options: ['As soon as possible', 'Within 2 weeks', '2 to 4 weeks', '4 to 8 weeks', '8+ weeks', 'Flexible'],
  },
  { name: 'comments', label: 'Comments', placeholder: 'Comments' },
];

/* ── Small pieces ────────────────────────────────────────────── */
/** Red eyebrow label: full underline plus a shorter second line beneath. */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        position: 'relative',
        display: 'inline-block',
        minWidth: fluid(166, 112),
        px: fluid(6, 6),
        pb: fluid(7, 5),
        color: RED,
        textAlign: 'center',
        fontWeight: 500,
        fontSize: fluid(20, 13),
        lineHeight: 1.2,
        textTransform: 'uppercase',
        letterSpacing: '0.01em',
        borderBottom: `1px solid ${RED}`,
        '&::after': {
          content: '""',
          position: 'absolute',
          left: fluid(19, 12),
          right: fluid(19, 12),
          bottom: fluid(-5, -4),
          height: '1px',
          bgcolor: RED,
        },
      }}
    >
      {children}
    </Box>
  );
}

/** Red outlined circle with a check mark */
function CheckIcon() {
  return (
    <Box
      component="svg"
      viewBox="0 0 48 48"
      aria-hidden
      sx={{
        display: 'block',
        width: '100%',
        height: '100%',
        fill: 'none',
        stroke: RED,
        strokeWidth: 3,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    >
      <circle cx="24" cy="24" r="20.5" />
      <path d="M14.5 25l6.5 6.5L34 17" />
    </Box>
  );
}

function ChevronDown() {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      aria-hidden
      sx={{
        position: 'absolute',
        right: fluid(14, 12),
        top: '50%',
        width: fluid(24, 18),
        height: fluid(24, 18),
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
        fill: 'none',
        stroke: '#111',
        strokeWidth: 2.4,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    >
      <path d="M4 8.5l8 8 8-8" />
    </Box>
  );
}

const controlSx = {
  display: 'block',
  width: '100%',
  height: fluid(40, 40),
  px: fluid(11, 12),
  m: 0,
  bgcolor: '#fff',
  color: '#1a1a1a',
  border: '1px solid #cfcfd3',
  borderRadius: fluid(5, 5),
  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  fontFamily: 'inherit',
  fontWeight: 400,
  /* 16px minimum on phones keeps iOS from zooming on focus */
  fontSize: { xs: 16, lg: fluid(17, 14) },
  outline: 'none',
  transition: 'border-color .2s, box-shadow .2s',
  '&::placeholder': { color: '#9d9da2', opacity: 1 },
  '&:focus': { borderColor: RED, boxShadow: '0 0 0 3px rgba(227,38,45,0.16)' },
  '&:-webkit-autofill': { WebkitBoxShadow: '0 0 0 40px #fff inset' },
} as const;

function Field({ def }: { def: FieldDef }) {
  const id = `quote-${def.name}`;
  const [selected, setSelected] = React.useState('');

  return (
    <Box sx={{ minWidth: 0 }}>
      <Box
        component="label"
        htmlFor={id}
        sx={{
          display: 'block',
          mb: fluid(5, 4),
          fontFamily: DISPLAY,
          fontWeight: 400,
          fontSize: { xs: 16, lg: fluid(24, 14) },
          lineHeight: 1.1,
          color: '#0a0a0a',
        }}
      >
        {def.label}
        {def.required && (
          <Box component="span" aria-hidden sx={{ color: RED, ml: fluid(8, 6) }}>
            *
          </Box>
        )}
      </Box>

      {def.options ? (
        <Box sx={{ position: 'relative' }}>
          <Box
            component="select"
            id={id}
            name={def.name}
            required={def.required}
            value={selected}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelected(e.target.value)}
            sx={{
              ...controlSx,
              appearance: 'none',
              WebkitAppearance: 'none',
              pr: fluid(46, 40),
              cursor: 'pointer',
              color: selected ? '#1a1a1a' : '#9d9da2',
              '& option': { color: '#1a1a1a' },
            }}
          >
            <option value="" disabled>
              {def.placeholder}
            </option>
            {def.options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Box>
          <ChevronDown />
        </Box>
      ) : (
        <Box
          component="input"
          id={id}
          name={def.name}
          type={def.type ?? 'text'}
          required={def.required}
          placeholder={def.placeholder}
          autoComplete={def.autoComplete}
          inputMode={def.type === 'number' ? 'numeric' : undefined}
          min={def.type === 'number' ? 1 : undefined}
          sx={{
            ...controlSx,
            '&[type=number]': { MozAppearance: 'textfield' },
            '&[type=number]::-webkit-outer-spin-button, &[type=number]::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
          }}
        />
      )}
    </Box>
  );
}

/* ── Section ─────────────────────────────────────────────────── */
export default function Quote() {
  const reduce = useReducedMotion();
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const fadeUp = (delay = 0) => ({
    initial: reduce ? (false as const) : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.8, ease: EASE, delay },
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      // TODO: send `payload` to your backend, e.g.
      // await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      console.info('Quote request', payload);
      await new Promise((r) => setTimeout(r, 900));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <Box
      component="section"
      aria-labelledby="quote-why-title"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        bgcolor: '#d1d1d3',
        color: '#0a0a0a',
        pt: { xs: 8, sm: 9, lg: fluid(120, 64) },
        pb: { xs: 8, lg: fluid(96, 48) },
      }}
    >
      {/* soft fade in from the FAQ section above */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          background: 'linear-gradient(180deg, #b6b6b9 0%, rgba(209,209,211,0) 15%)',
        }}
      />

      <Box
        sx={{
          maxWidth: 2560,
          mx: 'auto',
          px: GUTTER,
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: `minmax(0, 1fr) ${fluid(1114, 540)}` },
          columnGap: fluid(42, 36),
          rowGap: { xs: 6, lg: 0 },
          alignItems: 'center',
        }}
      >
        {/* ── Left: why choose us ─────────────────────── */}
        <Box sx={{ minWidth: 0 }}>
          <MotionBox {...fadeUp()}>
            <SectionLabel>Why choose us</SectionLabel>

            <Box
              component="h2"
              id="quote-why-title"
              sx={{
                m: 0,
                mt: fluid(22, 14),
                fontFamily: DISPLAY,
                fontWeight: 400,
                textTransform: 'uppercase',
                lineHeight: 1.15,
                letterSpacing: '0.005em',
                fontSize: { xs: 'clamp(30px, 9vw, 46px)', lg: fluid(72, 38) },
              }}
            >
              <Box component="span" sx={{ display: 'block' }}>
                Our custom
              </Box>
              <Box component="span" sx={{ display: 'block', color: RED }}>
                Sports uniforms?
              </Box>
            </Box>

            <Box
              component="p"
              sx={{
                m: 0,
                mt: fluid(14, 12),
                fontWeight: 400,
                lineHeight: 1.18,
                color: '#4b4b4f',
                fontSize: { xs: 16, sm: 17, lg: fluid(27, 14) },
              }}
            >
              {INTRO}
            </Box>
          </MotionBox>

          <Box
            component="ul"
            sx={{
              m: 0,
              p: 0,
              mt: fluid(30, 24),
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              rowGap: fluid(28, 18),
            }}
          >
            {BENEFITS.map((b, i) => (
              <Box component="li" key={b.title} sx={{ listStyle: 'none' }}>
                <MotionBox
                  {...fadeUp(i * 0.07)}
                  sx={{ display: 'flex', alignItems: 'center', columnGap: fluid(30, 16) }}
                >
                  <Box sx={{ width: fluid(50, 34), height: fluid(50, 34), flexShrink: 0 }}>
                    <CheckIcon />
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Box
                      component="h3"
                      sx={{
                        m: 0,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        lineHeight: 1.15,
                        color: '#0a0a0a',
                        fontSize: { xs: 17, sm: 18, lg: fluid(33, 15) },
                      }}
                    >
                      {b.title}
                    </Box>
                    <Box
                      component="p"
                      sx={{
                        m: 0,
                        mt: fluid(6, 4),
                        lineHeight: 1.2,
                        color: '#4b4b4f',
                        fontSize: { xs: 15, sm: 16, lg: fluid(26, 13.5) },
                      }}
                    >
                      {b.text}
                    </Box>
                  </Box>
                </MotionBox>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Right: quote form ───────────────────────── */}
        <MotionBox
          {...fadeUp(0.1)}
          sx={{
            minWidth: 0,
            px: { xs: 2.5, sm: 5, lg: fluid(97, 32) },
            pt: { xs: 4, lg: fluid(36, 24) },
            pb: { xs: 4, lg: fluid(36, 22) },
            borderRadius: fluid(36, 24),
            bgcolor: '#d9d9db',
            border: '1px solid rgba(255,255,255,0.45)',
            boxShadow:
              '0 18px 44px rgba(0,0,0,0.2), -4px 6px 14px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.6)',
          }}
        >
          <Box
            component="h2"
            sx={{
              m: 0,
              textAlign: 'center',
              fontFamily: DISPLAY,
              fontWeight: 400,
              textTransform: 'uppercase',
              lineHeight: 1.12,
              letterSpacing: '0.005em',
              fontSize: { xs: 'clamp(24px, 7vw, 34px)', lg: fluid(44, 24) },
            }}
          >
            <Box component="span" sx={{ display: 'block' }}>
              Get your free custom
            </Box>
            <Box component="span" sx={{ display: 'block', color: RED }}>
              Uniform quote
            </Box>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            aria-label="Free custom uniform quote"
            sx={{ mt: fluid(34, 20) }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))' },
                columnGap: fluid(56, 20),
                rowGap: fluid(14, 12),
              }}
            >
              {FIELDS.map((f) => (
                <Field key={f.name} def={f} />
              ))}
            </Box>

            <Box sx={{ mt: fluid(30, 22), display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <MotionBox
                whileHover={reduce || status === 'sending' ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                sx={{ width: { xs: '100%', sm: fluid(316, 220) } }}
              >
                <Box
                  component="button"
                  type="submit"
                  disabled={status === 'sending'}
                  sx={{
                    width: '100%',
                    height: fluid(46, 44),
                    border: 0,
                    borderRadius: fluid(7, 6),
                    cursor: 'pointer',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontWeight: 500,
                    fontSize: { xs: 17, lg: fluid(22, 16) },
                    background: RED_GRADIENT,
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 24px rgba(200,25,35,0.35)',
                    transition: 'filter .25s, box-shadow .25s, opacity .25s',
                    '&:hover': { filter: 'brightness(1.1)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 14px 32px rgba(225,35,45,0.5)' },
                    '&:disabled': { opacity: 0.7, cursor: 'progress' },
                    '&:focus-visible': { outline: '3px solid #0a0a0a', outlineOffset: 3 },
                  }}
                >
                  {status === 'sending' ? 'Sending…' : 'Submit'}
                </Box>
              </MotionBox>

              <Box
                role="status"
                aria-live="polite"
                sx={{
                  minHeight: '1.2em',
                  textAlign: 'center',
                  fontSize: { xs: 14.5, lg: fluid(20, 14) },
                  color: status === 'error' ? RED : '#3d6b3d',
                }}
              >
                {status === 'sent' && 'Thanks! Your quote request was sent. We will be in touch shortly.'}
                {status === 'error' && 'Something went wrong. Please try again.'}
              </Box>
            </Box>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
}