import type { GetServerSideProps, NextPage } from 'next';
import { ROUTE_SIGNIN } from '../constants/api-paths';

const Index: NextPage = () => (
  <>
    <h1>Ini adalah Home</h1>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: ROUTE_SIGNIN,
    permanent: false,
  },
});

export default Index;
