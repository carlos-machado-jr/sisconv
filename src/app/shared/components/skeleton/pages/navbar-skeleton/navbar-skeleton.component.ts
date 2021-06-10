import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/shared/util/services/account.service';

@Component({
  selector: 'navbar-skeleton',
  templateUrl: './navbar-skeleton.component.html',
  styleUrls: ['./navbar-skeleton.component.css']
})
export class NavbarSkeletonComponent implements OnInit {
  public isLoading: Observable<Boolean>;

  constructor(private account: AccountService) { }

  ngOnInit(): void {
    this.isLoading = this.account.isLoading;

  }

}
