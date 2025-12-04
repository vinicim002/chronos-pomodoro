import { PlayCircleIcon } from 'lucide-react';
import { Input } from '../Input';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function MainForm() {
  const { setState } = useTaskContext();
  //Forma Controlada -> quando quero o valor do input em tempo real
  // const [taskName, setTaskName] = useState('');

  //Forma Nao Controlada
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Por favor, insira uma tarefa válida.');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completedDate: null,
      interruptedDate: null,
      duration: 1,
      type: 'workTime',
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: 1, //Conferir depois
        secondsRemaining: secondsRemaining, //Conferir depois
        formattedSecondsRemaining: '00:00', //Conferir depois
        tasks: [...prevState.tasks, newTask],
      };
    });
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
