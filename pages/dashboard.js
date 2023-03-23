import Cards from "../components/dashboard/components/Cards";
import LowerCards from "../components/dashboard/components/LowerCards";
import Layout from "../components/dashboard/layout";
const DashboardPage = () => {
  return (
    <Layout>
      <Cards />
      <LowerCards />
    </Layout>
  );
};

export default DashboardPage;
