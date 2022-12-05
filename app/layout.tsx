'use client';

import './globals.css'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {darkTheme} from '../utils/themes';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head/>

        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <body id="__next">{children}</body>
        </ThemeProvider>
        </html>
    )
}
