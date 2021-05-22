type Constructor = {
  new (...args: any[]): any
};

function ClasstoString<T extends Constructor>(BaseClass: T) {
  return class extends BaseClass {
    toString() {
      return `${JSON.stringify(this)}---demo`;
    }
  }
}

@ClasstoString
class C {
  public foo = "foo";
  public num = 24;
}
