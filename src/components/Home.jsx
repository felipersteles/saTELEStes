import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";

import fishing from "../assets/img/spike-fishing.png";
import satelite from "../assets/img/satelite.png";
import einstein from "../assets/img/einstein.png";
import logo from "../assets/img/logo.png";
import sol from "../assets/img/sol.svg";

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <img src={fishing} alt="" className="mobile" />

        <div className="conteudo">
          <div className="frase">
            <span>
              “Se tu choras por ter perdido o sol, as lágrimas te impedirão de
              olhar as estrelas e a lua.”
            </span>
            <i>Antoine de Saint-Exupéry</i>
          </div>

          <div className="grid-template-columns">
            <Link to="/fotonasa">
              <button>
                <img src={satelite} alt="" />
              </button>
            </Link>

            <Link to="/AlbertEinstein">
              <button>
                <img src={einstein} alt="" />
              </button>
            </Link>

            <a
              href="https://felipeteles.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                <img src={logo} alt="" />
              </button>
            </a>

            <a
              href="https://felipersteles.github.io/sistema-solar-experimento-um/"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                <img src={sol} alt="" />
              </button>
            </a>
          </div>
        </div>
      </Container>
    </Suspense>
  );
};

const Container = styled.div`
  height: 100%;
  background-image: url(https://img.olhardigital.com.br/wp-content/uploads/2021/07/espaco-sideral.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  button {
    cursor: pointer;
  }

  .conteudo {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-size: 3.5vh;
    margin-top: 4vh;

    .frase {
      padding: 0 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: start;

      i {
        text-align: end;
        font-size: 1rem;
      }
    }

    .grid-template-columns {
      display: grid;
      grid-template-columns: 200px 200px;
      gap: 0.2rem;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }

  img {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 0;
  }

  button {
    border-radius: 1rem;
    color: #effdea;
    border: none;
    padding: 1vh 8vh;
    left: 40vw;
    font-size: 6rem;
    display: flex;
    z-index: 10000;

    img {
      position: relative;
      height: 8vh;
      width: 8vh;
    }

    background: linear-gradient(223deg, #5b26ff, #000000, #8d00ff);
    background-size: 600% 600%;

    -webkit-animation: BotaoAnimation 18s ease infinite;
    -moz-animation: BotaoAnimation 18s ease infinite;
    -o-animation: BotaoAnimation 18s ease infinite;
    animation: BotaoAnimation 18s ease infinite;
  }

  @-webkit-keyframes BotaoAnimation {
    0% {
      background-position: 0% 75%;
    }
    50% {
      background-position: 100% 26%;
    }
    100% {
      background-position: 0% 75%;
    }
  }
  @-moz-keyframes BotaoAnimation {
    0% {
      background-position: 0% 75%;
    }
    50% {
      background-position: 100% 26%;
    }
    100% {
      background-position: 0% 75%;
    }
  }
  @-o-keyframes BotaoAnimation {
    0% {
      background-position: 0% 75%;
    }
    50% {
      background-position: 100% 26%;
    }
    100% {
      background-position: 0% 75%;
    }
  }
  @keyframes BotaoAnimation {
    0% {
      background-position: 0% 75%;
    }
    50% {
      background-position: 100% 26%;
    }
    100% {
      background-position: 0% 75%;
    }
  }

  @media screen and (min-width: 720px) {
    display: flex;
    align-items: center;

    .conteudo {
      flex-direction: row;
      padding: 5vh;
      margin: 0 11vh;
      gap: 15vh;

      .frase {
        flex: 1;
        background-color: #00000080;
        border-radius: 2rem;
      }
    }

    .mobile {
      display: none;
    }
  }

  @media screen and (min-width: 380px) {
    button{
      padding: 1vh 5vh;
    }
  }
`;

export default Home;
