import React from "react";
import { useSelector } from "react-redux";

import NoEmission from "../../components/NoEmission";
import EmissionsScreen from "./EmissionsScreen";
import navigationOptions from "./EmissionsScreen.navigationOptions";
import { emissions } from "../../ducks";

const Emissions = () => {
  const emissionsToMitigate = useSelector(
    emissions.selectors.getEmissionsToMitigate
  );
  const emissionsMitigated = useSelector(
    emissions.selectors.getEmissionsMitigated
  );

  if (emissionsToMitigate.length || emissionsMitigated.length) {
    return <EmissionsScreen />;
  }

  return <NoEmission />;
};

Emissions.navigationOptions = navigationOptions;

export default Emissions;
