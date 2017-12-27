import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score-game',
  templateUrl: './score-game.component.html',
  styleUrls: ['./score-game.component.css']
})
export class ScoreGameComponent implements OnInit {

  //scoring
  userResponse: string;
  playerTotalScore = 0;

  @Output() answerHasBeenScored = new EventEmitter();

  @Input () questionInfo;

  buttonClicked() {
    if (this.userResponse == this.questionInfo.answer){
      this.playerTotalScore = this.playerTotalScore + this.questionInfo.value
  } else if(this.userResponse != this.questionInfo.answer){
    this.playerTotalScore = this.playerTotalScore - this.questionInfo.value
  }
  this.answerHasBeenScored.emit();
  this.userResponse = "";

  }


  constructor() { }

  ngOnInit() {
  }

}
