import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { AuthserviceService } from 'src/app/shared/util/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  data: Observable<any>;
  

  formulario: FormGroup;
  
  constructor(
    private authService: AuthserviceService,
    private formBuilder: FormBuilder,
    private route: Router,
    private loginService: LoginService,

  ) { }

  
  ngOnInit() {
    this.createForm();
    // this.data = this.loginService.splashLoading;
    // console.log(this.loginService.splashLoading);
    
  }
  ngDoCheck(){
    // console.log(this.loginService.splashLoading);

  }
  authenticated(){
    
    this.authService.authenticate(this.formulario.value)
    .subscribe(
      sucess => {
        console.log("sucess")
        this.route.navigate(['/home'])
      },
      erro => ''
    );
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      nome_usuario:['', Validators.required],
      senha: ['', Validators.required]
    });
  }

}
