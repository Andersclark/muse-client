<script lang="ts" setup>
import useSocketConnection from "../services/useSocketConnection";

const {connect, send, disconnect, status } = useSocketConnection({ address: "http://localhost", port: 3000, logging: true });
defineExpose({send})
</script>
<template>
  <h3>Status: {{status}}</h3>
  <button @click="status">{{status === 'streaming' ? 'Stop' : 'Start'}}</button>
  <button @click="connect">Connect</button>
  <button @click="disconnect">Disconnect</button>
</template>
