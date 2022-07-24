import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { PostDTO } from '../../../__DTO__/Post';
import { PostContainer } from '../../core/public/post';

type AccordionContainerProps = {
  posts: PostDTO[];
};

export const AccordionContainer: React.FC<AccordionContainerProps> = ({
  posts,
}) => {
  return (
    <Accordion>
      {posts.map((_, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <>{posts[index].title}</>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <PostContainer
              title={posts[index].title}
              content={posts[index].content}
            />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
