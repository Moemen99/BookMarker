var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var bookmarks = [];
var warning1=document.getElementById("warning1");
var warning2=document.getElementById("warning2");
if(localStorage.getItem("site")){
   bookmarks= JSON.parse(localStorage.getItem("site"));
   displayBookmark();
}


function addSites(){

    if (siteName.value != "" && siteUrl.value != "") {

        var siteList ={
            name:siteName.value,
            url :siteUrl.value,
        }
        bookmarks.push(siteList);
        localStorage.setItem("site",JSON.stringify(bookmarks));
        clear();
        displayBookmark();
        warning1.classList.replace("d-block","d-none");
        warning2.classList.replace("d-block","d-none");
        
      } else if(siteName.value != ""){
    
        warning1.classList.replace("d-block","d-none")
        warning2.classList.replace("d-none","d-block");
      }else if(siteUrl.value != ""){
        warning1.classList.replace("d-none","d-block");
        warning2.classList.replace("d-block","d-none")
      }else{
        warning1.classList.replace("d-none","d-block");
        warning2.classList.replace("d-none","d-block");
      }
   

}

function displayBookmark() {
var blackBox="";
for (var i=0; i < bookmarks.length; i++) {
    blackBox += `
    <div class="web-list mb-4  " >
                        <div class="bookMarkName  row w-50 ">
                        <div class="name pt-3 col-6 ">
                            <h2>${bookmarks[i].name}</h2>
                        </div>
                        <div class="buttons pe-5 d-flex col-5 offset-1">
                            <a class="btn btn-primary fs-4 me-2   " id="visit" href="https://${bookmarks[i].url}" target="_blank">visit</a>
                            <button class="btn btn-danger fs-4  " id = "delete" onclick="deleteWebsite(${i})">Delete</button>
                        </div>
                        
                    </div> </div>`
    
}
document.getElementById("myWebsites").innerHTML=blackBox;
}

function clear() {
    siteName.value="";
    siteUrl.value="";
    
}

function deleteWebsite(index) {
    bookmarks.splice(index,1);
       localStorage.setItem("site",JSON.stringify(bookmarks));
       displayBookmark();
}

