var i = localStorage.length + 1;
if(localStorage.length != 0 ){
    for(let b = 1;b< localStorage.length+1; b++){
    let store = localStorage.getItem(`key${b}`);
    let div = document.createElement("div");
    div.innerHTML = `<p>${store}</p>
    <button id="btn${b}"class="btn2">Delete</button>`;
    div.classList.add("cards");
    document.getElementById("old").prepend(div);
   /*  for(let a =1 ; a<i ;a++){
        document.getElementById(`btn${a}`).onclick = ()=>{
            localStorage.removeItem(`key${a}`);
            window.location.reload ();
        }
       }  */
 }
}
else if(localStorage.length == 1){
    let key = localStorage.key(0);
    let a = key[3];
    console.log(a);
    document.getElementById(`btn${a}`).onclick = ()=>{
        localStorage.clear();
        window.location.reload ();
   } 
}
let get = ()=>{
    let note = document.getElementById("input").value;
    localStorage.setItem(`key${i}`,note);
    let div = document.createElement("div");
    div.innerHTML = `<p>${note}</p>
    <button id="btn${i}" onclick = "function text(){
        localStorage.removeItem('key${i}');
        window.location.reload ()};text()" class="btn2" >Delete</button>`;
    div.classList.add("cards");
    document.getElementById("old").prepend(div);
}  

document.getElementById("btn").onclick = ()=>{
              get()
    i += 1;
}
