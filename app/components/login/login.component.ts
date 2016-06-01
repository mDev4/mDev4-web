import { Component, Output, EventEmitter } from '@angular/core';

import { DataService } from '../../services/data.service';
import { User } from '../../models/models';

@Component({
	selector: 'login',
	template: `
		<dialog class="mdl-dialog" open>
            <h4 class="mdl-dialog__title">Login Leerlingvolgsysteem</h4>
			<div class="mdl-dialog__content">
				<div class="mdl-tabs mdl-js-tabs">
					<div class="mdl-tabs__tab-bar">
						<a href="#login-panel" class="mdl-tabs__tab is-active">Login</a>
						<a href="#register-panel" class="mdl-tabs__tab">Registreer</a>
					</div>
					<div class="mdl-tabs__panel is-active" id="login-panel">
						<form #loginForm="ngForm" action="#" 
							(ngSubmit)="login(loginForm.value)"
							(keyup.enter)="login(loginForm.value)">
							<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
								<input #username class="form-control mdl-textfield__input" 
									type="text" id="username"
									ngControl="username" required >
								<label class="mdl-textfield__label" for="username">Username</label>
							</div>
							<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
								<input #password class="form-control mdl-textfield__input" 
									type="text" id="password"
									ngControl="password" required >
								<label class="mdl-textfield__label" for="password">Password</label>
							</div>
							<div [hidden]="loginStatus" class="alert">
								Vul de juiste gegevens in
							</div>
							<div class="mdl-dialog__actions">
				                <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Login</button>
				            </div>
						</form>
					</div>

					<div class="mdl-tabs__panel" id="register-panel">
						<form #accountForm="ngForm" action="#" 
							(keyup.enter)="newAccount(accountForm.value)"
							(ngSubmit)="newAccount(accountForm.value)">
							<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
								<input #username class="form-control mdl-textfield__input" 
									type="text" id="username"
									ngControl="username" required >
								<label class="mdl-textfield__label" for="username">Username</label>
							</div>
							<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
								<input #password class="form-control mdl-textfield__input" 
									type="password" id="password"
									ngControl="password" required >
								<label class="mdl-textfield__label" for="password">Password</label>
							</div>
							<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
								<input #clearance class="form-control mdl-textfield__input" 
									type="text" id="clearance"
									ngControl="clearance" required >
								<label class="mdl-textfield__label" for="clearance">Clearance</label>
							</div>
							<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
								<input #email class="form-control mdl-textfield__input" 
									type="email" id="email"
									ngControl="email" required >
								<label class="mdl-textfield__label" for="email">Email</label>
							</div>
							<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
								<input #phone class="form-control mdl-textfield__input" 
									type="number" id="phone"
									ngControl="phone" required >
								<label class="mdl-textfield__label" for="phone">Phone</label>
							</div>
							<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
								<input #first_name class="form-control mdl-textfield__input" 
									type="text" id="first_name"
									ngControl="first_name" required >
								<label class="mdl-textfield__label" for="first_name">First Name</label>
							</div>
							<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
								<input #last_name class="form-control mdl-textfield__input" 
									type="text" id="last_name"
									ngControl="last_name" required >
								<label class="mdl-textfield__label" for="last_name">Last Name</label>
							</div>
							<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
								<input #sex class="form-control mdl-textfield__input" 
									type="text" id="sex"
									ngControl="sex" required >
								<label class="mdl-textfield__label" for="sex">Gender</label>
							</div>
							<div [hidden]="accountStatus" class="alert">
								Vul de juiste gegevens in
							</div>
							<div class="mdl-dialog__actions">
				                <button type="submit" 
				                	class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Nieuw Account</button>
				            </div>
						</form>
					</div>
				</div>
            </div>
        </dialog>
	`,
    styles: [
	`
        .mdl-dialog {
            margin-top: 4em;
            width: 40em;
        }

        .mdl-textfield__input {
        	padding-left: 3px;
        }

        .mdl-textfield {
        	display: block;
        	margin: 0 auto;
        	width: 30em;
        }

		.alert {
			color: #de3226;
		}

		.mdl-tabs__tab-bar {
			border-bottom: none;
		}

		.mdl-textfield.is-invalid .mdl-textfield__input {
			border-bottom: 1px solid rgba(0,0,0,.12) !important;
		}

		.mdl-textfield.is-invalid.is-dirty .mdl-textfield__label::after {
			background-color: #d50000;
		}

		.mdl-textfield.is-invalid .mdl-textfield__label::after {
			background-color: transparent;
		}

		.mdl-textfield--floating-label.is-invalid .mdl-textfield__label {
		    color: rgba(0,0,0,.5);
		}

    `
    ]
})

export class LoginComponent {
	private loginStatus: boolean = true;
	private accountStatus: boolean = true;

	@Output() activeUser: EventEmitter<any> = new EventEmitter();

	constructor(private dataService: DataService) {}

	login(form: any): void {
		let body = JSON.stringify(form);
		this.dataService.userLogin(body)
			.subscribe(data => {
				if (data.error) {
					this.loginStatus = false;
				} else {
					localStorage.setItem('userId', data.id);
					this.activeUser.emit(data);
				}
			});
	}

	newAccount(form: any): void {
		let body = JSON.stringify(form);
		this.dataService.userLogin(body)
			.subscribe(data => {
				if (data.error) {
					this.accountStatus = false;
				} else {
					localStorage.setItem('userId', data.id);
					this.activeUser.emit(data);
				}
			});
	}
}