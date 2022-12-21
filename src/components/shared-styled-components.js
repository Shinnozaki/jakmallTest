import styled, { css } from 'styled-components';

export const SHeading1 = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
  color: #ff8a00;
  text-decoration: underline rgb(211,211,211,0.5);
  text-decoration-thickness: .25rem;
`

export const SHeading2 = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: bold;
  color: #ff8a00;
`

export const SButton = styled.button`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: bold;
  background-color: #ff8a00;
  color: white;
  padding: .5rem 1rem;
  border: none;
  cursor: pointer;
`

export const SInput = styled.input`
  padding: 1rem 1rem;
  border: 2px solid grey;

  :disabled {
    border-color: lightgrey;
  }

  :focus {
    outline: none;
  }

  ${props => 
    props.error &&
    css`
      border-color: orange;
    `}
  ${props => 
    !props.error && !props.empty &&
    css`
      border-color: green;
    `}
`

export const SStepContainer = styled.div`
  padding: 0 1rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
