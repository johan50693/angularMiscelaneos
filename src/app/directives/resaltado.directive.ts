import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private er:ElementRef) { 
    console.log("directiva Resaltado");
    // er.nativeElement.style.backgroundColor="red";
  }

  @Input('appResaltado') nuevocolor: string;

  @HostListener('mouseenter') mouseentro(){
    // this.er.nativeElement.style.backgroundColor="red";
    this.resaltarColor( this.nuevocolor || 'blue');
  }
  @HostListener('mouseleave') mousesalio(){
    this.resaltarColor(null);
  }

  private resaltarColor( color:string){
    this.er.nativeElement.style.backgroundColor=color;
  }

}
