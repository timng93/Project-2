$(document).ready(function() {
  $("#selector").on("change", function() {
    const section = $(this).val();

    if (section == "home") {
      $("header").addClass("small-header");
      $.ajax({
        url:
          "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=d28069e91a3c4589b4bc13f58c599967",
        method: "GET"
      }).done(function(data) {
        //$(".loader").fadeOut("slow");

        $("ul").empty();

        let filterdata = data.results.filter(function(value) {
          return value.multimedia.length;
        });

        filterdata = filterdata.slice(0, 12);

        $.each(filterdata, function(key, value) {
          console.log(value);
          $(".top-stories ul").append(
            "<li style='background: url(" +
              value.multimedia[4].url +
              ");background-size:cover;'>" +
              "<a href=" +
              value.url +
              ">" +
              "<div class='stories'>" +
              value.abstract +
              "</div>" +
              "</a>" +
              "</li>"
          );

          // if i=== 12 return;
        });

        // end of each data function;
      });
      //end of done function
    }
    //end of if function

    if (section == "arts") {
      $("header").addClass("small-header");

      $.ajax({
        url:
          "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=d28069e91a3c4589b4bc13f58c599967",
        method: "GET"
      }).done(function(data) {
        $("ul").empty();

        let filterdata = data.results.filter(function(value) {
          return value.multimedia.length;
        });

        filterdata = filterdata.slice(0, 12);

        $.each(filterdata, function(key, value) {
          console.log(value);
          $(".top-stories ul").append(
            "<li style='background: url(" +
              value.multimedia[4].url +
              ");background-size:cover;'>" +
              "<a href=" +
              value.url +
              ">" +
              "<div class='stories'>" +
              value.abstract +
              "</div>" +
              "</a>" +
              "</li>"
          );

          // if i=== 12 return;
        });

        // end of each data function;
      });
      //end of done function
    }
    //end of if function
    if (section == "business") {
      $("header").addClass("small-header");
      $.ajax({
        url:
          "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=d28069e91a3c4589b4bc13f58c599967",
        method: "GET"
      }).done(function(data) {
        $("ul").empty();

        let filterdata = data.results.filter(function(value) {
          return value.multimedia.length;
        });

        filterdata = filterdata.slice(0, 12);

        $.each(filterdata, function(key, value) {
          console.log(value);
          $(".top-stories ul").append(
            "<li style='background: url(" +
              value.multimedia[4].url +
              ");background-size:cover;'>" +
              "<a href=" +
              value.url +
              ">" +
              "<div class='stories'>" +
              value.abstract +
              "</div>" +
              "</a>" +
              "</li>"
          );

          // if i=== 12 return;
        });

        // end of each data function;
      });
      //end of done function
    }
    //end of if function
    if (section == "sports") {
      $("header").addClass("small-header");
      $.ajax({
        url:
          "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=d28069e91a3c4589b4bc13f58c599967",
        method: "GET"
      }).done(function(data) {
        $("ul").empty();

        let filterdata = data.results.filter(function(value) {
          return value.multimedia.length;
        });

        filterdata = filterdata.slice(0, 12);

        $.each(filterdata, function(key, value) {
          console.log(value);
          $(".top-stories ul").append(
            "<li style='background: url(" +
              value.multimedia[4].url +
              ");background-size:cover;'>" +
              "<a href=" +
              value.url +
              ">" +
              "<div class='stories'>" +
              value.abstract +
              "</div>" +
              "</a>" +
              "</li>"
          );

          // if i=== 12 return;
        });

        // end of each data function;
      });
      //end of done function
    }
    //end of if function
    if (section == "technology") {
      $("header").addClass("small-header");
      $.ajax({
        url:
          "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=d28069e91a3c4589b4bc13f58c599967",
        method: "GET"
      }).done(function(data) {
        $("ul").empty();

        let filterdata = data.results.filter(function(value) {
          return value.multimedia.length;
        });

        filterdata = filterdata.slice(0, 12);

        $.each(filterdata, function(key, value) {
          console.log(value);
          $(".top-stories ul").append(
            "<li style='background: url(" +
              value.multimedia[4].url +
              ");background-size:cover;'>" +
              "<a href=" +
              value.url +
              ">" +
              "<div class='stories'>" +
              value.abstract +
              "</div>" +
              "</a>" +
              "</li>"
          );

          // if i=== 12 return;
        });

        // end of each data function;
      });
      //end of done function
    }
    //end of if function

    if (section == "fashion") {
      $("header").addClass("small-header");
      $.ajax({
        url:
          "https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=d28069e91a3c4589b4bc13f58c599967",
        method: "GET"
      }).done(function(data) {
        $("ul").empty();

        let filterdata = data.results.filter(function(value) {
          return value.multimedia.length;
        });

        filterdata = filterdata.slice(0, 12);

        $.each(filterdata, function(key, value) {
          console.log(value);
          $(".top-stories ul").append(
            "<li style='background: url(" +
              value.multimedia[4].url +
              ");background-size:cover;'>" +
              "<a href=" +
              value.url +
              ">" +
              "<div class='stories'>" +
              value.abstract +
              "</div>" +
              "</a>" +
              "</li>"
          );

          // if i=== 12 return;
        });

        // end of each data function;
      });
      //end of done function
    }
    //end of if function
  });
});
