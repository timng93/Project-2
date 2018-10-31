$(document).ready(function() {
  $("#selector").on("change", function() {
    const section = $(this).val();

    if (section !== " ") {
      $(".loader img").show();
      $("header").addClass("small-header");
      getStories(section);

      function getStories(section) {
        $.ajax({
          url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=d28069e91a3c4589b4bc13f58c599967`,
          method: "GET"
        })

          .done(function(data) {
            $(".loader img").hide();
            $("ul").empty();

            let filterdata = data.results.filter(function(value) {
              return value.multimedia.length;
            });

            filterdata = filterdata.slice(0, 12);

            for (let value of filterdata) {
              $(".top-stories ul").append(
                `<li style='background: url(${
                  value.multimedia[4].url
                });background-size:cover;'><a href=
                              ${value.url}><div class=stories>
                              ${value.abstract}
                              </div>
                              </a>
                              </li>`
              );
            }
          })
          .fail(function() {
            $("ul").empty();
            $("ul").append("Sorry! There was a problem, please try again. ");
          });
      }
    }
  });
});
