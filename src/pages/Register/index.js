import React from 'react';
import { Title } from '../../components/Title';
import { Text } from '../../components/Text';
import { Input } from '../../components/Input';
import { UserPhoto } from '../../components/UserPhoto';
import { Main, FormBox, ButtonArea } from './style';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label';

export function Register(){

    const labels = ["Nome", "CPF", "E-mail", "Telefone", "CEP", "Estado", "Cidade", "Endereço", "Número", "Complemento", ""]

    const inputs = labels.map(val => {
        return(
            <div>
                <Label>
                    {val}
                </Label>
                <Input/>
            </div>
        )
    })
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
                    {inputs}
                </FormBox>
                <ButtonArea>
                    <Button>
                        Cadastrar
                    </Button>
                </ButtonArea>
            </div>
        </Main>
    )
}
