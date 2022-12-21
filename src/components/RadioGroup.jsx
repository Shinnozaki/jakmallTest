import styled, { css } from 'styled-components';

const SRadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

const SCustomRadio = styled.div`
  width: 12rem;
  height: 5rem;
  border: 2px solid grey;
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .25rem;
  color: grey;

  input {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  @media (max-width: 640px) {
    width: 100%;
  }

  ${props => 
    props.checked &&
    css`
      background-color: #e8f8f0;
      border-color: #31da82;
      color: black;
      font-weight: bold;
    `}
`

function RadioGroup({ value, options, setValue }) {
  return (
    <SRadioContainer>
      {Object.keys(options).map((key) => {
        const option = options[key];
        return (
          <SCustomRadio checked={key === value} key={key}>
            <input 
              type="radio"
              id={key}
              value={key} 
              checked={key === value} 
              onChange={() => setValue(key)}
            />
            <label htmlFor={key}>{option.name}</label>
            { option.cost && <span>{option.cost}</span> } {/* for shipment */}
            { option.balance && <span>{option.balance} left</span> } {/* for payment */}
          </SCustomRadio>
        )
      })}
    </SRadioContainer>
  )
}

export default RadioGroup;
