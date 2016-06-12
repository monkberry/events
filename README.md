# Monkberry Events

Add events handling to monkberry views.

## Install

```
npm install monkberry-events --save
```

## Usage

```js
import Monkberry from 'monkberry';
import 'monkberry-events';

var view = Monkberry.render(Template, document.body);
 
view.on('click', '.button', (event) => ...);
```

Monkberry events is using [dom-delegate](https://github.com/ftlabs/ftdomdelegate) library.
