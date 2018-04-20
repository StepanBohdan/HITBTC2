export interface Currency {
  "id": string,
  "fullName": string,
  "crypto": boolean,
  "payinEnabled": boolean,
  "payinPaymentId": boolean,
  "payinConfirmations": number,
  "payoutEnabled": boolean,
  "payoutIsPaymentId": boolean,
  "transferEnabled": boolean,
  "delisted": boolean,
  "payoutFee": string
}
