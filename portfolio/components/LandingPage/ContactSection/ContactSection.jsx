import { Container, HStack, VStack, Heading, FormControl, Textarea, Input, Button} from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react'

const ContactSection = ({ children }) => {

    const toast = useToast()

    return(
        <a id="contact">
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
                        <Button
                            leftIcon={<EmailIcon/>}
                            colorScheme="red"
                            onClick={() =>
                                toast({
                                    title: 'Message Sent',
                                    description: "I will try to get back to you as fast as possible",
                                    status: 'success',
                                    duration: 1500
                                    })}
                            >
                            Send Message
                        </Button>
                    </HStack>
                </VStack>
            </Container>
        </a>
    )
}

export default ContactSection;
