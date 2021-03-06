import {PeopleService} from '../../service/person.service';
import {SpeciesService} from '../../service/species.service';
import {Species} from '../../model/species';

export const getData = async (id: string) => {

  const speciesService = new SpeciesService();
  const personService = new PeopleService();

  let res = await speciesService.getSpecies(id)

  const promises =  res['people'].map(async (d: string) =>{
    let person = await personService.getPerson(d)
    return {
      name: person.name,
      gender: person.gender,
      mass: person.mass === 'unknown' ? 0  : +person.mass,
      height: +person.height
    }
  })

  const people = await Promise.all(promises)

  return people

}

export const getSpeciesList = async () => {

  const speciesService = new SpeciesService();

  let pages = []
  for (let step = 1; step <= 4; step++) {
    pages.push(step)
  }

  const promises =  pages.map(async (d) =>{

    try {
      let res = await speciesService.getSpeciesPage(d)
      return res['results'].map((el: Species) => Object.assign({}, {name: el.name, url: el.url}))

    } catch(err){
      console.log(err)
    }

  })

  const species = await Promise.all(promises)

  return species.flat()

}