import {
  Flex,
  Image,
  VStack,
  Text,
  Heading,
  HStack,
  Container,
  Button,
  Center,
  IconButton,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLink,
  FaRegHeart,
} from "react-icons/fa";
import FAQ from "../components/FAQ";
import Perk from "../components/Perk";


const SinglePage = () => {
  return (
    <Container maxWidth="container.lg" padding={10}>
      <Box>
        <Flex>
          <VStack>
            <Image src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/ouzizrggdsrsrpuion5i.jpg"></Image>
          </VStack>
          <VStack align="flex-start" px={10}>
            <Text>category</Text>
            <Heading>title</Heading>
            <Text>features</Text>
            <HStack>
              <Image src="https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_40,g_center,q_auto:best,dpr_1.3,f_auto,h_40/qkxbv9745ls5btkj0ncp"></Image>
              <VStack>
                <Text>companyName</Text>
                <Text>companyAddress</Text>
              </VStack>
            </HStack>
            <HStack>
              <Text>fund</Text>
              <Text>backers</Text>
            </HStack>
            <Progress colorScheme="green" size="sm" value={20} />
            <HStack>
              <Text>percentage</Text>
              <Text>daysLeft</Text>
            </HStack>
            <Flex>
              <HStack>
                <Perk/>
                <Button variant={"outline"} leftIcon={<FaRegHeart />}>
                  <Center>
                    <Text>FOLLOW</Text>
                  </Center>
                </Button>
              </HStack>
              <HStack>
                <IconButton icon={<FaFacebookSquare />}></IconButton>
                <IconButton icon={<FaTwitter />}></IconButton>
                <IconButton icon={<FaLink />}></IconButton>
              </HStack>
            </Flex>
          </VStack>
        </Flex>
      </Box>
      <Box>
        <Flex>
          <VStack>
            <Tabs>
              <TabList>
                <Tab>STORY</Tab>
                <Tab>FAQ</Tab>
                <Tab>UPDATES</Tab>
                <Tab>DISCUSSION</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Image></Image>
                  <Text>Description1</Text>
                  <Image></Image>
                  <Text>Description2</Text>
                  <Image></Image>
                  <Text>Description3</Text>
                  <Image></Image>
                  <Text>Description4</Text>
                  <Image></Image>
                </TabPanel>
                <TabPanel>
                  <FAQ/>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
        </Flex>
      </Box>
    </Container>
  );
};

 export default SinglePage
