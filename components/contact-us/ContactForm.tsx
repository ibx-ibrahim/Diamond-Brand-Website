
'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RED = '#ed292f';

const fieldStyles = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#fff',
    borderRadius: '5px',
    fontSize: { xs: '13px', md: '14px' },
    '& fieldset': {
      borderColor: '#bcbcbc',
    },
    '&:hover fieldset': {
      borderColor: RED,
    },
    '&.Mui-focused fieldset': {
      borderColor: RED,
      borderWidth: '1px',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '9px 11px',
    '&::placeholder': {
      color: '#999aa5',
      opacity: 1,
    },
  },
};

const FieldLabel = ({
  children,
  required = false,
}: {
  children: React.ReactNode;
  required?: boolean;
}) => (
  <Typography
    component="label"
    sx={{
      display: 'block',
      fontSize: { xs: '14px', md: '16px' },
      fontWeight: 500,
      mb: '5px',
      color: '#101014',
    }}
  >
    {children}
    {required && (
      <Box component="span" sx={{ color: RED }}>
        {' '}*
      </Box>
    )}
  </Typography>
);

export default function ContactForm() {
  const [form, setForm] = React.useState({
    firstName: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = React.useState(false);

  const updateField =
    (field: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((previous) => ({
        ...previous,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect your backend/API here.
    // Do not show a success message until the API confirms delivery.
    console.log('Contact form data:', form);
    setSubmitted(true);
  };

  return (
    <Box
      component="section"
      aria-label="Contact Diamond Brand"
      sx={{
        width: '100%',
        bgcolor: '#bdbdbd',
        px: {
          xs: '20px',
          sm: '4%',
          md: '5%',
          lg: '6%',
        },
        py: {
        xs: '12px',
        sm: '18px',
        md: '22px',
        lg: '28px',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1720px',
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'minmax(0, 1fr) minmax(0, 1.2fr)',
          },
          gap: {
            xs: '24px',
            sm: '30px',
            md: '30px',
            lg: '38px',
          },
          alignItems: 'stretch',
        }}
      >
        {/* LEFT: MAP PANEL */}
        
<Box
  sx={{
    position: 'relative',
    minWidth: 0,
    minHeight: {
    xs: '150px',
    sm: '200px',
    md: '280px',
    lg: '300px',
    },
    border: `1.5px solid ${RED}`,
    borderRadius: {
      xs: '16px',
      md: '24px',
    },
    overflow: 'hidden',
    backgroundImage: `
  linear-gradient(
    rgba(0, 0, 0, 0.22),
    rgba(0, 0, 0, 0.22)
  ),
  url("/images/banners/map.png")
`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    pt: {
      xs: '55px',
      sm: '75px',
      md: '100px',
    },
  }}
>
  {/* LOCATION MARKER */}
  <Box
    sx={{
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <LocationOnIcon
      sx={{
        fontSize: {
          xs: '85px',
          sm: '100px',
          md: '115px',
        },
        color: '#ff8588',
        stroke: '#000',
        strokeWidth: 0.5,
        filter: 'drop-shadow(0 2px 2px rgba(0,0,0,.25))',
      }}
    />

    <Box
      sx={{
        bgcolor: '#ff969a',
        borderRadius: '0 30px 30px 0',
        px: { xs: '10px', md: '16px' },
        py: '9px',
        ml: '-14px',
      }}
    >
      <Typography
        sx={{
          color: '#000',
          fontWeight: 800,
          fontSize: {
            xs: '15px',
            sm: '18px',
            md: '22px',
          },
          lineHeight: 1.1,
        }}
      >
        Diamond Brand
      </Typography>

      <Typography
        sx={{
          color: '#111',
          fontSize: { xs: '13px', md: '17px' },
        }}
      >
        USA
      </Typography>
    </Box>
  </Box>
</Box>


        {/* RIGHT: CONTACT FORM */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            minWidth: 0,
            bgcolor: '#d6d6d6',
            borderRadius: {
              xs: '18px',
              md: '20px',
            },
            boxShadow: '0 1px 6px rgba(0,0,0,0.35)',
            pt: {
            xs: '20px',
            md: '24px',
            },
            pb: {
            xs: '20px',
            md: '22px',
            },
            px: {
            xs: '18px',
            sm: '28px',
            md: 'clamp(25px, 3.5vw, 60px)',
            },
          }}
        >
          {/* HEADING */}
          <Typography
            component="h2"
            sx={{
              textAlign: 'center',
              fontFamily:
                'var(--font-display), "Barlow Condensed", "Inter", sans-serif',
              fontWeight: 800,
              fontSize: {
                xs: 'clamp(27px, 7vw, 35px)',
                sm: '36px',
                md: 'clamp(30px, 2vw, 42px)',
              },
              lineHeight: 1.15,
              textTransform: 'uppercase',
              color: '#050505',
              m: 0,
            }}
          >
            Send us a{' '}
            <Box component="span" sx={{ color: RED }}>
              Message
            </Box>
          </Typography>

          <Typography
            sx={{
              textAlign: 'center',
              color: '#181818',
              mt: '8px',
              fontSize: {
                xs: '13px',
                sm: '15px',
                md: 'clamp(14px, 1vw, 19px)',
              },
              lineHeight: 1.4,
            }}
          >
            Fill out the form below, and our team will get back to you within 12 hours.
          </Typography>

          {/* FORM FIELDS */}
          <Box
            sx={{
              mt: {
                xs: '10px',
                md: '18px',
              },
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, minmax(0, 1fr))',
              },
              columnGap: {
                xs: '16px',
                sm: '25px',
                md: '34px',
              },
              rowGap: {
                xs: '18px',
                md: '22px',
              },
            }}
          >
            <Box sx={{ minWidth: 0 }}>
              <FieldLabel required>First Name</FieldLabel>
              <TextField
                fullWidth
                size="small"
                required
                placeholder="First Name"
                value={form.firstName}
                onChange={updateField('firstName')}
                sx={fieldStyles}
              />
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <FieldLabel required>Email</FieldLabel>
              <TextField
                fullWidth
                size="small"
                required
                type="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={updateField('email')}
                sx={fieldStyles}
              />
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <FieldLabel required>Subject</FieldLabel>
              <TextField
                fullWidth
                size="small"
                required
                placeholder="Subject a Topic"
                value={form.subject}
                onChange={updateField('subject')}
                sx={fieldStyles}
              />
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <FieldLabel required>Phone Number</FieldLabel>
              <TextField
                fullWidth
                size="small"
                required
                type="tel"
                placeholder="Enter Number"
                value={form.phone}
                onChange={updateField('phone')}
                sx={fieldStyles}
              />
            </Box>

            <Box
              sx={{
                gridColumn: {
                  xs: 'auto',
                  sm: '1 / -1',
                },
              }}
            >
              <FieldLabel>Message</FieldLabel>
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Tell us about your inquiry, team, or custom order..."
                value={form.message}
                onChange={updateField('message')}
                sx={{
                  ...fieldStyles,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                    fontSize: '14px',
                    alignItems: 'flex-start',
                    '& fieldset': {
                      borderColor: '#bcbcbc',
                    },
                    '&:hover fieldset': {
                      borderColor: RED,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: RED,
                    },
                  },
                }}
              />
            </Box>
          </Box>

          {/* SUBMIT BUTTON */}
          <Button
            type="submit"
            fullWidth
            endIcon={<ArrowForwardIcon />}
            sx={{
              mt: { xs: '24px', md: '28px' },
              height: { xs: '44px', md: '45px' },
              borderRadius: '6px',
              background:
                'linear-gradient(180deg, #f02c32 0%, #94151a 100%)',
              color: '#fff',
              fontSize: {
                xs: '14px',
                md: '16px',
              },
              fontWeight: 500,
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                background:
                  'linear-gradient(180deg, #ff343b 0%, #a6191f 100%)',
                boxShadow: 'none',
              },
            }}
          >
            Send Massage
          </Button>

          {submitted && (
            <Typography
              role="status"
              sx={{
                mt: 2,
                textAlign: 'center',
                fontSize: '13px',
                color: '#444',
              }}
            >
              Form validated. Backend submission still needs to be connected.
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
