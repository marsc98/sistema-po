import { Title } from '../../components/Title';
import { Text } from '../../components/Text';
import { Card } from '../../components/Card';
import { usePatientContext } from '../../data/hooks/usePatientContext';
import { Main } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { TextArea } from '../../components/TextArea';

export function Anaminese() {
  const patients = usePatientContext();
  const patient = patients.patient;
  const history = useHistory();

  const [text, setText] = useState();

  function handleProgress() {
    if(text) {
      history.push('/hospital-list')
    }
  }

  return(
    <Main>
      <Title lineHeight titleBold space>Preciso saber como você está se sentido para saber sua classificação de risco</Title>

      <TextArea onChange={e => setText(e.target.value)}/>
      <Button onClick={() => handleProgress()}>Prosseguir</Button>
      <Button red onClick={() => history.push('/home')}>Cancelar</Button>
    </Main>
  );
}