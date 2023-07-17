let cnt = 0;
allStorage()
submit.addEventListener("click", (e) => {
  e.preventDefault()
  let titlec = title.value;
  let descc = desc.value;
  localStorage.setItem(cnt++, JSON.stringify([titlec, descc]))
  title.value = ""
  desc.value = ""
  todo.innerHTML = ""
  allStorage()
  //added(cnt-1);
})

function allStorage() {

  var archive = [],
    keys = Object.keys(localStorage),
    i = 0, key;

  for (; key = keys[i]; i++) {
    cnt++
    //console.log(key)
    let a = localStorage.getItem(key)
    let b = JSON.parse(a)
    for (let i = 0; i < 1; i++) {
      todo.innerHTML += `
   <div class="card" style="width: 15rem; margin-left:60px; margin-top:25px"  >
  <div class="card-body">
    <h5 class="card-title">${b[i]}</h5>
    <p class="card-text"> ${b[i + 1]} </p>
  </div>
  <button id=${key} class="btn btn-danger"  onclick="del(this.id)" >Delete</button>
  
</div>

  `
    }
  }
}
function added(key) {
  let a = localStorage.getItem(key)
  let b = JSON.parse(a)
  for (let i = 0; i < 1; i++) {
    todo.innerHTML += `
   <div class="card" style="width: 15rem; margin-left:60px; margin-top:25px"  >
  <div class="card-body">
    <h5 class="card-title">${b[i]}</h5>
    <p class="card-text"> ${b[i + 1]} </p>
  </div>
  <button id="${key}" class="btn btn-danger"  onclick="del(this.id)">Delete</button>
  
</div>

  `
  }
}
function del(key) {
  localStorage.removeItem(key)
  todo.innerHTML = ""
  allStorage()
}
