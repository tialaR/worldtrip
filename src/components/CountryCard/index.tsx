import { Box, Text, Stack, Image } from '@chakra-ui/react';

interface CountryCardProps {
    key: number;
    city: string;
    country: string;
    image: string;
    flag: string;
}

export const CountryCard = ({ city, country, image, flag, key }: CountryCardProps) => {
    return (
        <Box
            key={key}
            bg="white"
            border="1px solid rgba(255, 186, 8, 0.5)"
            borderRadius="0.25rem"
            w="16rem"
        >
            <Image src={image} objectFit="cover" w="100%" h="10.8rem" alt={image} />
            <Stack
                direction="row"
                pl="1.5rem"
                pr="2.37rem"
                pt="1.125rem"
                pb="1.56rem"
                justify="center"
                align="center"
            >
                <Box flex="1">
                    <Text
                        fontFamily="Barlow, sans-serif"
                        fontSize="1.25rem"
                        color="gray.600"
                        fontWeight="600"
                    >
                        {city}
                            </Text>
                    <Text
                        fontFamily="Barlow, sans-serif"
                        mt="0.75rem"
                        fontSize="1rem"
                        color="gray.500"
                        fontWeight="500"
                    >
                        {country}
                                </Text>
                </Box>
                <Image src={flag} w="1.87rem" h="1.87rem" alt={flag} />
            </Stack>
        </Box>
    );
}