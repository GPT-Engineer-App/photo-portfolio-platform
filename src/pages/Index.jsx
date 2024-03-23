import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, Button, Grid, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission and booking logic
    toast({
      title: "Booking submitted",
      description: "Thank you for your interest. We will get back to you soon!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box>
      {/* Header */}
      <Box bg="gray.100" py={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          John Doe Photography
        </Heading>
        <Text fontSize="xl" textAlign="center" mt={2}>
          Capturing life's precious moments
        </Text>
      </Box>

      {/* Portfolio */}
      <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8} my={12}>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <Image key={num} src={`https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwJTI0JTdCbnVtJTdEfGVufDB8fHx8MTcxMTE2ODA3NHww&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Portfolio ${num}`} />
        ))}
      </Grid>

      {/* About */}
      <Box my={12} maxW="3xl" mx="auto">
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Text fontSize="lg">Hi, I'm John Doe, a passionate photographer with over 10 years of experience. I specialize in portrait, wedding, and event photography. My goal is to capture the essence of each moment and create lasting memories for my clients.</Text>
      </Box>

      {/* Booking */}
      <Box my={12} maxW="3xl" mx="auto">
        <Heading as="h2" size="xl" mb={4}>
          Book a Session
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>

      {/* Footer */}
      <Box bg="gray.100" py={8}>
        <VStack>
          <HStack spacing={8}>
            <FaInstagram size={24} />
            <FaFacebook size={24} />
            <FaTwitter size={24} />
          </HStack>
          <Text>&copy; {new Date().getFullYear()} John Doe Photography. All rights reserved.</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;
