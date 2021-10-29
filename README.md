# Functional Programming: "JS Functional mindset"


> "Everyone should go back to COBOL! Make America Procedural Again!" ~ @anonymous


A large program is a costly program, and not just because of the time, it takes to build. Size almost always involves complexity, and complexity could confuse programmers. Confused programmers, in turn, tend to introduce mistakes (bugs) into programs. Functional Programming can help to make the code predictable and easy to debug, abstract control flows and operations on data with functions.

`Functional Programming` is about pulling programs apart and reassembling them from the same parts, abstracted behind function boundaries, but it's not a matter of just applying functions to come up with a result; the goal, rather, is to abstract control flows and operations on data with functions in order to avoid side effects and reduce mutation of state in your application.

Functional Programming it is not new, but becomes more popular these days, because lies at the heart of both of the dominant frameworks out there: <br/>
<br/>

#### Frameworks and Libraries
ReactJS and Angular (AngularJS and VueJS not covered here) are the most popular library and framework according to latest Google trends:

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/wgari087tuw293mbi767.png)* Data years 2019


---

## Functional Programming from ReactJS and Angular POV:
Functional Programming is not new but becomes more popular these days because of lies at the heart of both of the dominant frameworks in the market:

<sub><sub><em>Disclaimer: This is a just a brief point-of-view about the most obvious function programming influences inside these two tools. It will be definitely a lot more functional programming methodologies if we continue digging deeper, we are just scratching the surface.</em></sub></sub>

---

#### First let's recap about what are the Redux principles:

##### Three Principles

<u>Redux can be described in three fundamental principles:</u>
* Single source of truth:
The state of our whole application is stored in an object tree within a single store.

* The state is read-only:
The only way to change the state is to emit an action, an object describing what happened.

* Changes are made with pure functions: 
To specify how the state tree is transformed by actions, we write pure reducers.


* Further information: https://redux.js.org/introduction/three-principles


### ReactJS:

* Using "immutability" as a principle and avoiding shared mutable DOM is the motivation for its architecture and unidirectional data flow. 
</br> 
* Using immutability "read-only props" (inputs argument of a Component granting immutability and avoiding side-effects), we can also re-enforce the concept of immutability using Facebook's immutability.JS, let's remember that const declaration protects against reassignment but not against mutation.

<br/>
* `The react-redux connect() function is a purely "curried"` one *0
<br/>
* `Using "memoization" to cache the results of a component render() method`, or simply the returned JSX of a functional component, so Memoization can be applied to both class and functional components, the feature is implemented has HOCs and React Hooks, using class base component .setState(previousState: {}, props: {}) to manage the state and avoid state mutations. 
* Even more after `React 16.8+ there we can use React Hooks that includes several 'use*' allow us to add functionality to functional components` instead Class base components like: 

```javascript
useState(currentState: {}, newState: {}) ) 
```
<br>
* `React's development guidelines promote the creation of stateless component` so this should grant that the output of a component only depends on its 'props'. 
`A "stateless" component looks a lot like a "pure function"`, and indeed it is. So, as we can see React promotes more Functional-Oriented than Object-Oriented practices *2 
<br/>
- `React have unidirectional data flow`, but 2-way data binding can be achieved 

```javascript
<input onChange(props: changed) value(props.name) />
```

* React also have a commonly used lifecycle method: render()
```javascript
// class component
class MyComponent extends Component {
  state = {};

  render() { // pure function
    const { contact } = this.props;
    return (
      <div className="card card-body mb-3" >
        <ul className="list-group">
          <li className="list-group-item">{contact.email}</li>
          <li className="list-group-item">{contact.location}</li>
        </ul>
      </div>
    )
  }
}
```
<br />


### Angular: 

- `Have unidirectional data flow as well.` It has the option of [()] two-way data binding but it is not encouraged because of performance could becoming an issue as applications grew, and keeping track of the data flow could be an even bigger problem.
<br/>
- `Strict immutability`: Angular gives us the option to utilize a centralized state tree with effortless cooperation of change detection property in the @Component decorator of ChangeDetectionStrategy property, by setting the .onPush() instead of the pre-defined .default() change detection strategy we are signing a contract with Angular that obliges us to work with immutable objects, so we explicitly telling Angular that our component only depends on its inputs and all of them are immutables.

```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // OnPush strategy
})
export class AppComponent {
    constructor(){}
}
```
`Like React, we can also re-enforce the concept of immutability` using Facebook's immutability.JS, let's remember that 'const' declaration protects against reassignment but not against mutation.
<br/>
* `Angular give us the chance to cache results of the pure pipes.` In fact, all pipes in Angular are pure by default.
Pure pipes like are like pure functions: They produce the same output when invoked with the same set of arguments. Such pipes hold the referential transparency property.
<br/>
* `Using RxJS is a library of utility operators that act on streams by way of Higher-order-Functions`, its used extensively throughout Angular, but Angular API is highly influenced by OOP ideas and less influenced by FP ideas, but according to "Alan Kay", the investigator for all modern OOP, "The essence of OOP is: Encapsulation and Message Passing. So OOP is just another approach to "avoiding sharing mutable state and side-effects".
<br/>
* `We already have RxJS reactive extensions bundled up in our Angular application.` Embracing their power will allow us to use the principles of Redux without having the need to introduce specific terminologies like actions and reducers.
* `We have data-pipeline, we use the "pipable"` operators that are provided by the RxJS library to transform data from producer to consumer by using functional programming.

