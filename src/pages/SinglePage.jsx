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
import {
  FaFacebookSquare,
  FaTwitter,
  FaLink,
  FaRegHeart,
} from "react-icons/fa";
import FAQ from "../components/FAQ";
import Perk from "../components/Perk";
import styles from "./CssFolder/SinglePage.module.css";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAudioProjectData } from "../Redux/AppReducer/actions";

const SinglePage = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const {
    cover,
    image1,
    image2,
    image3,
    image4,
    image5,
    description1,
    description2,
    description3,
    description4,
    category,
    title,
    features,
    status,
    tag,
    companyPic,
    companyName,
    companyAddress,
    fund,
    backers,
    percentage,
    daysLeft,
  } = product;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(getAudioProjectData(productId));
    return () => {
      dispatch(getAudioProjectData());
    };
  }, [productId]);

  return (
    <div className={styles.cont}>
      <Box className={styles.topBox}>
        <Flex>
          <VStack className={styles.topStack}>
            <Image className={styles.img} src={cover}></Image>
          </VStack>
          <VStack align="flex-start" px={10}>
            <Text color="#088366" fontSize={18} fontWeight={600}>
              {category}
            </Text>
            <Heading fontWeight={600}>{title}</Heading>
            <Text fontSize={25} fontWeight={400}>
              {features}
            </Text>
            <HStack>
              <Box className={styles.logo}>
                <Image className={styles.img} src={companyPic}></Image>
              </Box>
              <VStack>
                <Text fontSize={17} fontWeight={500}>
                  {companyName}
                </Text>
                <Text fontSize={17} fontWeight={400}>
                  {companyAddress}
                </Text>
              </VStack>
            </HStack>
            <HStack>
              <span>
                <Text fontSize={20} fontWeight={700}>
                  {fund}
                </Text>
              </span>
              
              <Spacer />

              <Text fontSize={17} fontWeight={400}>
                {backers}
              </Text>
            </HStack>
            <Progress colorScheme="green" size="sm" value={80} />
            <HStack>
              <Text fontSize={17} fontWeight={400}>
                {percentage}
              </Text>
              <Text fontSize={17} fontWeight={400}>
                {daysLeft}
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
                    <Image className={styles.img} src={image1}></Image>
                  </Box>

                  <Text>{description1}</Text>
                  <Box className={styles.imgBox}>
                    <Image className={styles.img} src={image2}></Image>
                  </Box>
                  <Text>{description2}</Text>
                  <Box className={styles.imgBox}>
                    <Image className={styles.img} src={image3}></Image>
                  </Box>
                  <Text>{description3}</Text>
                  <Box className={styles.imgBox}>
                    <Image className={styles.img} src={image4}></Image>
                  </Box>
                  <Text>{description4}</Text>
                  <Box className={styles.imgBox}>
                    <Image className={styles.img} src={image5}></Image>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <FAQ />
                </TabPanel>
                <TabPanel></TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
          <VStack className={styles.perkStack}>
            <Box>
              <VStack>
                <Box className={styles.imgBox1}>
                  <Image className={styles.img}></Image>
                </Box>
                <Text>1 X</Text>
                <Text>Price</Text>
                <Text>Estimated Shipping</Text>
                <Text>November 2022</Text>
                <Text>Ships WorldWide</Text>
              </VStack>
            </Box>

            <Box>
              <VStack>
                <Box className={styles.imgBox1}>
                  <Image className={styles.img}></Image>
                </Box>
                <Text>2 X</Text>
                <Text>Price</Text>
                <Text>Estimated Shipping</Text>
                <Text>November 2022</Text>
                <Text>Ships WorldWide</Text>
              </VStack>
            </Box>

            <Box>
              <VStack>
                <Box className={styles.imgBox1}>
                  <Image className={styles.img}></Image>
                </Box>
                <Text>4 X</Text>
                <Text>Price</Text>
                <Text>Estimated Shipping</Text>
                <Text>November 2022</Text>
                <Text>Ships WorldWide</Text>
              </VStack>
            </Box>
          </VStack>
        </Flex>
      </Box>
    </div>
  );
};

export default SinglePage;
