import {
  Flex,
  Image,
  VStack,
  Text,
  Heading,
  HStack,
  Button,
  Center,
  IconButton,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Spacer,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import axios from "axios";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLink,
  FaRegHeart,
} from "react-icons/fa";
import FAQ from "../components/FAQ";
import Perk from "../components/Perk";
import styles from "./CssFolder/SinglePage.module.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  // let product = useSelector((state) => state.appReducer.audioProjects);
  

  const [singleProduct, setSingleProduct] = useState({});
  
  
  useEffect(() => {
    if (id) {
      axios.get(`https://indiegogo-server.herokuapp.com/audioData/${id}`)
        .then((res) => {
          console.log(res.data)
          setSingleProduct(res.data)
        })
    }
  }, [id]);

  // useEffect(() => {
  //   if (id) {
  //     const currentProduct = product.find((elem) => elem.id === id)
  //     currentProduct && setSingleProduct(currentProduct)
  //   }
    
  // }, [id, product]);
  console.log(id);
  //console.log("single", id, singleProduct);
  return (
    <div className={styles.cont}>
      <Box className={styles.topBox}>
        <Flex>
          <VStack className={styles.topStack}>
            <Image className={styles.img} src={singleProduct.cover}></Image>
          </VStack>
          <VStack align="Start" px={10} className={styles.desStack}>
            <Text color="#088366" fontSize={18} fontWeight={600}>
              {singleProduct.category}
            </Text>
            <Heading fontWeight={600} align="Start">
              {singleProduct.title}
            </Heading>
            <Text fontSize={23} fontWeight={400} align="Start">
              {singleProduct.features}
            </Text>
            <HStack>
              <Box className={styles.logo}>
                <Image
                  className={styles.img}
                  src={singleProduct.companyPic}
                ></Image>
              </Box>
              <VStack>
                <Text fontSize={17} fontWeight={500} align="Start">
                  {singleProduct.companyName}
                </Text>
                <Text fontSize={17} fontWeight={400} align="Start">
                  {singleProduct.companyAddress}
                </Text>
              </VStack>
            </HStack>
            <HStack>
              <span>
                <Text fontSize={20} fontWeight={700}>
                  {singleProduct.fund}
                </Text>
              </span>

              <Spacer />

              <Text fontSize={17} fontWeight={400}>
                {` by ${singleProduct.backers} Backers`}
              </Text>
            </HStack>
            <Progress colorScheme="green" size="sm" value={80} />
            <HStack>
              <Text fontSize={17} fontWeight={400}>
                {`${singleProduct.percentage}% of ₹799,616`}
              </Text>
              <Text fontSize={17} fontWeight={400}>
                {`${singleProduct.daysLeft} Days left`}
              </Text>
            </HStack>
            <Flex>
              <HStack>
                <Perk />
                <Button variant={"outline"} leftIcon={<FaRegHeart />}>
                  <Center>
                    <Text>FOLLOW</Text>
                  </Center>
                </Button>
              </HStack>
              <HStack>
                <IconButton
                  marginLeft={10}
                  variant={"link"}
                  icon={<FaFacebookSquare />}
                ></IconButton>
                <IconButton variant={"link"} icon={<FaTwitter />}></IconButton>
                <IconButton variant={"link"} icon={<FaLink />}></IconButton>
              </HStack>
            </Flex>
          </VStack>
        </Flex>
      </Box>
      <Box className={styles.topBox}>
        <Flex>
          <VStack className={styles.bottomStack}>
            <Tabs align="Start">
              <TabList>
                <Tab>STORY</Tab>
                <Tab>FAQ</Tab>
                <Tab>UPDATES</Tab>
                <Tab>DISCUSSION</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Box className={styles.imgBox}>
                    <Image
                      className={styles.img}
                      src={singleProduct.image1}
                    ></Image>
                  </Box>

                  <Text fontSize={17} fontWeight={400}>
                    {singleProduct.description1}
                  </Text>
                  <Box className={styles.imgBox}>
                    <Image
                      className={styles.img}
                      src={singleProduct.image2}
                    ></Image>
                  </Box>
                  <Text fontSize={17} fontWeight={400}>
                    {singleProduct.description2}
                  </Text>
                  <Box className={styles.imgBox}>
                    <Image
                      className={styles.img}
                      src={singleProduct.image3}
                    ></Image>
                  </Box>
                  <Text fontSize={17} fontWeight={400}>
                    {singleProduct.description3}
                  </Text>
                  <Box className={styles.imgBox}>
                    <Image
                      className={styles.img}
                      src={singleProduct.image4}
                    ></Image>
                  </Box>
                  <Text fontSize={17} fontWeight={400}>
                    {singleProduct.description4}
                  </Text>
                  <Box className={styles.imgBox}>
                    <Image
                      className={styles.img}
                      src={singleProduct.image5}
                    ></Image>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <FAQ />
                </TabPanel>
                <TabPanel></TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
          <VStack className={styles.perkStack} align="Start">
            <Text fontSize={17} fontWeight={500}>
              Select an option
            </Text>
            <div className={styles.perkDiv}>
              <Box width="100%" className={styles.perkdiv1}>
                <VStack align="Start">
                  <Box className={styles.imgBox1}>
                    <Image
                      className={styles.img}
                      src={singleProduct.cover}
                    ></Image>
                  </Box>
                  <Box p={5} align="Start">
                    <Text
                      align="Start"
                      fontSize={20}
                      fontWeight={700}
                    >{`1X ${singleProduct.companyName}`}</Text>
                    <Text
                      align="Start"
                      fontSize={19}
                      fontWeight={700}
                    >{`₹37,502 INR`}</Text>
                    <Text align="Start" fontSize={17} fontWeight={500}>
                      Estimated Shipping
                    </Text>
                    <Text>November 2022</Text>
                    <Text align="Start" fontSize={17} fontWeight={500}>
                      10 out of 12 claimed
                    </Text>
                    <Text>Ships WorldWide</Text>
                  </Box>
                </VStack>
              </Box>

              <Box width="100%" className={styles.perkdiv1}>
                <VStack align="Start">
                  <Box className={styles.imgBox1}>
                    <Image
                      className={styles.img}
                      src={singleProduct.cover}
                    ></Image>
                  </Box>
                  <Box p={5} align="Start">
                    <Text
                      fontSize={20}
                      fontWeight={700}
                    >{`2X ${singleProduct.companyName}`}</Text>
                    <Text fontSize={19} fontWeight={700}>{`₹73,502 INR`}</Text>
                    <Text fontSize={17} fontWeight={500}>
                      Estimated Shipping
                    </Text>
                    <Text>November 2022</Text>
                    <Text align="Start" fontSize={17} fontWeight={500}>
                      6 out of 12 claimed
                    </Text>
                    <Text>Ships WorldWide</Text>
                  </Box>
                </VStack>
              </Box>

              <Box width="100%" className={styles.perkdiv1}>
                <VStack align="Start">
                  <Box className={styles.imgBox1}>
                    <Image
                      className={styles.img}
                      src={singleProduct.cover}
                    ></Image>
                  </Box>
                  <Box p={5} align="Start">
                    <Text
                      fontSize={20}
                      fontWeight={700}
                    >{`4X ${singleProduct.companyName}`}</Text>
                    <Text fontSize={19} fontWeight={700}>{`₹137,502 INR`}</Text>
                    <Text fontSize={17} fontWeight={500}>
                      Estimated Shipping
                    </Text>
                    <Text>November 2022</Text>
                    <Text align="Start" fontSize={17} fontWeight={500}>
                      1 out of 12 claimed
                    </Text>
                    <Text>Ships WorldWide</Text>
                  </Box>
                </VStack>
              </Box>
            </div>
          </VStack>
        </Flex>
      </Box>
    </div>
  );
};

export default SinglePage;
