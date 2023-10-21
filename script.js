var pass = new Audio("./sounds/chim1.wav")
var errx = new Audio("./sounds/chim2.wav")
var wrath = new Audio("./sounds/chim3.wav")
var warnd = new Audio("./sounds/chim4.wav")
var todoArray = [];
function submitTodo(){
  var title = todoTitle.value;
  var subtitle = todoSub.value;
  var date = new Date().toLocaleDateString();
  var time = new Date().toLocaleTimeString();
  var inpObj = {title, subtitle, date, time}  

  if(title == "" || subtitle == ""){
    errx.play()
    showErr.innerHTML = `<p class="alert alert-danger text-center">Please enter a title and details for your todo list</p>`;
  }else{
    pass.play()
    showErr.innerHTML = ""
    todoArray.push(inpObj);
    todoTitle.value = ""
    todoSub.value = ""
    displayAll()
  }
}

function deleteAny(i){
  var check = confirm("are you sure you want to delete?")
  if(check == true){
    wrath.play()
    showErr.innerHTML = `<p class="alert alert-success text-center">Deleted successfully</p>`;
    todoArray.splice(i, 1)
    displayAll()
  }else{
    warnd.play()
    showErr.innerHTML = `<p class="alert alert-warning text-center">This info will not be deleted</p>`;
  }
}

function editAny(i){
  var title = todoTitle.value;
  var subtitle = todoSub.value;
  var check = confirm("are you sure you want to edit?")
  if (check == true){
    if(title == "" && subtitle == ""){
      showErr.innerHTML = `<p class="alert alert-warning text-center">you need to fill the inputs</p>`;
    }else{

      wrath.play()
      todoTitle.value = ""
      todoSub.value = ""
      showErr.innerHTML = `<p class="alert alert-success text-center">Edited successfully</p>`;
      todoArray[i]["title"] = document.getElementById('todoTitle').value
      todoArray[i]["subtitle"] = document.getElementById('todoSub').value
      displayAll()
    }
  }else{
    warnd.play()
    showErr.innerHTML = `<p class="alert alert-warning text-center">This info will not be edited</p>`;
  }
}






function displayAll(){

  display.innerHTML = "";
  todoArray.map((element, i)=>{
    display.innerHTML += `
        <tr>
        <td>${i+1}</td>  
        <td>${element.title}</td>  
        <td>${element.subtitle}</td>  
        <td>${element.date}</td>  
        <td>${element.time}</td> 
        <td><button onclick="deleteAny(${i})" class="btn btn-danger fw-bold text-light">Delete</button></td> 
        <td><button onclick="editAny(${i})" class="btn btn-warning fw-bold text-light">Edit</button></td> 
        </tr>
    `
  })
}