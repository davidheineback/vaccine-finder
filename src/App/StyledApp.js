import styled from 'styled-components'

export const StyledAppContainer = styled.div`
min-width: 100vw;
min-height: 100vh;
background: linear-gradient(290deg, rgba(148,187,233,0.8813726174063375) 11%, rgba(174,238,181,0.9009804605435925) 100%); 
`

export const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 400px;
  margin: auto;
  width: 400px;
  background: rgba( 255, 255, 255, 0.40 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 1.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  transform: translate(-50%, -50%);
  text-align: center;
`

export const StyledInput = styled.input`
  width: 250px;
  padding: 0.4rem;
  border-radius: 50px;
  text-align: center;
  appearance: none;
  background: inherit;
  border: transparent;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 25%;
  overflow: scroll;
  &:focus {
    outline: none;
    background: white;
  } 
`