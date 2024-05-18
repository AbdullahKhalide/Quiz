function getQuestions(){
  let myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange=function(){
    if(this.readyState === 4 && this.status === 200 ){
      console.log(this.responseText);
    }
  }

  myRequest.open("GET","html_questions.json", true);
  myRequest.send();
}
getQuestions();