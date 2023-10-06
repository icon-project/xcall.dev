import Consent from './consent';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Consent />
    </>
  );
}