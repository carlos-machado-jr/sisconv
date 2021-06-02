import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './mat-list.component.html',
  styleUrls: ['./mat-list.component.scss']
})
export class MatListComponent implements OnInit {
  @Input() exibition: Boolean = true;
  @Input() ActiveOptions: Boolean = false;
  @Input() menuOptition = [];
  constructor() { }

  ngOnInit(): void {
  }

}
