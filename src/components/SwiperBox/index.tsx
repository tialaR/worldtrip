import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const continents = [
    { id: 1, name: 'América do Sul', description: 'O continente das diversidades culturais', image: '/america-sul.jpg' },
    { id: 4, name: 'Europa', description: 'O continente mais antigo', image: '/cont-europe.png' },
    { id: 2, name: 'Ásia', description: 'O maior continente do mundo', image: '/asia.jpg' },
    { id: 3, name: 'África', description: 'Terceiro maior continente do mundo', image: '/africa-2.jpg' },
    { id: 5, name: 'Oceania', description: 'O mais isolado do mundo', image: '/oceania.jpg' },
    { id: 0, name: 'América do Norte', description: 'O continente americano', image: '/america-norte-2.jpg' },
];

export function SwiperBox() {

    function formatSlugName(paramName: string) {
        return paramName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-').toLowerCase();
    }

    return (
        <Swiper
            style={{
                '--swiper-navigation-color': '#FFBA08',
                '--swiper-pagination-color': '#FFBA08',
                backgroundColor: "#DEDEDE"
            }}
            cssMode={true}
            navigation={true}
            pagination={true}
            onClick={() => console.log('click')}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {continents.map(continent => (
                <SwiperSlide>
                    <Link href={`/continente/${formatSlugName(continent.name)}`}>
                        <a key={continent.name}>
                            <Box
                                as="image"
                                bgImage={`url('${continent.image}')`}
                                bgRepeat="no-repeat"
                                bgPosition="center"
                                bgSize="cover"
                                h={["15.62rem", "28rem"]}
                                w="100%"
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Text
                                    fontSize={["1.5rem", "3rem"]}
                                    fontWeight="bold"
                                    lineHeight={["2.25rem", "4.5rem"]}
                                    color="gray.50"
                                >
                                    {continent.name}
                                </Text>
                                <Text
                                    fontSize={["0.87rem", "1.5rem"]}
                                    color="gray.100"
                                    lineHeight={["1.3rem", "2.25rem"]}
                                >
                                    {continent.description}
                                </Text>
                            </Box>
                        </a>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}