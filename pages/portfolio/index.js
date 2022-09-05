import Link from 'next/link';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import { useGetPosts } from '../../actions';

const Portfolio = () => {
  const { data, error, loading } = useGetPosts();

  const renderPost = () => {
    return data.map((post) => (
      <Link key={post.id} href={`/portfolio/${post.id}`}>
        <li>{post.title}</li>
      </Link>
    ));
  };
  return (
    <BaseLayout>
      <BasePage>
        <h1>I am Portfolio page</h1>
        {loading && <p>Loading data...</p>}
        {data && <ul>{renderPost(data)}</ul>}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolio;
