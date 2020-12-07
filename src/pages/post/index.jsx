import React from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Form, Row } from 'antd';
import style from './style';
import Input from 'microcomponents/input';
import Typography from 'microcomponents/typography';
import Button from 'microcomponents/button';
import dayjs from 'dayjs';
import Faker from 'faker';
import services from 'services';

const today = dayjs().calendar('jalali').locale('fa');

class CreatePost extends React.PureComponent {
  state = {
    post: '',
  };

  handelChangeInput = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handelSubmit = async () => {
    const { post } = this.state;
    const model = {
      conent: post,
      avatar: Faker.image.avatar(),
      image: Faker.image.image(),
      date: today,
      user: Faker.name.findName(),
      like: [],
    };
    const data = await services.post.create(model);

    console.log('dat', data);
  };
  render() {
    const { classes } = this.props;
    const { post } = this.state;
    return (
      <div className={classes.root}>
        <Row justify="center">
          <Col xs={24} sm={24} md={8} lg={8}>
            <Form onFinish={this.handelSubmit} layout="vertical">
              <div className={classes.post}>
                <div className={classes.headerCreatePost}>
                  <Typography variant="title" level={5}>
                    ایجاد پست
                  </Typography>
                </div>
                <Form.Item>
                  <Input
                    type="textarea"
                    value={post}
                    onChange={this.handelChangeInput('post')}
                    autoSize={{ minRows: 6, maxRows: 6 }}
                  />
                </Form.Item>
                <div className={classes.footerPost}>
                  <div className={classes.uploadFile}></div>
                  <div className={classes.addTag}></div>
                </div>
              </div>
              <Button type="primary" htmlType="submit">
                ارسال
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(style(CreatePost));
