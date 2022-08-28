import React from "react";
import styles from "../pages/CssFolder/SinglePage.module.css"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
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
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';

function Perk() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const {id} = useParams()

  const handle = () => {
    navigate(`/audio/${id}/payment`)
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme="orange">
        PEEK A PERK
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={5}>
          <ModalHeader>Back this project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text>Make a contribution</Text>
              <Box className={styles.modalBox} >
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
                  <Button colorScheme="pink" variant="outline" onClick={handle}>
                    CONTINUE
                  </Button>
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
