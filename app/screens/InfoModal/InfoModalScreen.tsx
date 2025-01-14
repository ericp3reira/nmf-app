import React from "react";
import { ScrollView } from "react-native";
import HTML from "react-native-render-html";

import styles from "./InfoModalScreen.styles";
import navigationOptions from "./InfoModal.navigationOptions";
import methodology from "../../../assets/methodology/methodology.json";
import { ui } from "../../utils";

const InfoModalScreen = ({ route }) => {
  const emissionModelType = route?.params?.emissionModelType;
  let html: string;
  if (emissionModelType) {
    // TODO: load corresponding html
    html = `<h2> ${emissionModelType} placeholder </h2>`;
  } else {
    html = methodology[0].body;
  }

  return (
    <ScrollView style={styles.container}>
      <HTML
        html={html}
        onLinkPress={ui.onHTMLBodyLinkPress}
        baseFontStyle={{ fontSize: 18 }}
      />
    </ScrollView>
  );
};

InfoModalScreen.navigationOptions = navigationOptions;

export default InfoModalScreen;
