import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  Image,
  InputGroup,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/actions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user= useSelector((state)=> state.authReducer)
  
  const loginHandler = () => {
    if (email && password) {
      const params = {
        email,
        password,
      };

      dispatch(login(params))
      .then((r) => {
        console.log(r)
        navigate("/", { replace: true });
      })
     
      
    }
  };
    console.log(user);
  return (
    <Flex minH={"100vh"}  fontSize={"4xl"} align={"center"} justify={"center"}>
      <Stack spacing={8}  fontSize={"4xl"}  mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Welcome back!</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
          Log in to continue. 
          </Text>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>email</FormLabel>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link  fontSize={"15px"} color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"#e51075"}
                color={"white"}
                _hover={{
                  bg: "#e51075",
                }}
                onClick={loginHandler}
              >
                LOG IN
              </Button>
            </Stack>
              <Text fontSize={"lg"}>
                OR
              </Text>
              <Button
                bg={"#405c9d"}
                color={"white"}
                _hover={{
                  bg: "#e51075",
                }}
                 
              >
                <Image width={"30px"}  src="https://en.followersnet.com/wp-content/uploads/2016/02/Facebook-1.png" alt="facebook.png" />
                <Text marginLeft={"5px"}>
                CONTINUE WITH FACEBOOK </Text>
              </Button>
              <Text  fontSize={"15px"}>No posts without your permission.</Text>
            <Stack pt={6}>
              <Text fontSize={"15px"} align={"center"}>
              New to Indiegogo?{" "}
                <RouterLink to="/signup" color={"blue.400"}>
                  Signup
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
