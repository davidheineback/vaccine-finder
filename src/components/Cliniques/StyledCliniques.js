import styled from 'styled-components'

export const StyledCity = styled.div`
display: inline-flex;
padding: 12px;
border-radius: 20px;
border: 1px solid lightblue;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
margin: 5px;
&:hover {
  background: lightblue;
}
`

export const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
  margin-top:40%;

& div {
  top: 32px;
  left: 32px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: ${props => props.theme.colors.heart};
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}

& div:after,
 div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: ${props => props.theme.colors.heart}
}

& div:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}
& div:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
`
