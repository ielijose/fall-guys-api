import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  useColorMode
} from '@chakra-ui/core';
import NextLink from 'next/link';
import React from 'react';
import Footer from './Footer';
import Logo from './Logo';
import { event } from '../lib/gtag';

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: 'gray.900'
  };
  const primarytextColor = {
    light: 'black',
    dark: 'white'
  };
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)'
  };

  const trackGithubRepoClick = () => {
    const e = {
      action: 'click-header-github-repo',
      category: 'clicks',
      label: 'github-repo',
      value: new Date()
    };
    event(e);
  };

  const handleToggle = () => {
    const e = {
      action: `toggle-theme-${colorMode}`,
      category: 'clicks',
      label: `theme`,
      value: colorMode
    };
    event(e);
    toggleColorMode();
  };

  return (
    <>
      <Flex
        flexDirection={['column', 'row']}
        justifyContent="space-between"
        alignItems={['center']}
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        p={4}
        px={6}
        mt={0}
        mb={0}
        mx="0"
        borderBottomWidth={1}
      >
        <NextLink href="/" passHref>
          <Button as="a" variant="link" p={0}>
            <Logo />
          </Button>
        </NextLink>

        <Box mt={['4', 0]}>
          <Link
            href="https://github.com/ielijose/fall-guys-api"
            title="GitHub"
            isExternal
            px={2}
            onClick={trackGithubRepoClick}
          >
            <IconButton
              aria-label="GitHub"
              icon="github"
              color="gray.500"
              variant="ghost"
            />
          </Link>

          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'dark' ? 'sun' : 'moon'}
            onClick={handleToggle}
          />
        </Box>
      </Flex>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
        borderBottomWidth={1}
      >
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Container;
