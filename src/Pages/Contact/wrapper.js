import styled from "styled-components";

const ContactWr = styled.div`
  h1 {
    font-family: "Aldrich", sans-serif;
  }
  a {
    color: cyan !important;
    text-decoration: none;
  }
  .skill {
    color: cyan;
    max-width: 300px;
    margin: 20px 0;
    transform: skewX(-20deg);
    padding: 10px 40px;
    border: 1px solid cyan;
    transition: all 0.5s ease;
  }
  .skill:hover {
    box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff, 0 0 2rem cyan,
    inset 0 0 2rem cyan, 0 0 4rem cyan;
  }
`;
export default ContactWr;