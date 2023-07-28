import {Component, Input} from '@angular/core';
import {AnswerType} from "../../types/answer.type";

@Component({
  selector: 'answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})

export class AnswersComponent {

  @Input() answer: AnswerType;
  @Input() i: number;

  constructor() {
    this.answer = {
      title: '',
      body: ''
    }
    this.i = 0;
  }

  showAnswer() {
    let answer = document.getElementById(`accordion-${this.i}`);
    if (answer) {
      const attr = answer.style.display;
      if (!attr || attr === 'none') {answer.style.display = 'flex'} else {answer.style.display = 'none'}
    }
  }
}
