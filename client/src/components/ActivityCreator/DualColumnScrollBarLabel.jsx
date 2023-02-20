// import React, { useState } from 'react';
import React, {  useState } from "react";
// import ReactDOM from 'react-dom';
// import { render } from "react-dom";
import styles from './DualColumnScrollBarLabel.module.css';
const countryOptions = ["ISL","JPN","NCL","SOM","JOR","BES","DZA","NZL","CHL","FRA","LSO","LBN","TCA","NOR","PER","SYR","NRU","FJI","HND","BEN","PLW","MAF","SJM","MNE","EST","GRD","SGP","MLI","KAZ","ESP","MCO","SYC","ARM","CHN","MYS","ALA","AND","TUR","WLF","ETH","PRY","CZE","IRN","GNB","BRN","SDN","AUT","VEN","SWZ","PSE","STP","MNP","KEN","PNG","TCD","TWN","CPV","VCT","GUY","TKM","MHL","IMN","KWT","TGO","SLE","ZAF","SHN","BVT","MWI","CYM","GBR","ITA","LKA","NFK","AIA","ATF","TUV","CYP","CXR","MUS","SGS","GAB","COD","AUS","FSM","COG","ARG","NLD","LAO","USA","ECU","TON","UNK","LVA","GIN","BIH","BFA","EGY","ZWE","COK","GLP","ABW","BEL","HMD","FRO","GTM","VGB","MNG","ALB","ARE","CRI","KNA","MOZ","PAN","AGO","HUN","PCN","LCA","MTQ","PAK","BLR","SWE","ROU","NAM","WSM","SVK","COL","SRB","JAM","HRV","DJI","FIN","VNM","MKD","PRI","ERI","BGD","LUX","REU","BDI","POL","UGA","PRT","PHL","BTN","LBY","GRL","HKG","UKR","BGR","GMB","NPL","IND","DMA","NER","MDG","UMI","ZMB","RWA","CCK","BLM","CIV","BRA","TUN","VUT","BOL","CAN","AFG","SXM","SLV","SAU","ESH","CAF","TZA","MAC","SEN","OMN","JEY","PYF","GGY","BLZ","NIU","NIC","LIE","TJK","MMR","SUR","MYT","ATG","ASM","GRC","AZE","SLB","BHR","BHS","VAT","MAR","GUM","MSR","DNK","RUS","COM","FLK","MLT","GIB","KOR","URY","TKL","MDV","GHA","MDA","ATA","MEX","KGZ","IOT","QAT","KHM","VIR","CHE","IDN","BWA","IRQ","NGA","LBR","BRB","YEM","IRL","CUW","CUB","SPM","PRK","MRT","UZB","GEO","HTI","THA","GUF","BMU","DOM","ISR","SSD","GNQ","DEU","TLS","TTO","KIR","SVN","SMR","CMR","LTU"];
// import React from 'react';
// import ReactDOM from 'react-dom';

const myComponent = {
    width: '100%',
    height: '74vh',
    overflowX: 'hidden',
    overflowY: 'scroll'
};


export default function DualColumnScrollBarLabel() {

    const [selectedCountries, setSelectedCountries] = useState([]);
    const handleCountryChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedCountries([...selectedCountries, value]);
    } else {
      setSelectedCountries(selectedCountries.filter((country) => country !== value));
    }
  };


    return (
        <div 
        // style={{ height: '200px' }}
        >
            <div style={myComponent}>
                <ul>
                    
                <div className={styles['scrollable-container']}>
                    <div className={styles.column}>
                        {countryOptions.slice(0, Math.ceil(countryOptions.length / 2)).map((country, index) => (
                        <div key={index}>
                            <label>
                            <input
                                type="checkbox"
                                value={country}
                                checked={selectedCountries.includes(country)}
                                onChange={handleCountryChange}
                            />
                            {country}
                            </label>
                        </div>
                        ))}
                    </div>
                    <div className={styles.column}>
                        {countryOptions.slice(Math.ceil(countryOptions.length / 2)).map((country, index) => (
                        <div key={index}>
                            <label>
                            <input
                                type="checkbox"
                                value={country}
                                checked={selectedCountries.includes(country)}
                                onChange={handleCountryChange}
                            />
                            {country}
                            </label>
                        </div>
                         ))}
                    </div>
                </div>

                </ul>
            </div>
        </div>
    );
};

// const root = document.querySelector('#root');
// ReactDOM.render(<DualColumnScrollBarLabel />, root );