import React, { useState } from "react";
import { Box, VStack, HStack, Heading, Text, Button, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import PhotoGrid from "../components/PhotoGrid";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

import { useRef } from "react";

const Index = () => {
  const [photos, setPhotos] = useState(["https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwJTI0JTdCbnVtJTdEfGVufDB8fHx8MTcxMTE2ODA3NHww&ixlib=rb-4.0.3&q=80&w=1080"]);
  const fileInputRef = useRef();

  const handlePhotoUpload = () => {
    const newPhotoURL = "https://via.placeholder.com/150";
    setPhotos([...photos, newPhotoURL]);
  };

  const handleRemovePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
  };
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

      {}
      <Box my={12}>
        <Heading as="h2" size="xl" mb={4}>
          Editable Portfolio
        </Heading>
        <input type="file" ref={fileInputRef} style={{ display: "none" }} />
        <Button onClick={() => fileInputRef.current.click()} colorScheme="blue" mb={4}>
          Upload Photo
        </Button>
        <Button onClick={handlePhotoUpload} colorScheme="green" mb={4}>
          Add to Portfolio
        </Button>
        <PhotoGrid photos={photos} onRemove={handleRemovePhoto} />
      </Box>

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
