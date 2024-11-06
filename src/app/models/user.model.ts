export interface Person {
  firstName: string;
  lastName: string;
}

export interface ChangeFirstNamePayload {
  newFirstName: string;
}

export interface PersonSelector {
  person: Person;
}
