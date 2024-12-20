import { useExampleApiHook } from "../hooks/api";
import Loader from "../components/Loader" ;
const Home = () => {
  const { isFetching, data, isError } = useExampleApiHook();
  return (
    <Loader isFetching={isFetching} isError={false}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Loader>
  );
};

export default Home;
