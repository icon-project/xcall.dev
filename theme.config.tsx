import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import Image from 'next/image'


const config: DocsThemeConfig = {
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
    dark: 170, 
    light: 190,
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://my-app.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'ICON Docs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'ICON Documentation'}
        />
      </>
    )
  },
  logo: <Image src='/images/icon-logo-white.svg' height='50' width='100' alt={'ICON logo'} />,
  chat: {
    link: 'https://icon.community/icondiscord/',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  banner: {
    key: 'banner-2',
    text: <span>😲 This is a example of what ICON documentation could look like with <a className="inline-block underline" href='https://nextra.site/'>Nextra →</a></span>
  },
  navigation: {
    prev: true,
    next: true
  },
  project: {
    link: 'https://github.com/DavidFBD/docs-custom-icon',
    icon: <Image src='/images/icx.svg' height='20' width='20' alt={'ICON icon'} />
  },
  direction: 'ltr',
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  // main: (
  //   <div>
  //     What is happening here?
  //   </div>
  // ),
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



