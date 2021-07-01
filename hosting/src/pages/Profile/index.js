import React, { useState } from 'react';
import { Title } from '../../components/Title';
import { Text } from '../../components/Text';
import { Input } from '../../components/Input';
import { UserPhoto } from '../../components/UserPhoto';
import { Main, FormBox, ButtonArea } from './style';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label';
import { usePatient } from '../../data/hooks/usePatient';
import { useAuth } from '../../data/hooks/useAuth';
import { useHistory, Link } from 'react-router-dom';
import { usePatientContext } from '../../data/hooks/usePatientContext';

export function Profile(){

    const [rtPassword, setRtPassword] = useState('');
    const patient = usePatient();
    const auth = useAuth();
    const terms = true;

    const history = useHistory();

    const [localization, setLocalization] = useState(false);

    const patientContext = usePatientContext()

    const [data, setData] = React.useState(patientContext?.patient);

    function handleChange({target}) {
        console.log(target)
        const {id, value} = target;
        setData({...data, [id]: value});
    }

    function handleForm() {
        console.log('formmmmmmm')
        if (data.password.length < 6) {
            window.alert("A senha precisa ter no minimo 6 caracteres");
            return;
        }
        if (data.password !== rtPassword) {
            window.alert("As senhas não batem");
            return;
        }

        patient.register(data, terms, localization);
        history.push('/home');

    }

    return(
        <Main>
            <div className="Main">
                <Title titleBold space>
                    Cadastro
                </Title>
                <Title titleBold subTitle space>
                    Preencha os campos abaixo para realizar o seu cadastro
                </Title>
                <FormBox>
                <div>
                    <Label>
                        Nome
                    </Label>
                    <Input
                        type="text"
                        defaultValue={patientContext ? patientContext?.patient?.name : ""}
                        id="name"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label>
                        CPF
                    </Label>
                    <Input
                        type="number"
                        defaultValue={patientContext?.patient?.cpf}
                        id="cpf"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label>
                        E-mail
                    </Label>
                    <Input
                        type="email"
                        defaultValue={patientContext?.patient?.email}
                        id="email"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label>
                        CEP
                    </Label>
                    <Input
                        type="number"
                        defaultValue={patientContext?.patient?.cep}
                        id="cep"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label>
                        Estado
                    </Label>
                    <Input
                        type="text"
                        defaultValue={patientContext?.patient?.state}
                        id="state"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label>
                        Cidade
                    </Label>
                    <Input
                        type="text"
                        defaultValue={patientContext?.patient?.city}
                        id="city"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label>
                        Endereço
                    </Label>
                    <Input
                        type="text"
                        defaultValue={patientContext?.patient?.address}
                        id="address"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label>
                        Número
                    </Label>
                    <Input
                        type="number"
                        defaultValue={patientContext?.patient?.telefoneNumber}
                        id="telefoneNumber"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label>
                        Complemento
                    </Label>
                    <Input
                        type="text"
                        defaultValue={patientContext?.patient?.addressComplement}
                        id="addressComplement"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label>
                        Convênio
                    </Label>
                    <Input
                        type="text"
                        defaultValue={patientContext?.patient?.insurance}
                        id="insurance"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label>
                        Número do convênio
                    </Label>
                    <Input
                        type="number"
                        defaultValue={patientContext?.patient?.insuranceNumber}
                        id="insuranceNumber"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label>
                        Senha
                    </Label>
                    <Input
                        type="password"
                        defaultValue={patientContext?.patient?.password}
                        id="password"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label>
                        Confirmar Senha
                    </Label>
                    <Input
                        type="password"
                        defaultValue={rtPassword}
                        id="rtPassword"
                        onChange={e => setRtPassword(e.target.value)}
                    />
                </div>

                <div>
                    <Label>
                        Possui alguma alergia?
                    </Label>
                    <Input
                        type="text"
                        defaultValue={patientContext?.patient?.allergy}
                        id="allergy"
                        onChange={handleChange}
                    />
                </div>

                </FormBox>
                <ButtonArea>
                    <Button green onClick={handleForm}>
                        Salvar
                    </Button>

                    <Button yellow onClick={e => history.push('/')}>
                        Voltar
                    </Button>
                    <div className="space"/>
                    <Button red onClick={e => history.push('/')}>
                        Excluir Cadastro
                    </Button>
                </ButtonArea>
            </div>
        </Main>
    )
}
