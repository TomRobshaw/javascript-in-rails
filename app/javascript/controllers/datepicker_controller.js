import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";

// Connects to data-controller="datepicker"
export default class extends Controller {

  static targets = ["opening_date"]

  connect() {
    console.log("value of target:", this.element)
    flatpickr(this.element)
  }
}
