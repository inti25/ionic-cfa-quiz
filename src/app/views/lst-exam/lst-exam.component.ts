import {Component, OnInit} from '@angular/core';
import {Topic} from '../../model/topic.model';
import {FirestoreService} from '../../sevice/firestore.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-lst-exam',
  templateUrl: './lst-exam.component.html',
  styleUrls: ['./lst-exam.component.scss'],
})
export class LstExamComponent implements OnInit {

  constructor(private firestoreService: FirestoreService, private localtion: Location) {
  }

  lstTopic: Topic[];

  ngOnInit(): void {
    this.firestoreService.getTopics().subscribe(topic => {
      this.lstTopic = topic;
      console.log(topic);
    });
  }

  back(): void {
    this.localtion.back();
  }
}
