import { HeaderContainer } from './style';
import { Link } from 'react-router-dom';
import nave from '../../assets/images/nave.png';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className='content'>
          <Link to='/'>
            <h1>Studio Ghibli</h1>
          </Link>
          <img src={nave} alt='moving castle' />
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
