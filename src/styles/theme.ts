import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "50": "#F5F8FA",
            "100": "#DADADA",
            "500": "#999999",
            "600": "#47585B",
        },
        yellow: {
            "300": "#FFBA08",
        }
    },
    fonts: {
        body: "Poppins, sans-serif",
        heading: "Poppins, sans-serif",
      },
    styles: {
        global: {
            body: {
                bg: "gray.50",
                color: "gray.600",
            },
        },
    },
});