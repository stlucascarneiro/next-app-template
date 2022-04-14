import type { AppProps } from "next/app"
import Head from "next/head";
import { useEffect, useState } from "react"
// Config
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { DeviceController } from "_config/device/resize";
import { GlobalStyle } from "pages/styles/global";
import { ThemeContext } from "_config/context/theme";

// Types
import { Devices } from "_config/device/types";
import { Theme, ThemeTypes } from "_config/theme";


export default function MyApp({ Component, pageProps }: AppProps) {
    const [device, setDevice] = useState<Devices>(Devices.undefined);
    const [themeMode, setTheme] = useState<ThemeTypes>('light');

    useEffect(() => {
        if (device === Devices.undefined) {
            DeviceController.loadDevice(device, setDevice)
        } else {
            function callback() {
                return DeviceController.handleResize(device, setDevice, callback)
            }
            window.addEventListener('resize', callback)
        }
    }, [device]);

    const theme = new Theme(themeMode, device);

    return (
        <>
            <Head>
                <title>My new cool app</title>
            </Head>
            <ThemeContext.Provider value={{ ...theme, setTheme }}>
                <GlobalStyle />
                <ChakraProvider>
                    <ThemeProvider theme={{ ...theme, device }}>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </ChakraProvider>
            </ThemeContext.Provider>
        </>
    );
}