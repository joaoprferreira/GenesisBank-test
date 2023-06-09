import { AppProvider } from "@/commons/context/";
import { AppProps } from "next/app";

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "@/commons/styles/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  )
}