<template>
  <div>
    <v-btn text :to="{name: 'settings'}" class="mt-2">
      <v-icon>mdi-chevron-left</v-icon> Settings
    </v-btn>
    <v-container>
      <h1 class="text-center">Calendar Settings</h1>
      <v-sheet max-width="500" class="mx-auto mt-12 skej-grey-background">
        <v-form>
          <h3>Personal Event Colors</h3>
          <v-row><v-col cols="4" class="text-left" align-self="center">Personnal</v-col>
          <v-col cols="8" class="text-right">
                  <event-type-color-picker initialColorIndex="1"></event-type-color-picker>
            </v-col></v-row>
          <v-row><v-col cols="4" class="text-left" align-self="center">Family</v-col>
          <v-col cols="8" class="text-right">
                  <event-type-color-picker initialColorIndex="2"></event-type-color-picker>
            </v-col></v-row>
          <v-row><v-col cols="4" class="text-left" align-self="center">Friends</v-col>
          <v-col cols="8" class="text-right">
                  <event-type-color-picker initialColorIndex="3"></event-type-color-picker>
            </v-col></v-row>
          <v-row>
            <v-col cols="4" class="text-left" align-self="center"><v-label>Do Not Disturb</v-label>
            </v-col>
            <v-col cols="8" class="text-right">
        <v-card width="290" height="420" class="ma-1 scroll-section" style="overflow-y: scroll">
          <h6 class="text-h6 pa-4">
            {{printSelectedMonthAndDay}}
          </h6>
          <v-divider class="mb-2"></v-divider>
          <!-- <div  v-for="hour in hours" :key="`hour-${hour.hr}`">
            <v-list-item single-line
              v-if="hour.hr >= day_start"
              class="px-0"
            >
              <v-card flat tile width="40"
                color="ml-4">
                <v-card-text
                  class="font-weight-bold pa-0">
                  <div :class="['hrstart', quarterHourClasses(hour, 0)]" @click="setEventFormTime(hour, 0)">
                    <span>{{hour.hr}}:00</span>
                  </div>
                  <div
                  :class="['hr15', quarterHourClasses(hour, 15)]" @click="setEventFormTime(hour, 15)">
                    <span v-show="eventForm.startTime === `${`0${hour.hr}`.slice(-2)}:15`">{{hour.hr}}:</span>
                    <span v-show="eventForm.endTime === `${`0${hour.hr}`.slice(-2)}:15`">{{hour.hr}}:</span>
                    <span>15</span>
                  </div>
                  <div
                  :class="['hr30', quarterHourClasses(hour, 30)]" @click="setEventFormTime(hour, 30)">
                  <span v-show="eventForm.startTime === `${`0${hour.hr}`.slice(-2)}:30`">{{hour.hr}}:</span>
                  <span v-show="eventForm.endTime === `${`0${hour.hr}`.slice(-2)}:30`">{{hour.hr}}:</span>
                    <span>30</span>
                  </div>
                  <div :class="['hr45', quarterHourClasses(hour, 45)]" @click="setEventFormTime(hour, 45)">
                    <span v-show="eventForm.startTime === `${`0${hour.hr}`.slice(-2)}:45`">{{hour.hr}}:</span>
                    <span v-show="eventForm.endTime === `${`0${hour.hr}`.slice(-2)}:45`">{{hour.hr}}:</span>
                    <span>45</span>
                  </div>
                </v-card-text>
              </v-card>
              <v-card flat tile>
                <v-card-text class="pa-0 pl-1 event-name">
                  <div :class="['quarter-hour']">
                    <div :class="['vertical-dash mr-1', getColorForDash(hour, 0)]"></div>
                    <span :class="[printEventName(hour, 0)]">
                      {{hour.event.eventName}}
                    </span>
                    <span v-show="eventForm.startTime === `${`0${hour.hr}`.slice(-2)}:00`"
                      class="cyan--text">
                      Start
                    </span>
                    <span v-show="eventForm.endTime === `${`0${hour.hr}`.slice(-2)}:00`"
                      class="cyan--text">
                      End
                    </span>
                  </div>
                  <div :class="['quarter-hour']">
                    <div :class="['vertical-dash mr-1', getColorForDash(hour, 15)]"></div>
                    <span :class="[printEventName(hour, 15)]">
                      {{hour.event.eventName}}
                    </span>
                    <span v-show="eventForm.startTime === `${`0${hour.hr}`.slice(-2)}:15`"
                      class="cyan--text">
                      Start
                    </span>
                    <span v-show="eventForm.endTime === `${`0${hour.hr}`.slice(-2)}:15`"
                      class="cyan--text">
                      End
                    </span>
                  </div>
                  <div :class="['quarter-hour']">
                    <div :class="['vertical-dash mr-1', getColorForDash(hour, 30)]"></div>
                    <span :class="[printEventName(hour, 30)]">
                      {{hour.event.eventName}}
                    </span>
                    <span v-show="eventForm.startTime === `${`0${hour.hr}`.slice(-2)}:30`"
                      class="cyan--text">
                      Start
                    </span>
                    <span v-show="eventForm.endTime === `${`0${hour.hr}`.slice(-2)}:30`"
                      class="cyan--text">
                      End
                    </span>
                  </div>
                  <div :class="['quarter-hour']">
                    <div :class="['vertical-dash mr-1', getColorForDash(hour, 45)]"></div>
                    <span :class="[printEventName(hour, 45)]">
                      {{hour.event.eventName}}
                    </span>
                    <span v-show="eventForm.startTime === `${`0${hour.hr}`.slice(-2)}:45`"
                      class="cyan--text">
                      Start
                    </span>
                    <span v-show="eventForm.endTime === `${`0${hour.hr}`.slice(-2)}:45`"
                      class="cyan--text">
                      End
                    </span>
                  </div>
                </v-card-text>
              </v-card>
            </v-list-item>
          </div> -->
        </v-card>
              <template  class="float-right">
              <v-menu v-model="menus.globals.time_start" :close-on-content-click="false" class="white">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn light v-bind="attrs" v-on="on" text class="px-0">{{menus.globals.start}}</v-btn>
                </template>
                <v-time-picker ampm-in-title format="24hr" v-model="menus.globals.start" :max="menus.globals.end"></v-time-picker>
              </v-menu>
              -
              <v-menu v-model="menus.globals.time_end" :close-on-content-click="false" class="white">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn light v-bind="attrs" v-on="on" text class="px-0">{{menus.globals.end}}</v-btn>
                </template>
                <v-time-picker ampm-in-title format="24hr" v-model="menus.globals.end" :min="menus.globals.start"></v-time-picker>
              </v-menu>
              </template>
            </v-col>
          </v-row>
          <h3 class="mt-12">Business Name</h3>
          <v-row><v-col cols="4" class="text-left" align-self="center">{{menus.business[0].name}}</v-col>
            <v-col cols="8" class="text-right">
              <event-type-color-picker initialColorIndex="3"></event-type-color-picker>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4" class="text-left" align-self="center"><v-label>Do Not Disturb</v-label>
            </v-col>
            <v-col cols="8" class="text-right">
              <template  class="float-right">
              <v-menu v-model="menus.business[0].time_start" :close-on-content-click="false" class="white">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn light v-bind="attrs" v-on="on" text class="px-0">{{menus.business[0].start}}</v-btn>
                </template>
                <v-time-picker ampm-in-title format="24hr" v-model="menus.business[0].start" :max="menus.business[0].end"></v-time-picker>
              </v-menu>
              -
              <v-menu v-model="menus.business[0].time_end" :close-on-content-click="false" class="white">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn light v-bind="attrs" v-on="on" text class="px-0">{{menus.business[0].end}}</v-btn>
                </template>
                <v-time-picker ampm-in-title format="24hr" v-model="menus.business[0].end" :min="menus.business[0].start"></v-time-picker>
              </v-menu>
              </template>
            </v-col>
          </v-row>

          <v-row class="mt-5" justify="center"><v-btn dark color="#45C3F2">Confirm</v-btn></v-row>
        </v-form>
      </v-sheet>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
  name: 'calendar_settings',
  data () {
    return {
      menus: {
        globals: {
          menu_start: false,
          menu_end: false,
          start: '00:00',
          end: '23:59'
        },
        business: [
          {
            name: 'Google',
            menu_start: false,
            menu_end: false,
            start: '00:00',
            end: '23:59'
          }
        ]
      },
      hour: {
        hr: 7,
        event: {
          eventName: 'loading...'
        }
      },
      eventForm: {
        startDate: new Date().toISOString().split('T')[0],
        startTime: null,
        endDate: null,
        endTime: null
      }
    }
  }
}
</script>
