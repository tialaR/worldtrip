import { Flex, Box, Text, Stack, Tooltip, Image } from '@chakra-ui/react';

export function CountryInfo() {
    return (
        <Stack
            direction="row"
            justify="space-evenly"
            align="center"
            ml={["0", "1rem", "2rem", "4.37rem"]}
            w={["100%", "100%", "100%", "45%"]}
        >
            <Box
                justify="center"
                align="center"
            >
                <Text
                    color="yellow.300"
                    fontSize={["1.5rem", "3rem"]}
                    fontWeight="600"
                    lineHeight={["2.25rem", "3.5rem"]}
                >
                    50
                        </Text>
                <Text
                    fontSize={["1.125rem", "1.5rem"]}
                    fontWeight="600"
                    lineHeight={["1.68rem", "2.25rem"]}
                    color="gray.600"
                >
                    países
                        </Text>
            </Box>
            <Box
                justify="center"
                align="center"
            >
                <Text
                    color="yellow.300"
                    fontSize={["1.5rem", "3rem"]}
                    fontWeight="600"
                    lineHeight={["2.25rem", "3.5rem"]}
                >
                    60
                        </Text>
                <Text
                    fontSize={["1.125rem", "1.5rem"]}
                    fontWeight="600"
                    lineHeight={["1.68rem", "2.25rem"]}
                    color="gray.600"
                >
                    línguas
                        </Text>
            </Box>
            <Box
                justify="center"
                align="center"
            >
                <Text
                    color="yellow.300"
                    fontSize={["1.5rem", "3rem"]}
                    fontWeight="600"
                    lineHeight={["2.25rem", "3.5rem"]}
                >
                    27
                        </Text>
                <Flex direction="row" position="relative">
                    <Text
                        fontSize={["1.125rem", "1.5rem"]}
                        fontWeight="600"
                        lineHeight={["1.68rem", "2.25rem"]}
                        color="gray.600"
                    >
                        cidades + 100
                            </Text>
                    <Box position="absolute" bottom={["0.4rem", "0.55rem"]} right={["-1.1rem", "-1.4rem"]}>
                        <Tooltip label="Informação" fontSize={["sm", "md"]}>
                            <Image src="/Info.svg" boxSize={["0.7rem", "1rem"]} />
                        </Tooltip>
                    </Box>
                </Flex>
            </Box>
        </Stack>
    );
}