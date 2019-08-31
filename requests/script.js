var request = new XMLHttpRequest();
var fromUserNumber = 0;
call('GET', 'https://api.github.com/users?since=' + fromUserNumber, myAmazingCallback);

function myAmazingCallback(e) {
  appendToList(JSON.parse(e.target.response));

  // extract next link somehow :)

  // const link = request.getResponseHeader("https://api.github.com/users?since="+fromUserNumber+")");
}

function call(method, url, cb) {
  request.addEventListener('load', cb);
  request.open(method, url);
  request.send();
}

function appendToList(users) {
  var ul = document.querySelector('ul');
  users.forEach(function (user) {
    var li = document.createElement('li');

    var img = document.createElement('img');
    var div = document.createElement('div');
    div.setAttribute("id", user.id)
    var span = document.createElement('span');
    div.innerHTML = user.login;
    span.innerHTML = user.id;
    img.src = user.avatar_url;
    img.setAttribute('onclick', "displayUser(" + parseInt(user.id) + ")");
    img.id = user.id + "x";

    div.append(span);
    li.appendChild(img);
    li.appendChild(div);
    ul.appendChild(li);
  });
}

function displayUser(user) {
  show(user); console.log(user);console.log(123123123);

}
function show(user) {
  var userImage = document.getElementById(user + "x");
  var bigImageSource = document.getElementById('largeImage');
  bigImageSource.src = userImage.src;
  var userCard = document.getElementById('user-card-bg');
  var Card = document.getElementById('user-card');
  userCard.setAttribute("onclick", "off()")
  userCard.style = ("display:block");
  var list = JSON.parse(request.response);
  user = user.toFixed(); console.log(list[1].html_url);
  var found = getIndexFromUserID(user, list);

  Card.innerHTML = found.login + "<br><br><br><br>" + user + "<br>";
  var url = document.createElement('a');
  var urlAddress = found.html_url.toString();
  url.setAttribute("href", urlAddress);
  url.setAttribute("target2", "iframe_a");
  url.innerHTML = urlAddress;
  console.log(urlAddress);
  Card.appendChild(url);
}
function off() {
  var userCard = document.getElementById('user-card-bg');
  userCard.style = ("display:none");
}
function getIndexFromUserID(userId, list) {
  var found = list.find(function (element) {
    return element.id == userId;
  });
  return found;
}
function next() {
  var list = document.getElementById("myList");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
  fromUserNumber = prompt();
  call('GET', 'https://api.github.com/users?since=' + (fromUserNumber - 1), myAmazingCallback);

}

function byName() {
  var userName = prompt();
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/" + userName,
    success: function (data) { console.log(data); console.log(data.login+"\n"+data.name);displayUserName(data) ;}
  });
}

function displayUserName(data){
  console.log(data);
  var bigImageSource = document.getElementById('largeImage');
  bigImageSource.src = data.avatar_url;
  var userCard = document.getElementById('user-card-bg');
  var Card = document.getElementById('user-card');
  userCard.setAttribute("onclick", "off()")
  userCard.style = ("display:block");
  Card.innerHTML = data.name + "<br><br><br><br>" + data.login + "<br>";
  var url = document.createElement('a');
  var urlAddress = data.html_url.toString();
  url.setAttribute("href", urlAddress);
  url.setAttribute("target2", "iframe_a");
  url.innerHTML = urlAddress;
  console.log(urlAddress);
  Card.appendChild(url);
  console.log(data.avatar_url);
}


