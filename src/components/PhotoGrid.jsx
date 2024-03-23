import React from "react";
import { Box, Image, Grid, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const PhotoGrid = ({ photos, onRemove }) => {
  return (
    <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8}>
      {photos.map((photo, index) => (
        <Box key={index} position="relative">
          <Image src={photo} alt={`Portfolio ${index + 1}`} />
          <IconButton icon={<FaTrash />} aria-label="Remove photo" onClick={() => onRemove(index)} position="absolute" top="4" right="4" colorScheme="red" />
        </Box>
      ))}
    </Grid>
  );
};

export default PhotoGrid;
