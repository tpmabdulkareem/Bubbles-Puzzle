// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-puzzle-game',
//   templateUrl: './puzzle-game.component.html',
//   styleUrls: ['./puzzle-game.component.scss']
// })
// export class PuzzleGameComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }
//   allowDrop(ev) {
//     ev.preventDefault();
//   }
//   drag(ev) {
//     ev.dataTransfer.setData("src", ev.target.id);
//   }

//   drop(ev) {
//     ev.preventDefault();
//     var src = document.getElementById(ev.dataTransfer.getData("src"));
//     var srcParent = src.parentNode;
//     var tgt = ev.currentTarget.firstElementChild;

//     ev.currentTarget.replaceChild(src, tgt);
//     srcParent.appendChild(tgt);
//   }

// }
import { Component, OnInit } from '@angular/core';
export interface image{
  pos:number;
  imageurl:string;
}

 @Component({
    selector: 'app-puzzle-game',
    templateUrl: './puzzle-game.component.html',
    styleUrls: ['./puzzle-game.component.scss']
  })



export class PuzzleGameComponent implements OnInit {
 


     public images:image[] = [
   {pos: 1, imageurl: 'assets/img1.png'},
   {pos: 2, imageurl: 'assets/img2.png'},
   {pos: 3, imageurl: 'assets/img3.png'},
   {pos: 4, imageurl: 'assets/img4.png'}
 ];





 ngOnInit() {
  var currentIndex = this.images.length, temporaryValue, randomIndex;
 
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
 
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
 
    // And swap it with the current element.
    temporaryValue = this.images[currentIndex];
    this.images[currentIndex] = this.images[randomIndex];
    this.images[randomIndex] = temporaryValue;
 
 }

 }
allowDrop(ev) {
  ev.preventDefault();
}
drag(ev) {
  ev.dataTransfer.setData("src", ev.target.id);
}

drop(ev) {
  ev.preventDefault();
  var src = document.getElementById(ev.dataTransfer.getData("src"));
  var srcParent = src.parentNode;
  var tgt = ev.currentTarget.firstElementChild;
var c=0;
  ev.currentTarget.replaceChild(src, tgt);
  srcParent.appendChild(tgt);
  var currentIndex = this.images.length;
  // while( currentIndex!== 0)
  // {
  //   console.log("index",currentIndex);
  //   if((currentIndex=1) || (currentIndex=3) || (currentIndex=2) || (currentIndex=4))
  //   {
  //    c=c+1
  //   }
  //   currentIndex-= 1;
  //   if(c==4)
  //   {
  //     console.log("succes");
  //   }
    
  // }
}

}