import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
/**
 * This is our component file of button component
 */
@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent implements OnInit {
  /**
   * This is an input from the parent class containig a label for our button
   */
  @Input() label: string;
  /**
   * This in an output from child class to parent class after the button is clicked
   */
  @Output() button = new EventEmitter();

  /**
   * This is our constructor
   */
  constructor() {}
  /**
   * This function is implemented by the button component class
   */
  ngOnInit(): void {}
  /**
   *This function is called when the button is clicked.
   */
  onClick() {
    this.button.emit();
  }
}
