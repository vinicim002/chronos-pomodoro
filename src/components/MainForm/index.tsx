import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Input } from '../Input';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction';
import { Tips } from '../Tips';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  //Forma Controlada -> quando quero o valor do input em tempo real
  // const [taskName, setTaskName] = useState('');

  //Forma Nao Controlada
  const taskNameInput = useRef<HTMLInputElement>(null);

  //Ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

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
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
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
          disabled={!!state.activeTask}
        />
      </div>

      <div className='formRow'>
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton
            type='submit'
            icon={<PlayCircleIcon />}
            color='green'
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            type='button'
            icon={<StopCircleIcon />}
            color='red'
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
}
