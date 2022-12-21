import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { SHeading2, SButton } from './shared-styled-components';
import { SHIPMENT, PAYMENT } from '../lib/constants';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0 solid #ff8a00;
  border-left-width: 1px;
  padding: .5rem 0 .5rem 1rem;
  margin-top: 2rem;
  color: gray;
  width: 16rem;

  @media (max-width: 640px) {
    width: 100%;
    padding-left: 0;
    border-left-width: 0;
    border-top-width: 1px;
  }
`

const SFlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem;
`

const SGreen = styled.p`
  color: #31da82;
  font-weight: bold;
`

function Summary({ state }) {
  const [total, setTotal] = useState(500000);

  useEffect(() => {
    setTotal(500000 + (state.dropship ? 5900 : 0) + (state.step > 1 ? SHIPMENT[state.shipment].cost : 0));
  }, [state]);

  return (
    <SContainer>
      <div>
        <SHeading2>Summary</SHeading2>
        <p>10 items purchased</p>
        { state.step > 1 &&
          <>
            <p>---------------</p>
            <p>Delivery estimation</p>
            <SGreen>{SHIPMENT[state.shipment].due} by {SHIPMENT[state.shipment].name}</SGreen>
          </>
        }
        { state.step === 3 &&
          <>
            <p>---------------</p>
            <p>Payment method</p>
            <SGreen>{PAYMENT[state.payment].name}</SGreen>
          </>
        }
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <SFlexBetween>
            <p>Cost of goods</p>
            <strong>{state.cost.toLocaleString()}</strong>
          </SFlexBetween>
          { state.dropship &&
            <SFlexBetween>
              <p>Dropshipping fee</p>
              <strong>5,900</strong>
            </SFlexBetween>
          }
          { state.step > 1 &&
            <SFlexBetween>
              <p><strong>{SHIPMENT[state.shipment].name}</strong> shipment</p>
              <strong>{SHIPMENT[state.shipment].cost.toLocaleString()}</strong>
            </SFlexBetween>
          }
        </div>

        <SFlexBetween>
          <SHeading2>Total</SHeading2>
          <SHeading2>{ total.toLocaleString() }</SHeading2>
        </SFlexBetween>

        { state.step !== 3 &&
        <SButton 
          type="submit"
          form={ state.step === 1 ? 'form-delivery' : 'form-payment' } 
        >
            { state.step === 1 
              ? 'Continue to Payment' 
              : `Pay with ${PAYMENT[state.payment].name}`}
          </SButton>
        }
      </div>
    </SContainer>
  )
}

export default Summary;
