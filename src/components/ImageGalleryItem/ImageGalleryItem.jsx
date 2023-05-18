import { Component } from 'react';
import { Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { largeImageURL, tags, webformatURL } = this.props.item;
    const { showModal } = this.state;

    return (
      <>
        <Image
          onClick={() => this.toggleModal(largeImageURL)}
          src={webformatURL}
          alt={tags}
        />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img loading="lazy" src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
