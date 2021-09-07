Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.serviceTitle }}</li>'
  })

var app = new Vue({
    el: '#app',
    data: {
      serviceList: [
        { id: 0, icon: "../img/fluency/windows.png", serviceTitle: 'Sistemas Operativos', serviceDescription: 'Instalación de sistemas bla bla' },
        { id: 1, icon: "../img/fluency/windows.png", serviceTitle: 'Sistemas Operativos', serviceDescription: 'Instalación de sistemas bla bla' },
        { id: 2, icon: "../img/fluency/windows.png", serviceTitle: 'Sistemas Operativos', serviceDescription: 'Instalación de sistemas bla bla' },
      ]
    }
  })