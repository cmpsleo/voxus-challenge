<template>
  <div class="form-group" :class="focus">
    <label class="label">{{ label }}</label>
    
    <input class="field" type="text" @focus="onFocus" @blur="onBlur($event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    label: String
  },
  data: () => ({
    focused: false
  }),
  computed: {
    focus() {
      return this.focused ? '-active' : ''
    }
  },
  methods: {
    onFocus() {
      this.focused = true
    },
    onBlur(value) {
      if(!value.length) this.focused = false
    }
  }
}
</script>
