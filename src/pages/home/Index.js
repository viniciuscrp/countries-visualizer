import React, { useEffect, useState } from 'react';

import Filter from './components/filter/Index';
import { Container, Cards } from './style';
import { pageStatus } from '../../helpers/enums';
import { getAllCountries } from '../../services/apiService';
import Country from './components/country/Index';

export default function Index() {
  const [loadingStatus, setLoadingStatus] = useState(pageStatus.Loading);
  const [countries, setCountries] = useState([]);
  const fields = ['name', 'population', 'region', 'capital', 'flag']

  const loadCountriesData = async () => {
    const result = await getAllCountries(fields);
    setCountries(result);
    setLoadingStatus(result === undefined ? pageStatus.Error : pageStatus.Loaded);
  }

  useEffect(() => {
    loadCountriesData();
  }, [])

  return (
    <Container>
      {loadingStatus === pageStatus.Loading && <h1>Carregando</h1>}
      {loadingStatus === pageStatus.Loaded &&
        <>
          <Filter></Filter>
          <Cards>
            {countries.map((country) => 
              <Country flag={country.flag} name={country.name} population={country.population} region={country.region} capital={country.capital}></Country>
            )}
          </Cards>
        </>
      }
    </Container >
  );
}