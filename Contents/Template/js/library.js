$(window).load(function () {
  $(document).ready(function(){
    // Suppress form submission
    $('form').submit(function(event){
      event.preventDefault();
    });
    
    // Move media out of the table and into the sieve
    $('.medium').each(function(){
      $('#sieve').append('<a class="list-group-item" href="#">'+$(this).html()+'</a>');
    });
    $('#mediaTable').remove();
    $('#sieve').sieve({ itemSelector: 'a', searchInput: $('#searchInput') });
    
    // Fix the nav header
    $('.shelf_selection option').each(function(){
      $('#shelfList').append('<li><a href="'+$(this).val()+'">'+$(this).text()+'</a></li>')
    });
    $('.shelf_selection').remove();
    
    // Hide the items
    $('.list-group-item-body').hide();
    $('.list-group-item').click(function(event){
      var active = $('.list-group-item.active');
      if (active.length == 0) {
        ShowDetails($(this));
      } else {
        var newActive = $(this);
        active.removeClass('active').find('.list-group-item-body').slideUp('fast', function(){
          if (active.get(0) != newActive.get(0)) {
            ShowDetails(newActive);
          }
        });
      }
      
      event.preventDefault();
    });
    
    // Scroll to the top
    $.scrollTo( 0 );
  });
});

function ShowDetails(e) {
  e.addClass('active');
  var details = e.find('.list-group-item-body');
  if (details.find('img').length == 0) {
    details.prepend(details.comments().html());
  }
  details.slideDown('fast', function() {
    $.scrollTo(e, 500, {offset: -70});
  });
}