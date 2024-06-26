import {
  Component,
  EventEmitter,
  Output,
  computed,
  input,
  output,
} from '@angular/core';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Old way
  // @Input({required:true}) selectedUser!:User;

  // old way
  //@Output() userOutput = new EventEmitter();
  userOutput = output<string>(); // not signal related, it just easier way to emmit output

  // new approach
  selectedUser = input.required<User>(); // read only you can't set value

  imagePath = computed(() => `users/${this.selectedUser().avatar}`);

  // get imagePath(){
  //   return `users/${this.selectedUser().avatar}`;
  // }

  protected onSelectUser() {
    this.userOutput.emit(this.selectedUser().id);
  }
}
