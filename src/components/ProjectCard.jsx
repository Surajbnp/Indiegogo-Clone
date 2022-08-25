import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { BsFillClockFill } from 'react-icons/bs';

const ProjectCard = ({ projectData, counter }) => {
  return (
    <Box w='100%' border='1px solid grey' h='90vh'>
      <Image src={projectData[counter].img} w='100%' h='45vh'/>

      <Box p={4} textAlign='start' h='27vh'>
      <Text>FUNDING</Text>
      <Text fontWeight={500}>{projectData[counter].head}</Text>
      <Text fontSize='12px' mt='5px'>{projectData[counter].description}</Text>
      </Box>

      
      <Box  textAlign='start' pl={4}>
      <Text color='grey'>{projectData[counter].title}</Text>
      <Text mt={5}>{projectData[counter].price} <span style={{fontSize:'12px', color:'grey'}}>USD raised</span></Text>
       <Flex alignItems='center' gap={2} mt={1}>
        <BsFillClockFill />
       <Text fontWeight={300} fontSize='14px'>{projectData[counter].days}</Text>
       </Flex>
      </Box>

      </Box>
  );
};

export default ProjectCard;
