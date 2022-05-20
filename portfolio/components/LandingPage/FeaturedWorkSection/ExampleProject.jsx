import { Container, VStack, Divider, LinkBox, LinkOverlay} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

const ExampleProject = ({ children }) => {

    return(
        <>
            <LinkBox>
                <Container
                bgColor={useColorModeValue("gray.100", "gray.700")}
                p="1rem 2rem"
                borderRadius="lg"
                alignItems="flex-start"
                maxW="container.md"
                >
                    <VStack alignItems="flex-start" >
                        {children}
                    </VStack>
                </Container>
            </LinkBox>
            <Divider/>
        </>
    )
}

export default ExampleProject;