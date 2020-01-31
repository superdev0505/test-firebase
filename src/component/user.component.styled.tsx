import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin: 0 auto;
`

export const ItemContainer = styled.div`
  width: 300px;

  & > [class^='ant-'] {
    width: 100%;
    margin-bottom: 20px;
  }
`;