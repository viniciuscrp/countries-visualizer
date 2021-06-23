import React, { useEffect, useState } from 'react';

import Filter from './components/filter/Index';
import { Container, Cards } from './style';
import { pageStatus } from '../../helpers/enums';
import { getAllCountries } from '../../services/apiService';
import Country from './components/country/Index';
import { useHistory } from 'react-router-dom';

export default function Index() {
  const [loadingStatus, setLoadingStatus] = useState(pageStatus.Loading);
  const [countries, setCountries] = useState([]);
  const fields = ['name', 'population', 'region', 'capital', 'flag', 'alpha3Code'];
  const history = useHistory();

  const loadCountriesData = async () => {
    const result = await getAllCountries(fields);
    setCountries(result);
    setLoadingStatus(result === undefined ? pageStatus.Error : pageStatus.Loaded);
  }

  useEffect(() => {
    loadCountriesData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const navigateToDetails = alpha3code => {
    history.push(`/details/${alpha3code}`);
  } 

  return (
    <Container>
      {loadingStatus === pageStatus.Loading && <h1>Carregando</h1>}
      {loadingStatus === pageStatus.Loaded &&
        <>
          <Filter></Filter>
          <Cards>
            {countries.map((country) => 
              <Country flag={country.flag} name={country.name} population={country.population} region={country.region} capital={country.capital} onClick={() => navigateToDetails(country.alpha3Code)} key={country.name}></Country>
            )}
          </Cards>
        </>
      }
    </Container >
  );
}