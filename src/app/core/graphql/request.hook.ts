import { useCallback, useState } from "react";
import { client } from "app/core/graphql/client";
import { handleGenericError } from "app/core/utils/generic-error-handler";

interface ResolveHandler<DataType, ErrorType> {
  onSuccess?: (data: DataType) => void;
  onError?: (err: ErrorType) => void;
}

interface UseRequestReturn<ResponseData, Variables> {
  loading: boolean;
  data: ResponseData;
  error: any;
  request: (variables?: Variables) => Promise<void>;
}

export const useRequest = <Response, Variables = unknown>(
  queryOrMutation: string,
  handler?: ResolveHandler<Response, TypeError>
): UseRequestReturn<Response, Variables> => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Response>(undefined);
  const [error, setError] = useState(undefined);

  const request = useCallback(
    async (variables?: Variables) => {
      setLoading(true);
      try {
        const result = await client.request<Response>(queryOrMutation, variables);
        handler?.onSuccess(result);
        setData(result);
      } catch (e) {
        setError(e);
        handler?.onError(e);
        !handler && handleGenericError(e);
      } finally {
        setLoading(false);
      }
    },
    [queryOrMutation, handler]
  );

  return { loading, data, error, request };
};
