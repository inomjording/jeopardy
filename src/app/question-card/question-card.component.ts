import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  @Input() question: string = '';
  @Input() answer: string = '';
  @Input() points: number | undefined;


  ngOnInit() {

  }
}

export type cardState = 'idle' | 'question' | 'answer' | 'invisible' ;
