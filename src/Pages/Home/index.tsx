import React, { useState, useEffect } from 'react';
import Articles from '../../Components/Articles';
import Select from '../../Components/Select/index';
import { fetchData } from '../../Helpers/Fetch';
import { RequestProps } from '../../Types';

const HomePage: React.FC = () => {

  const [data, setData] = useState<RequestProps>();

  useEffect(() => {
    fetchData({ page: 0 })
    .then(response => setData(response))
    .catch(error => console.error(error))
  },[]);

  console.log("aqui",data);

  return (
    <>
      <Select/>
      <Articles data={data?.hits} />
    </>
  );

}

export default HomePage;