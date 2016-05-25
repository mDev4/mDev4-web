/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
import { provide } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS } from 'angular2/router';
import {
	HashLocationStrategy,
	LocationStrategy
} from 'angular2/platform/common';

import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy })
]);