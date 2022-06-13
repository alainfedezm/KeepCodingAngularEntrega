import { OutputTypes } from "@core/enums/output-types.enum";
import { Model } from "@core/interfaces/model.interface";

export class ControlatedError extends Error implements Model{

  id?: number | undefined;
  title!:string;
  output!: OutputTypes;
  constructor(
    mensaje:string= '' ,
    title:string ="Error Inesperado",
    output: OutputTypes =  OutputTypes.MODAL,
    ){
    super(mensaje);
    this.title = title;
    this.output = output;

  }
  serialize(){
    return {}
  };

}
