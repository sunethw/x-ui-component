import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `Hello`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
