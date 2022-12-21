import styled from 'styled-components';

const SSvg = styled.svg`
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: 640px) {
  display: none;
  }
`

function ChevronRight() {
  return (
    <SSvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </SSvg>
  )
}

export default ChevronRight;
