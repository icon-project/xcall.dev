import React from 'react'
import { DocsThemeConfig, useConfig, useTheme } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import Image from 'next/image'

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
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – xCall Documentation'
      } 
    } else {
      return {
        title: 'Welcome - xCall Documentation',
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
    light: 182,
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { title } = useConfig()
 
    return (
      <>
        <link rel="icon" type="image/png" href="/images/xcall-favicon.ico" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="A cross-chain messaging interface deployable on any protocol"
        />
        <meta
          name="og:description"
          content="A cross-chain messaging interface deployable on any protocol"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/link-preview.jpg" />
        <meta name="twitter:site:domain" content="xcall.dev" />
        <meta name="twitter:url" content="https://xcall.dev" />
        <meta
          name="og:title"
          content={title && title !== 'Index' ? title + ' – xCall' : ''}
        />
        <meta name="og:image" content="/images/link-preview.jpg" />
        <meta name="apple-mobile-web-app-title" content="xCall" />
      </>
    )
  },
  editLink: {
    text: 'Contribute to this page →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  logo: () => {
        return (
          <Image src='/images/xcall.svg' height='50' width='100' alt={'ICON logo'} />
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
  banner: {
    key: 'banner-2',
    text: <span><a href="https://iconfoundation.notion.site/Testnet-Challenges-bc1b7de910894307970841d64ea9548f" className='inline-block underline'>🏆 Earn ICX token rewards with xCall Incentivized Testnet Challenges →</a></span>
  },
  navigation: {
    prev: true,
    next: true
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://icon.community/" target="_blank">
          ICON
        </a>
        .
      </span>
    )
  },
  faviconGlyph: '🌐',
}



export default config



