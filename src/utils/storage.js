const EXPIRE_TIME_NEWSLETTER_HIDE = 'cermati_fe_entry_expire_time_newsletter_hide';

function setNewsletterHideExpireTime() {
  const expireTime = new Date().getTime() + 600000;
  localStorage.setItem(EXPIRE_TIME_NEWSLETTER_HIDE, expireTime);
}

function shouldNewsletterShow() {
  return (new Date().getTime() > localStorage.getItem(EXPIRE_TIME_NEWSLETTER_HIDE));
}

export {
  setNewsletterHideExpireTime,
  shouldNewsletterShow,
}
