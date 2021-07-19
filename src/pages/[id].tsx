import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

const Post = ({ data }: { data: IPost }) => {
  return <div>{data.id}</div>;
};

export default Post;
export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const { data } = await axios.get(`http://localhost:1337/posts/${params?.id}`);
  console.log(data);
  return { props: { data } };
}
