import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  AfterViewChecked,
  AfterViewInit,
  Component,
  contentChild,
  ContentChild,
  ContentChildren,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  // any key value pair will be added to host element
  host: {
    // class:'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
  title = input.required<string>();
  @HostBinding('class') className = 'control';
  // @HostListener('click') clicked() {
  //   console.log('clicked.');
  // }

  private El = inject(ElementRef);
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;
  // private control =
  //   contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
  //     'input'
  //   );

  constructor() {
    afterRender(() => {
      console.log('AFTER RENDER');
    });
    afterNextRender(() => {
      console.log('AFTER NEXT RENDER');
    });
  }
  ngOnInit(): void {
    console.log('ON_INIT');
    console.log(this.control);
  }

  ngAfterViewInit(): void {
    // guaranteed view child
    console.log('AFTER VIEW INIT');
    console.log(this.control);
  }

  ngAfterContentInit(): void {
    console.log('AFTER CONTENT INIT');
    console.log(this.control);
  }

  onClick() {
    console.log('clicked');
    // console.log(this.El)
    console.log(this.control);
  }
}
