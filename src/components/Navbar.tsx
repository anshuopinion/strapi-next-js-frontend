import { Box, Text } from "@chakra-ui/react";
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Form, Formik } from "formik";
import React from "react";

const NavBar = () => {
  return (
    <Flex justify="space-between" align="center" p="4">
      <Heading fontSize="xl">DoSomeCoding</Heading>

      <Flex align="center">
        <Box>
          <Formik
            initialValues={{ searchData: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Field name="searchData">
                {({ field }) => (
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <FontAwesomeIcon icon={faSearch} />
                    </InputLeftElement>
                    <Input {...field} type="text" placeholder="Search..." />
                  </InputGroup>
                )}
              </Field>
            </Form>
          </Formik>
        </Box>

        <Flex mx="4" align="center">
          <Text mr="4">Home</Text>
          <Text>Posts</Text>
        </Flex>

        <Flex mx="4" align="center">
          <Box mr="4">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Box>
          <Box mr="4">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Box>
          <Box mr="4">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
