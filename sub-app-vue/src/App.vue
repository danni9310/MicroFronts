<template>
  <div id="app">
    <h2>Prueba de vueAPI</h2>
    <div id="chart">
      <apexchart type=bar height=350 :options="chartOptions" :series="series" ></apexchart>
    </div>
    <button id="BotonGuardar" @click="consulta()">Guardar</button> 
  </div>
</template>

<script>
import axios from 'axios'
import VueApexCharts from 'vue-apexcharts';
import Vue from 'vue' 
Vue.component('apexchart', VueApexCharts)     

export default {
  name: 'app',
  data () {
    // return {
    //   msg: 'Welcome to Your Vue.js App',
    //   data:{}
    // }
    return {
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    chartOptions: {
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'	
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },

      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1

      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    }
    }}
  },

  methods: {
      async consulta() {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            console.log(res.data)
            this.articulos = res.data
            
        } catch (error) {
            console.log(error)
        }
        // try {
        //   const data = JSON.stringify({
        //       fechaInicio: 1559365200000,
        //       fechaFinal: 1567227600000
        //   })

        //   const res = await axios.post('http://localhost:5012/ejercicios/api/v1/grupo/registros_mensuales', data, {
        //       headers: {
        //           'Content-Type': 'application/json',
        //       }
        //   })

        //   console.log(res.data)
        //   //this.articulos = res.data
          
        // } catch (error) {
        //     console.log(error)
        // }

        const event = new Event('escribir');
        window.dispatchEvent(event);

      }
    },
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
