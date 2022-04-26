//Standard component layout for all pages
import { Box, Flex } from "@chakra-ui/react";
import Topbar from "./Topbar";


function Layout({ children }) {
    //Standard color background ("dark ice")
    const bgColor = '#E8E8E8';

    return (
    <Box bgColor={bgColor} minH="100vh">
        <Topbar />
        <Flex flexDirection="column" pt={'62px'}>
            {children}
        </Flex>
    </Box>
    );
}


export default Layout;