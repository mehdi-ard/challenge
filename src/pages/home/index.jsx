import React from 'react';
import { Col, Menu, Row } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Faker from 'faker';
import dayjs from 'dayjs';
import CardPost from './cardPost';
import style from './style';
import services from 'services';
import Comment from './comment';
import { posts } from 'state';

const today = dayjs().calendar('jalali').locale('fa');

class Home extends React.Component {
  state = {
    data: '',
    showComment: false,
    dataComment: '',
    addComment: '',
    postId: '',
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const { isPost } = this.props;
    const data = await services.post.list();
    isPost(data);
    this.setState({
      data,
    });
  };

  getComment = async (id) => {
    const comment = await services.post.getComment(id);
    this.setState({
      showComment: true,
      dataComment: comment,
      postId: id,
    });
  };

  handelChangeInput = (name, event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handelSumbit = async () => {
    const { addComment, postId } = this.state;
    const id = postId;
    const model = {
      user: Faker.name.firstName() + ' ' + Faker.name.lastName(),
      body: addComment,
      avatar: Faker.image.people(),
      date: today,
    };
    await services.post.addComment({ id, ...model });
    this.getComment(id);
    this.setState({
      addComment: '',
      postId: '',
    });
  };
  handleMenuClick = async (e, data) => {
    console.log(e.target.id, data);
    let like = data.like.find((item) => item.type === e.target.id);
    const id = data.id;
    if (like !== undefined) {
      like = [{ type: e.target.id, count: like.count + 1 }];
    } else {
      data.like.push({
        type: e.target.id,
        count: 1,
      });
      like = data.like;
    }
    await services.post.likePost({ id, like });
    this.loadData();
  };

  render() {
    const { classes } = this.props;
    const { data, showComment, dataComment, addComment } = this.state;
    const likeMenu = (id) => (
      <ul className={classes.listLike}>
        <li
          onClick={(e) => this.handleMenuClick(e, id)}
          title="heart"
          id="heart"
        >
          <span role="img" aria-label="heart">
            🧡
          </span>
        </li>
        <li onClick={(e) => this.handleMenuClick(e, id)} title="like" id="like">
          <span role="img" aria-label="like">
            👍
          </span>
        </li>
        <li
          onClick={(e) => this.handleMenuClick(e, id)}
          title="funny"
          id="funny"
        >
          <span role="img" aria-label="funny">
            🤣
          </span>
        </li>
        <li onClick={(e) => this.handleMenuClick(e, id)} title="what" id="what">
          <span role="img" aria-label="what">
            🤔
          </span>
        </li>
        <li
          onClick={(e) => this.handleMenuClick(e, id)}
          title="angry"
          id="angry"
        >
          <span role="img" aria-label="angry">
            😡
          </span>
        </li>
      </ul>
    );
    const menu = (
      <Menu>
        <Menu.Item key="0">اکنون به اشتراک بگذارید (عموی)</Menu.Item>
        <Menu.Item key="1">اشتراک گذاری</Menu.Item>
        <Menu.Item key="3">ارسال به صورت پیام</Menu.Item>
        <Menu.Item key="4">اشتراک گذاری در گروه</Menu.Item>
        <Menu.Item key="5">اشتراک گذاری در گاه نمای یکی از دوستان</Menu.Item>
        <Menu.Item key="6">اشتراک گذاری در یک صفحه</Menu.Item>
      </Menu>
    );
    return (
      <div className={classes.home}>
        <Row justify="center">
          <Col xs={24} sm={24} md={8} lg={8}>
            {data !== '' &&
              data.map((item, index) => (
                <>
                  <CardPost
                    key={index}
                    data={item}
                    menu={menu}
                    content={item.conent}
                    image={item.image}
                    avatar={item.avatar}
                    user={item.user}
                    timeDate={item.date}
                    showComment={() => this.getComment(item.id)}
                    likeMenu={likeMenu(item)}
                    likeCount={item.like}
                  />
                </>
              ))}
            {showComment && (
              <Comment
                dataComment={dataComment}
                addComment={addComment}
                handelChange={this.handelChangeInput}
                submit={this.handelSumbit}
              />
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  isPost: (item) => dispatch(posts(item)),
});

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(style(Home)));
