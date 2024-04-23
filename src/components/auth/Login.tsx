import { Link } from 'react-router-dom';
import Auth from './Auth';

const Login = () => {
  return (
    <Auth submitLabel='Login' onSubmit={async () => {}}>
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
