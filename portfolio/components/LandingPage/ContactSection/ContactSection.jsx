import { Container, HStack, VStack, Heading, FormControl, Textarea, Input, Button} from "@chakra-ui/react";

const ContactSection = ({ children }) => {

    return(
        <Container maxW="container.md" >
            <VStack
            m={{ base: "1rem 0 1.2rem 0", md: "3rem 0 4rem 0" }}
            >
                <Heading fontSize="xl" alignSelf="flex-start">
                    Contact Me
                </Heading>
                <FormControl >
                    <VStack
                    alignItems=""
                    >
                        <HStack>
                            <Input id="name" placeholder="Name" size="lg" variant="filled" />
                            <Input id="email" placeholder="Email Address" size="lg" variant="filled"/>
                        </HStack>
                        <Input id="subject" placeholder="Subject" size="lg" variant="filled"/>
                        <Textarea id="message" placeholder="Message..." size="lg" variant="filled"/>
                    </VStack>
                </FormControl>
                <HStack alignSelf="flex-end">
                    <Button colorScheme="red">Send Message</Button>
                </HStack>
            </VStack>
        </Container>
    )
}

export default ContactSection;
