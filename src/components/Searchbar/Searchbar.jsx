// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Component } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

export class Searchbar extends Component {
  state = {
    imagesName: '',
  };

  handleImagesChange = event => {
    this.setState({ imagesName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imagesName.trim() === '') {
      //   Замінити на тост
      alert('Введіть значеня');
      return;
    }
    this.props.onSubmit(this.state.imagesName);
    this.setState({ imagesName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="search"
          value={this.state.imagesName}
          onChange={this.handleImagesChange}
        />
        <button type="submit">
          <IoSearchOutline />
          Submit
        </button>
      </form>

      // <Formik
      //   initialValues={{ name: 'jared' }}
      //   onSubmit={(values, { resetForm }) => {
      //     console.log(values);
      //     resetForm();
      //   }}
      // >
      //   <Form autoComplete="off">
      //     <label htmlFor="search">
      //       <Field type="text" name="search" />
      //       <ErrorMessage name="name" component="p" />
      //     </label>
      //     <button type="submit">
      //       <IoSearchOutline />
      //       Submit
      //     </button>
      //   </Form>
      // </Formik>
    );
  }
}
