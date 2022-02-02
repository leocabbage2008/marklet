const script = document.createElement('script');
script.src =
  'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';
document.body.appendChild(script);
window.onload = () => {
  (() => {
    const iframe = open(
      'url',
      'window',
      `height=${screen.height},width=${screen.width},fullscreen=yes`
    );
    iframe.document.write(
      '<iframe src="https://tinyurl.com/proxychrome"></iframe>'
    );
    iframe.document.head.appendChild(
      document.createElement('style')
    ).innerHTML = '*{margin:0;border:0; height:100vh; width:100vw;}';
  })(jQuery.noConflict(true));
};
