import React from "react";
import styled from "styled-components";
import albert from "../assets/img/alberteinstein.jpg";
import { NavLink } from "react-router-dom";
import voltar from "../assets/img/voltar.png";

const Einstein = () => {
  return (
    <Container>
      <div className="containerRetrato">
      <img src={albert} alt="Einstein" /></div>

      <div className="texto">
        <h1>Albert Einstein</h1>
        <span className="citacao">
          <i>"Quero conhecer as ideias de Deus de forma matemática"</i>
        </span>
        <div className="desc">
          <p>
            &emsp; Pretendo descrever nesta página um pequeno resumo em forma de
            homenagem ao físico quântico Albert Einstein, ganhador do prêmio
            nobel de física de 1921 por sua teoria do efeito fotoluz e que, de
            acordo com o mesmo ele não era nada mais nada menos do que um
            viciado em cálculos. Entretanto adotava diversas práticas que eu
            Admiro bastante a música.
          </p>
          <p>
            &emsp; Ele trabalhava como auxiliar de patentes, porém esta
            atividade não o demandava muito esforço intelectual então ele
            gastava o tempo que sobrava escrevendo e publicando artigos sobre o
            tempo enquanto no No trabalho , o relógio parecia estar quebrado.
            Demorou cerca de 5 meses para que Einstein tivesse seu primeiro
            artigo reconhecido e, foi em 1905 o ano que ficou conhecido como ano
            do milagre de Einstein.
          </p>
          <p>
            &emsp; Escreveu sobre a teoria especial da relatividade, porém ela
            apresentava um defeito: só podia ser calculada quando considerando a
            aceleração constante porém Einstein sabia que nada no mundo tinha a
            aceleração constante. Tendo isto em mente ele resolveu iniciar os
            estudos para publicar a teoria GERAL da relatividade, mas para isto
            ele iria precisar discordar de Isaac Newton e desconsiderar a
            gravidade. Um belo dia ele estava em seu trabalho quando imaginou um
            homem trabalhando no telhado e de repente este homem caia. Ao cair
            ele imaginou o homem caindo e ao cair o homem não conseguia sentir
            seu corpo, então Einstein imaginou ele caindo dentro de um elevador,
            porém como o elevador cai na mesma razão que o homem, dentro do
            elevador o cara não teria peso, ou seja, não teria nenhuma força
            atuando naquele corpo. Portanto é como se não existisse gravidade, a
            terra estava curvando o espaço e ele empurrasse o homem. De acordo
            com essa teoria o espaço é algo maleável, algo flexível. A partir
            desta teoria a física nunca mais foi a mesma e diversas outras
            teorias de Einstein foram formuladas porém várias delas ainda não
            foram provadas devido aos nossos limites tecnológicos.
          </p>
        </div>
      </div>

      <NavLink to="/" className="voltar">
        <img src={voltar} alt="" className="btn" />
      </NavLink>
    </Container>
  );
};

const Container = styled.div`
  color: white;
  font-size: 3vh;
  text-align: start;
  padding: 3vh;

  .containerRetrato{
    display: flex;
    justify-content: center;
  }

  h1 {
    text-align: center;
  }

  .citacao {
    text-align: center;
    font-size: 2.5vh;
  }
`;

export default Einstein;
