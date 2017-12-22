import { Component, OnInit, Input, Output } from '@angular/core';
import {JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeapordy Lite';

  questionInfo;
  userResponse: string;
  playerTotalScore = 0;

  

  constructor(private jeopardyService: JeopardyService){}

  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
  }

  ngOnInit(){
    this.getDataFromService()
  }


  buttonClicked() {
    if (this.userResponse == this.questionInfo.answer){
      this.playerTotalScore = this.playerTotalScore + this.questionInfo.value
  } else if(this.userResponse != this.questionInfo.answer){
    this.playerTotalScore = this.playerTotalScore - this.questionInfo.value
  }

  }

  getNextQuestion() {
    this.jeopardyService.getQuestionInfo()
      .subscribe(
          questionInfo => {
              this.questionInfo = questionInfo[0];
          }
      )
            this.userResponse = "";
      }
}

