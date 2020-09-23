import Planet, { IPlanet } from '../models/planet.model';

interface CreatePlanetInput {
  name: IPlanet['name'];
  climate: IPlanet['climate'];
  movie_screenings: IPlanet['movie_screenings'];
  terrain: IPlanet['terrain'];
}

async function CreatePlanet({ name, climate, movie_screenings, terrain }: CreatePlanetInput): Promise<IPlanet> {
  return await Planet.create({
    name,
    climate,
    movie_screenings,
    terrain
  })
    .then((data: IPlanet) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

async function ListPlanets() {
  try {
    return await Planet.find();
  } catch (error) {
    return error;
  }
};

async function ListPlanetId(id: string) {
  try {
    return await Planet.findById(id);
  } catch (error) {
    return error;
  }
};

async function ListPlanetName(name: string) {
  try {
    return await Planet.findOne({name: name});
  } catch (error) {
    return error;
  }
};

async function DeletePlanet(id: string) {
  try {
    return await Planet.findByIdAndRemove(id);
  } catch (error) {
    return error;
  }
};


export default {
  CreatePlanet,
  ListPlanets,
  ListPlanetId,
  ListPlanetName,
  DeletePlanet
};
