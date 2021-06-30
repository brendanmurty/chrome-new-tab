var sites_json_file = 'https://raw.githubusercontent.com/brendanmurty/chrome-new-tab/master/sites.json';

var xhr = new XMLHttpRequest();

xhr.onload = function() {
    var response = xhr.responseText;
    json = JSON.parse(response);

    for (var i = 0; i < json.length; i++) {
        var site = json[i],
            list_item = document.createElement('li'),
            list_item_link = document.createElement('a'),
            list_item_content = site.short_title || site.title;

        list_item_link.title = site.title;
        list_item_link.href = site.url;
        list_item_link.style = 'background-color:' + site.colour_background + ';color:' + site.colour_foreground + ';';

        list_item_link.appendChild(document.createTextNode(list_item_content));
        list_item.appendChild(list_item_link);
        document.getElementById('sites').appendChild(list_item);
    }
};

xhr.open('GET', sites_json_file);
xhr.send();