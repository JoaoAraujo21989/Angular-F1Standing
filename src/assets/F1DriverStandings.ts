export interface DriverStandig {
	Constructors: Constructors,
	Driver: Driver,
	points: string,
	position: string,
	wins: string
}

export interface Constructors {
	constructorId: string,
	name: string,
	nationality: string,
	url: string
}

export interface Driver {
	code: string,
	dateOfBirth: string,
	driverId: string,
	familyName: string,
	givenName: string,
	nationality: string,
	permanentNumber: number,
	url: string
}