import axios from "axios";
import { useEffect, useState } from "react";
import { GET_RESTAURANTS_URL } from "../utils/constants";

const useRestaurantsMenu = (restId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(GET_RESTAURANTS_URL + `/${restId}`);

        setRestaurant(data?.data);
      } catch (err) {
        setError(err.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { restaurant, isLoading, error };
};

export default useRestaurantsMenu;
