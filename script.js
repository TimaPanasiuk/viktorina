const q = [
    "Найменша система вимірювання в інформатиці?",
    "Внутрішній відступ в css?",
    "Впорядкований набір фіксованої кількості однотипних елементів?",
    "",
    "",
    "",
    "",
    "",
    ""
   ]
  
  const a = [
    "bit",
    "padding",
    "array",
    "",
    "",
    "",
    "",
    "",
    ""
   ]
  const qq = document.querySelector(".q")
  const aa = document.querySelector(".a")
  
  console.log(qq)
  console.log(aa)
  
  let randomWordLength = 0
  let zm = 0
  
  function round(){
    const random = Math.trunc(Math.random()*3)
    randomWordLength = a[random].length
  
  qq.textContent = q[random]
  
  for(let i = 0; i < a[random].length; i++){
    const el = document.createElement("p")
    aa.appendChild(el)
  }
    
  let kvadra = document.querySelectorAll("p")
  if(kvadra.length > randomWordLength){
    for(let i = 0; i < kvadra.length - randomWordLength; i++){
      kvadra[i].style.display = "none"
  }
  }
  
  const letters = document.querySelectorAll(".letter")
  
  for (let letter = 0; letter < letters.length; letter++){
      letters[letter].addEventListener("click" , function(){
      for(let k = 0; k < a[random].length; k++){
        
    if (a[random][k] == this.textContent){
      kvadra[k + zm].textContent = this.textContent
    if(Array.from(kvadra).every(item => item.textContent != ""))
  {
        zm += randomWordLength
        round()
  }
  }
  }
  }) 
  }
  }
  round()