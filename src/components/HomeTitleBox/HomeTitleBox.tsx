import styles from './styles.module.scss';

interface IProps {
  title: string;
  maxWidth?: string;
}

export const HomeTitleBox = ({ title, maxWidth }: IProps) => {
  return (
    <div className={styles.wrapperTitle}>
      <h2 className={styles.title} style={{ maxWidth: maxWidth }}>
        {title}
      </h2>
    </div>
  );
};
