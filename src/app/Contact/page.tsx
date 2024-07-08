import {
  Container,
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
} from '@chakra-ui/react';

export default function Contact() {
  return (
    <Container bg="black" maxW="full" mt={0} p={8} centerContent overflow="hidden">
      <Box
        // bg="#38A169"
         bg={'green.500'} 
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 2, md: 2, lg: 8 }}
      >
        <Box p={4}>
          <Heading className='mb-6 text-center text-white'>Contact Us</Heading>
          <VStack spacing={5} align="flex-start">
            <Box bg="white" borderRadius="lg" w="100%">
              <Box m={8} color="#0B0E3F">
                <VStack spacing={5}>
                  <FormControl id="name">
                    <FormLabel>Your Name</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                     
                      <Input type="email" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="message">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      borderColor="gray.300"
                      _hover={{
                        borderRadius: 'gray.300',
                      }}
                      placeholder="Enter your message here"
                    />
                  </FormControl>
                  <Button
                    variant="solid"
                    bg="#38A169"
                    color="white"
                    _hover={{}}
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
}
