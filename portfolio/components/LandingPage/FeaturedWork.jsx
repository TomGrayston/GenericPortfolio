import { Container, Heading, VStack, HStack, Skeleton, Badge, Divider} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import PlaceholderProject from "./PlaceholderProject";

const FeaturedWork = () => {
    return(
        <Container maxW="container.md">
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
            </VStack>
        </Container>

    );
}

export default FeaturedWork;
