var request = new XMLHttpRequest();

call('GET', 'https://api.github.com/users?since=0', myAmazingCallback);

function myAmazingCallback(e) {
  appendToList(JSON.parse(e.target.response))
}

function call(method, url, cb) {
  request.addEventListener('load', cb);
  request.open(method, url);
  request.send();
}

function appendToList(users) {
  var ul = document.querySelector('ul');  
  users.forEach(function(user) {
    var li = document.createElement('li');
    var img = document.createElement('img');
    var div = document.createElement('div');
    var span = document.createElement('span');    
    div.innerHTML = user.login;
    span.innerHTML = user.id;
    img.src = user.avatar_url;

    div.append(span);
    li.appendChild(img);
    li.appendChild(div);
    ul.appendChild(li);
  });
}
