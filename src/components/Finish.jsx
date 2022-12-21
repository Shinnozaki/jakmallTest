import styled from 'styled-components';

import BackButton from './BackButton';
import { SHeading1 } from './shared-styled-components';
import { SHIPMENT, DEFAULT_STATE } from '../lib/constants';

const SStepContainer = styled.div`
  padding: 0 1rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    max-width: 28rem;
  }
`

function Finish({ state, setState }) {
  const genId = () => {
    let id = '';
    const charset = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    for (let i = 0; i < 5; i++) {
      id += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    return id;
  }

  const reset = () => {
    setState(DEFAULT_STATE);
  }

  return (
    <SStepContainer>
      <div>
        <SHeading1>Thank you</SHeading1>
        <div style={{ margin: '.5rem 0 3rem 0' }}>
          <strong>Order ID: {genId()}</strong>
          <p>Your order will be delivered {SHIPMENT[state.shipment].due.toLowerCase()} with {SHIPMENT[state.shipment].name}</p>
        </div>
        <BackButton text="Go to homepage" fn={reset} />
      </div>
    </SStepContainer>
  )
}

export default Finish;
