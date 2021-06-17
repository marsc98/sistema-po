import React from 'react';
import { Title } from '../../components/Title';
import { Text } from '../../components/Text';
import { Input } from '../../components/Input';
import { UserPhoto } from '../../components/UserPhoto';
import { Main, LoginBox, ButtonArea } from './Login';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label';
import { useHistory } from 'react-router-dom';

export function Login(){
    const history = useHistory();
    return(
        <Main>
            <div className="Main">
                <Title titleBold space>
                    Sistema Paciente Online
                </Title>
                <Title titleBold subTitle space>
                    Efetuar Login
                </Title>
                <LoginBox>
                    <div>
                        <Label>
                            E-mail
                        </Label>
                        <Input/>
                    </div>
                    <div>
                        <Label>
                            Senha
                        </Label>
                    </div>
                    <Input/>
                </LoginBox>
                <span>Esqueceu a senha? Clique <a href="/">aqui</a></span>
                <ButtonArea>
                    <Button>
                        Entrar
                    </Button>
                </ButtonArea>
                <div>
                    <Title titleBold subTitle>
                        Fazer novo cadastro
                    </Title>
                    <Text>
                        Se você ainda não tem cadastro, clique em cadastrar para efetuar o cadastro em nossa plataforma de filas de emergências online
                    </Text>
                </div>
                <ButtonArea>
                    <Button onClick={e => history.push("/register")}>
                        Cadastrar
                    </Button>
                </ButtonArea>
            </div>
        </Main>
    )
}
