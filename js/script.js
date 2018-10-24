$(document).ready(function() {
  $("#selector").on("change", function() {
    const section = $(this).val();

    if (section == "home") {
      $(".loader img").show();
      $("header").addClass("small-header");
      $.ajax({
        url:
          "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=d28069e91a3c4589b4bc13f58c599967",
        method: "GET"
      }).done(function(data) {
        $(".loader img").hide();
        $("ul").empty();

        let filterdata = data.results.filter(function(value) {
          return value.multimedia.length;
        });

        filterdata = filterdata.slice(0, 12);

        $.each(filterdata, function(key, value) {
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
        });
      });
    }

    if (section == "arts") {
      $(".loader img").show();
      $("header").addClass("small-header");

      $.ajax({
        url:
          "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=d28069e91a3c4589b4bc13f58c599967",
        method: "GET"
      }).done(function(data) {
        $(".loader img").hide();
        $("ul").empty();

        let filterdata = data.results.filter(function(value) {
          return value.multimedia.length;
        });

        filterdata = filterdata.slice(0, 12);

        $.each(filterdata, function(key, value) {
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
        });
      });
    }
    if (section == "business") {
      $(".loader img").show();
      $("header").addClass("small-header");
      $.ajax({
        url:
          "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=d28069e91a3c4589b4bc13f58c599967",
        method: "GET"
      }).done(function(data) {
        $(".loader img").hide();
        $("ul").empty();

        let filterdata = data.results.filter(function(value) {
          return value.multimedia.length;
        });

        filterdata = filterdata.slice(0, 12);

        $.each(filterdata, function(key, value) {
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
        });
      });
    }
    if (section == "sports") {
      $(".loader img").show();
      $("header").addClass("small-header");
      $.ajax({
        url:
          "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=d28069e91a3c4589b4bc13f58c599967",
        method: "GET"
      }).done(function(data) {
        $(".loader img").hide();
        $("ul").empty();

        let filterdata = data.results.filter(function(value) {
          return value.multimedia.length;
        });

        filterdata = filterdata.slice(0, 12);

        $.each(filterdata, function(key, value) {
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
        });
      });
    }
    if (section == "technology") {
      $(".loader img").show();
      $("header").addClass("small-header");
      $.ajax({
        url:
          "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=d28069e91a3c4589b4bc13f58c599967",
        method: "GET"
      }).done(function(data) {
        $(".loader img").hide();
        $("ul").empty();

        let filterdata = data.results.filter(function(value) {
          return value.multimedia.length;
        });

        filterdata = filterdata.slice(0, 12);

        $.each(filterdata, function(key, value) {
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
        });
      });
    }

    if (section == "fashion") {
      $(".loader img").show();
      $("header").addClass("small-header");
      $.ajax({
        url:
          "https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=d28069e91a3c4589b4bc13f58c599967",
        method: "GET"
      }).done(function(data) {
        $(".loader img").hide();
        $("ul").empty();

        let filterdata = data.results.filter(function(value) {
          return value.multimedia.length;
        });

        filterdata = filterdata.slice(0, 12);

        $.each(filterdata, function(key, value) {
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
        });
      });
    }
  });
});
