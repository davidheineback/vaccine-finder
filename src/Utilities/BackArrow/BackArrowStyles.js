import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded'
import styled from 'styled-components'

export const StyledBackArrow = styled(KeyboardBackspaceRoundedIcon)`
  position: absolute;
  top: 20px;
  left: 40px;
  color: rgba(240, 52, 52, 0.7);
  cursor: pointer;
  @media (max-width: 768px) {
  top: 45px;
  left: 30px;
  }
`
