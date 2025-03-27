const right1 = () => ({ 
  items: [],
  addItem(product, count) {
    this.items.push({ product, count });
  },
  getItems() {
    return this.items;
  },
  getCount() {
    return _.sumBy(this.items, (item) => item.count);
  },
  getCost() {
    return _.sumBy(this.items, (item) => item.product.price * item.count);
  },
});

const wrong1 = () => ({ 
  items: [],
  addItem(product, count) {
    this.items.push({ product, count });
  },
  getItems() {
    return this.items;
  },
  getCount() {
    return _.sumBy(this.items, (item) => item.count);
  },
  getCost() {
    return _.sumBy(this.items, (item) => item.product.price);
  },
});

const wrong2 = () => ({ 
  items: [],
  addItem(product, count) {
    this.items = [{ product, count }];
  },
  getItems() {
    return this.items;
  },
  getCount() {
    return _.sumBy(this.items, (item) => item.count);
  },
  getCost() {
    return _.sumBy(this.items, (item) => item.product.price * item.count);
  },
});

const wrong3 = () => ({ 
  items: [],
  addItem(product, count) {
    this.items.push({ product, count });
  },
  getItems() {
    return this.items;
  },
  getCount() {
    return this.items.length;
  },
  getCost() {
    return _.sumBy(this.items, (item) => item.product.price * item.count);
  },
});

const implementations = { 
  right1, wrong1, wrong2, wrong3,
};



export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return implementations[name];
};
