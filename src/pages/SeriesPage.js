import styled from "styled-components";
import { Link } from "react-router-dom";

const SeriesPage = (props) => {
  return (
    <Container>
      <h3>Popular</h3>
      <Content>
        <Wrap>
          <Link to="/Raya">
            <img
              src="https://cdn.mos.cms.futurecdn.net/q2ByQnpNSSAmZv86ZGuxY9.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/Euphoria">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/pp_disneyplusoriginals_intertwined_mobile_22264_14ad6d02.jpeg?region=0,0,640,320"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/ShangChi">
            <img
              src="https://i0.wp.com/offcolour.org/wp-content/uploads/2022/02/The-Proud-Family-Louder-and-Prouder.jpg?fit=1280%2C768&ssl=1"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/Moana">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2568/1162568-h-98cdd6e8d359"
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
              src="https://cdn1.edgedatg.com/aws/v2/abc/ABCUpdates/blog/3477288/065e93b22ababfb909e7222640141dce/1000x563-Q90_065e93b22ababfb909e7222640141dce.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/Euphoria">
            <img
              src="https://awesomelyluvvie.com/wp-content/uploads/2020/12/Disney-Pixar-Soul-Poster.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/ShangChi">
            <img
              src="https://lonepeakcinema.com/wp-content/uploads/2018/06/The-Incredibles-2-Poster-1170x585.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/Moana">
            <img
              src="https://www.ubuy.co.id/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODE4dUQtZ21EMkwuX0FDX1NMMTUwMF8uanBn.jpg"
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
              src="https://live.staticflickr.com/4210/35684223632_80998f3d8b_b.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/Euphoria">
            <img
              src="https://posterspy.com/wp-content/uploads/2021/08/POSTERSFORPOSTERSPY4.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/ShangChi">
            <img
              src="https://mypostercollection.com/wp-content/uploads/2018/08/Frozen-Poster-15.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/Moana">
            <img
              src="https://thedisinsider.com/wp-content/uploads/2021/01/lion-king.jpeg"
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

export default SeriesPage;
