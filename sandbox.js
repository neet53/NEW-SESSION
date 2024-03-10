const ul = document.querySelector('ul');
const lis = document.querySelectorAll('li');
const search = document.querySelector('input');


 search.addEventListener('keyup', function (){
    const searchTerm = search.value.toLowerCase();
    console.log(searchTerm)
  lis.forEach((li)=>{
    const liText =
    li.textContent.toLowerCase();
    
    if (liText.includes(searchTerm)){
      li.style.display='list-item';
    } else {
      li.style.display='none';
    }


  });

});
