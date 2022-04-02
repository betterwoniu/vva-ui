<template>
  <button
    class="vva-button"
    :class="{
      [`vva-botton-${type}`]: true,
      [`vva-botton-${size}`]: true,
      [round ? `vva-botton-round` : 'vva-botton']: true,
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VVAButton",
  props: {
    type: {
      type: String,
      validator(value) {
        return [
          "default",
          "primary",
          "info",
          "success",
          "warning",
          "danger",
        ].includes(value);
      },
      default() {
        return "default";
      },
    },
    size: {
      type: String,
      validator(value) {
        return ["Large", "small", "default"].includes(value);
      },
      default() {
        return "default";
      },
    },
    round: {
      type: Boolean,
      validator(value) {
        console.log(value);
        return true;
      },
      default() {
        return false;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/root.scss";
button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  user-select: none;
  vertical-align: middle;
  border: 1px solid;
  padding: 8px 15px;
  border-radius: 5px;
  color: $vva-color-fff;
}
$bgColorList: (
  primary: $vva-color-primary,
  info: $vva-color-info,
  success: $vva-color-success,
  warning: $vva-color-warning,
  danger: $vva-color-danger,
  default: "",
);
@each $type, $color in $bgColorList {
  .vva-botton-#{$type} {
    background-color: $color;
    border-color: $color;
  }
}
$sizeList: (
  Large: 20px,
  small: 12px,
  default: 16px,
);
@each $size, $number in $sizeList {
  .vva-botton-#{$size} {
    font-size: $number;
    padding: $number/2 1.5*$number;
  }
}
.vva-botton-round{
  border-radius: 20px;
}
</style>
