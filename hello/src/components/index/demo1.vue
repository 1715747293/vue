<template>
  <div class="home">
    <div v-for="(item,index) in arr" :key="index">{{item.time}}</div>
    <input v-model="wach" type="text" name="" >
    {{c}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [
        {
          id: 1,
          time: 10,
          timeOut: ''
        },
        {
          id: 2,
          time: 5,
          timeOut: ''
        }
      ],
      con: this.time,
      wach: '',
      c: ''
    }
  },
  watch: {
    wach () {
      this.c = 123
    }
  },
  methods: {
    test () {
      for (let i in this.arr) {
        this.arr[i].timeOut = setInterval(() => {
          if (this.arr[i].time > 0) {
            this.arr[i].time--
          } else {
            clearInterval(this.arr[i].timeOut)
          }
        }, 1000)
      }
    }
  },
  created () {
    this.test()
  }
}
</script>
