import { TRoutesInput } from '../types/routes';
import { Request, Response } from 'express';
import PlanetController from '../controllers/planets.controller';

export default ({ app }: TRoutesInput) => {
  app.post('/api/planets', async (request: Request, response: Response) => {
    const planet = await PlanetController.CreatePlanet({
      name: request.body.name,
      climate: request.body.climate,
      terrain: request.body.terrain,
      movie_screenings: request.body.movie_screenings
    });

    return response.send(planet);
  });

  app.get('/api/planets', async ( request: Request, response: Response) => {
    const planet = await PlanetController.ListPlanets();
    return response.send(planet);
  });

  app.get('/api/planets/:id', async ( request: Request, response: Response) => {
    const planet = await PlanetController.ListPlanetId(request.params.id);
    return response.send(planet);
  });

  app.delete('/api/planets/:id', async ( request: Request, response: Response) => {
    const planet = await PlanetController.DeletePlanet(request.params.id);
    return response.status(200).send('1');
  });
};
