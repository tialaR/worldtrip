import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

export function Banner() {
    const isWildeVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box
            as="header"
            width="100%"
            position="relative"
        >
            <Box
                bgImage="url('/Background.png')"
                bgRepeat="no-repeat"
                bgPosition="center"
                bgSize="cover"
                w="100%"
                px={["1.25rem", "3rem", "5rem","8.75rem"]}
                py={["1.75rem", "2.5rem", "3rem", "5rem"]}
                display="flex"
                alignItems="center"
            >
                <Flex
                    direction="column"
                    textAlign="left"
                    pr={["0", "1rem", "2rem", "4rem"]}
                >
                    <Text
                        as="h2"
                        fontWeight="500"
                        fontSize={["1.25rem", "2.25rem"]}
                        lineHeight={["1.87rem", "3.37rem"]}
                        color="gray.50"
                    >
                        5 Continentes,<br /> infinitas possibilidades.
              </Text>
                    <Text
                        fontSize={["0.87rem", "1.25rem"]}
                        fontWeight="400"
                        lineHeight={["1.31rem", "1.8rem"]}
                        color="gray.100"
                        mt={["0", "1rem"]}
                    >
                        Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou.
              </Text>
                </Flex>
                {isWildeVersion &&
                    <Box position="absolute" right="8.75rem" bottom="-2rem">
                        <Image src="/Airplane.png" alt="Airplane Image" w="26rem" />
                    </Box>
                }
            </Box>
        </Box>
    );
}