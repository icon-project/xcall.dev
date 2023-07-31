import 'tailwindcss/tailwind.css'
import '../globals.css';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <main className="font-montserrat">
      <Component {...pageProps} />
      <Analytics />
    </main>
  )
}

export default MyApp