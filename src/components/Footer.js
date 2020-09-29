import { Flex, IconButton, Link, Stack } from '@chakra-ui/core';
import NextLink from 'next/link';

const Footer = () => (
  <Flex align="center" mt={6} direction="column">
    <div>
      <NextLink href="https://github.com/ielijose" passHref>
        <Link
          fontSize="md"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Uses"
        >
          Made with ❤️ by Eli José Carrasquero
        </Link>
      </NextLink>
    </div>
    <Stack flexDirection="row" mt={2}>
      <Link href="https://twitter.com/ielijose" title="Twitter" isExternal>
        <IconButton
          aria-label="Twitter"
          icon="twitter"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="https://github.com/ielijose" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon="github"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/ielijose"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon="linkedin"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </Stack>
  </Flex>
);

export default Footer;
