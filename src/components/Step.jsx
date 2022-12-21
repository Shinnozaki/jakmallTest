import styled, { css } from 'styled-components';

const SStepContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${props => 
    !props.selected &&
    css`
      @media (max-width: 640px) {
        display: none;
      }
    `}
`

const SStepNumber = styled.div` background-color: #ffe3b7;
  color: inherit;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;

  ${props => 
    props.selected &&
    css`
      background-color: #ff8a00;
      color: white;
    `};
`

function Step({ step, no, children }) {
  return (
    <SStepContainer selected={step === no}>
      <SStepNumber selected={step >= no}>{no}</SStepNumber>
      { children }
    </SStepContainer>
  )
}

export default Step;
