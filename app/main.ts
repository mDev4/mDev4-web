import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide, enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { DataService } from './services/data.service';
import { SharedService } from './services/shared.service';

import { AppComponent } from './app.component';

enableProdMode();
bootstrap(AppComponent, [
	DataService, 
	SharedService,
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {
		useClass: HashLocationStrategy
	})
]);