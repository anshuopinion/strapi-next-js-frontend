import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import Image from "next/image";
import { Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
interface PostCardProps {
  post: IPost;
  vertical?: boolean;
}

const PostCard: FC<PostCardProps> = ({ post, vertical = true }) => {
  return (
    <Box
      height={vertical ? "auto" : "200px"}
      boxShadow="md"
      borderRadius="xl"
      overflow="hidden"
    >
      <Stack direction={vertical ? "column" : "row-reverse"}>
        <Box width={vertical ? 300 : 600}>
          <Image
            src={process.env.NEXT_PUBLIC_BACKEND + post.cover.formats.small.url}
            height={vertical ? 200 : 300}
            width={vertical ? 300 : 400}
            alt="light"
          />
        </Box>
        <Box padding="4">
          <Heading as="h3" fontSize="2xl" mb="2">
            {post.title}
          </Heading>
          <Text fontSize="md">
            {vertical
              ? post.description.split(" ").splice(0, 20).join(" ") + "..."
              : post.description.split(" ").splice(0, 40).join(" ")}
          </Text>
          <Flex justify="space-between" align="center">
            <Flex align="center">
              <Icon>
                <FontAwesomeIcon icon={faHeart} size="2x" />
              </Icon>
              <Text ml="1">5</Text>
            </Flex>
            <Link href={`${post.id}`} passHref>
              <Button colorScheme="purple">Read More</Button>
            </Link>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};
export default PostCard;
