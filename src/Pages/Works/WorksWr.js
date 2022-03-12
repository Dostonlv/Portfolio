import styled from "styled-components";

const WorksWr = styled.div`
  h2,
  h5 {
    font-family: "Aldrich", sans-serif;
  }
  .mycard {
    width: 100%;
    h5 {
      a {
        color: cyan;
        text-decoration: none;
      }
    }
    .imgwrap {
      height: 250px;
    }
    img {
      width: 100%;
    }
    .visible {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
    .invisible-part {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      background: #00000098;
      transition: all 0.5s ease;
      .content {
        position: relative;
        width: 100%;
        height: 100%;
        a {
          font-size: 30px;
          color: cyan;
        }
        .go {
          position: absolute;
          top: 0;
          right: 0;
          padding: 20px;
        }
        .codes {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 20px;
        }
      }
    }
    .visible:hover .invisible-part {
      opacity: 1;
    }
  }
`;
export default WorksWr;