import React, { useState } from "react";
import { Box, Button, Input, Spinner } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


export const PaymentPage = () => {
  const [value, setV] = useState(0);
  const [flag , setF] = useState(true)
  const navigate = useNavigate()


  const handle = () => {
    setF(false)
    
    setTimeout(() => {
      alert('Payment Successfully...')
      navigate('/')
    }, 3000)
  }

  let rupee = value * 80;

  return (
    <Flex gap={10} w="100%" textAlign="start" mt={10}>
      <Box w="50%" h={"220vh"}  pt={20} pl={20}>
        <Text color="grey">YOU'RE CONTRIBUTING TO</Text>
        <Text fontSize="3xl">G7 HAUL PACK</Text>
        <Text fontWeight={600} mt={10}>
          Secure Payment{" "}
        </Text>
        <Box mt={5} border="1px solid grey" p={10}>
          <Box>
            <label>Name *</label>
            <Input></Input>
          </Box>

          <Box mt={5}>
            <label>Email *</label>
            <Input></Input>
          </Box>

          <Box mt={5}>
            <label>Name on Card *</label>
            <Input></Input>
          </Box>

          <Box mt={5}>
            <label>Card Details *</label>
            <Input></Input>
          </Box>
        </Box>
      </Box>
      <Box w="40%" h={"220vh"} pl={20} pt={20} pr={20} bg="#f5f5f5" mb={10}>
        <Text fontWeight={700}>Contribution summary</Text>
        <Text mt={5}>Your Contribution</Text>
        <Input
          placeholder="$"
          mt={3}
          borderColor="1px solid black"
          value={value}
          onChange={(e) => setV(e.target.value)}
        />

        <Box mt={10}>
          <hr color="black" />
        </Box>

        <Flex justifyContent="space-between" mt={10} alignItms="center">
          <Text fontSize="2xl">Sub Total</Text>
          <Box>
            <Text>{`${value} $`}</Text>
            <Text fontSize="14px" color="grey">
              {`₹ ${rupee} INR`}
            </Text>
          </Box>
        </Flex>

        <Flex justifyContent="space-between" mt={10} alignItms="center">
          <Text fontWeight={700} fontSize="2xl">
            Total
          </Text>
          <Box>
            <Text>{`${value} $`}</Text>
            <Text fontSize="14px" color="grey">
            {`₹ ${rupee} INR`}
            </Text>
          </Box>
        </Flex>

        <Box border="1px solid #007575" color="#007575" mt={10} p={5}>
          <Text>
            The payment will be processed in Canada, in USD. Converted amounts
            are estimates and may differ from actual amount charged based on
            your card issuer's exchange rate.
          </Text>
        </Box>

        <Box border="1px solid black" mt={10} p={5}>
          <Text textAlign="center" fontWeight="700">
            Crowdfunding is not shopping
          </Text>
          <Text mt={5}>
            Your donation is a way to support a project but does not guarantee
            that you will receive a perk.
          </Text>
          <Text mt={5} fontWeight={600}>
            You may request a full refund from Indiegogo until the campaign ends
            on September 23, 2022, unless the Campaign Owner has initiated
            shipping with a tracking number.
          </Text>
          <Text mt={5}>
            Any refunds after this date are the responsibility of the campaign
            owner, Grade VII Climbing Equipment, at their discretion.
          </Text>
        </Box>

        <Flex mt={7} gap={5}>
          <input type="checkbox" />
          <Text>
            I agree to the Terms of Use and have read and understand the Privacy
            Policy
          </Text>
        </Flex>

        <Button
          w="100%"
          borderRadius={"none"}
          background="#e51075"
          color="white"
          mt={10}
          onClick={handle}
        >
          {flag ? 'SUBMIT PAYMENT' : <Spinner />}
        </Button>
      </Box>
    </Flex>
  );
};

