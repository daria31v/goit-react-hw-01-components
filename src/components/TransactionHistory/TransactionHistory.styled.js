import styled from 'styled-components';

export const TransactionCard = styled.div`
  border-collapse: collapse;
  letter-spacing: 1px;
  margin: 20px;
`;

export const TransactionColumTh = styled.th`
  border: 1px solid gray;
  padding: 10px 50px;
  width: 200px;
  height: 30px;
`;
export const TransactionColumTd = styled.td`
border: 1px solid gray;
padding: 8px;
text-align: center;
color: black;
font-size: 18px;
`
export const HeadlineTransactionCard = styled.thead`
 background-color: lightblue; 
 color: white;
 text-shadow: 2px 1px 3px black;
 text-transform: uppercase;
`
export const BodyTransactionCard = styled.tbody`
background-color: lightyellow;
`
