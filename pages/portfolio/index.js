import axios from 'axios';
import Link from 'next/link';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
const Portfolio = ({ posts }) => {
  const renderPost = () => {
    return posts.map((post) => (
      <Link key={post.id} href={`/portfolio/${post.id}`}>
        <li>{post.title}</li>
      </Link>
    ));
  };
  return (
    <BaseLayout>
      <BasePage>
        <h1>I am cv page</h1>
        <h1>I am Portfolio page</h1>
        <ul>{renderPost()}</ul>
      </BasePage>
    </BaseLayout>
  );
};

Portfolio.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts = res.data;
  } catch {
    console.error('error');
  }
  return { posts: posts.slice(0, 10) };
};
export default Portfolio;
