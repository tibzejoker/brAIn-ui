# Changelog

## 1.0.0 (2026-07-03)


### Features

* add chat UI with message handling and node interaction ([965e780](https://github.com/tibzejoker/brAIn-ui/commit/965e78073dc97f594c29ddd013be37f130588acd))
* add unread message count and bus monitor UI enhancements ([42cf568](https://github.com/tibzejoker/brAIn-ui/commit/42cf56890f77f6451a4eacc71b38124efc7f0bcd))
* chat node New-conversation button + chat.reset bus event ([#15](https://github.com/tibzejoker/brAIn-ui/issues/15)) ([cfbdd3d](https://github.com/tibzejoker/brAIn-ui/commit/cfbdd3dc1d3a9f801742317d9bd9ec86b642e9c8))
* **chat:** auto-say toggles for outgoing user + incoming reply ([#20](https://github.com/tibzejoker/brAIn-ui/issues/20)) ([cd951fd](https://github.com/tibzejoker/brAIn-ui/commit/cd951fd585c7a71d7668feda95e6add29a0ef043))
* **chat:** per-message copy + speak buttons under each bubble ([28ea5b9](https://github.com/tibzejoker/brAIn-ui/commit/28ea5b9f239be0824ea6c8e5cdf0a194fa43943a))
* **chat:** render spoken utterances (intent.detected) as reported speech ([6e51a6d](https://github.com/tibzejoker/brAIn-ui/commit/6e51a6d1e6b4855a0fb8a7d14a819d26d2d2738b))
* **chat:** show the TTS button only when a tts node is present ([#14](https://github.com/tibzejoker/brAIn-ui/issues/14)) ([ef4b138](https://github.com/tibzejoker/brAIn-ui/commit/ef4b1383a37d70766676935c0e1d6822994c9831))
* **chat:** surface chat.input + exact chat.response so bridges can join the conversation ([5bede99](https://github.com/tibzejoker/brAIn-ui/commit/5bede99edfb3e6644970baec34450a5135f58ee6))
* **chat:** tag web-typed chat.input with platform/sender so bridges can prefix consistently ([a1f3964](https://github.com/tibzejoker/brAIn-ui/commit/a1f39649a6c0b24af579206dfea27e9e7a7dcde0))
* enhance command execution with streaming output and improve topic selection in UI ([57580b7](https://github.com/tibzejoker/brAIn-ui/commit/57580b72ffc900f417d0b3382f3e4ec90956a1ca))
* enhance LLM response handling and improve message formatting ([e39d0a0](https://github.com/tibzejoker/brAIn-ui/commit/e39d0a08a5f035e22353e8641f3345938266f231))
* enhance message display with dynamic node names and improve node name loading ([7a3b983](https://github.com/tibzejoker/brAIn-ui/commit/7a3b983e0ed0787cca8124ac78bba562724bc5ea))
* enhance messaging UI with thinking and reply features, and improve topic handling in network graph ([75cf955](https://github.com/tibzejoker/brAIn-ui/commit/75cf955d7dab8da770ab4cac196052e342e56126))
* **mcp:** framework-level MCP exposure — per-node + federated HTTP ([1c89ab5](https://github.com/tibzejoker/brAIn-ui/commit/1c89ab58656d49d8e6cf40231848b38fbeb9ffbd))


### Bug Fixes

* **chat-ui:** stop yanking the viewport to bottom on every poll ([45f6d60](https://github.com/tibzejoker/brAIn-ui/commit/45f6d60976318140fdb9d89244e8cd1d41fac20d))
* **chat:** always re-render polled messages — `length === lastCount` guard froze the UI past 50 ([74fbccb](https://github.com/tibzejoker/brAIn-ui/commit/74fbccb71e8b3afbec4f8cfb9075d995c4d6389b))
* **chat:** default bus monitor panel to closed ([#16](https://github.com/tibzejoker/brAIn-ui/issues/16)) ([ad93f34](https://github.com/tibzejoker/brAIn-ui/commit/ad93f34f9c52c0b285bf3b315275d1706f82da47))
* **chat:** drop the vestigial chat.input self-subscription ([#17](https://github.com/tibzejoker/brAIn-ui/issues/17)) ([2bfda5d](https://github.com/tibzejoker/brAIn-ui/commit/2bfda5de4935862fe140dea2b3d365d885c80f16))
* **chat:** incoming_message expects {content:string} not bare string ([#21](https://github.com/tibzejoker/brAIn-ui/issues/21)) ([ba46ea2](https://github.com/tibzejoker/brAIn-ui/commit/ba46ea280cd5557ee6dcd2bd0f866ea7058f0d23))
* **chat:** make own messages readable with dark violet bg ([#12](https://github.com/tibzejoker/brAIn-ui/issues/12)) ([0b92de0](https://github.com/tibzejoker/brAIn-ui/commit/0b92de08dd75618cbb2b346ce6fbee026cc0145f))
* **chat:** make Send button readable — same white-on-white bug as self-bubble ([#13](https://github.com/tibzejoker/brAIn-ui/issues/13)) ([76e6111](https://github.com/tibzejoker/brAIn-ui/commit/76e611178b442ebee8d2a6f9ac1f54098d50bc2d))
