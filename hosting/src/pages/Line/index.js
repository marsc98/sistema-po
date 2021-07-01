import { Title } from '../../components/Title';
import { Text } from '../../components/Text';
import { Card } from '../../components/Card';
import { usePatientContext } from '../../data/hooks/usePatientContext';
import { Main } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export function Line() {
  const patients = usePatientContext();
  const patient = patients.patient;
  const history = useHistory();

  const [address, setAddress] = useState();

  function handleProgress() {
    history.push('/anaminese')
  }

  return(
    <Main>
      <Title lineHeight titleBold space>Vamos começar informando a sua localização</Title>
      <Title subTitle titleBold>Usar a do meu cadastro</Title>
      <Card maps>
        <Title titleBold subTitle>{patient?.address}, {patient?.addressComplement} <p/> {patient?.city}/{patient?.state}</Title>
      </Card>
      <Title subTitle titleBold>OU</Title>
      <Title subTitle titleBold>Digite aqui outro endereço</Title>
      <Input onChange={e => setAddress(e.target.value)} className="input"/>
      <Button onClick={() => handleProgress()}>Prosseguir</Button>
      <Button red onClick={() => history.push('/home')}>Cancelar</Button>
    </Main>
  );
}