$(document).ready(function() {
  $('.navbar').find('li').each(
      function(id, el) {
        var curr = $(el);
        if (curr.find('a').attr('href') == document.location.pathname) {
          curr.addClass('active');
        }
      }
      );
});
