
import Logo1 from './Images/Logo1.png';
import Logo2 from './Images/Logo2.png';
function Form() {
  return (
    
    <div className="content">
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      /> */}
      {/* <div className="Image">
        <img src={Logo1}/>
      </div>
       */}
      <form className="form">
        <h1 className="Form_heading">Add Project</h1>
        <br></br>
        <label for="name">Name</label>
        <input id="name" placeholder="eg. scrobits prod" />
        <br></br>
        <label for="S_add">Server Adress</label>
        <input id="S_add" placeholder="eg. scrobits.com" />
        <br></br>
        <label for="I_add">Interval</label>
        <input id="I_add" placeholder="time" />
        <br></br>
        <label for="Exp_date">SSl Expiry date</label>
        <input id="Exp_date" placeholder="eg. 12-05-2022" />
        <br></br>
        
        <div id="mail_input">
        <label for="Mail_id">Email Address to notify (upto 3)</label>
       
        <div ><button id="submit" type="submit">
        Add Project
        </button></div>

        <input id="Mail_id" placeholder="eg. name@xyz.com  ">
          </input>
          </div>
       </form>
       <div id="plus">
       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M9 17V9M9 9V1M9 9H17M9 9H1" stroke="#0075FF" stroke-width="2" stroke-linecap="round"/>
       </svg>
     </div>
</div>

  );
}
export default Form;
