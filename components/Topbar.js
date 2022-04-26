//Topbar component to use in all of pages
import { Box, Flex } from '@chakra-ui/react'

function Topbar () {
//Background color of topbar (white)
const bgColor = '#FFF';
//Text color of topbar (kind of black)
const color = '#3B3B3A';
//Border color of topbar (olive green)
const borderColor = '#7F8777';

    //Flex component from chakra-ui (Box + display flex)
    return (
        <Flex
            w="full"
            position="fixed"
            zIndex={99999}
            bgColor={bgColor}
            color={color}
            borderBottom={`1px solid ${borderColor}`}
        >
            <Flex 
                alignItems="center" 
                justifyContent="space-between" 
                w="full" 
                maxW="1200px"
                margin="0 auto"
                h="60px"
                px={[4, 8]}
            >
                <Box>EASY CLASS (logo)</Box>
                <Box>Login</Box>
            </Flex>
        </Flex>
    );
}

export default Topbar;