﻿import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide, enableProdMode } from '@angular/core';

import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';
import {
	HashLocationStrategy,
	LocationStrategy
} from '@angular/common';

import { AppComponent } from './app.component';

enableProdMode();
bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy })
]);