// import React from "react";
// import styled from "styled-components";

// const S = {
//   Field: styled.input`
//     fontFamily: '"Lato", sans-serif',
//     fontSize: '0.875rem',
//     border: 1px solid '#e2e2e2',
//     width: fit-content;
//     padding: 1rem;
//     border-radius: 0.5rem;
//     :focus {
//       outline: none;
//       border: 1px solid '#0a8080',
//     }
//     ::placeholder {
//       color: '#8a8a8a',
//     }
//   `,
// };

// const HomeTextField = (props) => <S.Field {...props} />;

// export default HomeTextField;

import React from "react";
import styled from "styled-components";

const S = {
  Field: styled.input`
    ${(props) => props.theme.typography.caption};
    border: 1px solid ${(props) => props.theme.palette.lightgray};
    width: fit-content;
    padding: 1rem;
    border-radius: 0.5rem;
    :focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.palette.secondary};
    }
    ::placeholder {
      color: ${(props) => props.theme.palette.gray};
    }
  `,
};

const HomeTextField = (props) => <S.Field {...props} />;

export default HomeTextField;
