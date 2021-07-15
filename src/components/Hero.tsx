import { Box, Flex, Grid, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <Flex>
      <Stack flex="1" justify="center" align="center">
        <Stack>
          <Heading fontSize="4xl">I Just Code Every Day,</Heading>
          <Heading fontSize="6xl">That’s Makes Me, </Heading>
          <Heading fontSize="8xl" color="purple.600">
            Better.{" "}
          </Heading>
        </Stack>
      </Stack>
      <Stack flex="1">
        <Grid placeItems="center">
          <Image
            src="/images/heroImage.png"
            height={500}
            width={500}
            alt="BoyWithLaptop"
          />
        </Grid>
      </Stack>
    </Flex>
  );
};

export default Hero;
