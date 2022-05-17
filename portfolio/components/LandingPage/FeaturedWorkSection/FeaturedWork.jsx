import {
    Container, Heading, VStack,
    Button, Badge, HStack, Text,
    Modal, ModalOverlay, ModalContent,
    ModalHeader, ModalFooter, ModalBody,
    ModalCloseButton, useDisclosure, Divider, Link
    } from '@chakra-ui/react';
import ExampleProject from "./ExampleProject";
import PlaceholderProject from "./PlaceholderProject";

const FeaturedWork = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <Container maxW="container.md" p="1rem 1 0 0">
            <VStack
            alignItems="left"
            justify="center"
            m={{ base: "1rem 0 1.2rem 0", md: "3rem 0 4rem 0" }}
            >
                <Heading fontSize="xl">
                    Porfolio Projects
                </Heading>

                <PlaceholderProject/>
                <PlaceholderProject/>
                
                <ExampleProject>
                    <Heading size="md" noOfLines="1">
                        Example React Project
                    </Heading>
                    <HStack>
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
                    <Button size="xs" variant="ghost" alignSelf="flex-end" onClick={onOpen}> Learn More </Button>
                </ExampleProject>

                <Button size="sm" colorScheme="red" ><Link href="/projects"> View More Projects </Link></Button>
                <Divider/>

                <Modal isOpen={isOpen} onClose={onClose} size="2xl" motionPreset='slideInBottom'>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
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
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>

            </VStack>
        </Container>

    );
}

export default FeaturedWork;
