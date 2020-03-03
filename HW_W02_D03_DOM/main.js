document.querySelector("html").style.fontFamily = "Arial, sans-serif";

document.querySelector("html").style.textAlign = "center";


document.getElementById('nickname').textContent = "Bashayr Alhasani";
document.getElementById('favorite').textContent = "Horse";
document.getElementById('hometown').textContent = "Jeddah";


let img = document.createElement("img");
document.querySelector('.profilePicture').appendChild(img); 
img.src =  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLittle_Women_(2019_film)&psig=AOvVaw3iocryc6AWNd_MO123UTXG&ust=1583349068852000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiLqYiB_-cCFQAAAAAdAAAAABAD'; 


let aboutMeList = document.querySelectorAll('li'); 
function addClass(){ 
    list.classList.add("listitem");
} 


aboutMeList.forEach(li => li.addEventListener("click", function()
{
    if (li.style.color !== "dodgerblue"){
        li.style.color = "dodgerblue";}
    else if (li.style.color == "dodgerblue"){
        li.style.color = "red";}
    else{
        return 0;} 
}))


var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: true
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true
    }
  ];


  let h1 = document.createElement("h1");
  let booksContainer = document.querySelector(".favoriteBooks");
  booksContainer.appendChild(h1);
  h1.textContent = "My Book List";

  let listContainer = document.querySelector(".favoriteBooks");
  for (var i = 0; i < books.length; i++){

    let p = document.createElement("p");
    booksContainer.appendChild(p);
    p.textContent = books[i].title + ", " + "by " + books[i].author;
    listContainer.appendChild(p);

    p.addEventListener("click", function(){
        p.remove();
    })  
    }




