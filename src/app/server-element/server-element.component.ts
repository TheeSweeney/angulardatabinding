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
  OnDestroy,
  ViewChild,
  ElementRef
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
  @ViewChild('heading') header: ElementRef;

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
    console.log("text content: ", this.header.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(){
    console.log("ngAfterContentInit")
    console.log("after view init text content: ", this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterContentChecked')
  }

  ngOnDestroy(){
    console.log('something was destroyed')
  }
}
