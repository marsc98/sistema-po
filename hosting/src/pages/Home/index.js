import { useHistory } from 'react-router-dom';
import { useAuth } from '../../data/hooks/useAuth';
import { Title } from '../../components/Title';

import { Main } from './styles';
import { useAuthContext } from '../../data/hooks/useAuthContext';
import { Card } from '../../components/Card';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';

export function Home() {
  const auth = useAuth();
  const history = useHistory();
  const authContext = useAuthContext();

  !authContext.authenticated && history.push('/');

  async function handleLogout() {
    await auth.logout();
    history.push('/');
  }
  return(
    <Main>
      <div className="desconnect">
        <div>
          <Button onClick={handleLogout} grey>
            <Text textBold white>Desconectar</Text>
          </Button>
        </div>
      </div>
      <Title subTitle titleBold>
        Olá, {authContext.user.displayName || '...'}
      </Title>

      <main>
        <Card>
          Meu Cadastro
          <Text>
            {authContext.user.displayName}
            <p></p>
            {authContext.user.email}
          </Text>
        </Card>
        <Card>
          Entrar em uma fila
        </Card>
        <Card>
          Ver hospitais
        </Card>
      </main>
    </Main>
  )
}