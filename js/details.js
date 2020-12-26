// let recipeImg=document.getElementById("recipeImg");
// let sourceUrl=document.getElementById("source_url");
// let publisherUrl=document.getElementById("publisher_url");
// let ingredients=[];
// let param=new URLSearchParams(location.search)
// let recipeId=param.get('rid')
// let receiptDetails;

// function getDetails()
// {
//     let request=new XMLHttpRequest();
//     request.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
//     request.send();
//     request.addEventListener("readystatechange",function(){
//         if(request.readyState==4&&request.status==200)
//         {
//             receiptDetails=JSON.parse(request.response).recipe;
//             recipeImg.src=receiptDetails.image_url;
//             sourceUrl.href=receiptDetails.source_url;
//             publisherUrl.href=receiptDetails.publisher_url;
//             ingredients=receiptDetails.ingredients;
//             displayIngredients(); 
//         };
//     });
// }
// getDetails();

// function displayIngredients()
// {
//     lis=``;
//     for(var i=0;i<ingredients.length;i++)
//     {
//         lis+=`
//         <li>${ingredients[i]}</li>
//         `
//     }
//     document.getElementById("ingredients").innerHTML=lis;
// }
let recipeImg=document.getElementById("recipeImg");
let sourceUrl=document.getElementById("source_url");
let publisherUrl=document.getElementById("publisher_url");
let param=new URLSearchParams(location.search);
let recipeId=param.get('rid');
let receiptDetails;
let ingredients=[];
function getDetails()
{
    var request=new XMLHttpRequest();
    request.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
    request.send();
    request.addEventListener("readystatechange",function(){
        if(request.readyState==4&&request.status==200)
        {
            receiptDetails=JSON.parse(request.response).recipe;
            recipeImg.src=receiptDetails.image_url;
            sourceUrl.href=receiptDetails.source_url;
            publisherUrl.href=receiptDetails.publisher_url;
            ingredients=receiptDetails.ingredients;
            displayIngredients()
        };
    });
}
getDetails()

function displayIngredients()
{
    lis=``;
    for(var i=0;i<ingredients.length;i++)
    {
        lis+=`
        <li>${ingredients[i]}</li>
        `
    }
    document.getElementById("ingredients").innerHTML=lis;
}