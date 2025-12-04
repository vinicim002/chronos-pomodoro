import { PlayCircleIcon } from 'lucide-react';
import { Input } from '../Input';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { useRef } from 'react';

export function MainForm() {
  //Forma Controlada -> quando quero o valor do input em tempo real
  // const [taskName, setTaskName] = useState('');

  //Forma Nao Controlada
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log();
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <Input
          labelText='task'
          id='input'
          type='text'
          placeholder='Digite algo...'
          //Forma Controlada
          // value={taskName}
          // onChange={e => setTaskName(e.target.value)}

          //Forma Nao Controlada
          ref={taskNameInput}
        />
      </div>

      <div className='formRow'>
        <p>Proximo Intervalo eh de 25 min</p>
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
