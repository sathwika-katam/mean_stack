var blogs=[];   
    
function onFormSubmit(){
    var data=readFormData();
    resetData();
    blogs.push(data);
    populateBlogs(data);
}
function readFormData(){
    var obj ={}
    obj.title = document.getElementById("title").value;
    obj.imageLink = document.getElementById("image").value;
    obj.blogText = document.getElementById("blog_text").value;
    return obj;
}


function populateBlogs(data){
    
    var dynamic = document.querySelector('#blog-items');  
      var fetch = document.querySelector('#blog-items').innerHTML;  
      dynamic.innerHTML = `<div class="content" class="boxes">
          <div class="box-content" class="flex-item">
            <h2>${data.title}</h2>
            <img src = ${data.imageLink} />
            <p>${data.blogText}
            </p>
           </div>
        </div>` + fetch ; 
        
    
    }
  

function resetData(){
    document.getElementById("image").value="";
    document.getElementById("title").value="";
    document.getElementById("blog_text").value="";
}