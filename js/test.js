// var request=new XMLHttpRequest();
// request.open("GET","http://jsonplaceholder.typicode.com/photos");
// request.send();
// var photos=[];
// request.addEventListener("readystatechange",function(){
//     if(request.readyState==4&&request.status==200)
//     {
//         photos=JSON.parse(request.response);
//         displayPhotos()
//     };
// })
// function displayPhotos(){
//     var cols=``;
//     for(var i=0;i<photos.length;i++)
//     {
//         cols+=
//         `
//             <div class="col-md-3">
//                 <div>
//                     <h2>${photos[i].title}</h2>
//                     <img src="${photos[i].url}" class='w-100'>
//                 </div>
//             </div>
//         `
//     }
//     document.getElementById("photos").innerHTML=cols;
// };
var receipts=[];
getReceipts("pizza");
links=document.getElementsByClassName("nav-link");
for(var i=0;i<links.length;i++)
{
    links[i].addEventListener("click",function(e){
        var currentMeal=e.target.text;
        getReceipts(currentMeal);
    })
}
function getReceipts(meal)
{
    var request=new XMLHttpRequest();
    request.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    request.send();
    request.addEventListener("readystatechange",function(){
        if(request.readyState==4&&request.status==200)
        {
            receipts=JSON.parse(request.response).recipes;
            displayRecipes();
        };
    });
}

function displayRecipes()
{   cols=``;
    for(var i=0;i<receipts.length;i++)
    {
        cols+=`
        <div class=" col-md-4 my-3">
            <div>
                <img src="${receipts[i].image_url}" class="w-100 recipe-img">
                <h4>${receipts[i].title}</h4>
                <button class="btn btn-warning"><a target="_blank" class="text-white" href="${receipts[i].source_url}">source</a></button>
                <button class="btn btn-info"><a target="_blank" class="text-white" href="details.html?rid=${receipts[i].recipe_id}">details</a></button>
                </div>
        </div>
        `
    }
    document.getElementById("ph").innerHTML=cols;
}