<script setup lang="ts">
import MuseControls from "./components/MuseControls.vue";
import {MuseEegReading} from "./services/useMuse";
import WebSocketControls from "./components/WebSocketControls.vue";
import {ref} from "vue";

const serverRef = ref();

function handleMuseValue(value: MuseEegReading){
  serverRef.value && serverRef.value.send(value)
}

</script>

<template>
  <div>
    <h1>Muse</h1>
    <h2>Server</h2>
    <WebSocketControls ref="serverRef" />
    <h2>Headset</h2>
    <MuseControls @value="handleMuseValue"/>
  </div>
</template>
