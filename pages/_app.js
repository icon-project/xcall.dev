import 'tailwindcss/tailwind.css'; // Import Tailwind CSS first
import '../globals.css'; // Then import your custom styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
