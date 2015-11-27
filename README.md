# Monkberry Events

Add events handling to monkberry views.

## Install

```
npm install monkberry-events --save
```

## Usage

```js
import monkberry from 'monkberry';
import 'monkberry-events';

var view = monkberry.render('template');
 
view.on('click', '.button', (event) => ...);
```

Monkberry events is using [dom-delegate](https://github.com/ftlabs/ftdomdelegate) library.