```javascript
import { from } from './rxjs';
import { map } from './rxjs';

const fooValues = [{ n:1, n:2, n:3}]

from(fooValues)
  .pipe(map(({n}) => n)) // data-pipeline
  .subscribe(x => console.log(x));
```

<br/>
* As we already mention. `Redux the core counts similar principle`. 

* Redux & Context API: If you just want to pass data through your application, React's Context API does a pretty great job.
On a small application, Redux's formalism may be overkill. However, Redux really shines when we get some of the side effects and debugging starts to become a routine task.

Redux, keeps a record of every change to your data (Reducer), allowing you to essentially "travel back in time" to see what caused your bug.

To achieve this it uses the Immutability. Redux organize the application state into simple objects and update this read-only state by replacing it with a new state (no mutate). 
<br/>
* @ngrx/store is an RxJS stream, is a Redux implementation for Angular. Implements the Redux architectural pattern and principles using the well-known RxJS observables of Angular.
<br/>
* Now, if we extend a bit Angular to enterprise levels: We can pick up Angular, RxJS and Redux (@ngrx/store *1), we will actually encounter key functional concepts at the core of what we learn: "pure functions", "immutability", "state", "mutation", "composition" or "reactive". We like more the idea of triggering "actions" that will invoke a "reducer" (pure and immutable function) and/or "@Effect" (impure Class) in Redux than invoking a method in a Service Class in Angular. 
* Following the idea of using Redux: This model of data flow aligns well with the architecture of React and especially well with an application designed using the ideas of Flux.

<br />
<br />
<br />

In fact, and just to finish it, other popular frameworks like VueJS, which use Vuex (similar to Redux) use the "mutate" the state in a predictable fashion way, it has a reactive state which means that we can modify the state in an imperative way.

<br />
<br />
<br />

*0 [react-redux.js.org](https://react-redux.js.org/api/connect)<br />
*1 [Redux (@ngrx/store) best practices](https://blog.strongbrew.io/Redux-best-practices/)<br />
*2 [So What About Inheritance?](https://reactjs.org/docs/composition-vs-inheritance.html#so-what-about-inheritance)<br />
*3 [Facebook immutable-js](https://github.com/immutable-js/immutable-js)

---

#### Conclusion

`Functional Programming becomes, for very good reasons, an important trend to learn and it relies on the essence of the most popular frameworks`, and` this becomes even more obvious` when the application starts escalating `to an enterprise-level` and complexity and number of components that communicates and interact each-other requires communication across remote-siblings relying on having the same updated and unique data.


### Workshop/Presentation:
https://tech.io/playgrounds/24002/fp-workshop</br>

---

### Further Functional Programming information:

* Goodbye, OOP
https://medium.com/@cscalfani/goodbye-object-oriented-programming-a59cda4c0e53

* BOOKS:
Mostly Adequate Guide to Functional Programming
https://mostly-adequate.gitbooks.io/mostly-adequate-guide/

* Thinking in Ramda (R)
http://randycoulman.com/blog/categories/thinking-in-ramda/

* Professor Frisby Introduces Composable Functional JavaScript
https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript

* Functors, Applicatives, And Monads In Pictures
http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html

* Essential Functions Support
https://mostly-adequate.gitbooks.io/mostly-adequate-guide/appendix_a.html

* Functional Programming HOWTO
https://docs.python.org/3/howto/functional.html

* Master the JavaScript Interview: What is Functional Programming?
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0

* JavaScript Functional Programming Cookbook (ES6)
https://github.com/js-functional/js-funcional

* Functional Programming in Javascript
http://reactivex.io/learnrx/

* Functional Programming with ECMAScript6
http://www.zsoltnagy.eu/functional-programming-with-es6/

* Functional Programming in JavaScript
https://tech.shutterstock.com/2016/04/20/functional-programming-in-javascript/

* Thinking Functionally with JavaScript
https://www.slideshare.net/LuisAtencio3/thinking-functionally-with-javascript

* functional programming
https://www.slideshare.net/LuisAtencio3/379008rc217functionalprogramming

* functional-programming-for-the-advanced-beginner
https://www.slideshare.net/LuisAtencio3/functional-programming-for-the-advanced-beginner

* functional-programming-in-javascript (browsable book, exercises and code)
https://livebook.manning.com/#!/book/functional-programming-in-javascript/chapter-1/10

* Functional vs Imperative Patterns in JavaScript
https://dev.to/joelnet/functional-vs-imperative-patterns-in-javascript-505h


---
### :100: <i>Thanks!</i>
#### Now, don't be an stranger. Let's stay in touch!

> I'm a passionately curious Front-end Engineer. I like sharing what I know, and learning what I don't. London, UK.

##### :radio_button: linkedin: <a href="https://www.linkedin.com/in/leolanese/" target="_blank">@LeoLaneseltd</a>
##### :radio_button: Twitter: <a href="https://twitter.com/LeoLaneseltd" target="_blank">@LeoLaneseltd</a>
##### :radio_button: Portfolio: <a href="https://www.leolanese.com" target="_blank">www.leolanese.com</a>
##### :radio_button: DEV.to: <a href="https://www.dev.to/leolanese" target="_blank">dev.to/leolanese</a>
##### :radio_button: Blog: <a href="https://www.leolanese.com/blog" target="_blank">leolanese.com/blog</a>
##### :radio_button: Questions / Suggestion / Recommendation: developer@leolanese.com



