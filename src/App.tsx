import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='string'>
        Ola Mundo!
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
