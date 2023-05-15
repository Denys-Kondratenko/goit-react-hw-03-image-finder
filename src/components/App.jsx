import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    imagesName: '',
  };

  handleFormSubmit = imagesName => {
    this.setState({ imagesName });
  };

  render() {
    return (
      <>
        <Section>
          <Searchbar onSubmit={this.handleFormSubmit} />
        </Section>
        <Layout>
          <Section>
            <ImageGallery imagesName={this.state.imagesName} />
          </Section>
          <GlobalStyle />
        </Layout>
      </>
    );
  }
}
