import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { ChatIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Container, Divider, Heading, HStack, Spacer, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import Link from "next/link";
import { Icon } from '@chakra-ui/react';
import { FaGithub } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

    const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Container py="1rem" maxW="container.xl">
                <HStack justifyContent={{ base: "space-between", md: "space-evenly" }}>
                <Box display={{ base: "inline-block", md: "flex" }} style={{ gap: "2.8rem" }}>
                    <Heading as="h1" size="md">
                        <Link href="/">
                            Dev Person
                        </Link>
                    </Heading>
                    <Box display={{ base: "none", md: "inline" }} mr="auto">
                        <HStack spacing="1.7rem">
                            <Link href="/projects">Projects</Link>
                            <a class="skip-link" href="#contact">
                                Contact Me
                            </a>
                        </HStack>
                    </Box>
                </Box>

                <HStack spacing="0.5rem">
                    <Spacer />
                    <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? (
                        <MoonIcon color="purple.900" />
                    ) : (
                        <SunIcon color="yellow.500" />
                    )}
                    </Button>
                    <Box display={{ md: "none" }}>
                    <Menu id="menu-tabs" isLazy>
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant="outline"
                            id="menu-burger-btn"
                        />
                        <MenuList id="menu-list">
                        <Link href="/" >
                            <MenuItem id="menu-item-1">
                                <>
                                    <Text>Home</Text>
                                    <Icon as={AiOutlineHome} ml="auto"/>
                                </>
                            </MenuItem>
                        </Link>
                        <Link href="/projects" >
                            <MenuItem id="menu-item-2">
                                <>
                                    <Text>Projects</Text>
                                    <Icon as={FaGithub} ml="auto"/>
                                </>
                            </MenuItem>
                        </Link>
                        <a class="skip-link" href="#contact">
                            <MenuItem id="menu-item-3">
                                <>
                                    <Text>
                                            Contact Me
                                    </Text>
                                    <ChatIcon ml="auto" />
                                </>
                            </MenuItem>
                        </a>
                        </MenuList>
                    </Menu>
                    </Box>
                </HStack>
                </HStack>
            </Container>
            <Divider />
        </>
    );
    };

    export default Navbar;
