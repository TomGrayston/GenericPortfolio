import {
    Container, Heading, VStack, Button, Divider, Link
    } from '@chakra-ui/react';
import ExampleProject from "./ExampleProject";
import PlaceholderProject from "./PlaceholderProject";
import PROJECTS from "../../../common/projectsData.json"

const FeaturedWork = () => {

    const featuredProjects = PROJECTS.filter(project => project?.isFeatured === true).map(project => (<ExampleProject key={project.id} project={project} />))

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
                {featuredProjects}
                
                <Link href="/projects" align="center" >
                    <Button size="sm" colorScheme="red" width="100%" textDecoration="none">
                        View More Projects
                    </Button>
                </Link>
                <Divider/>                    
            </VStack>
        </Container>
    );
}

export default FeaturedWork;
