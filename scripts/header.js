document.getElementById('menu').addEventListener('click', function () {
  var parent = this.parentNode;
  parent.className =
    (parent.className.indexOf('active') > -1) ?
      parent.className.replace('active', '') :
      parent.className + ' active';

  parent.className = parent.className.trim();
});
