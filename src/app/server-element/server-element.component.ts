import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

  constructor() { 
    console.log("constructor")
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }

  ngOnInit() {
    console.log('onInit')
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(){
    console.log("ngAfterContentInit")
  }

  ngAfterViewChecked(){
    console.log('ngAfterContentChecked')
  }

  ngOnDestroy(){
    console.log('something was destroyed')
  }
}
