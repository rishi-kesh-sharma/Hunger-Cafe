import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetch = ({
  path,
  method = "get",
  body = {},
  params = {},
  query = {},
}) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios[method](
        `${process.env.REACT_APP_API_URL}/${path}`,
        {
          query,
          params,
          body,
        }
      );
      setLoading(false);
      console.log(res.data, "res.data");
      setData(res?.data?.data);
    } catch (err) {
      setLoading(false);
      setError(err?.response?.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return { loading, error, data };
};

export default useFetch;
