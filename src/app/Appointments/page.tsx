import {
  Container,
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
  Button,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
  Select,
} from '@chakra-ui/react';
import DatePicker from 'react-date-picker'; // Import DatePicker component
import 'react-date-picker/dist/DatePicker.css'; // Import the CSS for react-date-picker

export default function Contact() {
  return (
    <Container bg="black" maxW="full" mt={0} p={8} centerContent overflow="hidden">
      <Box bg="green.500" borderRadius="lg" m={{ sm: 4, md: 16, lg: 10 }} p={{ sm: 2, md: 2, lg: 8 }}>
        <Box p={4}>
          <Heading className='mb-6 text-center text-white'>Make an Appointment</Heading>
          <VStack spacing={5} align="flex-start">
            <Box bg="white" borderRadius="lg" w="100%">
              <Box m={8} color="#0B0E3F">
                <VStack spacing={5}>
                  {/* First Row: Name and Age */}
                  <FormControl id="nameAge" display="flex">
                    <Box flex="1" marginRight={5}>
                      <FormLabel>Your Name</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <Input type="text" size="md" placeholder="Enter your name" />
                      </InputGroup>
                    </Box>
                    <Box flex="1">
                      <FormLabel>Age</FormLabel>
                      <NumberInput max={90} min={1} _placeholder="Enter your age">
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Box>
                  </FormControl>
                  {/* Second Row: Gender and Phone Number */}
                  <FormControl id="genderPhone" display="flex">
                    <Box flex="1" marginRight={5}>
                      <FormLabel>Gender</FormLabel>
                      <Select placeholder="Select gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Select>
                    </Box>
                    <Box flex="1">
                      <FormLabel>Phone Number</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <Input type="tel" size="md" placeholder="Enter your phone number" />
                      </InputGroup>
                    </Box>
                  </FormControl>
                  {/* Third Row: Email and Department */}
                  <FormControl id="emailDepartment" display="flex">
                    <Box flex="1" marginRight={5}>
                      <FormLabel>Email</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <Input type="email" size="md" placeholder="Enter your email" />
                      </InputGroup>
                    </Box>
                    <Box flex="1">
                      <FormLabel>Department</FormLabel>
                      <Select placeholder='Select Doctor'>
                        <option>Endocrinologist</option>
                        <option>Gastroenterology</option>
                        <option>ENT Specialist</option>
                        <option>Allergy specialist</option>
                        <option>Dietitian</option>
                        <option>Cardiologist</option>
                      </Select>
                    </Box>
                  </FormControl>
                  {/* Fourth Row: Date and Time */}
                  <FormControl id="dateTime" display="flex">
                    <Box flex="1" marginRight={5}>
                      <FormLabel>Date</FormLabel>
                       <Input type="date" />
                      </Box>
                    <Box flex="1">
                      <FormLabel>Time</FormLabel>
                      <Input type="time" />
                    </Box>
                  </FormControl>
                  {/* Fifth Row: Message */}
                  <FormControl id="message">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      borderColor="gray.300"
                      _hover={{ borderRadius: 'gray.300' }}
                      placeholder="Enter your message here"
                      size="md"
                    />
                  </FormControl>
                  {/* Submit Button */}
                  <Button variant="solid" bg="#38A169" color="white">
                    Book Appointment
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




// import {
//   Container,
//   Box,
//   Heading,
//   VStack,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   Textarea,
//   Button,
//   NumberInput,
//   NumberInputField,
//   NumberIncrementStepper,
//   NumberInputStepper,
//   NumberDecrementStepper,
//   Select, // Import Select component
// } from '@chakra-ui/react';

// export default function Contact() {
//   return (
//     <Container bg="black" maxW="full" mt={0} p={8} centerContent overflow="hidden">
//       <Box bg="green.500" borderRadius="lg" m={{ sm: 4, md: 16, lg: 10 }} p={{ sm: 2, md: 2, lg: 8 }}>
//         <Box p={4}>
//           <Heading className='mb-6 text-center text-white'>Make an Appointment</Heading>
//           <VStack spacing={5} align="flex-start">
//             <Box bg="white" borderRadius="lg" w="100%">
//               <Box m={8} color="#0B0E3F">
//                 <VStack spacing={5}>
//                   <FormControl id="name">
//                     <FormLabel>Your Name</FormLabel>
//                     <InputGroup borderColor="#E0E1E7">
//                       <Input type="text" size="md" placeholder="Enter your name" />
//                     </InputGroup>
//                   </FormControl>
//                   {/* Gender */}
//                   <FormControl id="gender">
//                     <FormLabel>Gender</FormLabel>
//                     <Select placeholder="Select gender">
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                       <option value="other">Other</option>
//                     </Select>
//                   </FormControl>
//                   {/* Age */}
//                   <FormControl>
//                     <FormLabel>Age</FormLabel>
//                     <NumberInput max={90} min={1} _placeholder="Enter your age">
//                       <NumberInputField />
//                       <NumberInputStepper>
//                         <NumberIncrementStepper />
//                         <NumberDecrementStepper />
//                       </NumberInputStepper>
//                     </NumberInput>
//                   </FormControl>
//                   {/* Email */}
//                   <FormControl id="email">
//                     <FormLabel>Email</FormLabel>
//                     <InputGroup borderColor="#E0E1E7">
//                       <Input type="email" size="md" placeholder="Enter your email" />
//                     </InputGroup>
//                   </FormControl>
//                   {/* Phone Number */}
//                   <FormControl id="phone">
//                     <FormLabel>Phone Number</FormLabel>
//                     <InputGroup borderColor="#E0E1E7">
//                       <Input type="tel" size="md" placeholder="Enter your phone number" />
//                     </InputGroup>
//                   </FormControl>
//                   {/* Department */}
//                   <FormControl>
//                  <FormLabel>Department</FormLabel>               
//                  <Select placeholder='Select Doctor'>
//                  <option>Endocrinologist</option>
//                  <option>Gastroenterology</option>
//                   <option>ENT Specialist</option>
//                    <option>Allergy specialist</option>
//                     <option>Dietitian</option>
//                      <option>Cardiologist</option>
//                 </Select>
//                 </FormControl>
//                   {/* Message */}
//                   <FormControl id="message">
//                     <FormLabel>Message</FormLabel>
//                     <Textarea
//                       borderColor="gray.300"
//                       _hover={{ borderRadius: 'gray.300' }}
//                       placeholder="Enter your message here"
//                       size="md"
//                     />
//                   </FormControl>
//                   {/* Submit Button */}
//                   <Button variant="solid" bg="#38A169" color="white">
//                    Book Appointment
//                   </Button>
//                 </VStack>
//               </Box>
//             </Box>
//           </VStack>
//         </Box>
//       </Box>
//     </Container>
//   );
// }
