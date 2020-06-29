# API Trips

## Description

Challenge to show a REST API which allows to create, read and modify travel information

## Installation

```bash
# install dependencies
$ npm install
```

## Environment configuration

Copy the env.sample file to .env and fill *DATABASE_URI* with the connection information to a mongo

```
PORT=3000
DATABASE_URI=mongodb://user:pass@localhost/database
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Solution to the proposed exercises

The challenge had the following points:
	
1. Migrate JSON data to a database
	
	**Solution**
	The mongoimport tool was used as in the following script
	
```	bash
mongoimport --host <host> --ssl -u mark -p '<pass>' --authenticationDatabase admin  --db <db> --collection <collection> --drop --file <file>.json --jsonArray

```
	
2. Create a Rest API

	**Solution**
	
	The Next JS framework with TypeScript was used to create the REST API. NestJs made with Node.js and uses Express as HTTP Server.

	
3. Create the following endpoints

	**Check the number of total trips**

	**Solution**
	The endpoint showing the solution is */trips/count* by the GET method
	
	[Documentation](http://localhost:3000/docs/#/default/TripsController_countTrips)
	
		
	**Check the number of total trips by city**
	
	**Solution**
	The endpoint showing the solution is */trips/countByCity* by the GET method
	
	[Documentation](http://localhost:3000/docs/#/default/TripsController_countByCityTrips)
	
	Create a trip

	**Solution**
	The endpoint it creates is */trips* by the POST method
	
	[Documentation](http://localhost:3000/docs/#/default/TripsController_createTrip)
	
	Update a trip

	**Solution**
	The endpoint it update is */trips* by the PUT method
	
	[Documentation](http://localhost:3000/docs/#/default/TripsController_updateTrip)
	
4. Create the API documentation in Swagger

	**Solution**
	Documentation with Swagger [http://localhost:3000/docs/](http://localhost:3000/docs/)
	
5. Create a diagram of the developed application architecture

	**Solution**
	
	![Diagram](./.screenshots/api-trips.jpg)
	
## Git Flow
Function branch workflow was used

![Git-flow](./.screenshots/git-flow.svg)

## Additional recommendation
To see the solutions configure the Mongodb database and run the project in production mode on port 3000

## Stay in touch

- Author - Wilson Romero
- Twitter - [@WilsonRomeroC](https://twitter.com/WilsonRomeroC)

## License

[MIT licensed](LICENSE).

