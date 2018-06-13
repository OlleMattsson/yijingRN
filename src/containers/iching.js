import React, { Component } from "react";
import {
  Container,
  Content,
  H1,
  Button,
  Icon,
  Header,
  Input,
  Text,
  Item
} from "native-base";

export default class IChing extends Component {
  static navigationOptions = {
    title: "I Ching",
    headerRight: (
      <Button transparent onPress={() => toggleSearch()}>
        <Icon name="search" />
      </Button>
    )
  };

  constructor(props) {
    super(props);
    this.state = { displaySearchBar: false };

    toggleSearch = () => {
      console.log(this.state);
      this.setState(prev => {
        return { displaySearchBar: !prev.displaySearchBar };
      });
    };
  }

  render() {
    return (
      <Container>
        {this.state.displaySearchBar ? (
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
              <Icon name="ios-people" />
            </Item>
            <Button transparent onPress={() => toggleSearch()}>
              <Icon name="search" />
            </Button>
          </Header>
        ) : null}

        <Content />
      </Container>
    );
  }
}
