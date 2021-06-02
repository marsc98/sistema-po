import React from 'react';
import { Title } from '../../components/Title';
import { Text } from '../../components/Text';
import { Input } from '../../components/Input';
import { UserPhoto } from '../../components/UserPhoto';
import { Main, LoginBox, ButtonArea } from './Login';
import { Button } from '../../components/Button';

export function Login(){
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
                        <label>
                            E-mail
                        </label>
                        <Input/>
                    </div>
                    <div>
                        <label>
                            Senha
                        </label>
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
                    <Button>
                        Cadastrar
                    </Button>
                </ButtonArea>
            </div>
        </Main>
    )
}
