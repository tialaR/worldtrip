import { Flex, Stack, Image, Box, Text, useBreakpointValue, UnorderedList, ListItem } from "@chakra-ui/react";

const travelTypes = [
    { image: '/cocktail.png', title: 'vida noturna' },
    { image: '/surf.png', title: 'praia' },
    { image: '/building.png', title: 'moderno' },
    { image: '/museum.png', title: 'clássico' },
    { image: '/earth.png', title: 'e mais...' },
];

export function TravelTypes() {
    const isWildeVersion = useBreakpointValue({
        base: false,
        md: true,
        lg: true,
        xl: true,
    });

    if (!isWildeVersion) {
        return (
            <UnorderedList
                flexWrap="wrap"
                display="flex"
                justifyContent="space-evenly"
                m="0"
                w="100%"
            >
                {travelTypes.map((travelType) => (
                    <ListItem
                        display="block"
                        pr="0.5rem"
                        py="0.6rem"
                    >
                        <Box position="relative">
                            <Box
                                _before={{
                                    content: `""`,
                                    position: "absolute",
                                    width: "0.4rem",
                                    height: "0.4rem",
                                    borderRadius: "0.2rem",
                                    bg: "yellow.300",
                                    top: "40%",
                                }}
                            >
                            </Box>
                            <Text
                                fontSize={["1.125rem", "1.3rem", "1.4rem", "1.5rem"]}
                                fontWeight="600"
                                color="gray.600"
                                ml="0.9rem"
                            >
                                {travelType.title}
                            </Text>
                        </Box>
                    </ListItem>
                ))}
            </UnorderedList>
        );
    }

    return (
        <Flex
            flexWrap="wrap"
            listStyleType={["disc", "disc", "none", "none"]}
            justify="space-around"
            px={["1rem", "1rem", "1.2rem", "2rem"]}
        >
            {travelTypes.map((travelType, index) => (
                <Stack
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    {isWildeVersion &&
                        <Image
                            boxSize={["2rem", "3rem", "4rem", "5.3rem"]}
                            objectFit="contain"
                            src={travelType.image}
                        />
                    }
                    <Box
                        color="yellow.300"
                        fontSize="1.5rem"
                        paddingTop={["0", "0.5rem"]}
                    >
                        <Text
                            fontSize={["1.125rem", "1.3rem", "1.4rem", "1.5rem"]}
                            fontWeight="600"
                            color="gray.600"
                        >
                            {travelType.title}
                        </Text>
                    </Box>
                </Stack>
            ))}
        </Flex>
    );
}