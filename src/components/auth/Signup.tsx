import { Link } from 'react-router-dom';
import Auth from './Auth';

const Signup = () => {
  return (
    <Auth submitLabel='Sign up' onSubmit={async () => {}}>
      <Link
        to='/login'
        style={{ alignSelf: 'center' }}
        className='MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-tb612g-MuiTypography-root-MuiLink-root'
      >
        Login
      </Link>
    </Auth>
  );
};

export default Signup;
