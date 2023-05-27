import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { theme } from '@/commons/styles/theme'

export default function Document() {
  return (
    <Html>
      <Head>
        <title> e-commerce </title>
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}