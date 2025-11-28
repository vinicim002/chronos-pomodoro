import styles from './styles.module.css';

type GenericHtml = {
  children: React.ReactNode;
};

export function GenericHtml({ children }: GenericHtml) {
  return <div className={styles.genericHtml}>{children}</div>;
}
