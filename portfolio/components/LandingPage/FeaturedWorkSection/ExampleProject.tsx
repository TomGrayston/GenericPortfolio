import {
    Container, VStack, LinkBox, LinkOverlay, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Box, ModalFooter, Heading, Badge, HStack, Text,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Project } from "../../../common/types";

interface Props {
    project: Project;
}

const ExampleProject: React.FC<Props> = ({ project }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <LinkBox>
                <Container
                    bgColor={useColorModeValue("gray.100", "gray.700")}
                    p="1rem 2rem"
                    borderRadius="lg"
                    alignItems="flex-start"
                    maxW="container.md"
                    _hover={{ bg: useColorModeValue("gray.200", "gray.600") }}
                    cursor="pointer"
                >
                    <LinkOverlay onClick={onOpen}>
                        <VStack alignItems="flex-start">
                            <Heading size="md" noOfLines={1}>
                                {project.heading}
                            </Heading>
                            <HStack align="center">
                                <Badge
                                    colorScheme="red"
                                    variant="solid"
                                    borderRadius="full"
                                    px="2"
                                >
                                    {project.year}
                                </Badge>
                                <Text fontSize="xs" align="center">
                                    {project.subheading}
                                </Text>
                            </HStack>
                            <Text fontSize="sm">{project.body}</Text>
                        </VStack>
                    </LinkOverlay>
                </Container>
            </LinkBox>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="2xl"
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{project.heading}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box pb="4">{project.year}</Box>
                        {project.body}
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ExampleProject;
