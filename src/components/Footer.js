import { Flex, IconButton, Link, Stack } from '@chakra-ui/core';
import NextLink from 'next/link';
import { event } from '../lib/gtag';

const Footer = () => {
  const trackNameClick = () => {
    const e = {
      action: 'click-footer-name',
      category: 'clicks',
      label: 'name',
      value: new Date()
    };
    event(e);
  };

  const trackTwitterClick = () => {
    const e = {
      action: 'click-footer-twitter',
      category: 'clicks',
      label: 'twitter',
      value: new Date()
    };
    event(e);
  };

  const trackGithubClick = () => {
    const e = {
      action: 'click-footer-github',
      category: 'clicks',
      label: 'github',
      value: new Date()
    };
    event(e);
  };

  const trackLinkedInClick = () => {
    const e = {
      action: 'click-footer-linkedin',
      category: 'clicks',
      label: 'linkedin',
      value: new Date()
    };
    event(e);
  };

  return (
    <Flex align="center" mt={6} direction="column">
      <div>
        <NextLink href="https://github.com/ielijose" passHref>
          <Link
            fontSize="md"
            color="gray.500"
            minWidth="100px"
            mr={2}
            title="Uses"
            onClick={trackNameClick}
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
            onClick={trackTwitterClick}
          />
        </Link>
        <Link href="https://github.com/ielijose" title="GitHub" isExternal>
          <IconButton
            aria-label="GitHub"
            icon="github"
            size="lg"
            color="gray.500"
            variant="ghost"
            onClick={trackGithubClick}
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
            onClick={trackLinkedInClick}
          />
        </Link>
      </Stack>
    </Flex>
  );
};

export default Footer;
