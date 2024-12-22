const Loader = ({ isFetching, isError, children }) => {
  if (isFetching)
    return (
      <div className="flex justify-center items-center h-36">
        <div className="animate-spin rounded-full border-t-4 border-red-500 w-16 h-16 border-solid"></div>
      </div>
    );

  if (isError)
    return <div className="text-red-500 text-xl text-center">Error</div>;
  return <>{children}</>;
};

export default Loader;
