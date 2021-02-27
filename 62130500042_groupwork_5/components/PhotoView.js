app.component('show-pic' ,{
    props:['image'],
    template:
    /*hmtl*/
    ` <button @click="closePic">
        <span class="material-icons absolute top-0 right-0 text-3xl text-white">
          close
        </span>
      </button>
      <div class="md:py-10">
        <img v-bind:src="image" class=" item-center " height="100" width="500">
      </div>` ,
     
     methods: {
        closePic() {
            this.$emit('close-pic')
        }
     }
})





    