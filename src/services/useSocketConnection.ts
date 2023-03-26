import io, {Socket} from "socket.io-client"
import {ref} from "vue";
import { MuseEegReading } from "./useMuse";

const logPrefix = "[SOCKET]: "
export default function useSocketConnection(options: {address: string; port: number; logging?: boolean}) {
  const {logging, address, port} = options;
  const connection = ref<Socket>();
  const connectionsStatus = ref<"disconnected" | "connected">("disconnected");

  function connect(){
    connection.value = io(`${address}:${port}`)
    connectionsStatus.value = "connected"
  }

  function disconnect(){
    connection?.value?.close()
    connectionsStatus.value = "disconnected"

    logging && console.log(logPrefix+"disconnected")
  }
  function send(data: MuseEegReading ){
    logging && console.log(logPrefix + "sending", data)
    connection?.value?.emit("muse", data);
  }

  return { connect, disconnect, send, status: connectionsStatus }
}
