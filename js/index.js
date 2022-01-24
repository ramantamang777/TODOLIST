
//made a span which is going to add up with the list and small icon
var myList = document.getElementsByTagName('li');
var i;
//going through each li element and fetching span which is x icon to it
for(i = 0 ; i < myList.length ; i++)
{
    var span = document.createElement('span');
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

//for the removing items form the list
var close = document.getElementsByClassName('close');
var i;

for(i = 0; i < close.length ; i++)
{
    close[i].onclick = function(){
        var main = this.parentElement;
        main.style.display = "none";
    }
}


//to add the todoList by onclick event or function
function add(){
    var li = document.createElement('li');
    var getItem = document.getElementById('textItem').value;
    var text = document.createTextNode(getItem);
    li.appendChild(text);

    if(document.getElementById('textItem').value === ' ')
    {
        alert('Fill up then add!')
    }
    else{
        document.getElementById('listItem').appendChild(li);
    }

    document.getElementById('textItem').value = '';

    var span = document.createElement('span');
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i = 0; i < close.length; i++)
    {
        close[i].onclick = function() {
            var main = this.parentElement;
            main.style.display = "none";
        }
    }

} 