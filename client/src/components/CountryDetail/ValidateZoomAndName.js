export function validateName(name){
    if(name==="Jordan")
      return "Jordania";
    else return name
  }
  
export function zoomValue(km, id=""){
      const exceptions4 = ["ARG", "KAZ", "SWE", "NOR", "CHL", ]
      const exceptions5 = ["NZL", "GBR"]
      const exceptions6 = ["ITA","NZL"]
      const exceptions7 = ["DNK", "ISR"]

      if (km > 12000000)
        return 2;
      else if((km < 12000000) && (km > 9500000))
        return 3;
      else if(((km < 9500000) && (km > 3500000)) || id.includes(exceptions4))
        return 4;
      else if((km < 3500000) && (km > 1250000) || id.includes(exceptions5))
        return 5;
      else if(((km < 1250000) && (km > 325000)) || id.includes(exceptions6))
        return 6;
      else if(((km < 325000) && (km > 75000))  || id.includes(exceptions7))
        return 7;
      else if((km < 75000) && (km > 15000))
        return 8;
      else if((km < 15000) && (km > 2550))
        return 9;
      else if((km < 2550) && (km > 900))
        return 10;
      else if((km < 900) && (km > 150))
        return 11;
      else if((km < 150) && (km > 25))
        return 12;
      else if((km < 25) && (km > 5))
        return 13;
      else if((km < 5))
        return 14;
    }