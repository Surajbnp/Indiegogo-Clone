import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import "../App.css";

const HomePage = () => {
  const [counter, setCounter] = useState(0);

  const craouselData = [
    {
      head: "GOGO PICKS",
      title: "Smartmi A1",
      description: "World Cleanest Robot With Clean Dry Vac",
      img: "https://assets.entrepreneur.com/content/3x2/2000/20150827194929-hasbro-indiegogo.jpeg?auto=webp&quality=95&crop=16:9&width=675",
    },
    {
      head: "GOGO PICKS",
      title:
        "Why This $9 Billion Publicly Traded Toy Company Is Crowdfunding to Find the Next Big Game",
      description: "World Cleanest Robot With Clean Dry Vac",
      img: "https://i0.wp.com/www.inventiva.co.in/wp-content/uploads/2021/11/fund.jpg?resize=780%2C470&ssl=1https://i0.wp.com/www.inventiva.co.in/wp-content/uploads/2021/11/fund.jpg?resize=780%2C470&ssl=1",
    },
    {
      head: "CROWDFUNDRISERS",
      title:
        "Why This $9 Billion Publicly Traded Toy Company Is Crowdfunding to Find the Next Big Game",
      description: "World Cleanest Robot With Clean Dry Vac",
      img: "https://go.indiegogo.com/wp-content/uploads/2022/03/ClearcoxIndiegogo_Launch-Announcement_Social_16x9.png",
    },
    {
      head: "FEATURED",
      title:
        "Why This $9 Billion Publicly Traded Toy Company Is Crowdfunding to Find the Next Big Game",
      description: "World Cleanest Robot With Clean Dry Vac",
      img: "https://entrepreneur.indiegogo.com/education/wp-content/uploads/sites/4/2020/10/IGG-ES-budget-shipping-education-cetner.png",
    },
  ];

  const nextImage = () => {
    if (counter === craouselData.length - 1) {
      setCounter(-1);
    }

    setCounter((prev) => prev + 1);
  };

  const prevImage = () => {
    if (counter === 0) {
      setCounter(4);
    }

    setCounter((prev) => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === craouselData.length - 1) {
        setCounter(-1);
      }

      setCounter((prev) => prev + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  // console.log(counter);

  return (
    <Box position="relative">
      <Image
        boxSize={"450px"}
        objectFit="fill"
        src={craouselData[counter].img}
        alt=""
        width={"100%"}
        className="darken"
      />
      <Box
        bottom={"40px"}
        color="white"
        left="40px"
        position="absolute"
        textAlign={"start"}
      >
        <Text textDecoration={"underline"}>{craouselData[counter].head}</Text>
        <Text fontWeight={700} mt="10px">
          {craouselData[counter].title}
        </Text>
        <Text fontSize={"14px"}>{craouselData[counter].description}</Text>
        <Text mt="5px" fontSize={"14px"} fontWeight={600}>
          SEE CAMPAIGN{" "}
        </Text>

        <Flex gap={"10px"} mt="10px" w="200px" textAlign={"center"}>
          <Button
            fontSize={"22px"}
            borderRadius={"50%"}
            h="40px"
            w="40px"
            fontWeight={700}
            border="1px solid white"
            bg={"transparent"}
            _hover={{ color: "black", bg: "white" }}
            onClick={prevImage}
          >
            {"<"}
          </Button>
          <Button
            borderRadius={"50%"}
            fontSize={"22px"}
            fontWeight={700}
            h="40px"
            w="40px"
            border="1px solid white"
            bg="transparent"
            _hover={{ color: "black", bg: "white" }}
            onClick={nextImage}
          >
            {">"}
          </Button>

          <Text fontWeight={600} m={"auto"}>{`${counter + 1} / ${
            craouselData.length
          }`}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomePage;
