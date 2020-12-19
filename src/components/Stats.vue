<template>
  <div class="mt-5 container-fluid">
    <b-form-input v-model="search" placeholder="Filtrer par numéro étudiant" v-on:keyup.enter="filterById(search)"></b-form-input>
    <div class="row mt-3">
      <div class="col-sm-12 col-xl-7">
        <apexchart type="bar" height="1000" :options="options" :series="series"></apexchart>
      </div>
      <div class="col-sm-12 col-xl-5">
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1" v-for="pred in predictionsSearch" :key="pred.id">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle="'accordion-' + pred.id" :variant="pred.prediction==='ASTRE' ? 'success' : 'info'">Etudiant n°<b>{{pred.id}}</b> ({{pred.prediction}})</b-button>
            </b-card-header>
            <b-collapse visible :id="'accordion-'+pred.id" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                Prédiction filière : <strong>{{ pred.prediction }}</strong><br/>
                Score IPS: <b-badge variant="warning">Score: {{ pred.score_ips }}</b-badge> <br/>
                Score ASTRE: <b-badge variant="warning">Score: {{ pred.score_astre }}</b-badge>
                <hr>
                <div v-for="item in pred.hypotheses" :key="item.id">
                  <div class="h6 mb-2">{{ item.hypothesis }}</div>
                  <div v-for="question in item.questions" :key="question.id">
                    <strong>{{ question.question }}</strong> <br/>
                    Réponses : <b-badge class="mr-2" variant="primary" v-for="response in question.responses" :key="response.id">{{response}}</b-badge>
                    <b-badge variant="warning">Score: {{ question.score }}</b-badge>
                  </div>
                  <hr/>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">

            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                Prédiction filière : <strong>{{ predictions[0].prediction }}</strong><br/>
                Score IPS: <b-badge variant="warning">Score: {{ predictions[0].score_ips }}</b-badge> <br/>
                Score ASTRE: <b-badge variant="warning">Score: {{ predictions[0].score_astre }}</b-badge>
                <hr>
                <div v-for="item in predictions[0].hypotheses" :key="item.id">
                  <div class="h6 mb-2">{{ item.hypothesis }}</div>
                  <div v-for="question in item.questions" :key="question.id">
                    <strong>{{ question.question }}</strong> <br/>
                    Réponses : <b-badge class="mr-2" variant="primary" v-for="response in question.responses" :key="response.id">{{response}}</b-badge>
                    <b-badge variant="warning">Score: {{ question.score }}</b-badge>
                  </div>
                  <hr/>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>



  </div>
</template>

<script>

import {predictions} from '@/algorithm'
export default {
  name: 'Stats',
  data() {
    return {
      search: '',
      predictions,
      predictionsSearch: predictions,
      options: {
        chart: {
          type: 'bar',
          height: 900,
          events: {
            click: function(event, chartContext, config) {
              console.log(event, chartContext, config)
            }
          }
        },
        plotOptions: {
          bar: {
            // horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -1,
          style: {
            fontSize: '13px',
            colors: ['#000']
          }
        },
        stroke: {
          show: true,
          width: 0,
          colors: ['#fff']
        },
        xaxis: {
          categories: [],
        },
      },
      series: [],
    }
  },
  methods: {
    formatData() {
      let ids = []
      let score_ips = []
      let score_astre = []

      predictions.forEach(result => {
        ids.push(result.id)
        score_ips.push(result.score_ips)
        score_astre.push(result.score_astre)
      })

      return {
        ids,
        ips: {name: "IPS", data: score_ips},
        astre: {name: "ASTRE", data: score_astre}
      }
    },
    filterById(search) {
      if(search === "") {
        this.reset()
        return;
      }

      console.log(predictions);

      let found = false;
      predictions.forEach(elem => {
        if(elem.id === search) {
          this.options = {xaxis: {categories: [elem.id]}};
          this.series = [{name: "IPS", data: [elem.score_astre]}, {name: "ASTRE", data: [elem.score_ips]}]

          this.predictionsSearch = [elem];

          found = true
        }
      });

      if(!found) {
        this.$notify({
          group: 'foo',
          type: 'error',
          title: 'Erreur',
          text: 'Etudiant non trouvé!'
        });

      }
    },
    reset() {
      // clean all
      this.series = []
      this.options.xaxis.categories = []

      let {ids, ips, astre } = this.formatData()
      this.series.push(ips)
      this.series.push(astre)
      this.options = {xaxis: {categories: ids}};
      this.predictionsSearch = predictions;
    }
  },
  mounted() {
    this.reset()
  }
}
</script>
<style>
.btn-info {
  color: #fff;
  background-color: #26a0fc !important;
}
.btn-success {
  color: #fff;
  background-color: #26e7a6 !important;
}

</style>
