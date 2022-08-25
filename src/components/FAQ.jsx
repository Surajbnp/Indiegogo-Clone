import { Box, Text } from "@chakra-ui/react";
import React from "react";

const FAQ = () => {
  return (
    <Box align="Start">
      <Text fontSize="xl" fontWeight="bold">
        Frequently Asked Questions
      </Text>

      <Box py={5}>
        <Text fontWeight="bold">What is AMT Tweeter?</Text>
        <Text fontSize="md">
          AMT pneumatic treble is characterized by higher efficiency and wider
          frequency response than the traditional dynamic treble. It's a very
          thin, flat diaphragm folded into a bellows, like an organ, so the
          actual area of the diaphragm is larger than what you can see. It
          squeezes air out with higher efficiency so that the sound pressure it
          produces is particularly large.
        </Text>
      </Box>
      <Box py={5}>
        <Text fontWeight="bold">
          How does AMT Tweeter manifest itself in sound?
        </Text>
        <Text>
          In short, it enables you to grasp more music details. The so-called
          musical details are not just the sound of some gongs and drums, lip
          and tooth sounds, triangle iron or tambourine, but also the sense of
          space, residual sound, rhyme, timbre, texture and so on - that's where
          the richness and reality of listening to music come from.
        </Text>
      </Box>
      <Box py={5}>
        <Text fontWeight="bold">
          Do I need to connect my smartphone to speaker/svia Bluetooth or an aux
          cord?
        </Text>
        <Text>
          You can easily link the speaker with your smartphone (iOS or Android)
          via Bluetooth. OEPLAY supports Bluetooth 5.0 connectivity. We also
          offer you an option to play your favorite audio via a USB stick.
        </Text>
      </Box>
      <Box py={5}>
        <Text fontWeight="bold">How can I turn the speaker on/off?</Text>
        <Text>
          You just need to press and hold the panel button for one second, or
          use the remote control power button to turn on.
        </Text>
      </Box>
      <Box py={5}>
        <Text fontWeight="bold">What are the dimensions of the device?</Text>
        <Text>82cm (32.2”) high with stand, 40cm (15.7”) wide and deep</Text>
      </Box>
      <Box py={5}>
        <Text fontWeight="bold">What color options are available?</Text>
        <Text>
          We have the following color variations: Pearl White, Ferrari Red,
          Mclaren Orange and Jet Black. You’ll be able to choose your prefered
          color in the post campaing survey.
        </Text>
      </Box>
      <Box py={5}>
        <Text fontWeight="bold">
          What is the frequency response of the speaker?
        </Text>
        <Text>Yes, if your Smart TV has the Bluetooth option</Text>
      </Box>
    </Box>
  );
};

export default FAQ;
