import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  question: string = '';
  @Input() points: number | undefined;


  ngOnInit() {

  }
}
