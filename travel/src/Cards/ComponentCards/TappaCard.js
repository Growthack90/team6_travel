import React, { useState } from "react";
import "../../assets/css/cardTappa.css";
import Timeline from "../Timeline";


const  TappaCard =props => {
    const [data,setData]=useState(props.value)
        return (
            <div className="card">
                    <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                    
                        <div className="card-header" role="tab" id="headingOne1">
                            <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                            aria-controls="collapseOne1">
                                    {console.log('siracusa tappa 1 ->', data.siracusaTappa)}
                                <h3 className="mb-0">
                                {data.siracusaTappa} {data.dataTappa} <i className="fas fa-angle-down rotate-icon" style={{height:50, width:50}}/>
                                </h3>
                            </a>
                        </div>
                        <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                            data-parent="#accordionEx">
                            <div className="card-body">
                                <div className="container-fluid p-0">
                                    <div className="row">
                                        <div className="col-1 d-none d-xl-block">
                                            timeline
                                            {/* <Timeline /> */}
                                        </div>
                                        <div className="col-11 col-xl-11 p-0">
                                                <div>
                                                    {console.log('dati giorno 1', data.dataInizio)}
                                                    <h2>{data.titolo1} <span style={{fontSize:'1.2rem', color:'grey'}}>{data.data1}</span></h2>
                                                    <div className="containerImg">
                                                        <img id="imgDay1" src={data.img1} />
                                                    </div>
                                                    <p>{data.descrizioneImg1}</p>
                                                </div>

                                           {/* border cliccabile che dovrebbe uscire una modal */}
                                            <div className="row mt-3" style={{border:'1px solid'}}>
                                                <div className="col-1 m-4">
                                                    QUADRATO ARANCIO
                                                </div>
                                                <div className="col-4 m-4">
                                                    <div className="row">
                                                        AUTO CAT. B
                                                    </div>
                                                    <div className="row">
                                                        LUOGO DI RITIRO (BOTTONE)
                                                    </div>
                                                    <div className="row">
                                                        LUOGO DI RILASCIO (BOTTONE)
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="row mt-3">
                                                <div className="col-6">
                                                    IMG
                                                </div>
                                                <div className="col-6">
                                                <p style={{border:'1px solid'}}>
                                                    Villa Igiea<br/>
                                                    Dispose de de 122 chambres réparties sur 3 étages. Restaurants, bar. Salles de réunions. Wi-Fi (gratuit). Parking (gratuit).<br/>
                                                    <a href="">Clicca qui per maggiori dettagli</a>
                                                </p>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-1">
                                                    ICONA V
                                                </div>
                                                <div className="col-4">
                                                <p>
                                                    petit déjeuner<br/>
                                                    prise en charge de la voiture de location
                                                </p>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <h2>{data.titolo2} <span style={{fontSize:'1.2rem', color:'grey'}}>{data.data2}</span></h2>
                                                <div className="containerImg">
                                                    <img id="imgDay2" src={data.img2} />
                                                </div>
                                                <p>{data.descrizioneImg2}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <div id="collapseDiv1" className="collapse-div" role="tablist">
                    <div className="collapse-header" id="heading1">
                        <button data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                            Collapsible Group Item #1
                        </button>
                    </div>
                    <div id="collapse1" className="collapse show" role="tabpanel" aria-labelledby="heading1">
                        <div className="collapse-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
                        </div>
                    </div>
                </div> */}
            </div>
        )
    
}

export default TappaCard
