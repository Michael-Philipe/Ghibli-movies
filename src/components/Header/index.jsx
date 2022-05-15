import { HeaderContainer } from './style';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className='content'>
          <Link to='/'>
            <h1>Studio Ghibli</h1>
          </Link>
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
