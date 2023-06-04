let title = document.querySelector("#title");
let description = document.querySelector("#description");
let cards = document.querySelector('.cards');
let userName=''
let userNameShow = document.querySelector('.user-name');
let memoBox = document.querySelector('.memo-box')
let memoList = [];
let setArray ;
let getArray = [];

// Add username and save it to local storage
userName = localStorage.getItem('userName');
userNameShow.innerHTML = `<h4 class="m-0" >Hello ${userName}</h4>`;
console.log("userName" , userName)
if(userName == '' || userName == null){
     userName = prompt("Please Enter Your Name");
    userNameShow.innerHTML = `<h4>Hello ${userName}</h4>`;
    localStorage.setItem('userName' , userName)
 }


// show or hide Memo Entry Box
function showAddMemoBox(){
    title.value = '';
    description.value = '';
  memoBox.classList.toggle('d-none')
}


// Submission of Memobox
function submitYourMemo() {
    let formDataObj = {
        title: title.value,
        description: description.value,
      };

  memoList.push(formDataObj)
  memoBox.classList.toggle('d-none')
 
    setArray =  localStorage.setItem('memoBox',JSON.stringify(memoList));
   
        console.log(getArray)
        showCards()
        // title = '';
        // description = '';
}

// ShowCards 
showCards()


// show card and show in HTML
function showCards(){
    getArray = JSON.parse(localStorage.getItem('memoBox'));
    cards.innerHTML = '';
    memoList = getArray;
    memoList.forEach((value , index)=>{
        console.log(value.title, value.description)
        let  html = `
        <div class="col-md-4 col-12 my-2">
       <div class="border" >
       <div class="bg-primary px-2 text-center text-white"> ${value.title} </div>
       <div class="px-2"> ${value.description} </div>
       </div>
        
       <button type="button" class="btn btn-danger text-white d-block ms-auto mt-2" onclick=deleteEntry(${index}) >Delete</button>
        </div>
        `
        cards.innerHTML =  html + cards.innerHTML
    })
   
}

// Delete Card
function deleteEntry(index){
  memoList.splice(index,1)
  setArray =  localStorage.setItem('memoBox',JSON.stringify(memoList))
  showCards();
//   title = '';
//     description = '';
}
