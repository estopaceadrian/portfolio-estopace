import Link from 'next/link';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import { useGetUser } from '../../actions/user';
import PortfolioApi from '../../lib/api/portfolios';
import { Row, Col } from 'reactstrap';
import PortfolioCard from '../../components/PortfolioCard';
import { useRouter } from 'next/router';

const Portfolio = ({ portfolios }) => {
  const { data: dataUser, loading: loadingUser } = useGetUser();
  const router = useRouter();
  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage header="Portfolios" className="portfolio-page">
        <Row>
          {portfolios.map((portfolio) => (
            <>
              <Col
                md="4"
                key={portfolio._id}
                onClick={() => {
                  router.push(
                    '/portfolios/[id]',
                    `/portfolios/${portfolio._id}`
                  );
                }}
              >
                <PortfolioCard portfolio={portfolio} />
              </Col>
            </>
          ))}
        </Row>
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
