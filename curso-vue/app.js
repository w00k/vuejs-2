new Vue({
  el: '#app',

  data() {
    return {
      name: 'Bitcoin', 
      symbol: 'BTC',
      img: 'https://img.icons8.com/color/480/000000/bitcoin--v3.png',
      changePercent: 10,
      color: 'f4f4f4',
      price: 8400,
      pricesWithDays: [
        {day: 'Lunes', value: 8400},
        {day: 'Martes', value: 7900},
        {day: 'Miercoles', value: 8200},
        {day: 'Jueves', value: 9000},
        {day: 'Viernes', value: 9400},
        {day: 'Sabado', value: 10000},
        {day: 'Domingo', value: 10200}, 
      ],
      showPrices: false
    }
  }, 
  computed: {
    title() {
      return `${this.name} - ${this.symbol}`;
    }
  },
  watch: {
    //watches contiene funciones de lo que posee la función data y tiene que poseer el mismo nombre
    showPrices(newValue, oldValue) {
      console.log(newValue, oldValue);
    }
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.color = this.color.split('').reverse().join('');
    }
  }
})