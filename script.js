
function user()
{
    let users = localStorage.getItem('user');
    console.log(users);
    if(users === '[object Undefined]') users = 1;
    else
    {
        users=parseInt(users);
        users=users+1;
    }
    console.log(users);
    localStorage.setItem('user',users);
    let rec = 'user'+localStorage.getItem('user');
    console.log(typeof(rec));
    let sc = localStorage.getItem('score');
    localStorage.setItem(rec, sc);
}

function upload()
{
    if(localStorage.getItem("gender")=="W")
    {
        document.getElementById('gen').innerHTML='나는 어떤 동물과 닮았을까? <img src="./photo/w_small.png" width="40"/>';
    }
    if(localStorage.getItem("gender")=="M")
    {
        document.getElementById('gen').innerHTML='나는 어떤 동물과 닮았을까? <img src="./photo/m_small.png" width="40"/>';
    }
}

function upload_ph()
{
    location.href="result.html";
}

function Click_W()
{
    localStorage.setItem("gender", 'W');
    location.href="upload.html";
}

function Click_M()
{
    localStorage.setItem("gender", 'M');
    location.href="upload.html";
}

function full(num)//full star
{
    if(num===1)
    {
        document.getElementById('star_1').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(1)"/>';
        localStorage.setItem("score", '★☆☆☆☆');
    }
    else if(num===2)
    {
        document.getElementById('star_1').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(1)"/>';
        document.getElementById('star_2').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(2)"/>';
        localStorage.setItem("score", '★★☆☆☆');
    }
    else if(num===3)
    {
        document.getElementById('star_1').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(1)"/>';
        document.getElementById('star_2').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(2)"/>';
        document.getElementById('star_3').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(3)"/>';
        localStorage.setItem("score", '★★★☆☆');
    }
    else if(num===4)
    {
        document.getElementById('star_1').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(1)"/>';
        document.getElementById('star_2').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(2)"/>';
        document.getElementById('star_3').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(3)"/>';
        document.getElementById('star_4').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(4)"/>';
        localStorage.setItem("score", '★★★★☆'); 
    }
    else if(num===5)
    {
        document.getElementById('star_1').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(1)"/>';
        document.getElementById('star_2').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(2)"/>';
        document.getElementById('star_3').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(3)"/>';
        document.getElementById('star_4').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(4)"/>';
        document.getElementById('star_5').innerHTML='<img src="./photo/f_star.png" width="70" style="cursor:pointer;" onclick="empty(5)"/>';
        localStorage.setItem("score", '★★★★★');
    }
}
function empty(num)//empty star
{
    if(num===5)
    {
        document.getElementById('star_5').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(5)"/>';
        localStorage.setItem("score", '★★★★☆');
    }
    else if(num===4)
    {
        document.getElementById('star_5').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(5)"/>';
        document.getElementById('star_4').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(4)"/>';
        localStorage.setItem("score", '★★★☆☆');
    }
    else if(num===3)
    {
        document.getElementById('star_5').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(5)"/>';
        document.getElementById('star_4').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(4)"/>';
        document.getElementById('star_3').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(3)"/>';
        localStorage.setItem("score", '★★☆☆☆');
    }
    else if(num===2)
    {
        document.getElementById('star_5').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(5)"/>';
        document.getElementById('star_4').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(4)"/>';
        document.getElementById('star_3').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(3)"/>';
        document.getElementById('star_2').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(2)"/>';
        localStorage.setItem("score", '★☆☆☆☆');
    }
    else if(num===1)
    {
        document.getElementById('star_1').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(1)"/>';
        document.getElementById('star_2').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(2)"/>';
        document.getElementById('star_3').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(3)"/>';
        document.getElementById('star_4').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(4)"/>';
        document.getElementById('star_5').innerHTML='<img src="./photo/star.png" width="70" style="cursor:pointer;" onclick="full(5)"/>';
        localStorage.setItem("score", '☆☆☆☆☆');
    }
}

function recommend()
{
    let n=parseInt(localStorage.getItem('user'));
    for(let i=1;i<=n;i++)
    {
        const table=document.getElementById("reco_table");
        const newRow=table.insertRow(-1);
        const newCell1=newRow.insertCell(0);
        const newCell2=newRow.insertCell(1);

        newCell1.style.cssText="background-color:#fffdf1; text-align:center;";
        newCell2.style.cssText="background-color:#fffdf1; text-align:center;";

        newCell1.innerText='user'+i;//first cell is rec
        newCell2.innerText=localStorage.getItem('user'+i.toString());//second cell is sc
    }
}