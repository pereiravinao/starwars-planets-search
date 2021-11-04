import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function PlanetContext() {
  const { data, requestPlanets, text, filterData } = useContext(PlanetsContext);
  useEffect(() => {
    requestPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          data
            .filter(({ name }) => name.includes(text))
            .filter((planet) => {
              if (!filterData.value) return true;
              if (filterData.comparison === 'maior que') {
                return Number(planet[filterData.column]) > Number(filterData.value);
              }
              if (filterData.comparison === 'menor que') {
                return Number(planet[filterData.column]) < Number(filterData.value);
              }
              if (filterData.comparison === 'igual a') {
                return planet[filterData.column] === filterData.value;
              }
              return true; // eslint(array-callback-return)
            })
            .map((item, idx) => (
              <tr key={ idx }>
                <td>{ item.name }</td>
                <td>{ item.rotation_period }</td>
                <td>{ item.orbital_period }</td>
                <td>{ item.diameter }</td>
                <td>{ item.climate }</td>
                <td>{ item.gravity }</td>
                <td>{ item.terrain }</td>
                <td>{ Number(item.surface_water) }</td>
                <td>{ item.population }</td>
                <td>{ item.films.map((film) => film) }</td>
                <td>{ item.created }</td>
                <td>{ item.edited }</td>
                <td>{ item.url }</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}

export default PlanetContext;
