import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AccountService } from '../../util/services/account.service';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  public isLoading: Observable<boolean>;
  public color = "primary";
  public value = '';

  constructor(
    private account: AccountService

  ) { }

  ngOnInit(): void {
    this.isLoading = this.account.isLoading;
  }

}
