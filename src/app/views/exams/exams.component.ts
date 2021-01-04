import {Component, OnInit} from '@angular/core';
import {FirestoreService} from '../../sevice/firestore.service';
import {Question} from '../../model/question.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss'],
})
export class ExamsComponent implements OnInit {

  constructor(private firestoreService: FirestoreService, private activatedRoute: ActivatedRoute) {
  }

  questions: Question[];
  currentQuestion: Question = null;
  topicId: string;
  currentIndex = 0;
  answerIndex = -1;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.topicId = params.topicId;
      console.log('topicId = ', params.topicId);
      this.getQuestion();
    });
    if (this.questions === undefined || this.questions === null) {
      this.questions = [];
    }
  }

  getQuestion(): void {
    this.firestoreService.getQuestions(this.topicId).subscribe(ques => this.questions = ques);
  }

  start(): void {
    this.currentQuestion = this.questions[this.currentIndex];
    console.log('this.currentQuestion', this.currentQuestion);
    this.currentIndex++;
    this.answerIndex = -1;
  }

  selectAnswer(index) {
    this.answerIndex = index;
  }

}
