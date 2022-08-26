import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import "../App.css";
import ProjectCard from "../components/ProjectCard";
import { FaHome, FaMobileAlt, FaShoppingBag } from "react-icons/fa";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { SiAudiomack } from "react-icons/si";
import { GiFilmProjector } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const navigate = useNavigate();

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
      if (counter2 === projectData.length - 1) {
        setCounter2(-1);
      }

      setCounter((prev) => prev + 1);
      setCounter2((prev) => prev + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Box>
      {/* crouusel started */}

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

      {/* crousel ended */}

      <Box p="3%">
        {/* About and signup  div started */}

        <Box>
          <Text fontSize={"4xl"} fontFamily="ff-more-web-pro,serif">
            Find it first on Indiegogo.
          </Text>
          <Text>
            Indiegogo is where early adopters and innovation seekers find
            lively, imaginative tech before it hits the mainstream.
          </Text>
          <Box mt="30px">
            <Button
              mr={"20px"}
              bg={"#e51075"}
              borderRadius="none"
              fontWeight={700}
              fontSize={12}
              color="white"
              _hover={{
                color: "black",
                bg: "white",
                border: "0.5px solid grey",
              }}
            >
              SIGN UP NOW
            </Button>
            <Button
              color={"#e51075"}
              borderRadius="none"
              bg="none"
              fontWeight={400}
              border={"1px solid black"}
            >
              LEARN MORE
            </Button>
          </Box>
        </Box>

        {/* About and signup div ended */}

        {/* Project div Started  */}

        <Box mt="50px">
          <Text
            fontFamily="ff-more-web-pro,serif"
            fontSize="3xl"
            textAlign="start"
          >
            Popular Projects
          </Text>
        </Box>

        <Flex
          mt="20px"
          w="100%"
          justifyContent="space-between"
          gap={10}
          boxSizing="border-box"
        >
          <ProjectCard projectData={projectData} counter={counter} />
          <ProjectCard projectData={projectData} counter={counter + 1} />
          <ProjectCard projectData={projectData} counter={counter + 2} />
          <ProjectCard projectData={projectData} counter={counter + 3} />
        </Flex>

        {/* Project div ended */}

        {/* Card Collction Strted */}

        <Box mt={20} fontFamily="ff-more-web-pro,serif" fontWeight={550}>
          <Flex justifyContent="space-between">
            <Box w="48%" h="60vh">
              <Image src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1658766588/eqiz3atyhohhduuwercg.jpg" />
              <Flex justifyContent="space-between" mt={2}>
                <Text>Our roundup of standout projects</Text>
                <Text>{"SEE COLLECTION >"}</Text>
              </Flex>
            </Box>
            <Box w="48%" h="60vh">
              <Image src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1659985896/hugs8qpmkxx1uvwalnz4.jpg" />
              <Flex justifyContent="space-between" mt={2}>
                <Text>Our roundup of standout projectsTechoss S4200</Text>
                <Text>{"SEE COLLECTION >"}</Text>
              </Flex>
            </Box>
          </Flex>

          <Flex justifyContent="space-between" mt={10}>
            <Box w="48%" h="60vh">
              <Image
                h="100%"
                w="100%"
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660843743/it25dnypbcnfyodgrk7i.jpg"
              />
              <Flex justifyContent="space-between" mt={2}>
                <Text>Check out these innovative steals</Text>
                <Text>{"SEE COLLECTION >"}</Text>
              </Flex>
            </Box>
            <Box w="48%" h="60vh">
              <Image
                h="100%"
                w="100%"
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1655332492/xmwmdtjfvyy2mbbre4qo.png"
              />
              <Flex justifyContent="space-between" mt={2}>
                <Text>Our roundup of standout projectsTechoss S4200</Text>
                <Text>{"SEE COLLECTION >"}</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>

        {/* Card Collection ended */}

        {/* about div started  */}

        <Box
          border="1px solid grey"
          h="60vh"
          mt={20}
          bgImage="https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.5,f_auto/homepage/cf-bg-desktop-lg.jpg"
        >
          <Text fontFamily="ff-more-web-pro,serif" fontSize="4xl" mt={20}>
            Back the project, take the ride
          </Text>
          <Text w="50%" margin="auto" pt={5} textAlign="start">
            Indiegogo is your destination for clever innovations in tech,
            design, and more, often with special perks and pricing for early
            adopters. Back a campaign, share your ideas and feedback with the
            project team - and join the risks and rewards of bringing new
            products to life.
          </Text>
        </Box>

        {/* about div ended */}

        {/* Category div started */}
        <Box mt={10}>
          <Text fontSize={"4xl"} fontFamily="ff-more-web-pro,serif">
            Which categories interest you?
          </Text>
          <Text>
            Discover projects just for you and get great recommendations when
            you select your interests.
          </Text>
          <Box mt="30px">
            <Button
              color={"grey"}
              borderRadius="none"
              bg="none"
              fontWeight={400}
              border={"1px solid black"}
            >
              SIGN UP AND SELECT INTERSTS
            </Button>
          </Box>
        </Box>

        {/* category image div */}

        <Flex className="catImg">
          <Box fontSize="13px">
            <FaHome color="#e51075" size={60} />
            <Text mt={3}>Home</Text>
          </Box>

          <Box fontSize="13px">
            <FaMobileAlt color="#e51075" size={60} />
            <Text mt={3}>PHONES & ACCESSORIES</Text>
          </Box>

          <Box fontSize="13px">
            <FaShoppingBag color="#e51075" size={60} />
            <Text mt={3}>TRAVELL</Text>
          </Box>

          <Box fontSize="13px">
            <BsEmojiHeartEyesFill color="#e51075" size={60} />
            <Text mt={3}>HEALTH</Text>
          </Box>

          <Box fontSize="13px" onClick={() => navigate("/audio")}>
            <SiAudiomack color="#e51075" size={60} />
            <Text mt={3}>AUDIO</Text>
          </Box>

          <Box fontSize="13px">
            <GiFilmProjector color="#e51075" size={70} />
            <Text mt={3}>FILM</Text>
          </Box>
        </Flex>

        {/* category div ennded */}

        {/* review section  */}

        <Box mt={10}>
          <Text fontSize={"4xl"} fontFamily="ff-more-web-pro,serif">
            From the Indiegogo Review
          </Text>
          <Text>
            Your behind-the-scenes view of the people and stories behind
            Indiegogo projects
          </Text>
        </Box>

        <Flex className="review">
          <Box>
            <Image src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660231108/h3ayekkkolooq5k9ilvq.png" />
            <Box textAlign="start" mt={5}>
              <Text fontFamily="ff-more-web-pro,serif" fontWeight={700}>
                Indiegogo and StartEngine Join Forces
              </Text>
              <Text fontWeight={300}>
                How to raise more funds after your campaign
              </Text>
              <Text fontWeight={600} mt={3}>
                {"LEARN MORE>"}{" "}
              </Text>
            </Box>
          </Box>

          <Box>
            <Image src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660454271/xq8oqua1iie8y5abbxoi.png" />
            <Box textAlign="start" mt={5}>
              <Text fontFamily="ff-more-web-pro,serif" fontWeight={700}>
                Indiegogo and StartEngine Join Forces
              </Text>
              <Text fontWeight={300}>
                How to raise more funds after your campaign
              </Text>
              <Text fontWeight={600} mt={3}>
                {"LEARN MORE>"}{" "}
              </Text>
            </Box>
          </Box>

          <Box>
            <Image src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660288199/ak5wz5zhr0ghiwwravay.png" />
            <Box textAlign="start" mt={5}>
              <Text fontFamily="ff-more-web-pro,serif" fontWeight={700}>
                Indiegogo and StartEngine Join Forces
              </Text>
              <Text fontWeight={300}>
                How to raise more funds after your campaign
              </Text>
              <Text fontWeight={600} mt={3}>
                {"LEARN MORE>"}{" "}
              </Text>
            </Box>
          </Box>
        </Flex>

        {/* Review section ended */}

        {/* last div */}
        <Box className="last">
          <Text fontSize={"4xl"} fontFamily="ff-more-web-pro,serif">
            Clever Things For Curious Humans™
          </Text>
          <Text w='60%' margin='auto'>
            There’s no better place to start the hunt for something new and
            special. Begin on Indiegogo to find clever and unconventional things
            that solve everyday problems large and small.
          </Text>
          <Box mt="30px">
            <Button
              mr={"20px"}
              bg={"#e51075"}
              borderRadius="none"
              fontWeight={700}
              fontSize={12}
              color="white"
              _hover={{
                color: "black",
                bg: "white",
                border: "0.5px solid grey",
              }}
            >
              SIGN UP NOW
            </Button>
            <Button
              color={"#e51075"}
              borderRadius="none"
              bg="none"
              fontWeight={400}
              border={"1px solid black"}
            >
              LEARN MORE
            </Button>
          </Box>
        </Box>

        {/* last div */}
      </Box>
    </Box>
  );
};

