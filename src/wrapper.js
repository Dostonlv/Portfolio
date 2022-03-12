import styled from "styled-components";

const wrapper = styled.div`
  .anim_mobile_selectors {
    &-enter {
      opacity: 0.01;
    }
    &-enter-active {
      opacity: 0.01;
    }
    &-enter-done {
      opacity: 1;
      transition: opacity 500ms linear;
    }
    &-exit {
      opacity: 1;
    }
    &-exit-active {
      opacity: 0.01;
      transition: opacity 500ms linear;
    }
  }
`;
export default wrapper;
