import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { Button, IconButton, Input } from '..';

import styles from './styles.module.scss';

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const Popup = ({ onClose, open }: IProps) => {
  if (!open) {
    return null;
  }

  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      phone: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
    onClose();
  };

  return createPortal(
    <motion.section
      className={styles.container}
      key="popup"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.overlay} role="button" onClick={onClose} />
      <motion.article
        key="popup-content"
        className={styles.content}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
      >
        <div className={styles.popup}>
          <header className={styles.header}>
            <IconButton
              aria-label="Закрыть окно"
              title="Закрыть окно"
              onClick={onClose}
              className={styles.btnClose}
            >
              <AiOutlineClose />
            </IconButton>
            <div className={styles.wrapperTitle}>
              <h2 className={styles.title}>Оставьте заявку</h2>
              <span className={styles.subTitle}>
                Заполните форму и мы свяжемся с Вами
              </span>
            </div>
          </header>
          <div className={styles.inputs}>
            <Controller
              name="name"
              control={control}
              rules={{
                required: 'Поле "Имя" обязательно для заполнения',
                minLength: {
                  value: 2,
                  message: 'Поле "Имя" должно содержать минимум 2 символа',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Ваше имя"
                  className={styles.input}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              rules={{
                required: 'Поле "Телефон" обязательно для заполнения',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Поле "Телефон" должно содержать только цифры',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Ваш телефон"
                  className={styles.input}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            <Button
              disabled={!formState.isDirty || !formState.isValid}
              onClick={handleSubmit(onSubmit)}
            >
              Сделать заказ
            </Button>
            <span className={styles.text}>
              Нажимая на кнопку «Отправить», вы соглашаетесь с{' '}
              <Link to="/politic" className={styles.link}>
                Политикой конфиденциальности
              </Link>
            </span>
          </div>
        </div>
      </motion.article>
    </motion.section>,
    document.body
  );
};
