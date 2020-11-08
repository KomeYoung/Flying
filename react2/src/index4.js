import React from 'react';

class ComponentB extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>{this.props.addInB(111,555)}{/*函数调用*/}</div>
        )
    }
}

export default class ComponentA extends React.Component{
    addInA(a,b){
        return a+b;
    }

    subInA(a,b){
        return a-b;
    }

    mulInA(a,b){
        return a*b;
    }

    divInA(a,b){
        return a/b;
    }

    render(){
        return(
            <div>
                {/* JS 中函数不指定参数的类型，不检查实参的类型，不检查形参的个数 */}

                {/* 绑定的时候 */}
                <div>
                    {(a,b)=>this.subInA(a,b)}{/*通过箭头函数实现对 this 的绑定，但是不检查形参的个数*/}
                    {this.subInA(100,90)}{/*函数调用 输出：10 */}
                </div>

                <div>
                    {()=>this.mulInA()}{/*通过箭头函数实现对 this 的绑定，但是不检查形参的个数*/}
                    {this.mulInA(3,6)}{/*函数调用 输出：18 */}
                </div>

                <div>
                    {(x,y,z)=>this.divInA(x,y)}{/*通过箭头函数实现对 this 的绑定，但是不检查形参的个数*/}
                    {this.divInA(96,4)}{/*函数调用 输出：24 */}
                </div>


                {/* 赋值传递的时候 */}
                <ComponentB addInB={(x,y)=>this.addInA(x,y)}/>
                {/*
          通过箭头函数实现对 this 的绑定，但是不检查形参的个数，输入：(111,555)，输出 666
          但是：
          function addInB(x,y){ // addInB 的参数在调用 addInB 函数时候传入
            this.addInA(x,y); // addInA 的参数在 addInB 中获取
          }
         */}

                <ComponentB addInB={()=>this.addInA()}/>
                {/*
          通过箭头函数实现对 this 的绑定，但是不检查形参的个数，输入：(111,555)，输出 NaN
          但是：
          function addInB(){ // addInB 的参数在调用 addInB 函数时候传入
            this.addInA(); // addInA 的参数无法获取 ，因为此处 addInA 没有参数传入
          }
         */}

                <ComponentB addInB={()=>this.addInA(1234,5678)}/>
                {/*
          通过箭头函数实现对 this 的绑定，但是不检查形参的个数，输入：(111,555)，输出 6912
          但是：
          function addInB(){ // addInB 的参数在调用 addInB 函数时候传入
            this.addInA(1234,5678); // addInA 的参数，此处直接传入 1234 和 5678
          }
         */}

            </div>
        )
    }
}