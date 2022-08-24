import { Box, Flex, Text, Input, Textarea, Button } from "@chakra-ui/react";
import React from "react";
import { BsYoutube } from "react-icons/bs";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialSkype,
} from "react-icons/ti";

const Footer = () => {
  return (
    <Box bg={"#f5f5f5"} w={"100%"} h={"85vh"} border={"1px solid #f5f5f5"}>
      <Flex h="50vh" mt={"50px"} justifyContent="space-evenly">
        <Box w="15%" textAlign={"start"} p="3px">
          <Text fontSize={"xl"} color="grey">
            EXPLORE
          </Text>
          <Box fontSize={"15px"} mt="5px" lineHeight={"7"} cursor="pointer">
            <Text>What we do</Text>
            <Text>Funding</Text>
          </Box>
        </Box>
        <Box w="15%" textAlign={"start"} p="3px">
          <Text fontSize={"xl"} color="grey">
            ABOUT
          </Text>
          <Box fontSize={"15px"} mt="5px" lineHeight={"7"} cursor="pointer">
            <Text>About Us</Text>
            <Text>Blog</Text>
            <Text>Trust & Safety</Text>
            <Text>Help & Support</Text>
            <Text>Press</Text>
            <Text>Carrers</Text>
            <Text>Contact</Text>
          </Box>
        </Box>
        <Box w="15%" textAlign={"start"} p="3px">
          <Text fontSize={"xl"} color="grey">
            ENTREPRENEURS
          </Text>
          <Box fontSize={"15px"} mt="5px" lineHeight={"7"} cursor="pointer">
            <Text>How It Works</Text>
            <Text>Indiegogo vs. Kickstarter</Text>
            <Text>Education Center</Text>
            <Text>Experts Directory</Text>
            <Text>Fees</Text>
            <Text>Enterprise</Text>
            <Text>China</Text>
          </Box>
        </Box>

        {/* contact parts started */}

        <Box w="25%" ml={"40px"} h="50vh">
          <Flex justify={"center"}>
            <img
              src="https://i.pinimg.com/736x/e9/8b/93/e98b93dfc56a233beeccd18434d19239.jpg"
              width={"15%"}
              alt=""
            />
          </Flex>
          <Text>
            Discover new and clever products in the Indiegogo newsletter
          </Text>
          <Box p="10px">
            <Input
              outline={"1px solid black"}
              type="text"
              placeholder="Your email adress"
            />
            <Textarea
              outline={"1px solid black"}
              placeholder="Your qurey here ..."
              mt={"10px"}
            />
            <Button
              w="100%"
              mt={"20px"}
              bg="#e51075"
              color={"white"}
              borderRadius={"none"}
            >
              Send us
            </Button>
          </Box>
        </Box>
      </Flex>

      <Flex p="30px 0px 0px 70px" gap={"40px"} cursor="pointer">
        <TiSocialFacebook size={"25px"} />
        <BsYoutube size={"25px"} />
        <TiSocialTwitter size={"25px"} />
        <TiSocialLinkedin size={"25px"} />
        <TiSocialSkype size={"25px"} />
      </Flex>

      <Box p="20px">
        <hr color="grey" />
      </Box>

      <Flex
        w={"70%"}
        margin="auto"
        fontSize={"12px"}
        justifyContent="space-between"
        fontWeight={400}
        cursor="pointer"
      >
        <Text>Terms of Use</Text>
        <Text>Privacy Policy</Text>
        <Text>Cookie Policy</Text>
        <Text>Do Not Sell My Personal Information</Text>
        <Text>Accessibility</Text>
        <Text>© 2022 Indiegogo, Inc. All Rights Reserved</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
