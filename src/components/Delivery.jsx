import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';

import BackButton from './BackButton';
import { SHeading1, SStepContainer, SInput } from './shared-styled-components';

const SForm = styled.form`
  display: flex;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
`

const SFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: .25rem;

  .text-danger {
    color: red;
  }
`

const STextArea = styled.textarea`
  min-height: 8rem;
  resize: none;
  border: 2px solid grey;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

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

function Delivery({ state, handleStep, setState }) {
  const { 
    register,
    handleSubmit, 
    formState: { errors },
    clearErrors 
  } = useForm({ mode: 'onChange' });

  const registerOptions = {
    email: {
      required: 'Please enter an email address',
      pattern: {
        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: 'Please enter a valid email address'
      },
      onChange: (e) => {
        setState({...state, email: e.target.value})
      }
    },
    phone: {
      required: 'Please enter your phone number',
      minLength: 6, 
      maxLength: 20, 
      pattern: {
        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        message: 'Please enter a valid phone number'
      },
      onChange: (e) => {
        setState({...state, phone: e.target.value})
      }
    },
    addr: {
      required: 'Please enter a delivery address',
      maxLength: 120, 
      onChange: (e) => {
        setState({...state, addr: e.target.value})
      }
    },
    dropshipName: {
      disabled: !state.dropship,
      required: {
        value: state.dropship,
        message: 'Please enter your dropshipper name',
      },
      onChange: (e) => {
        setState({...state, dropshipName: e.target.value})
      }
    },
    dropshipPhone: {
      disabled: !state.dropship,
      required: {
        value: state.dropship,
        message: 'Please enter the dropshipper\'s phone number'
      },
      minLength: 6, 
      maxLength: 20, 
      pattern: {
        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        message: 'Please enter a valid phone number'
      },
      onChange: (e) => {
        setState({...state, dropshipPhone: e.target.value})
      }
    },
  }

  const onSubmit = (data) => {
    handleStep(state.step + 1);
  }

  const handleCheck = () => {
    setState({...state, dropship: !state.dropship, dropshipName: '', dropshipPhone: ''});
    clearErrors(['dropshipName', 'dropshipPhone']);
  }

  return (
    <SStepContainer>
      <BackButton text="Back to Cart" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SHeading1>Delivery Details</SHeading1>
        <div>
          <input id="dropship" type="checkbox" 
            checked={state.dropship} 
            onChange={handleCheck} 
          />
          <label htmlFor="dropship">Send as dropshipper</label>
        </div>
      </div>
      <SForm id="form-delivery" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <SFormField>
            <label htmlFor="email">Email</label>
            <SInput id="email" placeholder="Email" 
              value={state.email} 
              error={errors?.email} 
              empty={state.email.length === 0}
              {...register('email', registerOptions.email)} 
            />
            <small className="text-danger">
              {errors?.email && errors.email.message}
            </small>
          </SFormField>

          <SFormField>
            <label htmlFor="phone">Phone</label>
            <SInput id="phone" placeholder="Phone number" 
              value={state.phone} 
              error={errors?.phone} 
              empty={state.phone.length === 0}
              {...register('phone', registerOptions.phone)}
            />
            <small className="text-danger">
              {errors?.phone && errors.phone.message}
            </small>
          </SFormField>

          <SFormField>
            <label htmlFor="addr">Delivery Address</label>
            <STextArea id="addr" 
              value={state.addr}
              error={errors?.addr} 
              empty={state.addr.length === 0}
              {...register('addr', registerOptions.addr)} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <small className="text-danger">
                {errors?.addr && errors.addr.message}
              </small>
              <small>{state.addr.length}/120</small>
            </div>
          </SFormField>
        </div>
        <div>
          <SFormField>
            <label htmlFor="dropshipName">Dropshipper Name</label>
            <SInput id="dropshipName" placeholder="Dropshipper name" 
              value={state.dropshipName} 
              error={errors?.dropshipName} 
              empty={state.dropshipName.length === 0}
              {...register('dropshipName', registerOptions.dropshipName)}
            />
            <small className="text-danger">
              {errors?.dropshipName && errors.dropshipName.message}
            </small>
          </SFormField>

          <SFormField>
            <label htmlFor="dropshipPhone">Dropshipper Phone Number</label>
            <SInput placeholder="Dropshipper phone number" 
              value={state.dropshipPhone} 
              error={errors?.dropshipPhone} 
              empty={state.dropshipPhone.length === 0}
              {...register('dropshipPhone', registerOptions.dropshipPhone)}
            />
            <small className="text-danger">
              {errors?.dropshipPhone && errors.dropshipPhone.message}
            </small>
          </SFormField>
        </div>
      </SForm>
    </SStepContainer>
  )
}

export default Delivery;
