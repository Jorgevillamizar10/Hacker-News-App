import React, { useState, useEffect } from 'react';
import Articles from '../../Components/Articles';
import Select from '../../Components/Select/index';
import { Spinner } from '../../Components/Spinner';
import { fetchData } from '../../Helpers/Fetch';
import { getFramework } from '../../Helpers/Framework';
import { RequestProps } from '../../Types';

const HomePage: React.FC = () => {

  const [data, setData] = useState<RequestProps>();
  const [loading, setLoading] = useState<Boolean>(true);
  const [framework,setFramework] = useState<string>("");

  useEffect(() => {
    let localStorageFrameWork = getFramework();
    setFramework(localStorageFrameWork);
    let newEndpoint = localStorageFrameWork !== "" ? localStorageFrameWork : framework;
    setLoading(true);
    fetchData({ endpoint: newEndpoint , page: 0 })
    .then(response => {
      setData(response);
      setLoading(false);
    })
    .catch(error => console.error(error))
  },[framework]);

  return (
    <>
      <Select framework={framework} setFramework={setFramework}/>
      {
        loading ? 
        <Spinner /> :
        <Articles data={data?.hits} />
      }
    </>
  );

}

export default HomePage;