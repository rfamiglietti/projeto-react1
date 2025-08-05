import React from 'react';
import MeuComponente from './components/MeuComponente';
import Contador from './components/Contador';
import BotaoPersonalizado from './components/BotaoPersonalizado';
import CardInfo from './components/CardInfo';
import Alerta from './components/Alerta';
import InputComLabel from './components/InputComLabel';
import Modal from './components/Modal';
import Spinner from './components/Spinner';
import AvatarUsuario from './components/AvatarUsuario';
import ListaInterativa from './components/ListaInterativa';
import NavbarResponsiva from './components/NavbarResponsiva';
import FooterSimples from './components/FooterSimples';
import BadgeStatus from './components/BadgeStatus';
import ProgressBar from './components/ProgressBar';
import Accordion from './components/Accordion';
import TabsNavegacao from './components/TabsNavegacao';
import GaleriaImagens from './components/GaleriaImagens';

function App() {
  const imagens = [
    "/foto3x4.jpg",
    "/fotodev.jpg",
    "/fotoeletro.jpg",
  ];

  return (
    <div className="App">
      {/* Componentes sem props obrigatórias */}
      <MeuComponente />
      <Contador />
      <BotaoPersonalizado texto="Clique Aqui" onClick={() => alert('Clicado!')} />
      <CardInfo titulo="Título Exemplo" descricao="Descrição do card aqui." />
      <Alerta tipo="sucesso" mensagem="Operação realizada com sucesso!" />
      <InputComLabel label="Digite algo:" placeholder="Texto aqui" />
      <Modal aberto={false} fechar={() => {}}>Conteúdo do modal</Modal>
      <Spinner />
      <AvatarUsuario nome="Rômulo" imagem="/foto3x4.jpg" />
      <ListaInterativa itens={['Item 1', 'Item 2']} aoClicar={(item) => alert(item)} />
      <NavbarResponsiva />
      <FooterSimples />
      <BadgeStatus tipo="ativo" texto="Ativo" />
      <ProgressBar valor={75} />
      <Accordion perguntas={[
        { pergunta: 'O que é React?', resposta: 'Uma biblioteca JavaScript para UIs.' },
        { pergunta: 'O que é um componente?', resposta: 'Bloco reutilizável de interface.' }
      ]} />
      <TabsNavegacao abas={[
        { titulo: 'Aba 1', conteudo: <p>Conteúdo da aba 1</p> },
        { titulo: 'Aba 2', conteudo: <p>Conteúdo da aba 2</p> }
      ]} />
      <GaleriaImagens imagens={imagens} />
    </div>
  );
}

export default App;