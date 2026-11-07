import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat, Bakbak_One } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme';
import Header from '@/components/common/Header';

/** UI + body copy (nav, tagline, buttons, feature bar) */
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

/** Headings (hero headline, section titles, card titles) */
const display = Bakbak_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Diamond Brand | Custom Sports Apparel & Uniforms',
  description:
    'Custom uniforms and personalized apparel for teams, schools and organizations. Fully custom designs, built around your team.',
};

export const viewport: Viewport = {
  themeColor: '#04070C',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <main>{children}</main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
