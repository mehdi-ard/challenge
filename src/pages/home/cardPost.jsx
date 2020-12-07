import React from 'react';
import { Dropdown } from 'antd';
import {
  ShareAltOutlined,
  CommentOutlined,
  LikeOutlined,
} from '@ant-design/icons';
import Button from 'microcomponents/button';
import Typography from 'microcomponents/typography';
import style from './style';
import { getBeautifyDate } from 'utils/getBeautifyDate';
import LazyLoad from 'react-lazyload';

class CardPost extends React.PureComponent {
  render() {
    const {
      classes,
      menu,
      content,
      image,
      avatar,
      user,
      timeDate,
      showComment,
      likeMenu,
      likeCount,
    } = this.props;
    return (
      <div className={classes.postList}>
        <div className={classes.headerPost}>
          <div className={classes.avatarUser}>
            <div className={classes.avatar}>
              <img src={avatar} alt="" />
            </div>
            <div>
              <Typography variant="text" className={classes.username}>
                {user}
              </Typography>
              <Typography variant="text">
                {getBeautifyDate(timeDate)}
              </Typography>
            </div>
          </div>

          <div>
            {/* <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
              <Button
                shape="circle"
                ghost
                icon={<MoreOutlined style={{ color: '#000' }} />}
              ></Button>
            </Dropdown> */}
          </div>
        </div>
        <div className={classes.contentPost}>
          <Typography variant="text">{content}</Typography>
        </div>
        <div className={classes.tagPost}></div>
        <div className={classes.imagePost}>
          <LazyLoad width={232} height={300}>
            <img src={image} alt="" />
          </LazyLoad>
        </div>
        <div className={classes.countLike}>
          {likeCount.length > 0 &&
            likeCount.map((item, index) => (
              <i key={index}>
                {item.type === 'heart'
                  ? '🧡'
                  : item.type === 'like'
                  ? '👍'
                  : item.type === 'funny'
                  ? '🤣'
                  : item.type === 'what'
                  ? '🤔'
                  : item.type === 'angry' && '😡'}
              </i>
            ))}
          <Typography variant="text" className={classes.coutnLike}>
            {likeCount.length} نفر
          </Typography>
        </div>
        <div className={classes.sharePost}>
          <ul>
            <li>
              <Dropdown
                overlay={menu}
                trigger={['click']}
                placement="bottomLeft"
              >
                <Button ghost block>
                  <ShareAltOutlined style={{ fontSize: 20, color: '#000' }} />
                  <Typography variant="text">اشتراک گزاری</Typography>
                </Button>
              </Dropdown>
            </li>
            <li onClick={showComment}>
              <Button ghost block onClick={showComment}>
                <CommentOutlined style={{ fontSize: 20, color: '#000' }} />
                <Typography variant="text">نظر</Typography>
              </Button>
            </li>
            <li>
              <Dropdown overlay={likeMenu} placement="topRight">
                <Button ghost block>
                  <LikeOutlined style={{ fontSize: 20, color: '#000' }} />
                  <Typography variant="text">پسندیدن</Typography>
                </Button>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default style(CardPost);
