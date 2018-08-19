<template>
    <div id="footer">
      <ul class="coontainer">
        <li v-for="(item, index) in setFooter" :style="{width: setLength + '%'}" :key="index" >
          <router-link :to="item.route" :class="(title === item.title)? 'active':''">
            <i class="iconfont" v-html="item.icon"></i><br/>
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {

      }
    },
    props: {
      title: String
    },
    computed: {
      setFooter() {
        return this.$store.getters.footerList;
      },
      setLength() {
        return 1 / this.setFooter.length * 100 ;
      }
    },
    mounted() {
      console.log('title',this.title)
    }
  }
</script>

<style scoped lang="scss">
  #footer {
    height: 100%;
    width: 100%;
    ul {
      list-style: none;
      overflow: auto;
      height: 100%;
      li {
        float: left;
        margin-top: 0.1rem;
        a {
          color: #999;
          .iconfont {
            font-size: 0.8rem;
          }
        }
      }
      .active {
        color: #86AA9F;
      }
    }
  }
</style>
