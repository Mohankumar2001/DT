const apikey = "mcaddurij8mnpatoxev6hrc1gdb4nhinwwxjxrix";
const rssurl = "https://www.thehindu.com/elections/feeder/default.rss";

let url = "https://api.rss2json.com/v1/api.json",
  query = "?api_key=" + apikey + "&rss_url=" + rssurl + "&count=20";

fetch(url + query)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var n = data.items.length;
    var i;

    for (i = 0; i < n; i++) {
      var temp = `
    <a href="${data.items[i].link}" target="_blank">
      <div class="news-tile">
        <div class="img-container">
        <img class="news-img" src="img/placeholder.png">
        </div>
        <div class="news-content">
          <h5>${data.items[i].title}</h5>
          <p id="news_description">${data.items[i].description}</p>
          <p class="pubdate">${data.items[i].pubDate}</p>
        </div>
      </div>
      </a>`;
      document.getElementById("newscard-container").innerHTML += "<br>" + temp;

      // document.getElementById("news_description").innerHTML +=
      //   data.items[0].title + "<br>" + data.items[i].pubDate;
    }
  });
