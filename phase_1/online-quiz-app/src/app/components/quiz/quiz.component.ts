import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../quiz/quiz';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  totalAnswered: number = 0;
  correctAnswer: number = 0;

  showResult:boolean = false;

  quiz:Quiz[] = [];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe(data =>{
      this.quiz = data;  
    });
  }

  submitQuiz(){
    this.totalAnswered = 0;
    this.correctAnswer = 0;

    for(let i = 0; i < this.quiz.length; i++){
      
      if("selected" in this.quiz[i] && (this.quiz[i]["selected"] != null)){
        this.totalAnswered++;
      }
      if(this.quiz[i]["selected"] === this.quiz[i]["answer"]){
        this.correctAnswer++;
      }
    }
    this.showResult = true;
  }

}
