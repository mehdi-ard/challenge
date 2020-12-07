import React from 'react';
import { Comment as CoreComment, Form, List } from 'antd';
import style from './style';
import { getBeautifyDate } from 'utils/getBeautifyDate';
import Input from 'microcomponents/input';
import Button from 'microcomponents/button';

class Comment extends React.PureComponent {
  handelChange = (name) => (event) => {
    this.props.handelChange(name, event);
  };
  render() {
    const { classes, dataComment, addComment, submit } = this.props;
    return (
      <div className={classes.comment}>
        <div className={classes.addComment}>
          <Form onFinish={submit} layout="vertical">
            <Form.Item>
              <Input
                type="textarea"
                value={addComment}
                autoSize={{ minRows: 1, maxRows: 3 }}
                onChange={this.handelChange('addComment')}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              ارسال
            </Button>
          </Form>
        </div>
        <List
          className="comment-list"
          header={`${dataComment.length} پاسخ`}
          itemLayout="horizontal"
          dataSource={dataComment}
          renderItem={(item) => (
            <li>
              <CoreComment
                actions={item.actions}
                author={item.user}
                avatar={item.avatar}
                content={item.body}
                datetime={getBeautifyDate(item.date)}
              />
            </li>
          )}
        />
      </div>
    );
  }
}

export default style(Comment);
