import styled from 'styled-components'
import { Input } from '@material-ui/core'

export const StyledInput = styled(Input)`
  width: 250px;
  padding: 0.4rem;
  margin-top: 25%;
  &:focus {
    outline: none;
    background: white;
  }
`

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
