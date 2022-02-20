const Display = ({name,setName,search,country,weather,temp,wind,feels_like,humidity,pressure}) => {
    return ( 
        <section>
            <div className="search-box">
            <input 
                className="search-bar"
                placeholder="Search country"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                onKeyPress={search}
            />
        </div>
        <div className="box">
            <div className="location-box">
                <div className="location">
                    <h1>
                        {country}
                    </h1>  
                </div>
                <div className="date">
                    <h2>Today is: Sunday</h2>
                </div>
            </div> 
            <div className="weather-box">
                <div className="weather">
                    <p>{Math.round(temp-273)}</p>               
            </div>
            </div>  
            <div className="information">
                <hr />
                <div className="text">
                    <p>
                        {weather}
                    </p>
                </div>
                <hr />
               <div className="temp">
                    <p>Pressure: {pressure}  </p>
                    <p>Feels like: {feels_like} </p>
               </div>
               <hr />
               <div className="temp">
                    <p>Wind: {wind} </p>
                    <p>Humidity: {humidity}</p>
               </div>
            </div> 
        </div>
        </section>
     );
}
 
export default Display;