export default HomePage;

const projectData = [
  {
    img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.5,f_auto/zda3vycwoollgmtpgzo3",
    head: "G7 HAUL PACK",
    description:
      "The G7 CARRY COLLECTION: featuring the HAUL PACK, WATERPROOF WALL SACKS, and GEAR CONES",
    title: "TRAVEL & OUTDOORS",
    price: "$44,560 ",
    days: "29 days left",
    no: "1",
  },
  {
    img: "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.5,f_auto/s4fyy16n0pu0jd2ciija",
    head: "THE EXILED by Wesley Snipes",
    description:
      "Wesley Snipes returns to comics with a sci-fi/noir tale. Get the exclusive variant cover here!",
    title: "COMICS",
    price: "$44,560 ",
    days: "29 days left",
    no: "2",
  },
  {
    img: "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.5,f_auto/dupbzqtj1rtj9batztcn",
    head: "Petspemf Pad - Electromagnetic therapy for..",
    description:
      "Automatically transmits the car’s accident location, ensuring that you receive rapid assistance.",
    title: "HEALTH & FITNESS",
    price: "$44,560 ",
    days: "30 days left",
    no: "3",
  },
  {
    img: "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.5,f_auto/zhbloclpgswiv7cxtazf",
    head: "BATON PLUG: Plug Turning Your Car Into a Lifesaver",
    description:
      "Automatically transmits the car’s accident location, ensuring that you receive rapid assistance.",
    title: "TRANSPORTATION",
    price: "$44,560 ",
    days: "29 days left",
    no: "4",
  },
  {
    img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.5,f_auto/yfdsvlvg51h7h99z0fpw",
    head: "CHARLES PARSON DRAWING",
    description:
      "a book from LeapingMan about the drawings of Colorado artist Charles Parson",
    title: "WRITING & PUBLISHING",
    price: "$44,560 ",
    days: "30 days left",
    no: "5",
  },
  {
    img: "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.5,f_auto/f2bpnbzrdnpyy9hq18xy",
    head: "Get Jacko Riding Again",
    description:
      "a book from LeapingMan about the drawings of Colorado artist Charles Parson",
    title: "COMMUNITY PROJECTS",
    price: "$44,560 ",
    days: "29 days left",
    no: "6",
  },
  {
    img: "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.5,f_auto/tnubgppbfe6wayfsywz1",
    head: "Magic Brew - The Solution To Luke-Warm Coffee",
    description:
      "The only smart temperature mug that COOLS DOWN & HEATS UP your favourite beverage for up to 8 hours!",
    title: "FOOD & BEVERAGES",
    price: "$44,560 ",
    days: "30 days left",
    no: "7",
  },
  {
    img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.5,f_auto/yfdsvlvg51h7h99z0fpw",
    head: "GPD WIN Max 2 Handheld Gaming PC 4G LTE AMD...",
    description:
      "10.1-inch bezel-less display, R7-6800U/i7-1260P processor, 16GB/32GB RAM, 1TB/2TB nvme ssd",
    title: "TECH & INNOVATION",
    price: "$44,560 ",
    days: "29 days left",
    no: "8",
  },
];

const craouselData = [
  {
    head: "GOGO PICKS",
    title: "Smartmi A1",
    description: "World Cleanest Robot With Clean Dry Vac",
    img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1661187309/sl2hhxxucqvyk9tlwb89.png",
  },
  {
    head: "GOGO PICKS",
    title:
      "Why This $9 Billion Publicly Traded Toy Company Is Crowdfunding to Find the Next Big Game",
    description: "World Cleanest Robot With Clean Dry Vac",
    img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660332984/q36ll0e34a9l3irkm9jm.jpg",
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
