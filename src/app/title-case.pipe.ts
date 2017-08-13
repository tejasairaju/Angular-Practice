import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(!value)
    return null;
    let words:string[]=value.split(" ");
    
    for(let i=0;i<words.length;i++)
      {
        if(i>0 && this.prepositions(words[i]))
          {
            words[i]=words[i].toLowerCase();
          }
          else
            {
              words[i]=this.titleCase(words[i]);
            }
      }

      return words.join(" ");
  }
  private prepositions(word:string):boolean{
    let prepositions:string[]=["of","the"];
    return prepositions.includes(word.toLowerCase());
  }
  private titleCase(word:string):string{
    return word.substring(0,1).toUpperCase()+word.substring(1).toLowerCase();
  }
} 
