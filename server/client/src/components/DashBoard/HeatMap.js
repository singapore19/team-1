/* global google */
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

// const heatMapStyle = {
//     toggleButton: {
//         position: "absolute",
//         top: 32,
//         left: 32,
//     }
// }

class HeatMap extends Component {
  static defaultProps = {
    center: { lat: 1.3521, lng: 103.8198 },
    zoom: 11
  };

  constructor(props) {
    super(props);

    this.locations = [
      { name: "Hougang", latlng: { lat: 1.440585001, lng: 103.8009982 } },
      { name: "Hougang", latlng: { lat: 1.316432612, lng: 103.882893 } },
      { name: "Hougang", latlng: { lat: 1.369933175, lng: 103.8495535 } },
      { name: "Hougang", latlng: { lat: 1.388092704, lng: 103.9054179 } },
      { name: "Hougang", latlng: { lat: 1.380017897, lng: 103.7726667 } },
      { name: "Hougang", latlng: { lat: 1.342828338, lng: 103.8797462 } },
      { name: "Hougang", latlng: { lat: 1.281873788, lng: 103.8590733 } },
      { name: "Hougang", latlng: { lat: 1.281873788, lng: 103.8590733 } },
      { name: "Hougang", latlng: { lat: 1.341223176, lng: 103.77581 } },
      { name: "Hougang", latlng: { lat: 1.323979969, lng: 103.9299587 } },
      { name: "Hougang", latlng: { lat: 1.334742117, lng: 103.9179554 } },
      { name: "Hougang", latlng: { lat: 1.33660783, lng: 103.9322077 } },
      { name: "Hougang", latlng: { lat: 1.29886427, lng: 103.8503799 } },
      { name: "Hougang", latlng: { lat: 1.313672233, lng: 103.8629702 } },
      { name: "Hougang", latlng: { lat: 1.35130868, lng: 103.84915 } },
      { name: "Hougang", latlng: { lat: 1.350838988, lng: 103.8481398 } },
      { name: "Hougang", latlng: { lat: 1.319395706, lng: 103.861679 } },
      { name: "Hougang", latlng: { lat: 1.338604054, lng: 103.7060994 } },
      { name: "Hougang", latlng: { lat: 1.322423979, lng: 103.8161362 } },
      { name: "Hougang", latlng: { lat: 1.322110193, lng: 103.8149876 } },
      { name: "Hougang", latlng: { lat: 1.340471684, lng: 103.8467942 } },
      { name: "Hougang", latlng: { lat: 1.296861687, lng: 103.8506629 } },
      { name: "Hougang", latlng: { lat: 1.382877858, lng: 103.8931042 } },
      { name: "Hougang", latlng: { lat: 1.299550746, lng: 103.8568623 } },
      { name: "Hougang", latlng: { lat: 1.300465076, lng: 103.8557007 } },
      { name: "Hougang", latlng: { lat: 1.349034109, lng: 103.74959 } },
      { name: "Hougang", latlng: { lat: 1.333728882, lng: 103.8306903 } },
      { name: "Hougang", latlng: { lat: 1.358761857, lng: 103.7519164 } },
      { name: "Hougang", latlng: { lat: 1.377909898, lng: 103.763034 } },
      { name: "Hougang", latlng: { lat: 1.379002117, lng: 103.7615559 } },
      { name: "Hougang", latlng: { lat: 1.307183467, lng: 103.7902028 } },
      { name: "Hougang", latlng: { lat: 1.306491669, lng: 103.7906645 } },
      { name: "Hougang", latlng: { lat: 1.337674508, lng: 103.8395281 } },
      { name: "Hougang", latlng: { lat: 1.369369831, lng: 103.764714 } },
      { name: "Hougang", latlng: { lat: 1.357314545, lng: 103.9883212 } },
      { name: "Hougang", latlng: { lat: 1.396277631, lng: 103.8937792 } },
      { name: "Hougang", latlng: { lat: 1.284359578, lng: 103.8434242 } },
      { name: "Hougang", latlng: { lat: 1.284748969, lng: 103.8444484 } },
      { name: "Hougang", latlng: { lat: 1.342352821, lng: 103.7326244 } },
      { name: "Hougang", latlng: { lat: 1.38483636, lng: 103.7445797 } },
      { name: "Hougang", latlng: { lat: 1.385361693, lng: 103.744367 } },
      { name: "Hougang", latlng: { lat: 1.292936243, lng: 103.852581 } },
      { name: "Hougang", latlng: { lat: 1.292936243, lng: 103.852581 } },
      { name: "Hougang", latlng: { lat: 1.288386024, lng: 103.8465519 } },
      { name: "Hougang", latlng: { lat: 1.314954492, lng: 103.7653168 } },
      { name: "Hougang", latlng: { lat: 1.302438735, lng: 103.7983136 } },
      { name: "Hougang", latlng: { lat: 1.394493046, lng: 103.9004726 } },
      { name: "Hougang", latlng: { lat: 1.393909226, lng: 103.9125574 } },
      { name: "Hougang", latlng: { lat: 1.399281985, lng: 103.9059403 } },
      { name: "Hougang", latlng: { lat: 1.30838264, lng: 103.888648 } },
      { name: "Hougang", latlng: { lat: 1.405234836, lng: 103.9085809 } },
      { name: "Hougang", latlng: { lat: 1.298701307, lng: 103.8461119 } },
      { name: "Hougang", latlng: { lat: 1.299705459, lng: 103.8454851 } },
      { name: "Hougang", latlng: { lat: 1.298842816, lng: 103.8462358 } },
      { name: "Hougang", latlng: { lat: 1.311405293, lng: 103.7786522 } },
      { name: "Hougang", latlng: { lat: 1.27944619, lng: 103.8528356 } },
      { name: "Hougang", latlng: { lat: 1.293321608, lng: 103.8554985 } },
      { name: "Hougang", latlng: { lat: 1.319778952, lng: 103.9032339 } },
      { name: "Hougang", latlng: { lat: 1.334549778, lng: 103.9615134 } },
      { name: "Hougang", latlng: { lat: 1.335382137, lng: 103.9623407 } },
      { name: "Hougang", latlng: { lat: 1.384520796, lng: 103.7708268 } },
      { name: "Hougang", latlng: { lat: 1.397170196, lng: 103.8892882 } },
      { name: "Hougang", latlng: { lat: 1.31235984, lng: 103.8541717 } },
      { name: "Hougang", latlng: { lat: 1.317510612, lng: 103.8075929 } },
      { name: "Hougang", latlng: { lat: 1.391885888, lng: 103.8762959 } },
      { name: "Hougang", latlng: { lat: 1.292478928, lng: 103.8443255 } },
      { name: "Hougang", latlng: { lat: 1.321505838, lng: 103.8718904 } },
      { name: "Hougang", latlng: { lat: 1.319505215, lng: 103.6605988 } },
      { name: "Hougang", latlng: { lat: 1.26547264, lng: 103.821446 } },
      { name: "Hougang", latlng: { lat: 1.26547264, lng: 103.821446 } },
      { name: "Hougang", latlng: { lat: 1.282542157, lng: 103.7818234 } },
      { name: "Hougang", latlng: { lat: 1.362344869, lng: 103.7674369 } },
      { name: "Hougang", latlng: { lat: 1.31183479, lng: 103.7962016 } },
      { name: "Hougang", latlng: { lat: 1.371292292, lng: 103.8923636 } },
      { name: "Hougang", latlng: { lat: 1.305403642, lng: 103.8554713 } },
      { name: "Hougang", latlng: { lat: 1.386703025, lng: 103.7645235 } },
      { name: "Hougang", latlng: { lat: 1.327717173, lng: 103.6784167 } },
      { name: "Hougang", latlng: { lat: 1.33315262, lng: 103.7423112 } },
      { name: "Hougang", latlng: { lat: 1.33315262, lng: 103.7423112 } },
      { name: "Hougang", latlng: { lat: 1.399584853, lng: 103.9164619 } },
      { name: "Hougang", latlng: { lat: 1.334967302, lng: 103.9084393 } },
      { name: "Hougang", latlng: { lat: 1.31148891, lng: 103.8713766 } },
      { name: "Hougang", latlng: { lat: 1.383978902, lng: 103.9021539 } },
      { name: "Hougang", latlng: { lat: 1.378602766, lng: 103.7490799 } },
      { name: "Hougang", latlng: { lat: 1.321038249, lng: 103.9129282 } },
      { name: "Hougang", latlng: { lat: 1.293462633, lng: 103.7846438 } },
      { name: "Hougang", latlng: { lat: 1.41738337, lng: 103.83298 } },
      { name: "Hougang", latlng: { lat: 1.335665121, lng: 103.7838201 } },
      { name: "Hougang", latlng: { lat: 1.360179171, lng: 103.8850503 } },
      { name: "Hougang", latlng: { lat: 1.425177699, lng: 103.7621874 } },
      { name: "Hougang", latlng: { lat: 1.398212828, lng: 103.881242 } },
      { name: "Hougang", latlng: { lat: 1.272332732, lng: 103.8029471 } },
      { name: "Hougang", latlng: { lat: 1.344259249, lng: 103.7209802 } },
      { name: "Hougang", latlng: { lat: 1.30735702, lng: 103.8628215 } },
      { name: "Hougang", latlng: { lat: 1.392079839, lng: 103.8800158 } },
      { name: "Hougang", latlng: { lat: 1.303916484, lng: 103.8524167 } },
      { name: "Hougang", latlng: { lat: 1.307198223, lng: 103.8485807 } },
      { name: "Hougang", latlng: { lat: 1.351612171, lng: 103.8641434 } },
      { name: "Hougang", latlng: { lat: 1.326345372, lng: 103.8902718 } },
      { name: "Hougang", latlng: { lat: 1.326076883, lng: 103.8893356 } },
      { name: "Hougang", latlng: { lat: 1.276427355, lng: 103.8545925 } },
      { name: "Hougang", latlng: { lat: 1.276150637, lng: 103.8550886 } },
      { name: "Hougang", latlng: { lat: 1.271336711, lng: 103.8628525 } },
      { name: "Hougang", latlng: { lat: 1.432514421, lng: 103.77409 } },
      { name: "Hougang", latlng: { lat: 1.348707263, lng: 103.8394214 } },
      { name: "Hougang", latlng: { lat: 1.326876715, lng: 103.8832341 } },
      { name: "Hougang", latlng: { lat: 1.396912053, lng: 103.9089277 } },
      { name: "Hougang", latlng: { lat: 1.306201905, lng: 103.8825153 } },
      { name: "Hougang", latlng: { lat: 1.313607102, lng: 103.8378098 } },
      { name: "Hougang", latlng: { lat: 1.3123201, lng: 103.8379841 } },
      { name: "Hougang", latlng: { lat: 1.411870458, lng: 103.9002935 } },
      { name: "Hougang", latlng: { lat: 1.299766835, lng: 103.8636292 } },
      { name: "Hougang", latlng: { lat: 1.320440791, lng: 103.8438228 } },
      { name: "Hougang", latlng: { lat: 1.402286677, lng: 103.9127036 } },
      { name: "Hougang", latlng: { lat: 1.299759879, lng: 103.7874693 } },
      { name: "Hougang", latlng: { lat: 1.303981012, lng: 103.8322417 } },
      { name: "Hougang", latlng: { lat: 1.28140498, lng: 103.839125 } },
      { name: "Hougang", latlng: { lat: 1.279764543, lng: 103.8395732 } },
      { name: "Hougang", latlng: { lat: 1.276213523, lng: 103.7913607 } },
      { name: "Hougang", latlng: { lat: 1.372983774, lng: 103.9492348 } },
      { name: "Hougang", latlng: { lat: 1.318112082, lng: 103.8930446 } },
      { name: "Hougang", latlng: { lat: 1.317430268, lng: 103.8921633 } },
      { name: "Hougang", latlng: { lat: 1.376142883, lng: 103.7712881 } },
      { name: "Hougang", latlng: { lat: 1.377750334, lng: 103.7666882 } },
      { name: "Hougang", latlng: { lat: 1.378618844, lng: 103.7580559 } },
      { name: "Hougang", latlng: { lat: 1.337586882, lng: 103.6973586 } },
      { name: "Hougang", latlng: { lat: 1.331379525, lng: 103.869046 } },
      { name: "Hougang", latlng: { lat: 1.292891552, lng: 103.860846 } },
      { name: "Hougang", latlng: { lat: 1.293218051, lng: 103.8609921 } },
      { name: "Hougang", latlng: { lat: 1.405194701, lng: 103.9023911 } },
      { name: "Hougang", latlng: { lat: 1.404546728, lng: 103.902052 } },
      { name: "Hougang", latlng: { lat: 1.41684852, lng: 103.9066284 } },
      { name: "Hougang", latlng: { lat: 1.294860933, lng: 103.8058913 } },
      { name: "Hougang", latlng: { lat: 1.284125611, lng: 103.8514572 } },
      { name: "Hougang", latlng: { lat: 1.284125611, lng: 103.8514572 } },
      { name: "Hougang", latlng: { lat: 1.384233561, lng: 103.897176 } },
      { name: "Hougang", latlng: { lat: 1.289562726, lng: 103.8168209 } },
      { name: "Hougang", latlng: { lat: 1.386723922, lng: 103.8905227 } },
      { name: "Hougang", latlng: { lat: 1.394524496, lng: 103.9161415 } },
      { name: "Hougang", latlng: { lat: 1.306800025, lng: 103.8496427 } },
      { name: "Hougang", latlng: { lat: 1.391468497, lng: 103.9059522 } },
      { name: "Hougang", latlng: { lat: 1.409612685, lng: 103.9048099 } },
      { name: "Hougang", latlng: { lat: 1.415901719, lng: 103.9021353 } },
      { name: "Hougang", latlng: { lat: 1.387772131, lng: 103.7696171 } },
      { name: "Hougang", latlng: { lat: 1.449050821, lng: 103.8200504 } },
      { name: "Hougang", latlng: { lat: 1.391609364, lng: 103.8954243 } },
      { name: "Hougang", latlng: { lat: 1.391694626, lng: 103.8954664 } },
      { name: "Hougang", latlng: { lat: 1.382692296, lng: 103.7623879 } },
      { name: "Hougang", latlng: { lat: 1.350595256, lng: 103.8723572 } },
      { name: "Hougang", latlng: { lat: 1.349707875, lng: 103.8735637 } },
      { name: "Hougang", latlng: { lat: 1.343202895, lng: 103.9533387 } },
      { name: "Hougang", latlng: { lat: 1.330786387, lng: 103.7972561 } },
      { name: "Hougang", latlng: { lat: 1.300260055, lng: 103.8390737 } },
      { name: "Hougang", latlng: { lat: 1.405088585, lng: 103.8971904 } },
      { name: "Hougang", latlng: { lat: 1.380298287, lng: 103.7453173 } },
      { name: "Hougang", latlng: { lat: 1.30284063, lng: 103.8753395 } },
      { name: "Hougang", latlng: { lat: 1.320065557, lng: 103.8260263 } },
      { name: "Hougang", latlng: { lat: 1.408452426, lng: 103.8985387 } },
      { name: "Hougang", latlng: { lat: 1.335433322, lng: 103.88818 } },
      { name: "Hougang", latlng: { lat: 1.356191483, lng: 103.9546005 } },
      { name: "Hougang", latlng: { lat: 1.353301356, lng: 103.9451175 } },
      { name: "Hougang", latlng: { lat: 1.355077429, lng: 103.9430298 } },
      { name: "Hougang", latlng: { lat: 1.345515305, lng: 103.938408 } },
      { name: "Hougang", latlng: { lat: 1.325883209, lng: 103.8073292 } },
      { name: "Hougang", latlng: { lat: 1.327187135, lng: 103.9463161 } },
      { name: "Hougang", latlng: { lat: 1.276521247, lng: 103.8458611 } },
      { name: "Hougang", latlng: { lat: 1.412770894, lng: 103.9065554 } },
      { name: "Hougang", latlng: { lat: 1.376684679, lng: 103.7537352 } },
      { name: "Hougang", latlng: { lat: 1.282289536, lng: 103.8482991 } },
      { name: "Hougang", latlng: { lat: 1.270753211, lng: 103.8097544 } },
      { name: "Hougang", latlng: { lat: 1.380321008, lng: 103.760161 } },
      { name: "Hougang", latlng: { lat: 1.397318155, lng: 103.8756226 } },
      { name: "Hougang", latlng: { lat: 1.286193393, lng: 103.827021 } },
      { name: "Hougang", latlng: { lat: 1.332628987, lng: 103.8474979 } },
      { name: "Hougang", latlng: { lat: 1.389347953, lng: 103.8858287 } },
      { name: "Hougang", latlng: { lat: 1.321026553, lng: 103.6491245 } },
      { name: "Hougang", latlng: { lat: 1.340463766, lng: 103.6369324 } },
      { name: "Hougang", latlng: { lat: 1.329989089, lng: 103.6396662 } },
      { name: "Hougang", latlng: { lat: 1.329956826, lng: 103.8992348 } },
      { name: "Hougang", latlng: { lat: 1.341737484, lng: 103.9614367 } },
      { name: "Hougang", latlng: { lat: 1.436875128, lng: 103.7864999 } },
      { name: "Hougang", latlng: { lat: 1.436066981, lng: 103.7879451 } },
      { name: "Hougang", latlng: { lat: 1.427259979, lng: 103.7938631 } },
      { name: "Hougang", latlng: { lat: 1.339190046, lng: 103.8708081 } },
      { name: "Hougang", latlng: { lat: 1.397535018, lng: 103.7474307 } },
      { name: "Hougang", latlng: { lat: 1.381756046, lng: 103.8449439 } },
      { name: "Hougang", latlng: { lat: 1.429443081, lng: 103.8350045 } }
    ];

    this.state = {
      heatmapVisible: true,
      heatmapPoints: this.locations.map(i => i.latlng)
    };
  }

