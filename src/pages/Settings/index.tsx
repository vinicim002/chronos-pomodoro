import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';

import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';

import { MainTemplate } from '../../templates/MainTemplate';

export function Settings() {
  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>Configurações</Heading>
        </Container>

        <Container>
          <p style={{ textAlign: 'center' }}>
            Modifique as configurações para tempo de foco, descanso curto e
            descanso longo
          </p>
        </Container>

        <Container>
          <form action='' className='form'>
            <div className='formRow'>
              <Input id='worktime' labelText='Foco'></Input>
            </div>
            <div className='formRow'>
              <Input id='shortBreakTime' labelText='Descanso curto'></Input>
            </div>
            <div className='formRow'>
              <Input id='longBreakTime' labelText='Descanso Longo'></Input>
            </div>
            <div className='formRow'>
              <DefaultButton
                icon={<SaveIcon />}
                aria-label='Salvar configurações'
                title='Salvar configurações'
              />
            </div>
          </form>
        </Container>
      </MainTemplate>
    </>
  );
}
