import Cards from "../components/dashboard/components/Cards";
import LowerCards from "../components/dashboard/components/LowerCards";
import Layout from "../components/dashboard/layout";
const DashboardPage = () => {
  const role = parseInt(localStorage.getItem("role"));
  return (
    <Layout>
      <Cards role={role} />
      <LowerCards role={role} />
    </Layout>
  );
};

export default DashboardPage;
