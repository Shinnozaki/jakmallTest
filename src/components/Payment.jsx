import styled from 'styled-components';

import BackButton from './BackButton';
import RadioGroup from './RadioGroup';
import { SHeading1, SStepContainer } from './shared-styled-components';
import { SHIPMENT, PAYMENT } from '../lib/constants';

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div p:first-child {
    margin-bottom: 1rem;
  }
`

function Payment({ state, handleStep, setState }) {
  const onSubmit = (e) => {
    e.preventDefault();
    handleStep(state.step + 1);
  }

  return (
    <SStepContainer>
      <BackButton text="Back to delivery" fn={() => handleStep(state.step - 1)} />
      <SForm id="form-payment" onSubmit={onSubmit}>
        <div>
          <SHeading1>Shipment</SHeading1>
          <RadioGroup 
            value={state.shipment}
            options={SHIPMENT} 
            setValue={(newValue) => setState({...state, shipment: newValue})}
          />
        </div>
        <div>
          <SHeading1>Payment</SHeading1>
          <RadioGroup 
            value={state.payment}
            options={PAYMENT} 
            setValue={(newValue) => setState({...state, payment: newValue})}
          />
        </div>
      </SForm>
    </SStepContainer>
  )
}

export default Payment;
