export interface User {
  userName?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email: string;
  gender: string;
  dob: string;
  country: string;
  companyName: string;
  address: string;
  password?: string;
  confirmPassword: string;
  isTCAccepted: boolean;
}
