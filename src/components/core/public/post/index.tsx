import { Heading, Box, Text } from '@chakra-ui/react';

type PostContainerProps = {
  title: string;
  content: string;
};

export const PostContainer: React.FC<PostContainerProps> = ({
  title,
  content,
}) => {
  return (
    // base de post pra inspiração
    // https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_cite
    <Box maxW="32rem">
      <Heading mb={4}>{title}</Heading>
      <Text fontSize="xl">{content}</Text>
    </Box>
  );
};
