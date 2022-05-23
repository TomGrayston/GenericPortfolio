import {
    Container, Heading, VStack, Button, Badge, HStack, Text, Divider, Link, LinkOverlay
    } from '@chakra-ui/react';
import ExampleProject from "./ExampleProject";
import PlaceholderProject from "./PlaceholderProject";
import PROJECTS from "../../../common/projectsData.json"

const FeaturedWork = () => {

    const featuredProjects = PROJECTS.filter(project => project?.isFeatured === true).map(project => (<ExampleProject project={project} />))

    return(
        <Container maxW="container.md" p="1rem 1 0 0">
            <VStack
            alignItems="left"
            justify="center"
            m={{ base: "1rem 0 1.2rem 0", md: "3rem 0 4rem 0" }}
            >
                <Heading fontSize="xl" >
                    Portfolio Projects
                </Heading>

                <PlaceholderProject/>
                <PlaceholderProject/>


                <Link href="/projects" passHref align="center" >
                    <Button size="sm" colorScheme="red" width="100%" textDecoration="none">
                        View More Projects
                    </Button>
                </Link>
                <Divider/>
                {featuredProjects}
            </VStack>
        </Container>
    );
}

export default FeaturedWork;
