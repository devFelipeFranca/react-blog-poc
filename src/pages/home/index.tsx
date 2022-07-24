import { AccordionContainer } from '../../components/views/accordion';
import { Layout } from '../../components/containers/layout';

export default function Home() {
  return (
    <Layout>
      <AccordionContainer
        posts={[
          ...new Array(30).fill({
            title: 'apenas um title',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
          }),
        ]}
      />
    </Layout>
  );
}
