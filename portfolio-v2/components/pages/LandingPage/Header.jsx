import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Heading } from "@chakra-ui/react";
import { Stack, Text, VStack, Spacer } from "@chakra-ui/layout";
import Image from "next/image";
import profilepic from "../../../public/profilepicture.jpg";

const Header = () => {
    return (
    <Stack
        alignItems="center"
        justify="center"
        m={{ base: "1rem 0 1.2rem 0", md: "3rem 0 4rem 0" }}
        spacing="1rem"
        direction={{ base: "column", md: "row-reverse" }}
        
    >
        <VStack textAlign="center">
            <Avatar
                borderWidth="1.5px"
                borderStyle="solid"
                borderColor={useColorModeValue("black", "white.500")}
                boxSizing="border-box"
                size="3xl"
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
            <Button colorScheme="red" size="lg"> Download My CV </Button>
        </VStack>

        <VStack spacing={3} w="lg" align="flex-start">
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
            Tom Grayston
            </Heading>
        </VStack>
    </Stack>
    );
};

export default Header;
