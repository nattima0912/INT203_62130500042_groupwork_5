const app = Vue.createApp({
    data() {
        return {
            travels: [{id: 0, text: 'จุดที่ดีที่สุด: Murmansk, Siberia, Kola Peninsula', pic: './images/russia.jpg', like: false},
                      {id: 1, text: 'จุดที่ดีที่สุด: Kiruna, Abisko, Swedish Lapland', pic: './images/sweden.jpg', like: false },
                      {id: 2, text: 'จุดที่ดีที่สุด: Anchorage, Fairbanks, Denali, the Yukon', pic: './images/usa.jpg', like: false}],    
            click: false,
            box: '',
            image: '',
            showImg: false,
            noPic: false   
        }

    },
    methods: {
        toggleHeart(id) {
            this.travels[id].like = !this.travels[id].like
        },
        searchText(text) {
            this.box = text
        },
        searchBox() {
            this.click = !this.click
            this.box = ''
        },
        openPic(id) {
            this.image = this.travels[id].pic
            this.showImg = true
        },
        closePic() {
            this.showImg = false
        }
    },
    computed: {
        countUnPic() {
            return this.travels.filter( t => t.like ).length
        },
        searchPic() {
            if(this.box) {
                if(this.travels.filter(travels => travels.text.toLowerCase().includes(this.box.toLowerCase())) == '') {
                    this.noPic = true
                }else {
                    this.noPic = false
                    return this.travels.filter(travels => travels.text.toLowerCase().includes(this.box.toLowerCase()))
                }
            } else {
                this.noPic = false
                return this.travels
            }
        }
    
    } 
    
})
