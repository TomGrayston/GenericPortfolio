import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Heading } from "@chakra-ui/react";
import { Stack, Text, VStack, Container, Divider } from "@chakra-ui/layout";
import Image from "next/image";
import profilepic from "../../public/profilepicture.jpg";
import TextBlock from "./FeaturedWorkSection/TextBlock";

const Header = () => {
    return (
        <Container maxW="container.md">
            <Stack
                alignItems="center"
                justify="center"
                m={{ base: "1rem 0 1.2rem 0", md: "3rem 0 4rem 0" }}
                spacing="1rem"
                direction={{ base: "column", md: "row-reverse" }}
            >
                <VStack 
                    textAlign="center"
                    bgColor={useColorModeValue("gray.100", "gray.700")}
                    borderRadius="lg"
                    p="1rem 2rem"
                >
                    <Avatar
                        borderWidth="1.5px"
                        borderStyle="solid"
                        borderColor={useColorModeValue("black", "white.500")}
                        boxSizing="border-box"
                        size="2xl"
                        display="inline-block"
                        overflow="hidden"
                    >
                        <Image
                        src={profilepic}
                        alt="profile img"
                        layout="fill"
                        placeholder="blur"
                        />
                    </Avatar>
                    <br/>
                    <Button colorScheme="red" size="sm"> Download My CV </Button>
                </VStack>

                <TextBlock>
                    <Heading fontSize="4xl" >
                    HELLO!
                    </Heading>
                    <Text fontSize="md" >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet. 
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </Text>
                    <Text fontSize="md" >
                    Thanks for dropping by,
                    </Text>
                    <Heading fontSize="2xl" >
                    Dev Person
                    </Heading>
                </TextBlock>
            </Stack>
            <Divider p="0.5rem"/>
        </Container>
    );
};

export default Header;
