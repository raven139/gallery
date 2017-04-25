import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app works!';

  // Event declaration
  userClicked = new EventEmitter<any>();

  // Event subscription
  subscription: any;

  ngOnInit() {
    // Subscribe to event
    this.subscription = this.userClicked.subscribe(user => this.onUserClicked(user));
  }

  // Something action that emits event
  onButtonClicked(user: any) {
    // Emitting event
    this.userClicked.emit(user);
  }


  // Event handler
  onUserClicked(user: any) {
    console.log(JSON.stringify(user));
  }

  ngOnDestroy() {
    // Unsubscribe from event
    this.subscription.unsubscribe();
  }
}
