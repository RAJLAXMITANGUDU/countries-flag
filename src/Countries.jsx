import { useEffect, useState } from "react";

function CountryCard({flagUrl,name}) {
    return ( 
    <div
     style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        borderRadius:"10px",
        border:"1px solid gray",
        justifyContent:"center",
        padding:"10px",
        height:"250px",
        textAlign:"center",
        width:"250px",

     }}
    >
        <img src={flagUrl} alt={`Flag of ${name}`} style={{
           width:"100px",
           height:"100px",
        }}/>
        <h2>{name}</h2>
    </div>
    );
}


const Countries = () => {
    const API_BACKENDPOINT="https://xcountries-backend.azurewebsites.net/all";
    const [countries,setCountries]=useState([]);
    console.log({ countries })
    useEffect(()=>{
        fetch(API_BACKENDPOINT)
        .then((response)=>response.json())
        .then(data =>setCountries(data)).catch(error=>console.error("Error fetching data:"+error));
    },[])
    
    return (
        <div
          style={{
            display:"flex",
            flexWrap:"wrap",
            gap:"10px",
            alignItems:"center",
            justifyContent:"center",
          }} 
        >
        
           { countries.map((country) => (
            <CountryCard name={country.name} flagUrl={country.flag} key={country.abbr}/>
         ))}
        
        </div>
    );
};
export default Countries;