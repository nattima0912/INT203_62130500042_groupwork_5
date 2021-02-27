app.component('search-pic', {
    template:
     /*html*/
    `
    <div class="flex justify-end  mr-5">
      <input type="text" v-model="box"  @input="searchText"
        class="ml-2 p-1 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm"
         placeholder="Please enter text for searching photos">

      <button class="ml-1 p-1 rounded-sm focus:outline-none bg-blue-500" 
        @click="searchBox">Cancel</button>

    </div>`,

    data() {
      return {
        click: false,
        box: '',
        noPic: false
      }
    },
    methods: {
      searchBox() {
        this.click = !this.click
        if(this.click) {
          this.box = ''
        }
        this.$emit('search-box', this.click)
    },
      searchText() {
            let srtext = this.box
            this.$emit('show-text', srtext)
            srtext = ''
        }
    }
})