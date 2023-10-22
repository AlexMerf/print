import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import { Button, Input } from '../../../../../../components';

import styles from './styles.module.scss';

export const FormBlock = () => {
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
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
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
          Нажимая на кнопку «Сделать заказ», вы соглашаетесь с{' '}
          <Link className={styles.link} to="/politic">
            Политикой конфиденциальности
          </Link>
        </span>
      </div>
    </div>
  );
};
