import { useState, useEffect } from "react";
import { requestOptions } from "../config/api";

const useFetch = (url: string) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          result.message && setError(result.message);
          setData(result.result);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
        });
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
