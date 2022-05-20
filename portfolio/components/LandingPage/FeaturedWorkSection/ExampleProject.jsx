import { Container, VStack, Divider, LinkBox, LinkOverlay, Modal, ModalOverlay, ModalContent, Text,
    ModalHeader, ModalBody, ModalCloseButton, useDisclosure, HStack, Badge, ModalFooter} from "@chakra-ui/react";
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
            <Divider/>

            <Modal isOpen={isOpen} onClose={onClose} size="2xl" motionPreset='slideInBottom'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Modal Title
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <HStack p="0 0 1rem 0">
                            <Badge colorScheme="red" variant="solid" >
                                React
                            </Badge>
                            <Badge colorScheme="red" variant="solid" >
                                Next JS
                            </Badge>
                        </HStack>
                        <Text fontSize="sm">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet
                        minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br/>
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ExampleProject;