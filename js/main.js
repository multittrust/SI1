$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'sections/' + $(this).data('include') + '.html'
      $(this).load(file)
    })
  })

  document.querySelectorAll('[data-include]').forEach(el => {
    if (el.getAttribute('data-teal') === 'true') {
      el.classList.add('teal');
    }
  });
  