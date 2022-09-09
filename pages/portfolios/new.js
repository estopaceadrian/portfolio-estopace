import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import { useGetUser } from '../../actions/user';
import withAuth from '../../hoc/withAuth';

const PortfolioNew = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>I am PortfolioNew page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth()(PortfolioNew);
