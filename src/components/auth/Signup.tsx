import { Link } from 'react-router-dom';
import Auth from './Auth';
import { useCreateUser } from '../../hooks/useCreateUser';

const Signup = () => {
  const [createUser] = useCreateUser();

  return (
    <Auth
      submitLabel='Sign up'
      onSubmit={async ({ email, password }) => {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password,
            },
          },
        });
      }}
    >
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
