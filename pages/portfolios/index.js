import Link from 'next/link';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import { useGetUser } from '../../actions/user';
import PortfolioApi from '../../lib/api/portfolios';

const Portfolio = ({ portfolios }) => {
  const { data: dataUser, loading: loadingUser } = useGetUser();

  const renderPortfolios = (portfolios) => {
    return portfolios.map((portfolio) => (
      <Link
        key={portfolio._id}
        as={`/portfolios/${portfolio._id}`}
        href="/portfolios/[id]"
      >
        <li>{portfolio.title}</li>
      </Link>
    ));
  };
  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage>
        <ul>{renderPortfolios(portfolios)}</ul>
      </BasePage>
    </BaseLayout>
  );
};

//This function ios called during build time
// Improve performance of page
// it will create static page with dynamic data

export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  return {
    props: { portfolios },
  };
}

export default Portfolio;
