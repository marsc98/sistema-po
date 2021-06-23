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

export function Register(){

    const [rtPassword, setRtPassword] = useState('');
    const patient = usePatient();
    const auth = useAuth();

    const history = useHistory();

    const [terms, setTerms] = useState(false);
    const [localization, setLocalization] = useState(false);

    const [data, setData] = React.useState({
        name: "",
        cpf: "",
        cep: "",
        telefoneNumber: "",
        email: "",
        address: "",
        addressComplement: "",
        state: "",
        city: "",
        insurance: "",
        insuranceNumber: "",
        allergy: "",
        password: "",
      });

    function handleChange({target}) {
        const {id, value} = target;
        setData({...data, [id]: value});
    }

    function handleForm() {
        if (!terms) {
            alert('É necessário aceitar os termos de uso');
            return;
        }
        if (data.password.length < 6) {
            window.alert("A senha precisa ter no minimo 6 caracteres");
            return;
        }
        if (data.password !== rtPassword) {
            window.alert("As senhas não batem");
            return;
        }

        auth.createAccount(data).then(() => {
            patient.register(data, terms, localization);
            history.push('/');
            
        }).catch((err) => {
            if (err.code === "auth/email-already-in-use") {
                alert('Usuário já cadastrado');
                return;
            }
        })
    }

    console.log(data)

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
                        value={data.name}
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
                        value={data.cpf}
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
                        value={data.email}
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
                        value={data.cep}
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
                        value={data.state}
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
                        value={data.city}
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
                        value={data.address}
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
                        value={data.telefoneNumber}
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
                        value={data.addressComplement}
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
                        value={data.insurance}
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
                        value={data.insuranceNumber}
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
                        value={data.password}
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
                        value={rtPassword}
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
                        value={data.allergy}
                        id="allergy"
                        onChange={handleChange}
                    />
                </div>

                <div className="check-boxes">
                    <div>
                        <input
                            type="checkbox"
                            value={terms}
                            id="terms"
                            onChange={e => setTerms(!terms)}
                        />
                        <Text terms>Li e concordo com os <Link> termos </Link> de uso</Text>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            value={localization}
                            id="localization"
                            onChange={e => setLocalization(!localization)}
                        />
                       <Text terms> Permitir acesso a localização do dispositivo</Text>
                    </div>
                </div>

                </FormBox>
                <ButtonArea>
                    <Button green onClick={handleForm}>
                        Salvar
                    </Button>

                    <Button red onClick={e => history.push('/')}>
                        Cancelar
                    </Button>
                </ButtonArea>
            </div>
        </Main>
    )
}
