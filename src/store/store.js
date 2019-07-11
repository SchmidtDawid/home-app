import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-habian'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    MezzanineViev: 0,
    items: {
      DawidsRoom: {
        state: 'UNKNOWN',
        name: 'mysensors_light_gateway_pokoj_Dawid_status'
      },
      Bathroom: {
        state: 'UNKNOWN',
        name: 'mysensors_light_gateway_lazienka_status'
      },
      BathroomWallLamp: {
        state: 'UNKNOWN',
        name: 'mysensors_light_gateway_lazienka_lustro_status'
      },
      Kitchen1: {
        state: 'UNKNOWN',
        name: 'mysensors_light_gateway_kuchnia_1_status'
      },
      Kitchen2: {
        state: 'UNKNOWN',
        name: 'mysensors_light_gateway_kuchnia_2_status'
      },
      LivingRoom1: {
        state: 'UNKNOWN',
        name: 'mysensors_light_gateway_salon_1_status'
      },
      LivingRoom2: {
        state: 'UNKNOWN',
        name: 'mysensors_light_gateway_salon_2_status'
      },
      Hallway: {
        state: 'UNKNOWN',
        name: 'mysensors_light_gateway_przedpokoj_status'
      },
      WardrobeRoom: {
        state: 'UNKNOWN',
        name: 'mysensors_light_gateway_garderoba_status'
      },
      Laundry: {
        state: 'UNKNOWN',
        name: 'mysensors_light_gateway_pralnia_status'
      },
      BedRoomDawid: {
        state: 'UNKNOWN',
        name: 'mysensors_light_gateway_sypialnia_dawid_status'
      },
      BedRoomMilena: {
        state: 'UNKNOWN',
        name: 'mysensors_light_gateway_sypialnia_mialena_status'
      }
    }
  },
  mutations: {
    itemStateUpdate (state, payload) {
      payload.item.state = payload.state
    },
    getItems (state, payload) {
      state.items = payload
    }
  },
  actions: {
    getItems (context) {
      axios.get('/items?recursive=false')
        .then((response) => { context.commit('getItems', response.data) })
    },
    itemStateCheck (context, item) {
      axios.get('/items/' + item.name + '/state')
        .then(response => { context.commit('itemStateUpdate', { state: response.data, item: item }) })
    },
    lightSwitch (context, item) {
      let newStatus
      if (item.state === 'OFF') {
        newStatus = 'ON'
      } else {
        newStatus = 'OFF'
      }
      axios.post('/items/' + item.name,
        newStatus,
        { headers: {
          'Content-Type': 'text/plain',
          'Accept': 'application/json'
        } }
      ).then(() => { context.commit('itemStateUpdate', { state: newStatus, item: item }) })
    },
    ItemStateChangedEventmUpdater (context, items) {
      var source = new EventSource('http://192.168.1.69:8080/rest/events')
      source.addEventListener('message', function (e) {
        var data = JSON.parse(e.data)
        if (data.type === 'ItemStateChangedEvent') {
          for (var item in items) {
            if (data.topic.includes(items[item].name)) {
              context.dispatch('itemStateCheck', items[item])
            }
          }
        }
      }, false)
    }
  }
})
