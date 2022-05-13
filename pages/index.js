import Slider from "react-slick";

export const getStaticProps= async () =>{
    const res = await fetch('https://api.jsonbin.io/b/627d812b25069545a3342da4/2');
    const data = await res.json();
    return {
        props:{ forecast:data}
    }
}

const Weather = ({forecast})=>{
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    
  };


    return (
    <div>
<div className="center">
<h1>All forecast</h1>

<Slider {...settings}>
{forecast &&
        forecast.map((item, i) => (
          <div key={i}>
         <div className="float-left"> 
           <h1> {item.city}</h1>
            <h3> {item.time}</h3>
            <h4> Humidity:{item.humidity}</h4>
            <h4> Chance of rain:{item.chance_of_rain}%</h4>
            <div className="weathercondition">{item.condition.text}</div>
           </div>
           
           <div  className="float-right">
           <div className="icon"><img src={item.condition.icon} /></div>
            </div>
            <div className="reset"></div>
          </div>
        ))
      }

</Slider>
    </div>
    </div>
    );
}
export default Weather;