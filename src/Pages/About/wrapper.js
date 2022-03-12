import styled from "styled-components";

const AboutWr = styled.div`
  span {
    color: #fff;
  }
  .skills {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .skill {
    flex: 30%;
    color: cyan;
    max-width: 300px;
    margin: 20px 0;
    margin-right: 20px;
    transform: skewX(-20deg);
    padding: 10px 40px;
    border: 1px solid cyan;
    transition: all 0.5s ease;
    text-transform: uppercase;
  }
  .skill:hover {
    box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff, 0 0 2rem cyan,
    inset 0 0 2rem cyan, 0 0 4rem cyan;
  }
`;
export default AboutWr;