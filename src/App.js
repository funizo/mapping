import './App.css';
import Map from './map.js';
import React , {useEffect, useState} from "react";
const {kakao} = window;



function App() {

  const [map,setMap] = useState(null);
  const [level ,setLevel] = useState(3);

  useEffect(()=> {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
	    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	    level: 3 //지도의 레벨(확대, 축소 정도)
    };
    const mapInstance = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    setMap(mapInstance);
    
    },[level])

    var marker = new kakao.maps.Marker({
        map: map, 
        position: new kakao.maps.LatLng(33.450701, 126.570667)
    });

    return(
        <div id="map" style={{width:"1000px",height:"1000px"}}>
            
        </div>

    )
    
}

export default App;
