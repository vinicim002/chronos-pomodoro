import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';

import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';

import { MainTemplate } from '../../templates/MainTemplate';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction';

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const worktimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
      document.title = 'Configurações 🍅 | Chronos Pomodoro';
    }, []);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];

    const worktime = Number(worktimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(worktime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Digite apenas números para todos os campos');
    }

    if (worktime < 1 || worktime > 99) {
      formErrors.push('O tempo de foco deve estar entre 1 e 99 minutos');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push(
        'O tempo de descanso curto deve estar entre 1 e 30 minutos',
      );
    }

    if (shortBreakTime < 1 || shortBreakTime > 60) {
      formErrors.push(
        'O tempo de descanso longo deve estar entre 1 e 60 minutos',
      );
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => showMessage.error(error));
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime: worktime,
        shortBreakTime,
        longBreakTime,
      },
    });

    showMessage.success('Configurações salvas com sucesso!');
  }

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
          <form onSubmit={handleSaveSettings} action='' className='form'>
            <div className='formRow'>
              <Input
                id='worktime'
                labelText='Foco'
                ref={worktimeInputRef}
                defaultValue={state.config.workTime}
                type='number'
              ></Input>
            </div>
            <div className='formRow'>
              <Input
                id='shortBreakTime'
                labelText='Descanso curto'
                ref={shortBreakTimeInputRef}
                defaultValue={state.config.shortBreakTime}
                type='number'
              ></Input>
            </div>
            <div className='formRow'>
              <Input
                id='longBreakTime'
                labelText='Descanso Longo'
                ref={longBreakTimeInputRef}
                defaultValue={state.config.longBreakTime}
                type='number'
              ></Input>
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
