import { Route } from '@angular/router';
import { Viewer } from './features/viewer/viewer';

export const appRoutes: Route[] = [
  { path: '', component: Viewer },
  { path: '**', redirectTo: '' },
];
