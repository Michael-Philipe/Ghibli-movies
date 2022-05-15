import Header from './components/Header';
import GlobalStyle from './global/globalStyle';
import RoutesWrapper from './routes/index';
import nave from './assets/images/nave.png';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <img className='nave' src={nave} alt='moving castle' />
      <RoutesWrapper />
    </>
  );
}

export default App;
