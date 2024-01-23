import React from 'react'
import { DocsThemeConfig, useConfig, useTheme } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { NextSeo } from 'next-seo';

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/icon-project/xcall.dev'
  },
  chat: {
    link: 'https://icon.community/icondiscord/'
  },
  docsRepositoryBase: 'https://github.com/icon-project/xcall.dev/tree/main/',
  useNextSeoProps() {
    const { asPath } = useRouter()
    const { title, frontMatter } = useConfig()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – xCall Documentation',
        description: frontMatter.description,
        openGraph: {
          description: frontMatter.description,
          type: 'website',
          url: 'https://xcall.dev',
          images: [
            {
              url: 'https://xcall.dev/images/link-preview.jpg',
              width: 1200,
              height: 630,
              alt: 'xCall Documentation',
            }
          ],
        },
        
      } 
    } else {
      return {
        title: 'Welcome',
        description: "A cross-chain messaging interface deployable on any protocol",
        openGraph: {
          title: 'xCall Documentation',
          description: "A cross-chain messaging interface deployable on any protocol",
          type: 'website',
          url: 'https://xcall.dev',
          images: [
            {
              url: 'https://xcall.dev/images/link-preview.jpg',
              width: 1200,
              height: 630,
              alt: 'xCall Documentation',
            }
          ],
        },
        
      }
    }
    
  },
  gitTimestamp: () => {
    const { frontMatter } = useConfig();
    return (
      <div>
        {/* Keeping this empty on purpose */}
        {/* Last updated on: {frontMatter.gitTimestamp} */}
      </div>
    );
  },
  primaryHue: {
    dark: 182, 
    light: 192,
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { title, frontMatter } = useConfig()
    const gitTimestampString = frontMatter.gitTimestamp;
    const realTitle = title !== 'Index' ? title : 'xCall Documentation';
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": realTitle,
      "image": "https://xcall.dev/images/link-preview.jpg",
      "author": {
        "@type": "Organization",
        "name": "ICON Foundation",
        "url": "https://www.icon.foundation/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ICON Foundation",
        "logo": {
          "@type": "ImageObject",
          "url": "https://xcall.dev/images/icon-foundation-logo.svg"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://xcall.dev/"
      },
      "datePublished": "2023-07-31",
      "dateModified": gitTimestampString,
      "description": "xCall Documentation - A cross-chain messaging interface deployable on any protocol"
    };

    
    return (
      <>
        <link rel="icon" type="image/png" href="/images/xcall-favicon.ico" hrefLang="en" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="xCall" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/link-preview.jpg" />
        <meta name="twitter:site:domain" content="xcall.dev" />
        <meta name="twitter:url" content="https://xcall.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
   
      </>
    )
  },
  editLink: {
    text: 'Contribute directly to this page →'
  },
  feedback: {
    content: 'Feedback or questions about this page? Post them here →',
    labels: 'feedback'
  },
  logo: () => {
        return (
          <Image src='/images/xcall.svg' height='50' width='100' alt={'xCall logo'} />
        )     
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  // banner: {
  //   key: 'banner-2',
  //   text: <span><a target="_blank" href="https://icon.community/" className='inline-block underline'>Visit the ICON Community Website →</a></span>
  // },
  navigation: {
    prev: true,
    next: true
  },
  footer: {
    text: (
      <div className="relative z-40 flex flex-col items-center w-full sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="icon.foundation homepage"
            href="https://www.icon.foundation/"
          >
            
            <Image className='mx-auto' src='/images/icon-foundation-logo.svg' height='50' width='120' alt={'ICON logo'} />

          </a>
        </div>
        <span className='py-2 mx-auto text-[6px]'>© ICON Foundation 2023</span>
      </div>   
    )
  },
  faviconGlyph: '🌐',
}



export default config



