import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

function Perk() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>PEEK A PERK</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Back this project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text>Make a contribution</Text>
              <Box padding={6}>
                <HStack>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.500"
                      fontSize="1.2em"
                      children="$"
                    />
                    <Input placeholder="Enter amount" type="number" />
                    <InputRightElement
                      children="USD "
                      pointerEvents="none"
                      color="gray.500"
                      fontSize="1.2em"
                    />
                  </InputGroup>
                  <Button>CONTINUE</Button>
                </HStack>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Perk;
