import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import { useGetPostsByID } from '../../actions';
import { useRouter } from 'next/router';
import { useGetUser } from '../../actions/user';

const Portfolio = () => {
  const router = useRouter();
  const { data: portfolio, error, loading } = useGetPostsByID(router.query.id);
  const { data: dataUser, loading: loadingUser } = useGetUser();
  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage>
        {loading && <p>Loading data...</p>}
        {portfolio && (
          <>
            <h1> I am portfolio page</h1>
            <h1>{portfolio.title}</h1>
            <p>BODY: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
          </>
        )}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolio;
