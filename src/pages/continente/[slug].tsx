import { Header } from "../../components/Header";
import { Flex, Box, Text, Grid } from '@chakra-ui/react';
import { CountryCard } from "../../components/CountryCard";
import { CountryInfo } from "../../components/CountryInfos";
import { BannerCountryDetail } from "../../components/BannerCountryDetail";

const countries = [
    { id: 0, city: "Londres", country: "Reino Unido", image: "/londres.png", flag: "/inglaterra-bd.png" },
    { id: 0, city: "Paris", country: "França", image: "/paris.png", flag: "/franca-bd.png" },
    { id: 0, city: "Roma", country: "Itália", image: "/roma.png", flag: "/italia-bd.png" },
    { id: 0, city: "Praga", country: "Reública Checa", image: "/praga.png", flag: "/republica-c-bd.png" },
    { id: 0, city: "Amsterdã", country: "Holanda", image: "/amsterda.png", flag: "/holanda-bd.png" },
];

export default function Continent() {
    return (
        <Box pb="4rem">
            <Header backButton />

            <BannerCountryDetail />
            <Flex
                as="main"
                direction={["column", "column", "column", "row"]}
                py={["1.8rem", "2.8rem", "3.5rem", "5rem"]}
                px={["1.25rem", "2rem", "4rem", "8.75rem"]}
            >
                <Box
                    display="flex"
                    flexWrap="wrap"
                    mb={["1rem", "1.5rem", "2rem", "0"]}
                    w={["100%", "100%", "100%", "55%"]}
                >
                    <Text
                        fontSize={["0.875rem", "1.5rem"]}
                        color="gray.600"
                        lineHeight={["1.3rem", "2.25rem"]}
                        textAlign="justify"
                    >
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
                    </Text>
                </Box>
                <CountryInfo />
            </Flex>

            <Box
                as="footer"
                w={"100%"}
                pt={["0.6rem", "1rem", "1.5rem", "0"]}
                px={["1.25rem", "2rem", "4rem", "8.75rem"]}
            >
                <Text
                    fontSize={["1.3rem", "2.25rem"]}
                    color="gray.600"
                    fontWeight="500"
                    mr="auto"
                >
                    Cidades + 100
                </Text>
                <Grid
                    templateColumns="repeat(auto-fill, minmax(15.6rem, 1fr))"
                    rowGap={["1rem", "1.5rem", "2rem", "3rem"]}
                    columnGap={["0.5rem", "1rem", "1.8rem", "2.8rem"]}
                    pt={["1rem", "1.8rem", "2.2rem", "2.5rem"]}
                    justifyItems="center"
                >
                    {countries.map((country) => (
                        <CountryCard
                            key={country.id}
                            city={country.city}
                            country={country.country}
                            flag={country.flag}
                            image={country.image}
                        />
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}