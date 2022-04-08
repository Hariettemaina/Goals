import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal } from '../goal'
@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  
  @Input() goal:Goal
  @Output() isDelete = new EventEmitter<boolean>();

  goalDelete(delete1:boolean){
    this.isDelete.emit(delete1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
