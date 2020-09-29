import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/core';
import React from 'react';
import Container from '../components/Container';
import DocsSeo from '../components/DocsSeo';
import Sidebar from '../components/Sidebar';

const editUrl = (slug) =>
  `https://github.com/ielijose/fall-guys-api/edit/master/src/pages/${slug}.mdx`;

export default function BlogLayout({ children, frontMatter }) {
  const slug = frontMatter.__resourcePath.replace('.mdx', '');

  return (
    <Container>
      <DocsSeo url={`https://fallguysapi.com/${slug}`} {...frontMatter} />
      <Flex>
        <Sidebar />
        <Stack mx={[0, '2rem', '4rem']} w="100%">
          <Stack
            as="article"
            spacing={8}
            justifyContent="center"
            alignItems="flex-start"
            m="1rem auto"
            w="100%"
            maxW={['300px', '600px', '600px', '600px', '1024px']}
          >
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              w="100%"
              mb={0}
              marginBottom="0"
            >
              <Heading letterSpacing="tight" as="h1" size="2xl" mb={0}>
                {frontMatter.title}
              </Heading>
            </Flex>
            {children}
            <Box alignSelf="flex-end">
              <Link href={editUrl(slug)} isExternal>
                {'Edit on GitHub'}
              </Link>
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </Container>
  );
}
