app.component('list-pic', {
    props: ['travel'],
    template:
     /*html*/
    `
      <p class="px-4 text-center text-gray-600 pt-8 font-mono text-xl ">
      {{travel.text}} </p>
      <img class=" h-90 w-100 px-4 pt-8 " :src="travel.pic"  @click="$emit('open-pic')">

      <button @click="toggleHeart(travel.id)">
        <span class="material-icons mt-5 mx-5" v-show="!travel.like">favorite_border</span>
      </button>

      <button @click="toggleHeart(travel.id)">
        <span class="material-icons mt-5 mx-5" style=color:red v-show="travel.like">favorite</span>
      </button>

   `,
  data(){
    return{
      image: '',
      showImg: false
    }
  },
  methods: {
    toggleHeart(id) {
        this.$emit('toggle-like', id)
    },
    openPic(id) {
      let shpic = this.image
      this.$emit('open-pic',id,shpic)
      shpic = ''
  } 
    }
})
    
