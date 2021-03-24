import { environment } from '../environments/environment';
import { RoutesPaths } from './app-routing.config';
import { NavigationItem } from './core/components/navigation/navigation.models';

export const APP_NAVIGATION_CONFIG: NavigationItem[] = [
  {
    label: 'Home',
    path: [ RoutesPaths.root ],
  },
  {
    label: 'Quotes list',
    path: [ RoutesPaths.quotes ],
  },
  {
    label: 'Add quote',
    path: [ RoutesPaths.quotes, RoutesPaths.new ],
    isDisabled: !environment.apiUrls.quote,
  },
];
