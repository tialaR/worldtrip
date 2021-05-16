import React from 'react';
import { Flex, Image, Box } from '@chakra-ui/react';
import Link from 'next/link';

interface HeaderProps {
    backButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ backButton = false }: HeaderProps) => {
    return (
        <Box
            as="header"
            h={["3.2rem", "5rem"]}
            w="100%"
            maxWidth={1480}
            mx="auto"
        >
            <Flex 
                position="relative" 
                w="100%"
                h={["3.2rem", "5rem"]}
                align="center"
                justify="center"
            >
                {backButton &&
                    <Link href="/">
                        <a>
                            <Box
                                position="absolute"
                                top={["1.2rem", "1.85rem"]}
                                left={["1rem", "3rem", "4rem","6rem"]}
                            >
                                <Image src="/bt-back.svg" boxSize={["1rem", "2rem"]} />
                            </Box>
                        </a>
                    </Link>
                }
                <Image
                    src="/logo.png"
                    boxSize={["6rem", "11.2rem"]}
                    objectFit="contain"
                    alt="Logo"
                />
            </Flex>
        </Box>
    );
}