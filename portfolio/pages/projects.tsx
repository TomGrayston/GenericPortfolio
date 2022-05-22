import ExampleProject from "../components/LandingPage/FeaturedWorkSection/ExampleProject";
import {
    Container,
    Heading,
    Button,
    Badge,
    HStack,
    Text,
    Divider,
    Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";

import PROJECTS from "../public/projectsData.json";
import { ArrowBackIcon } from "@chakra-ui/icons";

const ProjectsPage = () => {

    const projects = PROJECTS.map((project) => {
        return (
            <>
                <ExampleProject key={project.id}>
                    <Heading size="md" noOfLines={1}>
                        {project.heading}
                    </Heading>
                    <HStack align="center" >
                        <Badge colorScheme="red" variant="solid" borderRadius="full" px="2">{project.year}</Badge>
                        <Text fontSize="xs" align="center">{project.subheading}</Text>
                    </HStack>
                    <Text fontSize="sm">{project.body}</Text>
                </ExampleProject>
                <Divider my="3" colorScheme="red" />
            </>
        );
    });

    return (
        <Container maxW="container.md" p="1rem 1 0 0">
            <Flex align="center" justify="space-between" py="5">
                <Heading as='h2' size='md'>Portfolio Projects</Heading>
                <NextLink href={"/"}>
                    <Button colorScheme="red" size="sm" pl="0">
                        <ArrowBackIcon w="8" h="6" />
                        Back to Home Page
                    </Button>
                </NextLink>
            </Flex>
            {projects}
        </Container>
    );
};

export default ProjectsPage;
