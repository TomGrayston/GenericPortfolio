import {
    Container,
    VStack,
    LinkBox,
    LinkOverlay,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
    ModalFooter,
    Heading,
    Badge,
    HStack,
    Text,
    Stack,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Project } from "../../../common/types";

interface Props {
    project: Project;
}

const ExampleProject: React.FC<Props> = ({ project }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const techBadges = project.techUsed ? (
        <Box>
            {project?.techUsed.map((tech, i) => (
                <Badge colorScheme="red" variant="solid" px="2" mr="2" key={i}>
                    {tech}
                </Badge>
            ))}
        </Box>
    ) : null;

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
                            <Stack 
                                direction={{ base: "column-reverse", sm: "row"}}
                                align={{base: "start", sm: "center"}}
                                w="full"
                                justify="space-between"
                            >
                                <Heading size="md" noOfLines={1}>
                                    {project.heading}
                                </Heading>
                                <Badge
                                    colorScheme="red"
                                    variant="solid"
                                    borderRadius="full"
                                    px="2"
                                >
                                    {project.year}
                                </Badge>
                            </Stack>
                            <Text fontSize="xs" align="center">
                                {project.subheading}
                            </Text>
                            {techBadges}
                            <Text fontSize="sm" noOfLines={5}>{project.body}</Text>
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
                    <ModalHeader pb="1">{project.heading}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack align="start">
                            <HStack align="center" >
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
                            <Text>{project.body}</Text>
                        </VStack>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ExampleProject;
