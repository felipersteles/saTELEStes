import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import voltar from "../assets/img/voltar.png";

function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=Xb57beun5V1yMv0sxj3CJ6MFA70Xb1cw9L88HsBM`
      );

      const data = await res.json();
      setPhotoData(data);

      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <Container>
      <div className="intro">
        <h3>
          Esta página contém uma imagem tirada por um satélite da nasa no dia de
          hoje e a sua descrição em inglês.
        </h3>
      </div>
      <div className="satelite">
        <img src={photoData.url} alt={photoData.title} className="imagem" />

        <div className="desc">
          <div className="conteudo">
            <h2>{photoData.title}</h2>
            <span>Data: {photoData.date}</span>
            <p>
              Descricao:
              <br />
              &emsp;{photoData.explanation}
            </p>
          </div>
        </div>
      </div>
      <NavLink to="/" className="voltar">
        <img src={voltar} alt="" className="btn" />
      </NavLink>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;

  background-image: url(https://img.ibxk.com.br/2019/05/17/a-17202525498312.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  .intro {
    padding: 4rem 3rem 0;
    text-align: center;
    font-size: 3.5vh;
    color: white;
    margin-bottom: 3rem;

    h3 {
      margin: 0;
      background-color: #0000008c;
    }
  }

  .satelite {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;

    h2 {
      text-align: center;
    }

    .imagem {
      width: 80%;
      height: 50vh;
      object-fit: contain;
    }

    .desc {
      margin-top: 3rem;
      font-size: 3.7vh;
      background-color: #0000008c;
      padding: 1rem;
    }
  }
`;

export default NasaPhoto;
