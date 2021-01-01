import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Question} from '../model/question.model';
import {map} from 'rxjs/operators';
import {Topic} from '../model/topic.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getQuestions(topicId: string): Observable<Question[]> {
    if (topicId !== undefined && topicId !== null && topicId !== '') {
      return this.firestore.collection('question',
        ref => ref.where('topicId', '==', topicId)).snapshotChanges()
        .pipe(map(q => q.map(question => question.payload.doc.data() as Question)));
    } else {
      return this.firestore.collection('question').snapshotChanges()
      .pipe(map(q => q.map(question => question.payload.doc.data() as Question)));
    }
  }

  getTopics(): Observable<Topic[]> {
    return this.firestore.collection('topic').snapshotChanges()
        .pipe(map(project => project.map(topic => topic.payload.doc.data() as Topic)));
  }
}
