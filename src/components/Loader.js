const Loader = ({ isFetching, isError, children }) => {
  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return <>{children}</>;
};

export default Loader;
