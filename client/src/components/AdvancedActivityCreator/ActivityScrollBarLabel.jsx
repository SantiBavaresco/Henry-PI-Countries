// import React, { useState } from 'react';
import React, {  useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
// import { render } from "react-dom";
import styles from './ActivityScrollBarLabel.module.css';
// const actiOptions = ["ISL","JPN","NCL","SOM","JOR","BES","DZA","NZL","CHL","FRA","LSO","LBN","TCA","NOR","PER","SYR","NRU","FJI","HND","BEN","PLW","MAF","SJM","MNE","EST","GRD","SGP","MLI","KAZ","ESP","MCO","SYC","ARM","CHN","MYS","ALA","AND","TUR","WLF","ETH","PRY","CZE","IRN","GNB","BRN","SDN","AUT","VEN","SWZ","PSE","STP","MNP","KEN","PNG","TCD","TWN","CPV","VCT","GUY","TKM","MHL","IMN","KWT","TGO","SLE","ZAF","SHN","BVT","MWI","CYM","GBR","ITA","LKA","NFK","AIA","ATF","TUV","CYP","CXR","MUS","SGS","GAB","COD","AUS","FSM","COG","ARG","NLD","LAO","USA","ECU","TON","UNK","LVA","GIN","BIH","BFA","EGY","ZWE","COK","GLP","ABW","BEL","HMD","FRO","GTM","VGB","MNG","ALB","ARE","CRI","KNA","MOZ","PAN","AGO","HUN","PCN","LCA","MTQ","PAK","BLR","SWE","ROU","NAM","WSM","SVK","COL","SRB","JAM","HRV","DJI","FIN","VNM","MKD","PRI","ERI","BGD","LUX","REU","BDI","POL","UGA","PRT","PHL","BTN","LBY","GRL","HKG","UKR","BGR","GMB","NPL","IND","DMA","NER","MDG","UMI","ZMB","RWA","CCK","BLM","CIV","BRA","TUN","VUT","BOL","CAN","AFG","SXM","SLV","SAU","ESH","CAF","TZA","MAC","SEN","OMN","JEY","PYF","GGY","BLZ","NIU","NIC","LIE","TJK","MMR","SUR","MYT","ATG","ASM","GRC","AZE","SLB","BHR","BHS","VAT","MAR","GUM","MSR","DNK","RUS","COM","FLK","MLT","GIB","KOR","URY","TKL","MDV","GHA","MDA","ATA","MEX","KGZ","IOT","QAT","KHM","VIR","CHE","idN","BWA","IRQ","NGA","LBR","BRB","YEM","IRL","CUW","CUB","SPM","PRK","MRT","UZB","GEO","HTI","THA","GUF","BMU","DOM","ISR","SSD","GNQ","DEU","TLS","TTO","KIR","SVN","SMR","CMR","LTU"];
// import React from 'react';
// import ReactDOM from 'react-dom';

const myComponent = {
    width: '100%',
    // height: '125vh',
    overflowX: 'hidden',
    overflowY: 'scroll',
    // display: "flex" 
};


export default function ActivityScrollBarLabel (props) {
    const { AllActivities } = props;
    const [selectedActivities, setSelectedActivities] = useState([]);
    const { disabled } = props;


    useEffect(() => {
      // console.log("Acti",selectedActivities );
      Response()
    }, [selectedActivities]);

    
const handleActivityChange = (event) => {
    const activity = event.target.value;
    const isChecked = event.target.checked;

        if (isChecked) {
          setSelectedActivities([...selectedActivities, activity]);  
        } else {
          setSelectedActivities(selectedActivities.filter((acti) => acti !== activity));
        }

        // let aux = []
        // aux.push(selectedActivities)
        // props.updateArrayActivities(aux)
          //   const activity = event.target.value;
  //   const isChecked = event.target.checked;
  //   if (isChecked) {
  //     setSelectedActivities([...selectedActivities, activity]);
  //   } else {
  //     setSelectedActivities(selectedActivities.filter((a) => a !== activity));
  //   }
        // aux.push(selectedActivities)
        // props.updateArrayActivities(aux)
    };



// console.log("++++++++++++++++++++++++++++++++++++++++++++");
//   consologuero(selectedActivities)
//   console.log("++++++++++++++++++++++++++++++++++++++++++++");

  function Response(){
    let aux = [];
    aux.push(selectedActivities)
    props.updateArrayActivities(aux)
  }

  function consologuero(aux){
    console.log("ESTE ES UN CONSOLELOG: ", aux)
  }
    return (
        <div 
        // onChange={Response}
        // style={{ height: '200px' }}
        >
            <div style={myComponent} >
                <ul >
                    
                <div className={styles['scrollable-container']} >
                    <div className={styles.column}>
                        {AllActivities.slice(0, Math.ceil(AllActivities.length / 2)).map((acti, index) => (
                        <div key={acti.name}>
                            <label className={styles.label1}>
                            <input
                                type="checkbox"
                                value={acti.name}
                                checked={selectedActivities.includes(acti.name)}
                                onClick={handleActivityChange}
                                // onChange={Response}
                            />
                            {acti.name}
                            </label>
                        </div>
                        ))}
                    </div>
                    <div className={styles.column}>
                        {AllActivities.slice(Math.ceil(AllActivities.length / 2)).map((acti, index) => (
                        <div key={acti.name}>
                            <label className={styles.label1}>
                            <input
                                type="checkbox"
                                value={acti.name}
                                checked={selectedActivities.includes(acti.name)}
                                onClick={handleActivityChange}
                                // onChange={Response}
                            />
                            {acti.name}
                            </label>
                        </div>
                        ))}
                    </div>
                </div>

                </ul >
            </div >
        </div>
    );
};