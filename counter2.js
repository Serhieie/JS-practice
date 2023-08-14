const CounterPlugin = function ({ rootSelector, initialValue = 0, step = 1 } = {}) {
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(rootSelector);
  this._bindEvents();
  this.updateValueUi();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  console.log(rootSelector);

  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector(".data-increment");
  refs.decrementBtn = refs.container.querySelector(".data-decrement");
  refs.value = refs.container.querySelector(".data-value");
  return refs;
};
CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener("click", () => {
    console.log("incrementBtn", this);
    this.increment();
    this.updateValueUi();
  });
  this._refs.decrementBtn.addEventListener("click", () => {
    console.log("decrementBtn", this);
    this.decrement();
    this.updateValueUi();
  });
};

CounterPlugin.prototype.updateValueUi = function () {
  this._refs.value.textContent = this._value;
};
CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};
CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

new CounterPlugin({ rootSelector: "#counter-1", step: 10 });
new CounterPlugin({ rootSelector: "#counter-2", step: 10 });

console.log("counter-1 --->", counter1);
counter1.increment();
counter1.increment();
counter1.increment();
console.log("counter-1 --->", counter1);

console.log("counter-2 --->", counter2);
counter2.increment();
counter2.increment();
console.log("counter-2 --->", counter2);
