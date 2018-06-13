import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Right,
  Button,
  Icon,
  Title,
  H2
} from "native-base";

export default class Main extends Component {
  static navigationOptions = {
    title: "Main"
  };
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <H2>Yi Ying</H2>
                <Button
                  onPress={() => this.props.navigation.navigate("IChing")}
                >
                  <Text>Yi Ying</Text>
                </Button>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Oracle</Text>
                <Button
                  onPress={() => this.props.navigation.navigate("Oracle")}
                >
                  <Text>Oracle</Text>
                </Button>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Abuut</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
