import styled from 'styled-components';

const SContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
  }
`

function BackButton({ fn, text }) {
  return (
    <SContainer onClick={fn}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      { text }
    </SContainer>
  )
}

export default BackButton;
