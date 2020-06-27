export class SpeciesService {

  getSpecies(species_url: string) {
      return fetch(species_url)
          .then(response => response.json());
  }

  getSpeciesPage(page: number) {
      return fetch(`https://swapi.dev/api/species/?page=${page}`)
          .then(response => response.json());
  }

}

