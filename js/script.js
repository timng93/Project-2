$(document).ready(function() {
  $("#selector").on("change", function() {
    const selected = $(this).val();
    $.ajax({
      url:
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=d28069e91a3c4589b4bc13f58c599967",
      method: "GET"
    }).done(function(data) {
      $.each(data.results, function(key, value) {
        $(".top-stories ul").append(
          "<li>" +
            "<img src='" +
            value.multimedia[4].url +
            "'>" +
            value.multimedia[4].caption +
            "</li>"
        );
      });
    });
  });
});
