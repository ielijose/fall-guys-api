import { Flex, Link, Stack } from '@chakra-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import sidebarRoutes from '../config/sidebarRoutes';

const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <Stack
      as="aside"
      alignItems="flex-start"
      m="0"
      p={0}
      maxWidth="280px"
      minWidth="280px"
      borderRightWidth={1}
      pos="sticky"
      display={{ base: 'none', lg: 'block' }}
    >
      <Flex flexDirection="column">
        {sidebarRoutes.map((route, id) => {
          const selected = pathname === route.path;
          return (
            <NextLink href={route.path} passHref key={id}>
              <Link
                title={route.title}
                py={4}
                fontWeight={selected ? 'bold' : 'normal'}
              >
                {route.title}
              </Link>
            </NextLink>
          );
        })}
      </Flex>
    </Stack>
  );
};

export default Sidebar;
