import styled from "styled-components";
import { Link } from "react-router-dom";

const OriginalsPage = (props) => {
  return (
    <Container>
      <h3>Popular</h3>
      <Content>
        <Wrap>
          <Link to="/Raya">
            <img
              src="https://w0.peakpx.com/wallpaper/888/764/HD-wallpaper-movie-raya-and-the-last-dragon-raya-raya-and-the-last-dragon-sisu-raya-and-the-last-dragon.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/Euphoria">
            <img
              src="https://film-book.com/wp-content/uploads/2022/01/1642394466_euphoria-logo-01-700x400-1-700x400.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/ShangChi">
            <img src="https://wallpapercave.com/wp/wp10239980.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/Moana">
            <img
              src="https://www.newcanaanymca.org/wp-content/uploads/2021/11/Moana-Movie-Poster-landscape.jpg"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
      <h3>Recent Releases</h3>
      <Content>
        <Wrap>
          <Link to="/Raya">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/351F9B0CB660473D494397B540DB01FE2A3180F61C804A4326429C6F74A82628/scale?width=1200&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/Euphoria">
            <img
              src="https://playpilot.b-cdn.net/21bbbd7451ac11ec9b070a58a9feac02/src/img?optimizer=image&quality=75&width=1280&aspect_ratio=16%3A9"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/ShangChi">
            <img
              src="https://notifarandula.club/wp-content/uploads/2022/02/Parallels-proximamente-en-Disney-Que-hay-en-Disney-Plus.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/Moana">
            <img
              src="https://wdwnt.com/wp-content/uploads/2022/03/sketchbook-series-1200x675.jpeg"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
      <h3>Throwbacks</h3>
      <Content>
        <Wrap>
          <Link to="/Raya">
            <img
              src="https://i0.wp.com/www.heyuguys.com/images/2010/10/rapunzel_18.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/Euphoria">
            <img
              src="https://thedisinsider.com/wp-content/uploads/2020/09/AAAABWsNj1uoZQXJKB7n_CpGJgk2-CKulGSkPAeUW5cwR0M1kF1VhhHHblzn-DFJzcul8gGwS22XKu-uEdsU6jOKiWaTdUtz0ZKt1A.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/ShangChi">
            <img
              src="https://e7.pngegg.com/pngimages/20/246/png-clipart-home-alone-film-series-ray-breslin-television-blu-ray-disc-others-tshirt-television.png"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/Moana">
            <img
              src="https://whatsondisneyplus.com/wp-content/uploads/2020/05/Atlantis.jpg"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 25px 25px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default OriginalsPage;
