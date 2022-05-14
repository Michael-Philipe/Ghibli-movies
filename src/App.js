import Header from './components/Header';
import GlobalStyle from './global/globalStyle';
import RoutesWrapper from './routes/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RoutesWrapper />
    </>
  );
}

export default App;
