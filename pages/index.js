import { Box, Heading, Flex, Button, Text } from "@chakra-ui/react";
//import useAuth from "src/hooks/useAuth";
import Layout from "src/components/Layout";

//Main informations
const Cover = () => {
  const bgColor = "#FFF"
  return(
    <Box bgColor={bgColor}>
      <Flex justifyContent="center" alignItems="center" py={20}>
        <Flex
          //paddingX -->
          px={[4, 8]}
          //paddingY ^|
          py={[0, 20]}
          //widht
          w="full"
          maxW="1200px"
          direction="column"
        >
          <Heading
            as="h1"
            fontSize={{ base: '42px', md: '52px', lg: '72px' }}
            mb={4}
            fontWeight="xBold"
          >
            Criando talentos
            <Box>e tranformando sonhos </Box>
            <Box bgGradient="linear(to-l, #7928CA,#94449E)" bgClip="text">
              em realidades.
            </Box>
          </Heading>
          <Text fontSize={{ base: '16px', md: '20px', lg: '22px' }}>
              <Box>
                Mantenha seus conhecimentos atualizados com os melhores {' '}
              </Box>
              <Box>professores que estão disponíveis no mercado!</Box>
          </Text>
          <Box>
            <Button
              as="a"
              my={10}
              colorScheme="purple"
              variant="outline"
              size="lg"
              href="#series"
            >
              Bora começar!
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default function Home() {

//Layout component standart (Layout.js)
  return ( 
    <Layout>
      <Cover />
    </Layout>
    );
}