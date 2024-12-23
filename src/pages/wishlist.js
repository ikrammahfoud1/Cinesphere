import Loader from "../components/loader";
import { useMovieById } from "../hooks/useMovies";
import WishListContect from "../context/wishlist";
import { useContext, useMemo } from "react";
import CardMovie from "../components/card";
const Card = ({ id }) => {
  const { isFetching, data, isError } = useMovieById(id);
  console.log(id);
  return (
    <Loader isError={isError} isFetching={isFetching}>
      <CardMovie {...data?.data} />
    </Loader>
  );
};

const Wishlist = () => {
  const { wishList } = useContext(WishListContect);
  const list = useMemo(() => wishList, []);
  return (
    <div className="min-h-[80vh] p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-8 ">
      {list.length > 0 ? (
        list.map((id) => <Card id={id} key={id} />)
      ) : (
        <span class="text-white text-4xl">No item Found</span>
      )}
    </div>
  );
};

export default Wishlist;
