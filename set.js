function Set() {
  let collection = [];

  this.values = () => {
    return collection;
  };

  this.size = () => {
    return colleciton.length;
  };

  this.has = (value) => {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] === value) {
        return true;
      }
    }
    return false;
  };

  this.add = (value) => {
    if (this.has(value)) {
      return false;
    } else {
      collection.push(value);
    }
  };

  this.remove = (value) => {
    if (this.has(value)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.union = (otherSet) => {
    let unionSet = this.values();
    for (let i = 0; i < otherSet.length; i++) {
      if (!this.has(otherSet[i])) {
        unionSet.push(otherSet[i]);
      }
    }
    return unionSet;
  };

  this.diference = (otherSet) => {
    let differenceSet = new Set();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  this.subset = (otherSet) => {
    let firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}
