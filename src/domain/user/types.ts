export type NameUserType = {
  firstName: string;
  lastName: string;
  middleName?: string;
};

export type EntityUserType = {} & NameUserType;
