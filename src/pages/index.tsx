import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import Hero from "components/Hero";
import NavBar from "components/Navbar";
import PostCard from "components/PostCard";
import { GetServerSideProps } from "next";

export default function Home({ data }: { data: IPost[] }) {
  return (
    <Container maxW="1300px">
      <NavBar />
      <Hero />
      <Box>
        <Grid
          gridGap="4"
          gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))"
        >
          {data.map((e) => (
            <GridItem key={e.id} display="flex" justifyContent="center">
              <PostCard post={e} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get("http://localhost:1337/posts");
  console.log(data);

  return { props: { data } };
};
