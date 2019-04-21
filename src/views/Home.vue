<template>
  <div class="home">
    <div class="row">
      <div class="col-8 offset-2 text-center">
        <div class="card text-white bg-info mb-3">
        <div class="card-header">Current Weather</div>
          <div class="card-body">
            <h4 class="card-title">{{forecast.currently.summary}}</h4>
            <div class="card-text">
                {{forecast.currently.icon}}
                {{forecast.currently.temperature}} ℉
            </div>
            <div class="card-text">
              {{forecast.currently.precipProbability}} % chance of precipitation
            </div>
        </div>
      </div>
    </div>
</div>
    <pre>{{forecast}}</pre>
  </div>
</template>

<script>
  import API from '@/lib/API'

export default {
  name: 'home',
  data(){
     return {
       forecast:{},
       icons:{
         'clear-day': '😎',
         'clear-night': '🌕',
          rain: '😴',
          snow: '☃️',
          sleet: '🥶',
          wind: '🤧',
          fog : '🌫',
          cloudy: '☁️',
         'partly-cloudy-day' : '⛅️',
         'partly-cloudy-night': '😔'

       }
     };
  },
  mounted(){
    API.getWeather().then(result =>{
      console.log(result);
      this.forecast= result;
    });
  },
};
</script>
