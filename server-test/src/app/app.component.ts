import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import { BackServiceService } from './back-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public form!: FormGroup;
  public name = new FormControl('', Validators.required);
  public age = new FormControl('', Validators.required);
  public users: any[] = [];

  public destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private appService: BackServiceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: this.name,
      age: this.age,
    })
  }

  onSubmit() {
    this.appService.addUser(this.form.value).pipe(take(1)).subscribe();
  }

  getAllUsers() {
    this.appService.getUsers().pipe(
      take(1))
      .subscribe((users: any) => {
        this.users = [...users];   
      });
  }
}
