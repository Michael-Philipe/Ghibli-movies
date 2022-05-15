import React from 'react';

import ListFilms from '../../components/ListFilms';

const Dashboard = () => {
  //quando eu estou la em baixo nos ultimos filmes e dava o click no botao com o link para o dash board a pagina recarregava mas nao voltava o scroll la para cima e nem fazia o efeito que coloquei no CSStransitions que cobre as rotas.. procurei mas nao achei uma solução adequada então usei o window.scrollTo para sempre que renderizar a pagina dar o scroll para o top (seria ruim se tivesse muitos filmes ter q voltar ao topo quando recarregar mas por enquanto vou usar essa solução)
  window.scrollTo(0, 0);

  return (
    <div>
      <ListFilms />
    </div>
  );
};

export default Dashboard;
