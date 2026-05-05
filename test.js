try {
  window.top.document.body.setAttribute('data-test', 'fail');
  console.log('access granted');
} catch(e) {
  console.log('blocked');
}
