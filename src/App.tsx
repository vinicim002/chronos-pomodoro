import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Ola Mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        temporibus placeat deserunt facere voluptate doloremque, sit facilis?
        Ipsa fugiat, tenetur veniam natus molestiae repellendus deleniti
        commodi! Optio quo veniam illo.
      </p>
    </>
  );
}
