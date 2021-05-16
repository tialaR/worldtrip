import { Box, Text } from '@chakra-ui/react';

export const BannerCountryDetail = () => {
    return (
        <Box
            bgImage="url('/cont-europe-2.png')"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            w="100%"
            h={["9.38rem", "31.25rem"]}
            display="flex"
            alignItems="center"
            px={["0", "2rem", "4rem","8.75rem"]}
            py={["0" , "1rem", "2rem","3.75rem"]}
        >
            <Text
                fontSize={["1.75rem", "3rem"]}
                color="gray.50"
                fontWeight="600"
                mt={["0", "auto"]}
                mx={["auto", "0"]}
            >
                Europa
        </Text>
        </Box>
    );
}