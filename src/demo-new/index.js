import React, { Component } from "react";
import styled from "styled-components";

// 手撸一个new
export default class NewDemo extends Component {
  state = {
    oldPrint: [],
    newPrint: []
  };

  componentDidMount = () => {
    const Dog = function(name) {
      this.name = name;
      return {
        a: '嗬嗬'
      }
    };
    Dog.prototype.bark = function() {
      console.log("wangwang");
    };
    Dog.prototype.sayName = function() {
      console.log("my name is " + this.name);
    };
    const wang = new Dog("汪");
    console.log(wang);
    // wang.bark();
    // wang.sayName();
    // new 的作用
    // 创建一个新对象obj
    // 把obj的__proto__指向Dog.prototype 实现继承
    // 执行构造函数，传递参数，改变this指向 Dog.call(obj, ...args)
    // 最后把obj赋值给wang
    // wang.bark();
    // wang.sayName();
    const miao = this._new(Dog, "妙");
    console.log(miao);
    miao.bark();
    miao.sayName();
    console.log(miao instanceof Dog);
  };

  _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return obj
    // return ret instanceof Object ? ret : obj;
  }

  _new2(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
  }

  _new3(fn, ...arg) {
    // 1.创建了一个新对象
    const obj = {}
    // 2.将 this 指向新对象
    const ret = fn.apply(obj, arg); // 通过apply将this指向由Fn变为obj
    // 3.将创建的对象的原型指向构造函数的原型
    obj.__proto__ = fn.prototype
    // 4. 返回一个对象
    return ret instanceof Object ? ret : obj;
  }

  render() {
    return (
      <Content>
        <div>111</div>
      </Content>
    );
  }
}

const Content = styled.div`
  padding: 20px;
`;
