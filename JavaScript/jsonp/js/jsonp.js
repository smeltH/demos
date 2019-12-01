function JSONP ({ url, callback }) {
  const script = document.createElement('script');
  script.setAttribute('src', `${url}?callback=${callback}`);
  document.body.appendChild(script);
};
