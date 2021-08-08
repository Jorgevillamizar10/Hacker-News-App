import React, { useState, useEffect } from 'react';
import Articles from '../../Components/Articles';
import Select from '../../Components/Select/index';
import { Spinner } from '../../Components/Spinner';
import { fetchData } from '../../Helpers/Fetch';
import { RequestProps } from '../../Types';

const HomePage: React.FC = () => {

  const [data, setData] = useState<RequestProps>();
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetchData({ page: 0 })
    .then(response => {
      setData(response);
      setLoading(false);
    })
    .catch(error => console.error(error))
  },[]);

  return (
    <>
      <Select/>
      {
        loading ? 
        <Spinner /> :
        <Articles data={data?.hits} />
      }
    </>
  );

}

export default HomePage;