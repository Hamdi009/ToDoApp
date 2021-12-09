import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate: string;
  myTask: string;
  addTask: boolean;
  tasks = [];

  constructor(
    public angularFB: AngularFireDatabase,
  ) {
    const date = new Date();
    const opt = {weekday: 'long', month: '2-digit', day: '2-digit'} as  const;
    this.currentDate = date.toLocaleDateString('fr-FR',opt);
    this.getTasks();
  }

  addTaskToFireBase(){
    this.angularFB.list('Tasks/').push({
      text: this.myTask,
      date: new Date().toISOString(),
      checked: false
    });
    this.showForm();
  }

  showForm(){
    this.addTask = !this.addTask;
    this.myTask = '';
  }

  getTasks(){
    this.angularFB.list('Tasks/').snapshotChanges(['child_added','child_removed']).subscribe(actions=>{
      actions.forEach(action=>{
        console.log('Task: '+ action.payload.exportVal().text);
        this.tasks.push({
          key: action.key,
          date:action.payload.exportVal().date.substring(11,16),
          text: action.payload.exportVal().text,
          checked: action.payload.exportVal().checked
        });
      });
    });
  }

  changeCheckState(task: any){
    this.angularFB.object('Tasks/' + task.key + '/checked').set(task.checked);
  }
  deleteTask(task: any){
    this.angularFB.list('Tasks/').remove(task.key);
  }

}
