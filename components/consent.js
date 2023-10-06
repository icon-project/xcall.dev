import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { setCookie, hasCookie } from 'cookies-next';

export default function Consent(){
    const [consent, setConsent] = useState(true);
    useEffect(() => {
      setConsent(hasCookie('localConsent'));
    }, []);
  
    const acceptCookie = () => {
      setConsent(true);
      setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
      gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
      window.location.reload();
    };
    const denyCookie = () => {
      setConsent(true);
      setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
    };
    if (consent === true) {
      return null;
    }
    
    return (
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-700 rounded-lg shadow`}>

            <div className='text-center'>
                <Link href="/privacy-policy#cookies-and-web-beacons"><p className='text-white'>We use <span className='font-bold text-xteal'>cookies</span> on our site.</p></Link>
            </div>

            
            <div className='flex gap-2'>
                <button className='px-5 py-2 text-gray-300 border-gray-900 rounded-md' onClick={(e) => denyCookie()}>Decline</button>
                <button className='px-5 py-2 text-white bg-gray-900 rounded-lg' onClick={() => {acceptCookie()}}>Allow Cookies</button>
            </div>   
        </div>
    )}