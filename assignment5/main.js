window.onload = pageLoad;
var posttime;

function pageLoad()
{
    posttime = 0;
    var post = document.getElementById("post");
    var clear = document.getElementById("clear");
    post.onclick = postFunction;
    clear.onclick = clearFunction;
}

function postFunction()
{
    //alert(posttime);
    if (posttime < 3)
    {
        if (posttime > 0)
        {
            var ele = document.getElementById("comment" + posttime);
            var node = document.getElementById("text1").value;
            var textcomment = document.createTextNode(node);
            ele.appendChild(textcomment);
            posttime++;
        }
        else
        {
            var ele = document.getElementById("topic1");
            var node = document.getElementById("text1").value;
            var textcomment = document.createTextNode(node);
            ele.appendChild(textcomment);
            posttime++;
        }
    }    
}

function clearFunction() 
{
    var t1 = document.getElementById("topic1");
    var t2 = t1.childNodes[0];
    t1.removeChild(t2);
    for (var i = 1;i < posttime;i++)
    {
        var t3 = document.getElementById("comment" + i);
        var t4 = t3.childNodes[0]
        t3.removeChild(t4);
    }
    Reset();
}

function Reset()
{
    posttime = 0
}
// var link = document.getElementById("tw-link");
// link.innerHTML = "twitter";

// window.onload = twitterLink;
// function twitterLink(){
//     var link = document.getElementById("tw-link");
//     link.innerHTML = "twitter";
// }


