import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  alternateColor = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;



  gutterCheck(width, height) {
    if (width > 260000 || width < 0 || height < 0 || height > 340000) {
      this.alternateColor = 'orange';
    } else {
      this.alternateColor = 'blue';
    }
  }
  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.alternateColor = 'blue';
      let movement= parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled=false;
    }
  }
  handleLanding(rocketImage) {
    window.confirm('The shuttle is landing. Landing gear engaged.');
    this.message = "The shuttle has landed.";
    this.alternateColor="green";
    this.height=0;
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled=true;
  }
  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure that you want to about mission?');
    if(result){
      this.message="Mission Aborted";
      this.alternateColor="red"
      this.height=0;
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled=true;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    } else if (direction === 'up') {
      let movement= parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    } else if (direction === 'down') {
      let movement= parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
    this.gutterCheck(this.width,this.height);
  }


}
