import { ValidatorsInfo } from "./validators-info";
/**
 * This is an export class of input info
 */
export class InputInfo {
  /**
   * it is a variable of type string
   */
  label: string;
  /**
   * it is a variable of type string
   */
  type: string;
  /**
   * it is a flag of type boolean
   */
  errorFlag = false;
  /**
   * it is a variable of type string
   */
  inputType: string;
  /**
   * it is an empty array of model validators info
   */
  validatorsInfo: ValidatorsInfo[] = [];
}
