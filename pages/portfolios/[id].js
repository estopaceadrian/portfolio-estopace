import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';

import { useGetUser } from '../../actions/user';
import PortfolioApi from '../../lib/api/portfolios';

const Portfolio = ({ portfolio }) => {
  const { data: dataUser, loading: loadingUser } = useGetUser();
  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage header="Portfolio Detail">{JSON.stringify(portfolio)}</BasePage>
    </BaseLayout>
  );
};

export async function getServerSideProps({ query }) {
  const json = await new PortfolioApi().getById(query.id);
  const portfolio = json.data;
  return { props: { portfolio } };
}

//// this function is executed at the build time
// export async function getStaticPaths() {
//   const json = await new PortfolioApi().getAll();
//   const portfolio = json.data;

//   // get the paths we want pre-render based on portfolio-ID
//   const paths = portfolio.map((portfolio) => {
//     return {
//       params: { id: portfolio._id },
//     };
//   });
//   //fallback: false means that not found pages will be resolved into 404 page
//   return { paths, fallback: false };
// }
// export async function getStaticProps({ params }) {
//   const json = await new PortfolioApi().getById(params.id);
//   const portfolio = json.data;
//   return { props: { portfolio } };
// }

export default Portfolio;
