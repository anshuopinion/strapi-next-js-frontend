import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import Image from "next/image";
import { Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
interface PostCardProps {
  post: IPost;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <Box maxW="300px" boxShadow="md" borderRadius="xl" overflow="hidden">
      <Stack>
        <Box>
          <Image
            src={process.env.NEXT_PUBLIC_BACKEND + post.cover.formats.small.url}
            height={200}
            width={300}
            alt="light"
          />
        </Box>
        <Box padding="4">
          <Heading as="h3" fontSize="2xl" mb="2">
            {post.title}
          </Heading>
          <Text fontSize="md">{post.content}</Text>
          <Flex justify="space-between" align="center">
            <Flex align="center">
              <Icon>
                <FontAwesomeIcon icon={faHeart} size="2x" />
              </Icon>
              <Text ml="1">5</Text>
            </Flex>
            <Button colorScheme="purple">Read More</Button>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};
export default PostCard;
