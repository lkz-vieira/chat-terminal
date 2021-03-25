import Events from "events";
import TerminalController from "./src/terminalController.js";
import CliConfig from "./src/cliConfig.js";
import SocketClient from "./src/socket.js";

const [nodePath, filePath, ...commands ] = process.argv
const config = CliConfig.parseArguments(commands)

const componentEmitter = new Events();
const socketClient = new SocketClient(config)
await socketClient.initialize()
