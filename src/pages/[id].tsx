import { Avatar, Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";
const Post = ({ data }: { data: IPost }) => {
  return (
    <Container maxW="1300px">
      <Flex height="70vh">
        <Image
          src={process.env.NEXT_PUBLIC_BACKEND + data.cover.url}
          height={data.cover.height}
          width={data.cover.width}
          alt={data.cover.alternativeText}
          objectFit="cover"
        />
      </Flex>
      <Heading as="h1" my="4">
        {data.title}
      </Heading>
      <Flex my="4" align="center">
        <Avatar
          src={
            process.env.NEXT_PUBLIC_BACKEND +
            data.author.avatar.formats.thumbnail.url
          }
        />
        <Text mx="4" fontWeight="bold">
          BY {data.author.name}
        </Text>
        <Text>{format(new Date(data.created_at), "PP")}</Text>
      </Flex>
      <KRMD>{data.content}</KRMD>
    </Container>
  );
};
const KRMD = styled<any>(ReactMarkdown)`
  h1 {
    font-size: 2rem;
  }
`;

export default Post;
export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const { data } = await axios.get(`http://localhost:1337/posts/${params?.id}`);
  console.log(data);
  return { props: { data } };
}
