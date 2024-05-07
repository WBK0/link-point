import * as yup from 'yup';

export const schema = yup.object().shape({
  fullname: yup.string()
    .min(2, 'Fullname is too short!')
    .max(50, 'Fullname is too long!')
    .matches(/^[a-zA-Z\s]*$/, 'Fullname must contain only letters and spaces')
    .required('Required'),
  zipCode: yup.string()
    .min(5, 'Zip code is too short!')
    .max(6, 'Zip code is too long!')
    .required('Required'),
  city: yup.string()
    .min(2, 'City is too short!')
    .max(50, 'City is too long!')
    .matches(/^[a-zA-Z\s]*$/, 'City must contain only letters and spaces')
    .required('Required'),
  street: yup.string()
    .min(2, 'Street is too short!')
    .max(50, 'Street is too long!')
    .matches(/^[a-zA-Z0-9\s]*$/, 'Street must contain only letters, numbers and spaces')
    .required('Required'),
  phone: yup.string()
    .min(15, 'Phone is too short!')
    .max(15, 'Phone is too long!')
    .matches(/^[0-9]*$/, 'Phone must contain only numbers')
    .required('Required'),
  cardOwner: yup.string()
    .min(2, 'Card owner is too short!')
    .max(50, 'Card owner is too long!')
    .matches(/^[a-zA-Z\s]*$/, 'Card owner must contain only letters and spaces')
    .required('Required'),
  cardNumber: yup.string()
    .min(16, 'Card number is too short!')
    .max(16, 'Card number is too long!')
    .matches(/^[0-9]*$/, 'Card number must contain only numbers')
    .required('Required'),
  cardExpirationMonth: yup.string()
    .min(2, 'Card expiration month is too short!')
    .max(2, 'Card expiration month is too long!')
    .matches(/^[0-9]*$/, 'Card expiration month must contain only numbers')
    .required('Required'),
  cardExpirationYear: yup.string()
    .min(2, 'Card expiration year is too short!')
    .max(2, 'Card expiration year is too long!')
    .matches(/^[0-9]*$/, 'Card expiration year must contain only numbers')
    .required('Required'),
  cardCvc: yup.string()
    .min(3, 'Card cvc is too short!')
    .max(3, 'Card cvc is too long!')
    .required('Required')
})