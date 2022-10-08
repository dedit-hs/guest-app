export interface GuestModel {
  id: string;
  name: string;
  phone: string;
  address: string;
  gender: GenderStatus;
  status: GuestStatus;
  purpose: string;
}

export enum GenderStatus {
  MAN = 'MAN',
  WOMAN = 'WOMAN',
}

export enum GuestStatus {
  EMPLOYEE = 'EMPLOYEE',
  NON_EMPLOYEE = 'NON_EMPLOYEE',
}
