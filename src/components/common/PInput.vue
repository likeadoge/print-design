<template>
  <div :class="['control', mode]">
    <label for="">Main Input</label>
    <input
      class="input"
      @focus="focus"
      @blur="blur"
      v-model="value"
      type="text"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    value: "dsa",
    isFocused: false,
  }),

  computed: {
    mode() {
      return this.isFocused || this.value ? "input" : "blank";
    },
  },

  methods: {
    focus() {
      this.isFocused = true;
    },
    blur() {
      this.isFocused = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.control {
  position: relative;
  &::before {
    bottom: -1px;
    content: "";
    left: 0;
    position: absolute;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    width: 100%;
    border-style: solid;
    border-width: thin 0 0;
    border-color: rgba(0, 0, 0, 0.42);
  }

  &.input {
    label {
      max-width: 133%;
      transform: translateY(-18px) scale(0.75);
    }
  }

  label {
    height: 20px;
    line-height: 20px;
    letter-spacing: normal;

    left: 0px;
    right: auto;
    position: absolute;

    font-size: 16px;
    line-height: 1;
    min-height: 8px;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);

    
    transform-origin: left;

    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    top: 8px;
    white-space: nowrap;
    pointer-events: none;
  }

  input {
    color: rgba(0, 0, 0, 0.87);
    background-color: transparent;
    border-style: none;
    // flex: 1 1 auto;
    line-height: 20px;
    padding: 8px 0;
    max-width: 100%;
    min-width: 0;
    width: 100%;
  }
}

button,
input,
select,
textarea {
  background-color: transparent;
  border-style: none;
  outline: none;
}
button,
input,
optgroup,
select,
textarea {
  font: inherit;
}
input {
  border-radius: 0;
}
</style>