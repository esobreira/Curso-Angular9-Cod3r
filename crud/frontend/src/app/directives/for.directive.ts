import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// Diretiva Estrutural 

@Directive({
  selector: '[meuFor]'
})
export class ForDirective implements OnInit {

  @Input('meuForEm') numbers: number[]

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, {
        $implicit: number
      })
    }
    console.log(this.numbers);
  }

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {

  }

}
