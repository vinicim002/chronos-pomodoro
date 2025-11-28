import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <>
      <MainTemplate>
        <Container>
          <p>
            404 - Page Not Found
          </p>
        </Container>
      </MainTemplate>
    </>
  );
}
