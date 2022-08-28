import {
  Box,
  Button,
  Checkbox,
  Flex,
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
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/actions";
import { useToast } from '@chakra-ui/react'


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user= useSelector((state)=> state.authReducer)
  const toastss = useToast()
  const location = useLocation() 
  const comingFrom = location.state?.from?.pathname || "/" 
  

  console.log("login", comingFrom)
  
  const loginHandler = (e) => { 
    
    e.preventDefault()

      dispatch(login(email, password))
      .then((r) => {

        if(r.type === "LOGIN_SUCCESS")
        {   
          toastss({
            title: 'Login Successful',
            description: `Welcome`,
            status: 'success',
            duration: 7000,
            isClosable: true,
            position: "top"
          })
          
          navigate(comingFrom, {replace: true});
        }
        else{
          toastss({
            title: 'Login Failed',
            description: `check your email or password`,
            duration: 7000,
            isClosable: true,
            position: "top",
            status:"error"
          })
        }
       
      })
     
      
    // }
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
            <form>
            <Box id="email">
              <FormLabel>email</FormLabel>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              </InputGroup>
            </Box>
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
                type="submit"
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
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
