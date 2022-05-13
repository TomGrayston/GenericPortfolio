import { Container } from "@chakra-ui/react";
import { Divider, HStack } from "@chakra-ui/layout";

const Footer = () => {
    return(
        <>
            <Divider/>
            <Container py="1rem" maxW="container.xl">
                <HStack justifyContent={{ base: "space-between", md: "space-evenly" }}>

                </HStack>
            </Container>
        </>
    )
}

export default Footer;
