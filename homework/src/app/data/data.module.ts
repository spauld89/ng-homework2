import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
const data: resortItem[] = [

];

export const products$: Observable<resortItem[]> = Observable.of(data)
  .delay(2000);
