// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";
var QRCode = require('qrcode.react');

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fill,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  playstore: require("../assets/playstore.png"),
  appstore: require("../assets/appstore.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Dokumentenstrukturen
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            React Native - Exponent - GraphCMS
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary">
          <Layout>
            <Fill>
              <Image width="50%" src={images.playstore}/>
              <QRCode value="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www" size="256" />
            </Fill>
            <Fill>
              <Image width="50%" src={images.appstore}/>
              <QRCode value="https://itunes.apple.com/app/apple-store/id982107779?pt=17102800&ct=www&mt=8" size="256" />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
