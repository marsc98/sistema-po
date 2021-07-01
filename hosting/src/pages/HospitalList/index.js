import { useHistory } from 'react-router-dom';
import { useAuth } from '../../data/hooks/useAuth';
import { Title } from '../../components/Title';

import { Main, ListButton } from './styles';
import { useAuthContext } from '../../data/hooks/useAuthContext';
import { Card } from '../../components/Card';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { usePatientContext } from '../../data/hooks/usePatientContext';
import { useState } from 'react';
import { useHospitalContext } from '../../data/hooks/useHospitalContext';

export function HospitalList() {
  const auth = useAuth();
  const history = useHistory();
  const authContext = useAuthContext();
  const patient = usePatientContext();
  const hospital = useHospitalContext();
  console.log(hospital);

  const [clicked, setClicked] = useState(false);

  !authContext.authenticated && history.push('/');

  async function handleClick(hospitalName) {
    setClicked(!clicked)
    history.push({
      pathname: '/join',
      state: hospitalName
    })
  }

  const hospitals = hospital.hospitals.map(hospital => {
    return(
      <Card onClick={() => handleClick(hospital.name)} hospital green value={hospital} />
    )
  })

  return(
    <Main>
      <Title lineHeight titleBold>
      Veja os hospitais que selecionamos para você conforme sua localização
      </Title>

      <ListButton onClick={() => handleClick()} clicked={!clicked}>Ver mais próximos</ListButton>
      <ListButton onClick={() => handleClick()} clicked={clicked}>Ver com menos tempo</ListButton>

      <main>
        {hospitals}
      </main>
    </Main>
  )
}