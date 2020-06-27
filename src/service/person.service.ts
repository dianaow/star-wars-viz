export class PeopleService {

  getPerson(person_url: string) {
      return fetch(person_url)
          .then(response => response.json());
  }

}
