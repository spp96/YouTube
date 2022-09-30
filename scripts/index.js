
  const API_KEY = `AIzaSyBOgLg3DibpGMKwU63am8fM0KQ4eR9B7pI`;

  let q = "";

  let search = async () => {
    let query = document.getElementById("query").value;
    let data = await getdata(query);
    q = query;
    append(data);
  };

  let getdata = async (query) => {
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${API_KEY}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    return data.items;
  };

  let append = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = null;
    data.forEach((el) => {
      let img = document.createElement("img");
      img.src = el.snippet.thumbnails.medium.url;

      let title = document.createElement("h3");
      title.innerText = el.snippet.title;

      let des = document.createElement("p");
      des.innerText = el.snippet.description;

      let sub = document.createElement("div");
      sub.setAttribute("class", "video");
      sub.onclick = () => {
        savevideo(el);
      };

      sub.append(img, title, des);
      container.append(sub);
    });
  };

  let savevideo = (data) => {
    localStorage.setItem("video", JSON.stringify(data));
    window.location.href = `video.html`;
  };

  let filter = async () => {
    let data = await getdata(q);
    data = data.filter((el) => {
        return el.snippet.channelId=== "UC3ar28GS6o1p0m_wabfk2zw";
    });
    append(data);
  };