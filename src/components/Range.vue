<template>
  <div>
    <div class="slider-component">
      <div class="slidecontainer">
        <input
          ref="input"
          v-model="currentValue"
          type="range"
          :min="min"
          :max="max"
          class="slider"
          @input="onInput"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'value',
    'min',
    'max',
    'kolbak', 'color']
  ,
  data(){
    return {
      currentValue: this.value
    };
  },
  methods: {
    onInput() {
      // this.currentValue is a string because HTML is weird
      this.kolbak(parseInt(this.currentValue));
    }
  }
};
</script>

<style scoped>
.slider-component .slidecontainer {
	width: 100%;
}

.slider-component .slidecontainer .slider {
	-webkit-appearance: none;
	appearance: none;
	width: 100%;
	height: 8px;
	border-radius: 2px;
	background: #cfcdcb;
	outline: none;
	opacity: 0.7;
	-webkit-transition: .2s;
	transition: opacity .2s;
}

.slider-component .slidecontainer .slider:hover {
	opacity: 1;
}

.slider-component .slidecontainer .slider::-webkit-slider-thumb,.slider-component .slidecontainer .slider::-moz-range-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 24px;
	height: 24px;
	background: #fd7c84;
	cursor: pointer;
	border-radius: 50%;
}

/* .slider-component .slidecontainer .slider::-moz-range-thumb {
	width: 18px;
	height: 18px;
	background: #fd7c84;
	cursor: pointer;
	border-radius: 50%;
} */
</style>