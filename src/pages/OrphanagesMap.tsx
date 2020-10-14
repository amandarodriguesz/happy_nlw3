import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';

// necessários para exibição correta do mapa
import { Map , TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarketImg from '../images/marcador-mapa.svg'

import '../styles/pages/orphanages-map.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarketImg} alt="Happy"/>
                    <h2>Escolha um orfanato do mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Campo Grande</strong>
                    <span>Mato Grosso do Sul</span>
                </footer>
            </aside>

            <Map
                center={[-20.4345627,-54.5851547]}
                zoom={15}
                style={{width:'100%',height:'100%'}}
            >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>    
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;