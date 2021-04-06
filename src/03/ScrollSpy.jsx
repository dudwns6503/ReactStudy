import React from 'react';

// 이렇게 작성될 수 있다는 것을 알 것
export default class ScrollSpy extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
  }
  setRef(ref) {
    this.ref = ref;
  }

  checkPosition() {
    // console.log('enter') 부분에 다음 페이지 목록을 추가하는 코드를 구현하면
    // 스크롤이 내려갈 때마다 자동으로 다음 페이지 목록이 추가되도록 구현할 수 있다.
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkPosition);
    this.checkPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition);
  }

  render() {
    return <div ref={this.setRef} />;
  }
}
