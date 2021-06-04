import { Component } from '@angular/core';
import { filter } from 'rxjs/operators'
import { Lambda } from '../app/services/lambda'

interface taskModel{
  ID:string
  task:string
  value?:number
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  tasksitem!:taskModel
  title = 'Task Manager';

  constructor(private lambda:Lambda){
    this.lambda.url('https://aj959vq0i9.execute-api.us-east-1.amazonaws.com/manage')
  }
  async getcall(){
    this.tasksitem = await this.lambda.run("")
    console.log(this.tasksitem)
  }

}
