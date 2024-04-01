// Define loadPage function in a global scope
function loadPage(pageName) {
  // Make an AJAX request to load the HTML content
  $.get(`pages/${pageName}.html`, function(data) {
      // Once the HTML content is loaded, replace the content-area with the new content
      $('#content-area').html(data);
  }).fail(function(jqXHR, textStatus, errorThrown) {
      console.error("Error loading page:", textStatus, errorThrown);
  });
}
