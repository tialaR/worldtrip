import { Header } from "../components/Header";
import { Flex, Box, Text } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { SwiperBox } from "../components/SwiperBox";

export default function Home() {
  return (
    <Box pb="4rem">
      <Header />

      <Banner />

      <Box w="100%" maxWidth={1300}  mx="auto">
        <Box 
          as="main" 
          alignItems="center" 
          mt={["2.25rem", "6rem"]} 
          mb={["1rem", "1.5rem", "2rem","3.25rem"]} 
          mx={["1.25rem", "2rem"]}
        >
          <TravelTypes />
          
          <Box 
            height="0.12rem" 
            bgColor="gray.500" 
            width="5.62rem" 
            borderRadius="2rem" 
            mx="auto"
            mt={["2rem", "2.8rem", "3rem","5rem"]}
            mb={["2.25rem", "3.25rem"]}
          />

          <Text
            fontSize={["1.25rem", "2.25rem"]}
            color="gray.600"
            fontWeight="500"
            textAlign="center"
            lineHeight={["1.87rem", "3.37rem"]}
          >
            Vamos nessa?<br />
            Então escolha seu continente
          </Text>
        </Box>

        <Box as="footer">
          <SwiperBox />
        </Box>
      </Box>
    </Box>
  )
}
