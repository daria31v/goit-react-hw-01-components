import styled from 'styled-components';

export const TransactionCard = styled.div`
  border-collapse: collapse;
  letter-spacing: 1px;
  margin: 20px;
  
`;
export const TransactionColumTr = styled.tr`
  border: 1px solid rgb(190, 190, 190);
 
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
background-color: lightcyan;
color: black;
font-size: 18px;
`
export const HeadlineTransactionCard = styled.thead`
 background-color: lightblue; 
 color: white;
 text-shadow: 2px 1px 3px black;
 text-transform: uppercase;
 font-size: 18px;
`