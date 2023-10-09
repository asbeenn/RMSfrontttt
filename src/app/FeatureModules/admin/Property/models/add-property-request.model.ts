export class AddPropertyRequest{
    propertyName:string=""
    country:string=""
    streetAddress:string=""
    streetAddress2:string=""
    citySuburbTown:string=""
    stateProvienceRegion:string=""
    zipPostalCode:string="" 
    propertyType :string="" 
    rentCost:string="" 
    propertyImage: File | null = null; 
}