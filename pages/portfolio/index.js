import Link from 'next/link';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import { useGetPosts } from '../../actions';
import { useGetUser } from '../../actions/user';

const Portfolio = () => {
  const { data, error, loading } = useGetPosts();
  const { data: dataUser, loading: loadingUser } = useGetUser();
  const renderPost = () => {
    return data.map((post) => (
      <Link key={post.id} href={`/portfolio/${post.id}`}>
        <li>{post.title}</li>
      </Link>
    ));
  };
  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
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
