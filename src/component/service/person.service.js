export class PeopleService {

  getPerson(person_url) {
      return fetch(person_url)
          .then(response => response.json());
  }

}
