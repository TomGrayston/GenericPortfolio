import { Container, Heading, VStack, Button} from "@chakra-ui/react";
import PlaceholderProject from "./PlaceholderProject";

const FeaturedWork = () => {
    return(
        <Container maxW="container.md" p="1rem">
            <VStack
            alignItems="left"
            justify="center"
            m={{ base: "1rem 0 1.2rem 0", md: "3rem 0 4rem 0" }}
            >
                <Heading fontSize="xl">
                    Featured Work
                </Heading>
                <PlaceholderProject/>
                <PlaceholderProject/>
                <PlaceholderProject/>
                <Button size="sm"> See More </Button>
            </VStack>
        </Container>

    );
}

export default FeaturedWork;
