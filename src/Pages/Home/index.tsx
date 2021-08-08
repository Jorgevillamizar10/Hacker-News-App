import React, { useState, useEffect } from 'react';
import Articles from '../../Components/Articles';
import Pagination from '../../Components/Pagination';
import Select from '../../Components/Select/index';
import { Spinner } from '../../Components/Spinner';
import { fetchData } from '../../Helpers/Fetch';
import { getFramework } from '../../Helpers/Framework';
import { RequestProps } from '../../Types';

const INITIAL_PAGE = 0;

const HomePage: React.FC = () => {

  const [data, setData] = useState<RequestProps>();
  const [loading, setLoading] = useState<Boolean>(true);
  const [framework,setFramework] = useState<string>("");
  const [page,setPage] = useState<number>(INITIAL_PAGE);

  useEffect(() => {
    window.scrollTo(0, 0);
    let localStorageFrameWork = getFramework();
    setFramework(localStorageFrameWork);
    let newEndpoint = localStorageFrameWork !== "" ? localStorageFrameWork : framework;
    setLoading(true);
    fetchData({ endpoint: newEndpoint , page: page })
    .then(response => {
      setData(response);
      setLoading(false);
    })
    .catch(error => console.error(error))
  },[framework,page]);

  return (
    <>
      <Select framework={framework} setFramework={setFramework} setPage={setPage}/>
      {
        loading ? 
        <Spinner /> :
        <>
          <Articles data={data?.hits} />
          <Pagination page={page + 1} setPage={setPage} limitPage={data?.nbPages ?? 1}/>
        </>
      }
    </>
  );

}

export default HomePage;