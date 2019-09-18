import React from 'react';
import * as styles from './styles.jsx';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import TextInputArea from './components/TextInputArea';
import TextOutputArea from './components/TextOutputArea';

const FileZone = (props) => {

  return (
    <styles.TextContainer onClick={props.onClick}>
      <Row type="flex" gutter={32}>
        <Col sm={12}>
          <TextInputArea 
            onSubmit={props.onSubmit}
            onReset={props.onReset}
          />
        </Col>
        <Col sm={12}>
          <TextOutputArea
            words={props.words}
            onSelection={props.onSelection}
          />
        </Col>
      </Row>
    </styles.TextContainer>
  )
}

FileZone.propTypes = {
  onClick: PropTypes.func,
  onReset: PropTypes.func,
};

FileZone.defaultProps = {
  onClick: () => {},
  onReset: () => {},
}

export default FileZone;