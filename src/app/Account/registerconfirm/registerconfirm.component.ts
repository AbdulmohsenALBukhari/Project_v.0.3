import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountServicesService } from 'src/app/services/AccountServices.service';

@Component({
  selector: 'app-registerconfirm',
  templateUrl: './registerconfirm.component.html',
  styleUrls: ['./registerconfirm.component.css']
})
export class RegisterconfirmComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private service: AccountServicesService,
  ){}

  ngOnInit(){
    //get value or save value form url like id and token
    this.activeRoute.queryParams.subscribe(parm => {
      const id = parm['ID'];
      const token = parm['Token'];
      if(id && token){
        console.log('id= '+ id + 'Token= ' + token);
        this.service.EmailConfirm(id,token).subscribe(succ =>{
          console.log('successfuly');
        });
      }else{
        console.log(parm)
      }
    });
  }
}
