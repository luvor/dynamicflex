<template>
  <div class="main">
    <div class="container">
      <div class="toolbar">
        <div class="justify">
          <h3>flex-direction: {{ fDir }}</h3>
          <Range :min="1" :max="4" :kolbak="changeDir" />
        </div>
        <div class="justify">
          <h3>flex-wrap: {{ fwrap }}</h3>
          <Range :min="1" :max="3" :kolbak="changeWrap" />
        </div>
        <div class="justify">
          <h3>justify-content: {{ jusContent }}</h3>
          <Range :min="1" :max="9" :kolbak="changeJustify" />
        </div>
        <div class="justify">
          <h3>align-items: {{ alignItems }}</h3>
          <Range :min="1" :max="4" :kolbak="changeAlign" />
        </div>
        <div class="justify">
          <h3>align-content: {{ alignContent }}</h3>
          <Range :min="1" :max="7" :kolbak="changeAlignContent" />
        </div>
      </div>
      <div class="wrapper">
        <div
          class="boxes"
          v-bind:style="{
            display: dFlex,
            flexDirection: fDir,
            justifyContent: jusContent,
            flexWrap: fwrap,
            alignItems: alignItems,
            alignContent: alignContent,
          }"
        >
          <div class="box" v-for="item in images" :key="item.id">
            <img
              class="box_img"
              :src="item.urls.regular"
              :title="item.alt_description"
              :alt="item.alt_description"
            />
            <p class="box_p">
              {{
                item.location.title
                  ? item.location.title.replace(/^(.{11}[^\s]*).*/, "$1")
                  : item.alt_description
                  ? item.alt_description.replace(/^(.{11}[^\s]*).*/, "$1")
                  : "unknown"
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Range from "./components/Range.vue";
import API from "./API";

export default {
  name: "App",
  components: {
    Range,
  },
  data() {
    return {
      images: [],
      dFlex: "flex",
      fDir: "row",
      fwrap: "nowrap",
      jusContent: "flex-start",
      alignItems: "start",
      alignContent: "stretch",
    };
  },
  methods: {
    changeJustify(data) {
      switch (data) {
        case 1:
          this.jusContent = "flex-start";
          break;
        case 2:
          this.jusContent = "flex-end";
          break;
        case 3:
          this.jusContent = "space-between";
          break;
        case 4:
          this.jusContent = "space-around";
          break;
        case 5:
          this.jusContent = "space-evenly";
          break;
        case 6:
          this.jusContent = "stretch";
          break;
        case 7:
          this.jusContent = "safe";
          break;
        case 8:
          this.jusContent = "unsafe";
          break;
        case 9:
          this.jusContent = "center";
          break;
        default:
          this.jusContent = "flex-start";
      }
    },
    changeDir(data) {
      switch (data) {
        case 1:
          this.fDir = "row";
          break;
        case 2:
          this.fDir = "column";
          break;
        case 3:
          this.fDir = "row-reverse";
          break;
        case 4:
          this.fDir = "column-reverse";
          break;
        default:
          this.fDir = "row";
      }
    },
    changeAlign(data) {
      switch (data) {
        case 1:
          this.alignItems = "flex-start";
          break;
        case 2:
          this.alignItems = "flex-end";
          break;
        case 3:
          this.alignItems = "center";
          break;
        case 4:
          this.alignItems = "baseline";
          break;
        default:
          this.alignItems = "stretch";
      }
    },
    changeWrap(data) {
      switch (data) {
        case 1:
          this.fwrap = "nowrap";
          break;
        case 2:
          this.fwrap = "wrap";
          break;
        case 3:
          this.fwrap = "wrap-reverse";
          break;
        default:
          this.fwrap = "nowrap";
      }
    },
    changeAlignContent(data) {
      switch (data) {
        case 1:
          this.jusContent = "flex-start";
          break;
        case 2:
          this.jusContent = "flex-end";
          break;
        case 3:
          this.jusContent = "space-between";
          break;
        case 4:
          this.jusContent = "space-around";
          break;
        case 5:
          this.jusContent = "space-evenly";
          break;
        case 6:
          this.jusContent = "stretch";
          break;
        case 7:
          this.jusContent = "center";
          break;
        default:
          this.jusContent = "flex-start";
      }
    },
  },
  mounted() {
    API.get("/photos/random?count=8")
      .then((res) => {
        console.log(res);
        this.images = res.data;
      })
      .catch((e) => console.log(e));
  },
};
</script>

<style lang="scss">
$primary: #fd7c84;
$secondary: #9db802;
$darkAccent: #025b0e;
$background: #f0eeef;
$borders: #cfcdcb;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.toolbar {
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  background: $background;
}
.top-title {
  text-align: center;
}
.wrapper {
  padding: 10px;
  margin-left: 300px;
  background: $background;
}
.boxes {
  max-width: 100%;
  padding: 10px;
  border: 1px solid $borders;
  overflow: auto;
}
.box {
  &_img {
    max-width: 250px;
    max-height: 250px;
  }
  &_p {
    padding: 0 5px;
  }
}

.justify {
  padding: 10px;
  border: 1px solid $borders;
  max-width: 300px;
  margin: 10px;
}
body {
  font-size: 1em/1.5em;
}
img {
  max-width: 400px;
}
@media screen and (max-width: 800px) {
  body {
    font-size: 0.8em;
  }
  img {
    max-width: 300px;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .toolbar {
    position: relative;
  }
  .wrapper {
    margin: 0;
  }
}
@media screen and (max-width: 400px) {
  body {
    font-size: 0.7em;
  }
  img {
    max-width: 200px;
  }
}
body,
img {
  transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
}
</style>
