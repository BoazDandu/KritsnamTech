import { Component } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service'
@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent {

  constructor(
    public authService: AuthService
  ){}

}
