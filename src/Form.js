import swal from 'sweetalert';
function demo(){
  console.log('hello');
 var name = document.getElementById('name').value;
 var server_address =document.getElementById('S_add').value;
 console.log(name);
 console.log(server_address);
const url= "https://api-monitor.scrobits.com/api/v1/projects";
var data = {"name": name , "server_url":server_address,"user_id" : 8 };
const params = {
method:'POST',
headers: {"Content-Type":"application/json"},
body : JSON.stringify(data),
}
fetch(url,params).then((response)=>{return response.json();}).then((data)=>{console.log(data)})
 if(fetch(params)){
   swal("Thank you!", "Your data has been stored successfully.", "success");}
   else{
    swal("Sorry!", "Your data was NOT stored successfully.", "error");
  }
 return data;
}
function Form(){
  return (
    <div className="content">
      <form className="form">
        <h1 className="Form_heading">Add Project</h1>
        <br></br>
        <label for="name">Name</label>
        <input id="name" type = "text" placeholder="eg. scrobits prod" />
        <br></br>
        <label for="S_add">Server Adress</label>
        <input id="S_add" type = "text" placeholder="eg. scrobits.com" />
        <br></br>
        <label for="I_add">Interval</label>
        <input id="I_add" type= "number" placeholder="time" />
        <br></br>
        <label for="Exp_date">SSl Expiry date</label>
        <input id="Exp_date" type = "date" placeholder="eg. 12-05-2022" />
        <br></br>
        <div id="mail_input">
        <label for="Mail_id">Email Address to notify (upto 3)</label>
        <div ><button id="submit"  type="button" onClick={demo} >
        Add Project
        </button></div>
        <input id="Mail_id" type = "email" placeholder="eg. name@xyz.com  ">
          </input>
          </div>
       </form>
       <div id="plus" >
       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M9 17V9M9 9V1M9 9H17M9 9H1" stroke="#0075FF" stroke-width="2" stroke-linecap="round"/>
       </svg>
     </div>
</div>

  );
}
export default Form;
