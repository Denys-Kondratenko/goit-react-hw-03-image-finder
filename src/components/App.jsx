import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    imagesName: '',
  };
  handleFormSubmit = imagesName => {
    this.setState({ imagesName });
    console.log(imagesName);
  };

  render() {
    return (
      <Layout>
        <Section>
          <Searchbar onSubmit={this.handleFormSubmit} />
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