  onMapClick({ x, y, lat, lng, event }) {
    if (!this.state.heatmapVisible) {
      return;
    }

    this.setState({
      heatmapPoints: [...this.state.heatmapPoints, { lat, lng }]
    });
    if (this._googleMap !== undefined) {
      const point = new google.maps.LatLng(lat, lng);
      this._googleMap.heatmap.data.push(point);
    }
  }

  toggleHeatMap() {
    this.setState(
      {
        heatmapVisible: !this.state.heatmapVisible
      },
      () => {
        if (this._googleMap !== undefined) {
          this._googleMap.heatmap.setMap(
            this.state.heatmapVisible ? this._googleMap.map_ : null
          );
        }
      }
    );
  }

  render() {
    const apiKey = { key: "AIzaSyA-lPDYAt_2TuZtnPM9krwF1J6myH6sz_U" };
    const heatMapData = {
      positions: this.state.heatmapPoints,
      options: {
        radius: 20,
        opacity: 0.6
      }
    };

    console.log(this.state);

    return (
      <div style={{ height: "80vh", width: "100%", borderBottom: 30 }}>
        <GoogleMapReact
          ref={el => (this._googleMap = el)}
          bootstrapURLKeys={apiKey}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
          heatmap={heatMapData}
          onClick={this.onMapClick.bind(this)}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default HeatMap;
