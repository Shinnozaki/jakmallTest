export const SHIPMENT = {
  gosend: { name: 'GO-SEND', cost: 15000, due: 'Today' },
  jne: { name: 'JNE', cost: 9000, due: 'In 2 days' },
  personal: { name: 'Personal Courier', cost: 29000, due: 'In 1 day' },
}

export const PAYMENT = {
  ewallet: { name: 'e-Wallet' , balance: 1500000 },
  bank: { name: 'Bank Transfer' },
  virtual: { name: 'Virtual Account' },
}

export const DEFAULT_STATE = {
  step: 1,
  email: '',
  phone: '',
  addr: '',
  dropship: true,
  dropshipName: '',
  dropshipPhone: '',
  cost: 500000,
  shipment: 'gosend', // 'gosend', 'jne', 'personal'
  payment: 'ewallet', // 'ewallet', 'bank', 'virtual'
}
