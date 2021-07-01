import { Style, Main } from './styles';
import { Iframe } from '../Iframe';
import ReactMapGL from 'react-map-gl';
import { useState } from 'react';
import { Title } from '../Title';
import { Text } from '../Text';

export function Card({children, ...props}) {
  // console.log(mapboxgl)

  // mapboxgl.accessToken = 'pk.eyJ1IjoibWFyc2M5OCIsImEiOiJja2dib2dxdHIwajNzMnNvamwxbDZnaWZ2In0.sU_iIIaKIVaCTRxhHlurpQ';
  // const map = new mapboxgl.Map({
  //   container: 'map', // container ID
  //   style: 'mapbox://styles/mapbox/streets-v11', // style URL
  //   center: [-74.5, 40], // starting position [lng, lat]
  //   zoom: 9 // starting zoom
  // });

  // let [viewport, setViewport] = useState({
  //   latitude: 37.7577,
  //   longitude: -122.4376,
  //   zoom: 8,
  //   width: '100%',
  //   height: '100%',
  // })

  return(
    <>
    {
      !props.hospital ?
      
      <Style {...props}>
          
        {
          props?.lines 
          
          && 
          
          <div className="type">
            <div className="classification"/>
          </div>
        }
        <div className="content">
          {children}
        </div>

        {
          props?.maps

          &&

          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            width="600"
            height="450"
            frameBorder="0"
            style={{border:0}}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="maps"
          />

          // <ReactMapGL
          //   mapboxApiAccessToken={"pk.eyJ1IjoibWFyc2M5OCIsImEiOiJja2dib2dxdHIwajNzMnNvamwxbDZnaWZ2In0.sU_iIIaKIVaCTRxhHlurpQ"}
          //   {...viewport}
          //   onViewportChange={(newView) => setViewport(newView)}
          // />
          
        }
      </Style>

      :

      <Main  {...props}>
        <div className="main">
          <Text textBold>Hospital {props.value.name}</Text>
          <div className="content">
            <div>
              <div className="circle"/>
              <Text>Está a 2km de você</Text>
            </div>
            <div>
              <div className="circle"/>
              <Text>10 pessoas na frente</Text>
            </div>
            <div>
              <div className="circle"/>
              <Text>Tempo médio de espera: 4h10min</Text>
            </div>
          </div>
          <Text textBold>Liberado para ingresso imediato</Text>
        </div>
        <div className="type">
          <div className="classification"/>
        </div>
      </Main>
    }
    </>
  )
}
