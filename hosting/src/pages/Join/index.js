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

export function Join(props) {
  const patients = usePatientContext();
  const patient = patients.patient;
  const history = useHistory();

  function handleProgress() {
    history.push('/home')
  }

  return(
    <Main>
      <Title lineHeight titleBold space>Você deseja realmente ingressar em Hospital {props?.location?.state}?</Title>

      <Button green onClick={() => handleProgress()}>Prosseguir</Button>
      <Button yellow onClick={() => history.push('/home')}>Cancelar</Button>
    </Main>
  );
}