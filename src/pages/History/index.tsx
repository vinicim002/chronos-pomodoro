import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';
import { Heading } from '../../components/Heading';
import { DefaultButton } from '../../components/DefaultButton';

import styles from './styles.module.css';

export function History() {
  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>
            <span>History</span>
            <span className={styles.buttonContainer}>
              <DefaultButton icon={<TrashIcon />} color='red' />
            </span>
          </Heading>
        </Container>

        <Container>
          <div className='resposiveTable'>saddadasdadsda</div>
        </Container>
      </MainTemplate>
    </>
  );
}
