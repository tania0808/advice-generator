import { useEffect, useState } from "react";
import axios from "axios";

interface DataI {
  id: Number;
  advice: String;
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<DataI | null>(null);
  const [error, setError] = useState<any>();

  const handleFetch = (url: string) => {
    axios
      .get(url)
      .then((data) => setData(data.data.slip))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    handleFetch(url);
  }, [url]);

  if (error) return error;
  return { data, error, handleFetch };
};
