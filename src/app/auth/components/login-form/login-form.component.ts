import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { take, tap } from 'rxjs/operators';

import { AuthService } from '../../services';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  isLoading$ = this.authService.isLoading$;

  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    if (this.authService.authDataValue) {
      this.router.navigate([ '/' ]);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', [ Validators.required, Validators.minLength(6) ]),
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams[ 'returnUrl' ] || '/';
  }

  onSubmit(): void {
    const userData = this.loginForm.value;

    this.authService.login(userData).pipe(
      take(1),
      tap(() => this.router.navigate([ this.returnUrl ])),
    ).subscribe();
  }
}
