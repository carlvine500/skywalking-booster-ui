<!-- Licensed to the Apache Software Foundation (ASF) under one or more
contributor license agreements.  See the NOTICE file distributed with
this work for additional information regarding copyright ownership.
The ASF licenses this file to You under the Apache License, Version 2.0
(the "License"); you may not use this file except in compliance with
the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. -->
<template>
  <div class="graph flex-v" :class="setRight ? 'flex-h' : 'flex-v'">
    <Graph
      :option="option"
      @select="clickEvent"
      :filters="config.filters"
      :relatedTrace="config.relatedTrace"
    />
    <Legend :config="config.legend" :data="data" :intervalTime="intervalTime" />
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import type { PropType } from "vue";
import {
  LineConfig,
  EventParams,
  RelatedTrace,
  Filters,
} from "@/types/dashboard";
import Legend from "./components/Legend.vue";
import useLegendProcess from "@/hooks/useLegendProcessor";

/*global defineProps, defineEmits */
const emits = defineEmits(["click"]);
const props = defineProps({
  data: {
    type: Object as PropType<{ [key: string]: number[] }>,
    default: () => ({}),
  },
  intervalTime: { type: Array as PropType<string[]>, default: () => [] },
  theme: { type: String, default: "light" },
  config: {
    type: Object as PropType<
      LineConfig & {
        filters?: Filters;
        relatedTrace?: RelatedTrace;
        id?: string;
      }
    >,
    default: () => ({
      step: false,
      smooth: false,
      showSymbol: false,
      opacity: 0.4,
      showXAxis: true,
      showYAxis: true,
      smallTips: false,
      showlabels: true,
    }),
  },
});
const setRight = ref<boolean>(false);
const option = computed(() => getOption());
function getOption() {
  const { showEchartsLegend, isRight, chartColors } = useLegendProcess(
    props.config.legend
  );
  setRight.value = isRight;
  const keys = Object.keys(props.data || {}).filter(
    (i: any) => Array.isArray(props.data[i]) && props.data[i].length
  );
  const temp = keys.map((i: any) => {
    const serie: any = {
      data: props.data[i].map((item: any, itemIndex: number) => [
        props.intervalTime[itemIndex],
        item,
      ]),
      name: i,
      type: "line",
      symbol: "circle",
      symbolSize: 8,
      showSymbol: props.config.showSymbol,
      step: props.config.step,
      smooth: props.config.smooth,
      lineStyle: {
        width: 1.5,
        type: "solid",
      },
    };
    if (props.config.type === "Area") {
      serie.areaStyle = {
        opacity: props.config.opacity || 0.4,
      };
    }
    return serie;
  });
  const color: string[] = chartColors(keys);
  const tooltip = {
    trigger: "none",
    axisPointer: {
      type: "cross",
      color: "#333",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    // trigger: "axis",
    // textStyle: {
    //   fontSize: 12,
    //   color: "#333",
    // },
    // enterable: true,
    // confine: true,
    extraCssText: "max-height: 300px; overflow: auto; border: none;",
  };
  const tips = {
    formatter(params: any) {
      return `${params[0].value[1]}`;
    },
    confine: true,
    extraCssText: `height: 20px; padding:0 2px;`,
    trigger: "axis",
    textStyle: {
      fontSize: 12,
      color: "#333",
    },
  };

  return {
    color,
    tooltip: props.config.smallTips ? tips : tooltip,
    legend: {
      type: "scroll",
      show: showEchartsLegend(keys),
      icon: "circle",
      top: 0,
      left: 0,
      itemWidth: 12,
      textStyle: {
        color: props.theme === "dark" ? "#fff" : "#333",
      },
    },
    axisPointer: {
      label: {
        color: "#333",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      },
    },
    grid: {
      top: showEchartsLegend(keys) ? 35 : 10,
      left: 0,
      right: 10,
      bottom: 5,
      containLabel:
        props.config.showlabels === undefined ? true : props.config.showlabels,
    },
    xAxis: {
      type: "category",
      show: props.config.showXAxis,
      axisTick: {
        lineStyle: { color: "#c1c5ca41" },
        alignWithLabel: true,
      },
      splitLine: { show: false },
      axisLine: { lineStyle: { color: "rgba(0,0,0,0)" } },
      axisLabel: { color: "#9da5b2", fontSize: "11" },
    },
    yAxis: {
      show: props.config.showYAxis,
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "#c1c5ca41", type: "dashed" } },
      axisLabel: {
        color: "#9da5b2",
        fontSize: "11",
        show: props.config.showYAxis,
      },
    },
    series: temp,
  };
}

function clickEvent(params: EventParams) {
  emits("click", params);
}
</script>
<style lang="scss" scoped>
.graph {
  width: 100%;
  height: 100%;
}
</style>
