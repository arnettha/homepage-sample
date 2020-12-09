const EXPIRE_TIME_NEWSLETTER_HIDE = 'cermati_fe_entry_expire_time_newsletter_hide';

function setNewsletterHideExpireTime() {
  const expireTime = new Date().getTime() + 10000;
  localStorage.setItem(EXPIRE_TIME_NEWSLETTER_HIDE, expireTime);
}

function shouldNewsletterHide() {
  return (new Date().getTime() > localStorage.getItem(EXPIRE_TIME_NEWSLETTER_HIDE));
}

export {
  setNewsletterHideExpireTime,
  shouldNewsletterHide,
}
