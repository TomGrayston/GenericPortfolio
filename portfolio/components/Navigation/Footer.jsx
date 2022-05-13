import { Container } from "@chakra-ui/react";
import { Divider, HStack, VStack, Link, Text} from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <>
            <Divider/>
            <Container py="1rem" maxW="container.xl">
                <VStack>
                    <HStack spacing="25px" justifyContent="center">
                        <Link target="_blank" href="https://github.com/tomgrayston">
                            <Icon as={FaGithub} w={10} h={10}/>
                        </Link>
                        <Link target="_blank" href="https://www.linkedin.com/in/tomgrayston/">
                            <Icon as={FaLinkedin} w={10} h={10}/>
                        </Link>
                    </HStack>
                    <Text fontSize="sm">Copyright ©2022 All rights reserved</Text>
                </VStack>
            </Container>
        </>
    )
}

export default Footer;
