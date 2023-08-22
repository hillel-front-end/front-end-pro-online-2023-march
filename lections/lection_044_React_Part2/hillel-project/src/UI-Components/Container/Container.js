// import classes from './Container.module.css'
//
// const Container = (props) => {
//     return (
//         <div className={classes.Container}>
//             {props.children}
//         </div>
//     )
// };
//
// export default Container;

import styled from "styled-components";

const Container = styled.div`
  max-width: ${(props) => props.maxWidth || "1280px"};
  margin: 0 auto;
  padding: 0px 15px;
`;

export default Container;
