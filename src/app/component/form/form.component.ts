import { Component, OnInit } from "@angular/core";
import { Fieldset } from "src/app/model/fieldset.model";
import dynamicForm from "../../../assets/Json/fieldsets.json";
import { FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  fieldsets: Fieldset[] = dynamicForm.campos.sort(this.compare);
  userProfile = new FormGroup({});
  constructor(private route: Router) {}

  ngOnInit(): void {
    dynamicForm.campos.map((input) => {
      this.userProfile.addControl(
        input.name,
        new FormControl("", Validators.required)
      );
    });
  }
  compare(a: Fieldset, b: Fieldset) {
    if (a.ordem < b.ordem) return -1;
    if (a.ordem > b.ordem) return 1;
    return 0;
  }
  onSubmit() {
    console.log(this.userProfile.value);
    // this.route.navigate("/dashboard");
  }
}
