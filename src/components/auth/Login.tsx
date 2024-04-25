import { Link } from 'react-router-dom';
import Auth from './Auth';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
  const { login, error } = useLogin();
  return (
    <Auth submitLabel='Login' onSubmit={async (request) => login(request)}>
      <Link
        id='RouterNavLink'
        to='/signup'
        style={{ alignSelf: 'center' }}
        className='MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-tb612g-MuiTypography-root-MuiLink-root'
      >
        Sign up
      </Link>
    </Auth>
  );
};

export default Login;
