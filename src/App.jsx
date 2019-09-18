import React from 'react';
import * as styles from './AppStyle';
import TextEditorContainer from './modules/TextEditorContainer';

const App = (props) => {
  return (
    <styles.AppWrapper>
      <TextEditorContainer />
    </styles.AppWrapper> 
  );
}

export default App;
