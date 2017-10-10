<style lang="scss" scoped>
  *{
    margin:0;
    padding:0;
    list-style:none;
    border:0;
  }
  li{
    list-style:none;
  }
  .main{
    position:relative;
    width:720px;
    height:300px;
    .slider{
      width:720px;
      height:300px;
      position:relative;
      overflow: hidden;
      .slider-group{
        width:700%;
        position: absolute;
        top:0;
        left:0;
        .slider-item{
          float: left;
          width:720px;
          text-align: center;
          a{
            display: block;
            width: 100%;
            text-decoration: none;
            img{
              display: block;
              width: 100%;
            }
          }
        }
      }
      .dots{
        position: absolute;
        bottom:10px;
        left: 50%;
        transform:translate(-50%);
        /* line-height: 20px; */
        text-align: center;
        display:inline-block;
        .squares{
          float: left;
          display:block;
          text-align:center;
          vertical-align: middle;
          margin-left: 10px;
          padding:5px;
          box-sizing: border-box;
          width: 20px;
          height: 20px;
          line-height: 20px;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius:50%;
          cursor: pointer;
          font-size:10px;
        }
        .current{
            background: orangered;
            color: red;
          }
      }
    }
    #arr{
      display:none;
      /* position: absolute; */
      span{
        width:40px;
        height: 40px;
        position: absolute;
        top:20%;
        /* left:50%; */
        background:#000;
        cursor: pointer;
        line-height:40px;
        text-align:center;
        font-weight:bold;
        font-family:"黑体";
        font-size:30px;
        color:#fff;
        opacity: 0.7;
        border: 1px solid #000;
      }
      #right{
        right: 5px;
        left:auto;
      }
    }
  }
</style>
<template>
  <div class="main" @mouseover="display"
  @mouseout="hidden">
      <div class="slider" ref="slider">
          <div class="slider-group" ref="sliderGroup">
              <slot>
              </slot>
          </div>
          <div v-if="recommend" class="dots" ref="dot">
              <span class="squares" v-for="(item, index) in dots"
              :class="{current: (currentIndex === index)}" @click="blockage(index)">{{index+1}}</span>
          </div>
      </div>
      <div id="arr" ref="arr">
        <span id="left" @click.stop.prevent="leftArr">&lt</span>
        <span id="right" @click.stop.prevent="rightArr">&gt</span>
      </div>
  </div>
</template>
<script>
    // import BScroll from 'better-scroll'
    import {addClass} from 'common/js/dom.js'
    import {animate} from 'common/js/animate.js'
    export default {
      props: ['recommend'],
        // props: {
        //   recommends: {
        //     type: Object
        //   },
        //     loop: {
        //         type: Boolean,
        //         default: true
        //     },
        //     autoPlay: {
        //         type: Boolean,
        //         default: true
        //     },
        //     interval: {
        //         type: Number,
        //         default: 4000
        //     }
        // },
        data () {
          return {
            width: 0,
            pic: 0, // 用来记录图片出去的张数
            // imgWidth, // 获取图片的宽度
            square: 0, // 用来记录小方块的下标
            timers: null, // 定时器,
            dots: [],
            currentIndex: 0
          }
        },
        computed: {
          // 获取图片的宽度
          imgWidth () {
            return this.$refs.sliderGroup.children[0].offsetWidth
          }

        },
        methods: {
          // 设置slider的宽度
          _setSliderWidth () {
            // 先获取整个列表有多少个元素
            this.sliderGroup = this.$refs.sliderGroup
            this.children = this.$refs.sliderGroup.children
            // 获取slider的宽度
            let clonediv = this.children[0].cloneNode(true)
            this.sliderGroup.appendChild(clonediv)
            for (let i = 0; i < this.children.length; i++) {
              let child = this.children[i]
              addClass(child, 'slider-item')
            }
            // let sliderWidth = this.$refs.slider.clientWidth
            // for (let i = 0; i < this.children.length; i++) {
            //   let child = this.children[i]
            //   addClass(child, 'slider-item')
            //   child.style.width = sliderWidth + 'px'
            //   this.width += sliderWidth

            //   if (this.loop) {
            //     this.width += 2 * sliderWidth
            //   }
            //   this.$refs.sliderGroup.style.width = this.width + 'px'
            // }
          },
          // 初始化slider
          // _initSlider () {
          //   // 第一个参数是dom,
          //   console.log('slider=', this.$refs.slider)
          //   this.slider = new BScroll(this.$refs.slider, {
          //     scrollX: true, // 可以横向滚动
          //     scrollY: false, // 不允许纵向滚动
          //     momentum: false,
          //     snap: true,
          //     snapLoop: this.loop,
          //     snapThreshold: 0.3,
          //     snapSpeed: 400,
          //     click: true
          //   })
          // },
          // 根据图片张数动态生成小方块
          _dots () {
            console.log(this.$refs.sliderGroup.children.length)
            this.dots = new Array(this.$refs.sliderGroup.children.length)
          },
          blockage (index) {
            this.currentIndex = index
            this.pic = this.currentIndex
            let target = -this.pic * this.imgWidth
            animate(this.$refs.sliderGroup, target)
          },
          leftArr () {
            if (this.pic === 0) {
              this.pic = this.children.length - 1
              this.$refs.sliderGroup.style.left = -this.pic * this.imgWidth + 'px'
            }
            this.pic --
            this.currentIndex = this.pic
            console.log(this.currentIndex)
            let target = -this.pic * this.imgWidth
            animate(this.$refs.sliderGroup, target)
          },
          rightArr () {
            if (this.pic === this.children.length - 1) {
              this.pic = 0
              // this.currentIndex = this.pic
              this.$refs.sliderGroup.style.left = -this.pic * this.imgWidth + 'px'
            }
            this.pic ++
            this.currentIndex = this.pic
            if (this.pic === this.children.length - 1) {
              this.currentIndex = 0
            }
            console.log(this.currentIndex)
            let target = -this.pic * this.imgWidth
            animate(this.$refs.sliderGroup, target)
          },
          // 鼠标经过盒子让箭头显示
          display () {
            this.$refs.arr.style.display = 'block'
            clearInterval(this.timers)
          },
          // 鼠标离开盒子让箭头隐藏
          hidden () {
            this.$refs.arr.style.display = 'none'
            this.timers = setInterval(() => {
              this.rightArr()
            }, 6000)
          },
          loopPlay () {
            this.timers = setInterval(() => {
              this.rightArr()
            }, 6000)
          }
        },
        mounted () {
            setTimeout(() => {
              this._dots()
              this._setSliderWidth()
              this.loopPlay()
            }, 20)
        },
        destroyed () {
          clearTimeout(this.timers)
        }
    }
</script>
