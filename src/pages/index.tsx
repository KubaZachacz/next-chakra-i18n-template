import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Container,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <Container maxW="container.lg">
          <Center w="full">
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                {t('title', null, {
                  default: 'Welcome to Next.js + Chakra UI',
                })}
              </Heading>
              <Text>
                {t('description', null, {
                  default:
                    'This is a template for Next.js + Chakra UI. It includes the following features:',
                })}
              </Text>
              <List spacing={3} mt={4}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <Text>
                    <Link
                      href="https://nextjs.org/docs"
                      isExternal
                      textDecoration="underline"
                    >
                      Next.js
                    </Link>{' '}
                    with TypeScript
                  </Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <Text>
                    <Link
                      href="https://chakra-ui.com/docs/getting-started"
                      isExternal
                      textDecoration="underline"
                    >
                      Chakra UI
                    </Link>{' '}
                    with a custom theme
                  </Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <Text>
                    <Link
                      href="https://next-seo.vercel.app/docs/getting-started"
                      isExternal
                      textDecoration="underline"
                    >
                      Next SEO
                    </Link>{' '}
                    with a custom default SEO
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>And much more</Text>
                </ListItem>
              </List>
            </Box>
          </Center>
        </Container>
      </main>
    </>
  );
}
