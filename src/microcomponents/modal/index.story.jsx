import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './';
import Button from 'microcomponents/button';

class DialogBox extends React.Component {
  state = {
    visible: false
  };

  handleClickOpen = () => {
    this.setState({ visible: true });
  };

  handleClose = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <>
        <Button onClick={this.handleClickOpen()}>تست اسلاید</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleClose()}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </Modal>
      </>
    );
  }
}

storiesOf('Dialog', module).add('default', () => <DialogBox />);
