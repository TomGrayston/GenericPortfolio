import { Container, VStack, LinkBox, LinkOverlay, Modal, ModalOverlay, ModalContent,
    ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Box, ModalFooter} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

const ExampleProject = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <>
            <LinkBox>
                <Container
                bgColor={useColorModeValue("gray.100", "gray.700")}
                p="1rem 2rem"
                borderRadius="lg"
                alignItems="flex-start"
                maxW="container.md"
                _hover={{ bg: useColorModeValue("gray.200", "gray.600")}}
                cursor="pointer"
                >
                    <LinkOverlay onClick={onOpen} >
                        <VStack alignItems="flex-start" >
                            {children}
                        </VStack>
                    </LinkOverlay>
                </Container>
            </LinkBox>

            <Modal isOpen={isOpen} onClose={onClose} size="2xl" motionPreset='slideInBottom'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {children[0]}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box pb="4">{children[1]}</Box>
                        {children[2]}
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ExampleProject;