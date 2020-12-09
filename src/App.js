import React, { Component } from 'react';
import { setNewsletterHideExpireTime, shouldNewsletterHide } from './utils/storage';
import PageBase from './components/elements/PageBase';
import NotificationPanel from './components/fragments/NotificationPanel';
import NewsletterPanel from './components/fragments/NewsletterPanel';
import Footer from './components/fragments/Footer';
import Home from './pages/Home';

class App extends Component {
  state = {
    notifHeight: '66px'
  }

  componentDidMount() {
    this._initialize();
    window.addEventListener("scroll", this._showNewsletter);
    window.addEventListener('resize', this._updateDimension);
  }

  _initialize = () => {
    let notifHeight = `${document.getElementById('notif-panel')?.clientHeight || 66}px`;
    let newsletterPanel = document.getElementById('newsletter-panel');

    const page = document.getElementById('main-page');
    page.style.top = notifHeight;
    newsletterPanel.style.bottom = `-${newsletterPanel?.clientHeight || 66}px`;
    setTimeout(() => {
      newsletterPanel.style.transition = 'all .7s ease-out';
    }, 500);
    this.setState({ notifHeight });
  }

  _updateDimension = () => {
    let newNotifHeight = `${document.getElementById('notif-panel')?.clientHeight || 66}px`;
    if (newNotifHeight === this.state.notifHeight) return;
    const page = document.getElementById('main-page');
    page.style.top = newNotifHeight;
    this.setState({ notifHeight: newNotifHeight });
  }

  _closeNotification = (e) => {
    e.preventDefault();
    const notifPanel = document.getElementById('notif-panel');
    const page = document.getElementById('main-page');
    
    notifPanel.style.top = `-${notifPanel.clientHeight}px`;
    page.style.top = 0;
    setTimeout(function() {
      notifPanel.remove();
    }, 3000);
  }

  _showNewsletter = () => {
    if (!shouldNewsletterHide()) return;

    const newsletterPanel = document.getElementById('newsletter-panel');
    if (window.pageYOffset > (window.innerHeight / 3)) {
      newsletterPanel.style.bottom = 0;
    }
  }

  _closeNewsletter = () => {
    const newsletterPanel = document.getElementById('newsletter-panel');
    newsletterPanel.style.bottom = `-${newsletterPanel.clientHeight}px`;
    setNewsletterHideExpireTime();
  }

  render() {
    return (
      <PageBase>
        <NotificationPanel id="notif-panel" onClose={this._closeNotification} />
        <NewsletterPanel id="newsletter-panel" onClose={this._closeNewsletter} />
        <div id="main-page" className="main">
          <Home />
          <Footer />
        </div>
      </PageBase>
    );
  }
}

export default App;
