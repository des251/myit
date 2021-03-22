//react - это js библиотека для построения одностраничных веб приложений и разработка гуев(графических интерфейсов пользователей)
//реакт является машиной который обеспечивает реактивное взаимодействие компнентов пользователского интерфейса
//реакт машина четко разделяет :
//1 state (состояние) данны приложения в текущий момент времени
//2 UI пользовательский интерфейс

//разбиение пользовательского интерфейса на комоненты и дает преимущество в плане разработки пользовательских интерфейсов
//реакт это чисто javascript библиотека
//если встречаются html теги это по сути js команды
//jsx технология которая позволяет интегрироать html теги и xml теги в синтакис javascript


//структура проектов react
//
//babel это компилятор который будет выполнять рансформацию на базе jsx из html тегов в js код
// //npm start для запуса приложения из консоли из корневой папки



//что бы импортировать компонет

// import React from "react";
// import ReactDOM from "react-dom";
//import SomeComponent from './SomeComponent'//расширение js не пишеться
// import "./styles.css";

// class Hello extends React.Component {//этот класс будет наследником от SomeComponent
//   render() {
//     return <h1>Hello world</h1>;
//   }
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Hello />, rootElement);





// сокращенный вариант что бы не писать каждый раз React.Component
// и чтобы не писать ReactDOM

// import React, { Component } from "react";//сокращенный вариант
// import {render} from "react-dom";
// import SomeComponent from './SomeComponent'//расширение js не пишеться
// import "./styles.css";

// class Hello extends Component {//вот сдесь
//   render() {
//     return <h1>Hello world</h1>;
//   }
// }

// const rootElement = document.getElementById("root");
// render(<Hello />, rootElement);













// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// class Hello extends React.Component {
//   render() {
//     return (
//       <h1>Hello world</h1>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Hello />, rootElement);


//динамически

// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// class Hello extends React.Component {
//   render() {
//     let place = "World";
//     return <h1>Hello {place}</h1>;
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Hello />, rootElement);


//------------------------props

//props свойства используются для конфигурирования компонентов
//для передачи информации от компонента родителя к дочернему компоненту
//свойство принадлежит родителю и контролируется тоже родителем
//запрещено менять свойство в дочернем компоненте
//в jsx сойства задаются атрибутом тега как в обычном html



// class GroceryList extends Component {
//     render() {
//       return (
//         <ul>
//           <ListItem quantity='1' name='Bread'/>
//           <ListItem quantity='6' name='Eggs' />
//           <ListItem quantity='6' name='Milk' />
//         </ul>
//       );
//     }
//   }

//   class ListItem extends Component {
//     render() {
//       return (
//         <li>
//           {this.props.quantity}x{this.props.name}//наследуются из родителя
//         </li>
//       );
//     }
//   }


//   const rootElement = document.getElementById("root");
//   ReactDOM.render(<GroceryList />, rootElement);




// class GroceryList extends Component {
//     render() {
//       return (
//         <ul>
//           <ListItem quantity='1'>Bread</ListItem>
//           <ListItem quantity='1'>Bread</ListItem>
//           <ListItem quantity='1'>Bread</ListItem>
//         </ul>
//       );
//     }
//   }

//   class ListItem extends Component {
//     render() {
//       return (
//         <li>
//           {this.props.quantity}x{this.props.children}
//         </li>
//       );
//     }
//   }


//   const rootElement = document.getElementById("root");
//   ReactDOM.render(<GroceryList />, rootElement);



//то что передается child - muteble
//this.setState() формировать состояние наших компонентов автоматом запускается render этого компонента + все дочерние компоненты тоже render

//реакт напрямую с dom не взаимодействует только через виртуальный dom он является посредником между нашим приложением и dom в браузере
//тк работа с обычным дом не эффективна

//event listener ф-ции которые ждут какого либо события
//1 каксание или работа с мышью
//2 события связанные с клавиатурой
//3 работа с формой
//4 другие типа scroll


//jsx

//расширение реакта которое позволяет использовать xml синтаксис в js
//механизм который переводит все в js называется транспиллером
//отличие jsx и html

//1 теги и атрибуты кэмелкейс
//2 все элементы должны быть сбалансированы в jsx
//3 имена аттрибутов базируются на DOM API а не на особенности языка разметки html


//1 <input maxlength="30">   <input maxLength="30">
//2 все теги должны быть закрыты <img src="..." />
//3 jsx ориентируется имено на имена из DOM API например class="a" а в jsx className = "a"


//реакт работает с single root node jsx

// return (
//     <h1>Hello world</h1>
// ) //должен быть один корневой тег

// // return (
// //     <h1>Hello world</h1>
// //     <h2>Hello world</h2>
// // )//будет ошибка


// //решение

//  return (
//     <div>
//      <h1>Hello world</h1>
//     <h2>Hello world</h2>
//     </div>
//  )


// //что происходит на самом деле
// return React.createElement('div', null,
// React.createElement('h1', null, "Hello World"),
// React.createElement('h2', null, "Hello World")
// )



// //передача аттрибутов
// return (
//     <div className="salutation">Hello JSX</div>
// )

// //что происходит

// return (
//     React.createElement("div", {className: 'salutation'}, "Hello JSX");//аттрибуты пишуться как объект
// )


// //<div className={if (condition) {'salutation'}}> "Hello JSX"</div>//будет ошибка

// //решить можно через тернарный оператор ?

// return (
//     <div className={condition ? "salutation": ""}>Hello JSX</div>
// )


// return (
//     React.createElement("div", {className: condition ? "salutation": ""}, "Hello JSX");
// )

// <div>
//     {condition ?
//     <span>Hello JSX </span>
//     : null}
// </div>


// //2 е решение вынести за пределы jsx
// //jsx находиться только после return или все таки после render???или все что в круглых скобках???
// //все что до можно использовать обычнй javascript

// render() {
//     let className;
//     if (condition) {
//         className = "salutation"
//     }
//     return (
//         <div className = {className}>Hello JSX</div>
//     )
// }


//JSX не вставляет пробелов между строчными элементами типа <a>
//обойти можно так <a>google</a>{" "}
//                 <a>facebook</a>

//в JSX недбзя применять комеентарий html так как это javascript и используем обычный комментарий для javascript


//в еакт приложении можно не использовать JSX
//выглядит очень громоздко
//поробовать сделать список ul !!!!!


//сокращенный вариант "фабрика элементов"

// let child1 = React.createElement('li', 'null', 'First text content')
// let child2 = React.createElement('li', 'null', 'Second text content')
// let list = React.createElement('ul', {className: 'my-list'}, child1, child2);
// React.render(list, document.getElementById('root'));


// React.DOM.form({className: "commentForm"},
//     React.DOM.input({type: "text", placeholder: "name"}),
//     React.DOM.input({type: "text", placeholder: "comment"}),
//     React.DOM.input({type: "submit", value: "post"})
// )


//валидация свойств

//хорошая практика задать набор свойств для работы этого компонетта описать
//1 сам список свойств необходимых для работы компонента
//2 каке св-ва являются обязательными и какие не являются обязательными
//3 каким типлм данных эти свойства представлненны

//это можнозадать через объявления propTypes
//для разных типов данных разные валидаторы например
//propTypes.array
//propTypes.bool
//propTypes.func
//propTypes.number
//propTypes.object
//propTypes.string

//oneOfType
//arrayOf
//objectOf
//shape ???

//node
//element
//instanceOf
//oneOf
