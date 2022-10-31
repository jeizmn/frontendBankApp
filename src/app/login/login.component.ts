import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd execute

  //properties 
  aim='Your Perfect banking partner';

  accounts='Enter your AcntNo here';
  acno="";
  pswd="";
  //user defined functions//4th execute
  acnoChange(event:any)
  {
    this.acno=event.target.value;
  console.log(event.target.value);
  }

  pswdChange(event:any)
  {
    this.pswd=event.target.value;
  console.log(event.target.value);
  }
  login(){
    //alert('LogIn Clicked!!!')
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;

    if(acno in userDetails)
    {
        if(pswd==userDetails[acno]['password'])
        {
          alert('LogIn Successful');
        }
        else
        {
          alert('Invalid Password');
        }

    }
    else{
      alert('Invalid User Details');
    }
  }
  
  userDetails:any={//object of objects
    1000:{acno:1000,username:'Jees',password:1234,balance:1000},
    1001:{acno:2000,username:'Dani',password:1234,balance:1000},
    1002:{acno:3000,username:'Anna',password:1234,balance:1000},
    1003:{acno:4000,username:'Adhi',password:1234,balance:1000}

  }

  constructor() { }//1st execute
  //spl member fns , automatically involks when an obj created

  ngOnInit(): void {//2 nd execute - life cycle hooks of angular-
    //initial process of component initialization
  }

}
