import { Component, OnInit, AfterViewInit, ElementRef } from "@angular/core";
import { Validators } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { TokenStorageService } from "src/app/auth/token-storage.service";
import { InputInfo } from "src/app/component/componentModel/input-info";
import { LoginInfo } from "src/app/models/login-info";
import { NzMessageService } from "ng-zorro-antd/message";
/**
 * These are the components of our login component
 */
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
/**
 * This is the Login Component class which contains all of its functionalities
 */
export class LoginComponent implements OnInit, AfterViewInit {
  /**
   * This is an initialization of an empty array of the type InputInfo
   */
  inputInfo: InputInfo[] = [];
  /**
   * This is a flag to check whether the data coming from the child class has any error or not.
   */
  changeFlag = false;
  /**
   * This is boolean type flag to check whether the user logged in.
   */
  isLoggedIn = false;
  /**
   * This is the initializationof a public object of the model LoginInfo
   */
  public loginInfo = new LoginInfo();

  /**
   * This is a default method of the class that is executed when the class is
   * instantiated and ensures proper initialisation of fields in the class and its subclasses.
   * @param elementRef This is used for changing background color
   * @param Jarwis This connects Backend with Frontend
   * @param tokenStorage This stores data of the user login
   * @param message This is used to generate message
   */

  constructor(
    private elementRef: ElementRef,
    private Jarwis: AuthService,
    private tokenStorage: TokenStorageService,
    private message: NzMessageService
  ) {}

  /**
   * This runs when module is loaded and checks whether the logged in or not and call generateFormData
   */

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }

    this.generateFormData();
  }
  /**
   * Changes Background color
   */
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      "#fff";
  }
  /**
   * This function reloads the page after the req is send and process is complete
   */
  reloadPage() {
    window.location.reload();
  }
  /**
   * This function sends the data gained from user to backend
   * @returns
   */
  onSubmit() {
    this.changeFlag = !this.changeFlag;
    let errorFlag = this.inputInfo.find((item) => item.errorFlag == true);
    if (errorFlag) {
      return;
    }
    this.Jarwis.attemptAuth(this.loginInfo).subscribe(
      (data) => this.handleData(data, "success"),
      (error) => this.handleError(error, "error")
    );
  }
  /**
   * This is a function to handle data coming from backend and has two para meters.It also contains the message of success if it succeeded.
   *
   * It also calls the function to reload page.
   * @param data this is the data coming from backend
   * @param type this is the message parameter
   */
  handleData(data, type) {
    this.tokenStorage.saveToken(data.accessToken);
    this.tokenStorage.saveEmail(data.email);
    this.isLoggedIn = true;
    this.message.create(type, `This is a message of`);

    this.reloadPage();
  }

  /**
   * In case something went wrong with our request this fucntion is called to handle it
   * @param error This is the problem that occured with our request
   * @param type This tells the type of the msg to be shown
   */
  handleError(error, type) {
    console.log(error.error.reason);
    this.message.create(type, error.error.reason);
  }

  /**
   * This function validators and error messages for our login information.
   */
  generateFormData() {
    this.createInput("email", "email", "text", [
      {
        type: Validators.required,
        msg: "You must enter your Email Address",
      },
      {
        type: Validators.email,
        msg: "You must enter valid Email Address",
      },
    ]);
    this.createInput("password", "password", "text", [
      {
        type: Validators.required,
        msg: "You must enter your Password",
      },
    ]);
  }

  /**
   * This functions takes multiple parameters and save them in an object of inputInfo
   *
   * @param label This is the name of the text boxes
   * @param inputType This tells us the context of the content i.e email, password etc
   * @param type This tells us the type of input i.e text, number, symbols etc
   * @param validatorsInfo This is an object of a model which contains validators type and message
   */
  createInput(label, inputType, type, validatorsInfo) {
    let inputObj = new InputInfo();
    inputObj.label = label;
    inputObj.inputType = inputType;
    inputObj.type = type;
    inputObj.validatorsInfo = validatorsInfo;
    this.inputInfo.push(inputObj);
  }

  /**
   * This function updates the data on the login page if any change is made
   *
   * @param value This is the new value provided by the user
   * @param label This is the variable that passes along the value
   */
  updateData(value, label) {
    this.loginInfo[label] = value;
  }
}
