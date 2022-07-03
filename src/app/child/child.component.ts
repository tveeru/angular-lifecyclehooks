import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges, OnInit {
  @Input() passInp: string;

  count: number = 0;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    console.log(changes);
  }

  // ngOnchanges(changes: SimpleChanges) {
  //   console.log('OnChanges');
  // }

  ngOnInit() {}
}
