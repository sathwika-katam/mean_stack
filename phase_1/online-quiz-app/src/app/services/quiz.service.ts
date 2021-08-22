import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../quiz/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  urlLocation = 'assets/questions.json';

  constructor(private http: HttpClient) { }

  getQuestions():Observable<Quiz[]>{  
      
    return this.http.get<Quiz[]>(this.urlLocation);
  }

}
