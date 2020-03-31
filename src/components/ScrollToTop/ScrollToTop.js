import React, { Component } from 'react';

import styles from './ScrollToTop.module.scss';

class ScrollToTop extends Component {
  state = {
    isVisible: false,
  }

  componentDidMount() {
    document.addEventListener('scroll', () => this.toggleVisibility());
  }

  toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      this.setState({
        isVisible: true,
      });
    } else {
      this.setState({
        isVisible: false,
      });
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    const { isVisible } = this.state;
    if (!isVisible) return null;
    return (
      <div className={styles.ScrollToTop} onClick={this.scrollToTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
        </svg>
      </div>
    );
  }
}

export default ScrollToTop;
