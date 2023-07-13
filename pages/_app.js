import 'tailwindcss/tailwind.css'
import '../globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <main className="font-montserrat">
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp