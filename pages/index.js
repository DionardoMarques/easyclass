import { Heading } from "@chakra-ui/react";
//import useAuth from "src/hooks/useAuth";
import Layout from "src/components/Layout";

export default function Home() {

  //const { user, signin } = useAuth();

  return (
    //Layout component standart (Layout.js)
    //Heading component from chakra-ui
    <Layout>
      <Heading as='h2' size='xl' isTruncated>
        Criando talentos e tranformando sonhos em realidades 
      </Heading>
    </Layout>
  )
}