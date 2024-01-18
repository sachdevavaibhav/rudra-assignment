import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ThemeRegistry from './utils/ThemeRegistry';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rudra Assignment - Innovation To Keep You Ahead Of The Threat',
  description: 'We provide high-end cybersecurity for Information and Operational Systems.',
}

export default function RootLayout({ children }) {
  console.log('RootLayout')
  return (
    <html lang="en">
      <body className={inter.className}>
          <AppRouterCacheProvider>
            <ThemeRegistry options={{key: 'mui-theme'}}>
              {children}
            </ThemeRegistry>
          </AppRouterCacheProvider>
      </body>
    </html>
  )
}
