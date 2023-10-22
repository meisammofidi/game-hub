import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchResponse<T>>(endPoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, dependencies ? [...dependencies] : []);
  // dependencies is an optional item to trigger useEffect. If set to only [] will only be triggered 
  // for the first time. So when user click on any genre this wouldn't triggers and don't 
  // filter games. That'y why We apply this dependencies to let this hook to render page when 
  // dependencies changed.

  return { data, error, isLoading };
};

export default useData;
