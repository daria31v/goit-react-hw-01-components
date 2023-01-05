import styled from 'styled-components';

export const Friends = styled.li`
display: flex;
gap: 10px;
align-items: center;
width: 200px;
padding: 10px;
border: 1px solid lightgreen;
box-shadow: 1px 1px 2px gray;
border-radius: 2px;
`
export const Status = styled.span`
color: ${props => {
return props.isActive ? "green" : "red"
}
};
`
export const Img = styled.img`
border: 1px solid lightgray;
box-shadow: 1px 1px 2px gray;
border-radius: 8px;
padding: 8px;
`
export const Name = styled.p`
font-size: 16px;
font-weight: 700;
`