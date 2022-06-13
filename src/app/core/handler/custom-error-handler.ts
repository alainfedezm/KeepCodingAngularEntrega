import { ErrorHandler } from "@angular/core";
import { ControlatedError } from "@core/models/controlated-error.model";

export class CustomErrorHandler implements ErrorHandler{

  handleError(error: ControlatedError): void {
    console.log(error.message);
  }

}
