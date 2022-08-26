import React, { useReducer } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Checkbox,
  Link,
  InputRightElement,
  Stack,
  Image,
  Button,
  Heading,
  Text,
  HStack,
  useColorModeValue,

} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../Redux/AuthReducer/actions";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
 

};

const reducer = (state, action) => {
  switch (action.type) {
    case "firstname":
      return { ...state,firstname: action.payload };
    case "lastname":
      return { ...state, lastname: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };


    default:
      return state;
  }
};

const Signup = () => {
  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signupHandle = () => {
   
    dispatch(register(state)).then((r) => {
      navigate("/login", { replace: true });
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      fontSize={"4xl"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} fontSize={"4xl"}  maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
          Welcome!
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
          Sign up to join Indiegogo.
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            
              <Box>
                <FormControl id="Name" isRequired>
                  <FormLabel>FirstName</FormLabel>
                  <Input 
                    type="text"
                    value={state.firstname}
                    placeholder="your First Name"
                    onChange={(e) =>
                      setState({ type: "firstname", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="LastName" isRequired>
                  <FormLabel>LastName</FormLabel>
                  <Input
                    type="text"
                    value={state.lastname}
                    placeholder="Your LastName"
                    onChange={(e) =>
                      setState({ type: "lastname", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
           
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Your Email"
                value={state.email}
                onChange={(e) =>
                  setState({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                type="password"
                  value={state.password}
                  placeholder="Password"
                  onChange={(e) =>
                    setState({ type: "password", payload: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button variant={"ghost"}>
                    <ViewIcon />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox >
                  <Text marginLeft={"15px"}>
                  Sign me up for the Indiegogo newsletter
                  </Text>
                  </Checkbox>
               
              </Stack>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>
                 <Text justifyContent={"space-around"} textAlign={"start"} marginLeft={"15px"}>
                  I agree to the <Link  color={"#e51075"}>Terms of Use </Link> and have read and understand the <Link  color={"#e51075"}>Privacy Policy </Link>
                 </Text> 
                 </Checkbox>

               
              </Stack>
              <Stack direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}>
                <Box>
                  <HStack textAlign={"end"} >
                  <Checkbox>
                         <Text justifyContent={"space-around"} marginLeft={"15px"}>
                          
                             I'm not a robot
                         </Text>
                  </Checkbox>
                  <Image width={"30px"}   src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/2048px-RecaptchaLogo.svg.png"/>
                    
                
                  </HStack>
                </Box>

              </Stack>
        
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#e51075"}
                                color={"white"}
                                _hover={{
                                  bg: "#e51075",
                }}
                onClick={signupHandle}
              >
              CREATE ACCOUNT
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
              <Text fontSize={"15px"}>No posts without your permission.</Text>
            <Stack pt={6}>
              <Text  fontSize={"18px"}      align={"center"}>
              Already have an account?{" "}
                <RouterLink to="/login" color={"blue.400"}>
                  Login
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;