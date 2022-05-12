export const getStaticProps= async () =>{
    const res = await fetch('https://api.jsonbin.io/b/627d812b25069545a3342da4/1');
    const data = await res.json();
    return {
        props:{ forecast:data}
    }
}

const Weather = ({forecast})=>{
    return (
    <div>
<h1>All forecast</h1>
 
{forecast &&
        forecast.map((item, i) => (
          <div key={i}>
          <div> {item.city}</div>
           <div> {item.time}</div>
           <div> Humidity:{item.humidity}</div>
           <div> Chance of rain:{item.chance_of_rain}%</div>
           
           <div>{item.condition.text}</div>
            <img src={item.condition.icon} />
          </div>
        ))
      }

 
    </div>
    );
}
export default Weather;