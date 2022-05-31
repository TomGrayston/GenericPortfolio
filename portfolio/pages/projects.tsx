import ExampleProject from "../components/LandingPage/FeaturedWorkSection/ExampleProject";
import {
    Container,
    Heading,
    Button,
    Divider,
    Flex,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import PROJECTS from "../common/projectsData.json";
import { Project } from "../common/types";

const ProjectsPage: React.FC = () => {
    
    const projects = PROJECTS.map((project: Project) => {
        return (
        <>
            <ExampleProject key={project.id} project={project} />
            <Divider my="3" colorScheme="red" /> 
        </>
    )});

    return (
        <Container maxW="container.md" p="1rem 1 0 0">
            <Flex
                align="center"
                justify="space-between"
                py="5"
                direction={{ base: "column", sm: "row" }}
            >
                <Heading as="h2" size="md" pb={[3, 0]}>
                    Portfolio Projects
                </Heading>
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
