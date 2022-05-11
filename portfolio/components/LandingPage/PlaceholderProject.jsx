import { VStack, HStack, Skeleton, Badge, Divider} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

const PlaceholderProject =() => {
    return (
        <>
            <HStack
                bgColor={useColorModeValue("gray.100", "gray.700")}
                p="1rem 2rem"
                borderRadius="lg"
                >
                <Skeleton height="150px" width="150px" />
                <VStack alignItems="flex-start">
                    <Skeleton height="40px" width="500px"/>
                    <Badge colorScheme="red" variant="solid" >Coming Soon</Badge>
                    <Skeleton height="20px" width="500px"/>
                    <Skeleton height="20px" width="500px"/>
                    <Skeleton height="20px" width="500px"/>
                </VStack>
            </HStack>
            <Divider/>
        </>
    );
}

export default PlaceholderProject;
