<template>
  <div class="form-group" :class="focus">
    <label class="label">{{ label }}</label>
    
    <input
      :type="type"
      :name="name"
      @focus="onFocus"
      @blur="onBlur($event.target.value)"
      class="field" />

    <slot name="error"></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    type: String,
    name: String
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

      this.$emit('input', value)
    }
  }
}
</script>
