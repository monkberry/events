import Monkberry from 'monkberry';
import { Delegate } from 'dom-delegate';

Monkberry.prototype.on = function (eventType, selector, handler, useCapture = undefined) {
  if (!this.delegates) {
    this.delegates = [];
    this.nodes.forEach((node, i) => {
      if (node.nodeType === 8) {
        throw 'Can not use event delegating with non-element nodes on first level.';
      }

      this.delegates[i] = new Delegate(node)
    });
  }

  this.delegates.forEach((delegate) => delegate.on(eventType, selector, handler, useCapture));
};

Monkberry.prototype.off = function (eventType = undefined, selector = undefined, handler = undefined, useCapture = undefined) {
  this.delegates.forEach((delegate) => delegate.off(eventType, selector, handler, useCapture));
};

