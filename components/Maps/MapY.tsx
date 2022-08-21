import { YMaps, Map, Placemark } from "react-yandex-maps";
import styles from "./MapY.module.css";


export const MapY = (): JSX.Element => {
    return (
        <YMaps>
            <div className={styles.container}>
                <Map className={styles.map} defaultState={{
                    center: [53.864501, 27.523320],
                    zoom: 17,
                    controls: ['zoomControl', 'fullscreenControl']
                }} modules={['control.ZoomControl', 'control.FullscreenControl']} >
                    <Placemark defaultGeometry={[53.864501, 27.523320]} />
                </Map>
            </div>
        </YMaps>
    );
};