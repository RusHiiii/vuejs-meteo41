<template>
  <Tooltip class="tooltip" backgroundColor="#1e202b">
    <a class="tooltip-home">{{currentValue}}</a>
    <template #popper>
      <p class="blue-min">
        ⤓ {{minValue}} {{unit}} à <DateHelper :date="minReceivedAt" format="LT" />
      </p>
      <p class="orange-max">
        ⤒ {{maxValue}} {{unit}} à <DateHelper :date="maxReceivedAt" format="LT" />
      </p>
    </template>
  </Tooltip>
</template>

<script setup lang="ts">
import { Tooltip } from 'floating-vue'
import DateHelper from "@/components/common/DateHelper.vue";
import {computed} from "vue";
import {showFixedValue} from "@/core/utils/weatherData/showFixedValue.ts";

const props = defineProps<{
  currentValue: string;
  minValue: number|undefined;
  maxValue: number|undefined;
  unit: string;
  minReceivedAt: string|undefined;
  maxReceivedAt: string|undefined;
}>();

const minValue = computed(() => showFixedValue(props.minValue));
const maxValue = computed(() => showFixedValue(props.maxValue));

</script>
