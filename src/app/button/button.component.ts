import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() : void {
    this.notify.emit()
  }

}
