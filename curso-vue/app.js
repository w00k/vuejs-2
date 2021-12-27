Vue.component('CoinDetail', {
  props: ['coin'],
  data() {
    return {
      showPrices: false,
      value: 0
    }
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.$emit('change-color', this.showPrices ? 'FF96C8' : '3D3D3D'); //evento con change-color
    }
  },
  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`;
    },
    convertedValue() {
      if(this.value == 0) {
        return 0;
      } 
      return this.value / this.coin.price;
    }
  },
  template: `
  <div>
    <img 
        v-on:mouseover="toggleShowPrices" 
        v-on:mouseout="toggleShowPrices" 
        v-bind:src="coin.img" v-bind:alt="coin.name"> 

    <h1 
        v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
        {{ title }} 
        <span v-if="coin.changePercent > 0">Good!!!</span>
        <span v-else>Bad!!!</span>
        <span v-on:click="toggleShowPrices">{{ showPrices ? 'Ocultar precios' : 'Ver precios'}}</span>
      </h1>

      <input type="number" v-model="value">
      <span>{{convertedValue}}</span>

      <ul v-show=showPrices>
        <li
        class="uppercase"
        v-for="(x, i) in coin.pricesWithDays" 
        v-bind:key="x.day"
        v-bind:class="{orange: x.value === coin.price, red: x.value < coin.price, green: x.value > coin.price}"
        >{{i}} - {{x.day}} - {{x.value}}</li>
      </ul>

  </div>
  `
});

new Vue({
  el: '#app',

  data() {
    return {
      btc: {
        name: 'Bitcoin', 
        symbol: 'BTC',
        img: 'https://img.icons8.com/color/480/000000/bitcoin--v3.png',
        changePercent: 10,
        price: 8400,
        pricesWithDays: [
          {day: 'Lunes', value: 8400},
          {day: 'Martes', value: 7900},
          {day: 'Miercoles', value: 8200},
          {day: 'Jueves', value: 9000},
          {day: 'Viernes', value: 9400},
          {day: 'Sabado', value: 10000},
          {day: 'Domingo', value: 10200}, 
        ]
      },
      color: 'f4f4f4'
    }
  },
  methods: {
    updateColor(color) {
      this.color = color || this.color.split('').reverse().join('');
    }
  }
})