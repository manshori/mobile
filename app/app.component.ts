import {Component} from "@angular/core";
import { Page } from "ui/page";


@Component({
  selector: "minds-native-app",
  templateUrl: "app.component.html",
  styleUrls: ['app.component.css']
})

export class MindsNativeApp {

  constructor(page : Page){
    page.actionBarHidden = true;
  }

  selectedIndex = 1;

  changedIndex(index){
    console.log(index);
  }
}
