import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ThemeRegistry from './utils/ThemeRegistry';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

export const metadata = {
  title: 'Rudra Assignment - Innovation To Keep You Ahead Of The Threat',
  description: 'We provide high-end cybersecurity for Information and Operational Systems.',
}

export default function RootLayout({ children }) {
  console.log('RootLayout')
  return (
    <html lang="en">
      <body >
          <AppRouterCacheProvider>
            <ThemeRegistry options={{key: 'mui-theme'}}>
              <Header />
              <Sidebar />
              {children}
            </ThemeRegistry>
          </AppRouterCacheProvider>
      </body>
    </html>
  )
};
