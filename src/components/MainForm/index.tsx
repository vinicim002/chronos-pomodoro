import { PlayCircleIcon } from 'lucide-react';
import { Input } from '../Input';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import type { HomeProps } from '../../pages/Home';

export function MainForm({ state, setState }: HomeProps) {
  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34 * 60,
        },
        formattedSecondsRemaining: '32:00',
      };
    });
  }
  return (
    <form className='form' action=''>
      <div>
        <button type='button' onClick={handleClick}>
          Clicar
        </button>
      </div>
      <div className='formRow'>
        <Input
          labelText='task'
          id='input'
          type='text'
          placeholder='Digite algo...'
        />
      </div>

      <div className='formRow'>
        <p>Proximo Intervalo eh de {state.config.workTime} min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
}
