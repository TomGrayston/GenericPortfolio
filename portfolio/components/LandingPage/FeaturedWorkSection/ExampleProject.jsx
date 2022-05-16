import { Container, VStack, Divider } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from '@chakra-ui/react';

const ExampleProject = ({ children }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
            <Container
            bgColor={useColorModeValue("gray.100", "gray.700")}
            p="1rem 2rem"
            borderRadius="lg"
            alignItems="flex-start"
            maxW="container.md"
            >
                <VStack alignItems="flex-start" >
                    {children}
                </VStack>
            </Container>
            <Divider/>
        </>
    )
}

export default ExampleProject;