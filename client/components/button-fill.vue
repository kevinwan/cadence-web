<script>
// Copyright (c) 2017-2020 Uber Technologies Inc.
//
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

export default {
  name: 'button-fill',
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'tertiary'].includes(value),
    },
    disabled: {
      type: Boolean,
    },
    disabledLabel: {
      type: String,
    },
    href: {
      type: String,
    },
    label: {
      type: String,
    },
    tag: {
      type: String,
      default: 'button',
    },
    to: {
      type: Object,
    },
  },
  computed: {
    disabledLabelText() {
      return this.disabled ? this.disabledLabel : '';
    },
  },
  methods: {
    onClick(...args) {
      if (!this.disabled) {
        this.$emit('click', ...args);
      }
    },
  },
};
</script>

<template>
  <component
    :aria-disabled="disabled"
    class="button-fill"
    :class="{
      disabled: disabled,
      [color]: color,
    }"
    :disabled="disabled"
    :href="href"
    :is="tag"
    :to="to"
    :title="disabledLabelText"
    @click="onClick"
  >
    {{ label }}
  </component>
</template>

<style lang="stylus">
.button-fill {
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  padding: 13px 21px;
  transition: all 400ms ease;
  color: #fff !important;
  white-space: nowrap;

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.primary {
    background-color: #11939a;

    &:hover {
      background-color: #0e767b;
    }
  }

  &.secondary {
    background-color: #ca3b27;

    &:hover {
      background-color: #a22f1f;
    }
  }

  &.tertiary {
    background-color: transparent;
    color: #11939a !important;

    &:hover {
      color: #0e767b  !important;
    }
  }
}
</style>
