import { VStack, Skeleton, Badge, Divider, Container } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

const PlaceholderProject =() => {
    return (
        <>
            <Container
            bgColor={useColorModeValue("gray.100", "gray.700")}
            p="1rem 2rem"
            borderRadius="lg"
            alignItems="flex-start"
            maxW="container.md"
            >
                <VStack alignItems="flex-start" >
                    <Skeleton height="40px" width="100%" />
                    <Badge colorScheme="red" variant="solid" >
                        Coming Soon
                    </Badge>
                    <Skeleton height="20px" width="100%"/>
                    <Skeleton height="20px" width="100%"/>
                    <Skeleton height="20px" width="100%"/>
                </VStack>
            </Container>
            <Divider/>
        </>
    );
}

export default PlaceholderProject;
