export interface Person {
  firstName: string;
  lastName: string;
}

export interface ChangeFirstNamePayload {
  payload: {
    newFirstName: string;
  };
}

export interface PersonSelector {
  person: Person;
}
