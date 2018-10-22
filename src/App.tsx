import React from 'react'
import MainPage from './containers/mainPage/'

export default class App  extends React.Component<{}> {
  render() {
    return(
      // 未ログイン時はログインページへ
      <MainPage />
    );
  }
}