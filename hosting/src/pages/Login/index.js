import React from 'react';
import { Title } from '../../components/Title';
import { Text } from '../../components/Text';
import { Input } from '../../components/Input';
import { UserPhoto } from '../../components/UserPhoto';
import { Main, LoginBox, ButtonArea } from './Login';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../data/hooks/useAuthContext';
import { useAuth } from '../../data/hooks/useAuth';

export function Login(){
    const history = useHistory();

    const authContext = useAuthContext();
    const auth = useAuth();

    authContext.authenticated && history.push('/home');

    const [data, setData] = React.useState({
        email: "",
        password: "",
      });

    function handleChange({target}) {
        const {id, value} = target;
        setData({...data, [id]: value});
    }

    function handleForm() {
        if (data.password.length < 6) {
            window.alert("A senha precisa ter no minimo 6 caracteres");
            return;
        }

        auth.login(data).catch((err) => {
            console.log(err)
            if (err.code === "auth/wrong-password") {
                alert('Senha incorreta');
                return;
            }
            if (err.code === "auth/user-not-found") {
                alert('Senha incorreta');
                return;
            }
        })
    }

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
                        <Input
                            type="email"
                            value={data.email}
                            id="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <Label>
                            Senha
                        </Label>
                    </div>
                    <Input
                        type="password"
                            value={data.password}
                            id="password"
                            onChange={handleChange}
                    />
                </LoginBox>
                <span>Esqueceu a senha? Clique <a href="/">aqui</a></span>
                <ButtonArea>
                    <Button onClick={handleForm}>
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
