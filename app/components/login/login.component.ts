import { Component, Output, EventEmitter } from '@angular/core';

import { User, DataService } from '../core/data.service';

@Component({
	selector: 'login',
	providers: [DataService],
	template: `
		<dialog class="mdl-dialog" open>
            <h4 class="mdl-dialog__title">Login Leerlingvolgsysteem</h4>
            <div class="mdl-dialog__content">
                <p>
                    Allowing us to collect data will let us get you the information you want faster.
                </p>
				<form action="#" (keyup.enter)="login(username.value, password.value)">
					<div class="form-group mdl-textfield">
						<label for="username">Username</label>
						<input #username class="form-control mdl-textfield__input" 
							type="text" id="username"
							ngControl="username" required>
					</div>
					<div class="form-group mdl-textfield">
						<label for="password">Password</label>
						<input #password class="form-control mdl-textfield__input" 
							type="password" id="password" 
							ngControl="password" required>
					</div>
					<div [hidden]="loginStatus" class="alert">
						Vul de juiste gegevens in
					</div>
				</form>
            </div>
			<div class="mdl-dialog__actions">
                <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" (click)="login(username.value, password.value)">Login</button>
                <button type="button" class="mdl-button">Nieuw account</button>
            </div>
        </dialog>
	`,
    styles: [
	`
        .mdl-dialog {
            margin-top: 10em;
            width: 40em;
        }

        .mdl-textfield__input {
        	padding-left: 3px;
        }

        .ng-valid[required] {
			border-left: 5px solid #42A948; /* green */
		}

		.ng-invalid {
			border-left: 5px solid #a94442; /* red */
		}

		.alert {
			color: #de3226;
		}
    `
    ]
})

export class LoginComponent {
	private loginStatus: boolean = true;

	@Output() activeUser: EventEmitter<any> = new EventEmitter();

	constructor(private dataService: DataService) {}

	login(username, password) {
		let body = JSON.stringify({ username, password });
		console.log(body);
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
}