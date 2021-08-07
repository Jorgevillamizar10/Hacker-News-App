import { ENTRYPOINT } from '../Config/index';

interface fetchDataProps {
  endpoint: string;
}

export const fetchData = async ({ endpoint } :fetchDataProps) => {
  const url = `${ENTRYPOINT}${endpoint}`;

  const response = await fetch(url);
  return await response.json();
}