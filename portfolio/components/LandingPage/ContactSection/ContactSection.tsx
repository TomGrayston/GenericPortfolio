import {
    Container,
    HStack,
    VStack,
    Heading,
    FormControl,
    Textarea,
    Input,
    Button,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useToast } from '@chakra-ui/react'

const ContactSection = ({ children }) => {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const toast = useToast()

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        let data = {
            name,
            subject,
            email,
            message,
        };

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (res.status === 200) {
            toast({
                title: 'Message Sent',
                description: "I will try to get back to you as fast as possible",
                status: 'success',
                duration: 1500
            })
            setSubmitted(true);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        } else {
            toast({
                title: 'Something went wrong.',
                description: "Sorry, there was a problem sending your email",
                status: 'error',
                duration: 1500
                })
        }
    };

    return (
        <Container maxW="container.md">
            <VStack m={{ base: "1rem 0 1.2rem 0", md: "3rem 0 4rem 0" }}>
                <Heading fontSize="xl" alignSelf="flex-start">
                    Contact Me
                </Heading>
                <FormControl>
                    <VStack alignItems="">
                        <HStack>
                            <Input
                                id="name"
                                placeholder="Name"
                                size="lg"
                                variant="filled"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                id="email"
                                placeholder="Email Address"
                                size="lg"
                                variant="filled"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </HStack>
                        <Input
                            id="subject"
                            placeholder="Subject"
                            size="lg"
                            variant="filled"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <Textarea
                            id="message"
                            placeholder="Message..."
                            size="lg"
                            variant="filled"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </VStack>
                </FormControl>
                <HStack alignSelf="flex-end">
                    <Button
                        leftIcon={<EmailIcon />}
                        colorScheme="red"
                        onClick={(e:React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}
                    >
                        Send Message
                    </Button>
                </HStack>
            </VStack>
        </Container>
    );
};

export default ContactSection;
