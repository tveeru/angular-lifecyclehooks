import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  empName: string = 'veerth';
  empForm = new FormGroup({
    name: new FormControl(),
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // this.empName = this.empForm.value;
  }
}
