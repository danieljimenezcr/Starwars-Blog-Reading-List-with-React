import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [planetInfo, setPlanetInfo] = useState({});
	const [peopleInfo, setPeopleInfo] = useState({});
	const [filmsInfo, setFilmsInfo] = useState({})
	const [vehiclesInfo, setVehiclesInfo] = useState({})
	const [starshipsInfo, setStarshipsInfo] = useState({})
	const [speciesInfo, setSpeciesInfo] = useState({})
	useEffect(() => {
		// actions.getList("planets");
		//actions.getList("people");
		// actions.getList("films");
		async function fetchDataPeople() {
			let data = await actions.getDetail("people", 1);
			setPeopleInfo(data);
			await actions.getList("people")
		}
		fetchDataPeople();

		async function fetchDataPlanets() {
			let data = await actions.getDetail("planets", 1);
			setPlanetInfo(data);
			await actions.getList("planets")
		}
		fetchDataPlanets();

		async function fetchDataFilms() {
			let data = await actions.getDetail("films", 1);
			setFilmsInfo(data);
			await actions.getList("films")
		}
		fetchDataFilms();

		async function fetchDataVehicles() {
			let data = await actions.getDetail("vehicles", 1);
			setVehiclesInfo(data);
			await actions.getList("vehicles")
		}
		fetchDataVehicles();
		
		async function fetchDataStarships() {
			let data = await actions.getDetail("starships", 1);
			setStarshipsInfo(data);
			await actions.getList("starships")
		}
		fetchDataStarships();

		async function fetchDataSpecies() {
			let data = await actions.getDetail("species", 1);
			setSpeciesInfo(data);
			await actions.getList("species")
		}
		fetchDataSpecies();

		
	}, [])
	return (
		<div className="text-center mt-5 p-5">
			<h2 className="title-home container-fluid">Characters</h2>

			<div className="people-container container-fluid">
				{store.people?.map(people => <div key={people.uid} className="card card-home"  >
					<img className="card-img-top" src={people.img} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">{people.name}</h5>
						<div className="card-ft">
							<Link to={`/people/${people.uid}`} className="btn btn-warning">Read More...</Link>
							<button type="button" className="btn btn-dark card-btn"><i className="fa-regular fa-heart"></i></button>
						</div>
					</div>

				</div>)
				}
			</div>


			<h2 className="title-home container-fluid pt-5 ">Planets</h2>
			<div className="planets-container container-fluid">
				{store.planets?.map(planets => <div key={planets.uid} className="card"  >
					<img className="card-img-top" src={planets.img} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">{planets.name}</h5>
						<div className="card-ft">
							<Link to={`/planets/${planets.uid}`} className="btn btn-warning">Read More...</Link>
							<button type="button" className="btn btn-dark card-btn"><i className="fa-regular fa-heart"></i></button>
						</div>
					</div>

				</div>)
				}
			</div>
 // Films
			<h2 className="title-home container-fluid pt-5 ">Films</h2>
			<div className="planets-container container-fluid">
				{store.films?.map(films => <div key={films.uid} className="card"  >
					<img className="card-img-top" src={films.img} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">{films.name}</h5>
						<div className="card-ft">
							<Link to={`/films/${films.uid}`} className="btn btn-warning">Read More...</Link>
							<button type="button" className="btn btn-dark card-btn"><i className="fa-regular fa-heart"></i></button>
						</div>
					</div>

				</div>)
				}
			</div>

			<h2 className="title-home container-fluid pt-5 ">Vehicles</h2>
			<div className="planets-container container-fluid">
				{store.vehicles?.map(vehicles => <div key={vehicles.uid} className="card"  >
					<img className="card-img-top" src={vehicles.img} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">{vehicles.name}</h5>
						<div className="card-ft">
							<Link to={`/vehicles/${vehicles.uid}`} className="btn btn-warning">Read More...</Link>
							<button type="button" className="btn btn-dark"><i className="fa-regular fa-heart"></i></button>
						</div>
					</div>

				</div>)
				}
			</div>

		<h2 className="title-home container-fluid pt-5 ">Starships</h2>
			<div className="planets-container container-fluid">
				{store.starships?.map(starships => <div key={starships.uid} className="card"  >
					<img className="card-img-top" src={starships.img} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">{starships.name}</h5>
						<div className="card-ft">
							<Link to={`/vehicles/${starships.uid}`} className="btn btn-warning">Read More...</Link>
							<button type="button" className="btn btn-dark"><i className="fa-regular fa-heart"></i></button>
						</div>
					</div>

				</div>)
				}
			</div>

			<h2 className="title-home container-fluid pt-5 ">Species</h2>
			<div className="planets-container container-fluid">
				{store.species?.map(species => <div key={species.uid} className="card"  >
					<img className="card-img-top" src={species.img} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">{species.name}</h5>
						<div className="card-ft">
							<Link to={`/species/${species.uid}`} className="btn btn-warning">Read More...</Link>
							<button type="button" className="btn btn-dark"><i className="fa-regular fa-heart"></i></button>
						</div>
					</div>

				</div>)
				}
			</div>

		</div >
	);
};

