import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  url: string;
};

export const Redirect = ({ url }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(url);
  }, [url]);

  return <></>;
};
