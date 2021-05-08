import styled from 'styled-components'


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