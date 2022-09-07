import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../hoc/withAuth';

const Secret = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>I am secret page - Hello {user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(Secret)();

//high order component - hoc
//simple function that takes a component and returns
// with new component with some extended functionality

// function withAuth(Component) {
//   return function (props) {
//     return <Component title="hello there" {...props} />;
//   };
// }

// const withAuth = (Component) => (props) => {
//   <Component title="hello there" {...props} />;
// };
