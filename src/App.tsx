import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';

import { Contacts, Home, MethodPage, Politic, Products } from './pages';

import './styles/globals.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <span>error</span>,
  },
  {
    path: '/politic',
    element: <Politic />,
    errorElement: <span>error</span>,
  },
  {
    path: '/contacts',
    element: <Contacts />,
    errorElement: <span>error</span>,
  },
  {
    path: '/methods/:id',
    element: <MethodPage />,
    errorElement: <span>error</span>,
  },
  {
    path: '/products/:id',
    element: <Products />,
    errorElement: <span>error</span>,
  },
]);

function App() {
  const methods = useForm({
    mode: 'onChange',
  });

  return (
    <FormProvider {...methods}>
      <AnimatePresence>
        <RouterProvider router={router} />;
      </AnimatePresence>
    </FormProvider>
  );
}

export default App;
