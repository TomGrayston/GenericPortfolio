import ExampleProject from "../components/LandingPage/FeaturedWorkSection/ExampleProject";
import {
    Container,
    Heading,
    VStack,
    Button,
    Badge,
    HStack,
    Text,
    Divider,
    Link,
    LinkOverlay,
    Flex,
    Box,
} from "@chakra-ui/react";

import PROJECTS from "../public/projectsData.json";
import { ArrowBackIcon } from "@chakra-ui/icons";

const ProjectsPage = () => {

    const projects = PROJECTS.map((project) => {
        const techStack = project.techUsed.map((tech) => (
            <Badge colorScheme="red" variant="solid">
                {tech}
            </Badge>
        ));

        return (
            <>
                <ExampleProject key={project.id}>
                    <Heading size="md" noOfLines={1}>
                        {project.heading}
                    </Heading>
                    <HStack align="center" >
                        <Badge colorScheme="red" variant="solid" borderRadius="full" px="2">{project.year}</Badge>
                        <Text fontSize="xs">{project.subheading}</Text>
                    </HStack>
                    <Text fontSize="sm">{project.body}</Text>
                </ExampleProject>
                <Divider p="0.5rem"></Divider>
            </>
        );
    });

    return (
        <Container maxW="container.md" p="1rem 1 0 0">
            <Flex align="center" justify="space-between" py="5">
                <h2>Portfolio Projects</h2>
                <Button colorScheme="red" size="sm" pl="0"><ArrowBackIcon w="8" h="6"/>Back to Home Page</Button>
            </Flex>

            {projects}
        </Container>
    );
};

export default ProjectsPage;
