import type { NodeHandler, TextPayload } from "@brain/sdk";

/**
 * Chat node handler.
 * The actual chat UI is served from ui/index.html.
 * This handler listens for responses from other nodes and keeps them
 * in state so the UI can poll them.
 */
export const handler: NodeHandler = (ctx) => {
  if (ctx.messages.length === 0) {
    return Promise.resolve();
  }

  // Store incoming responses in state for the UI to read
  let history = (ctx.state.history ?? []) as Array<{
    from: string;
    topic: string;
    content: string;
    timestamp: number;
  }>;

  for (const msg of ctx.messages) {
    // `chat.reset` is a network-wide "forget the current conversation"
    // signal: the UI's New-chat button publishes it, but any other surface
    // (discord, telegram, whatsapp, …) is free to too. The chat node wipes
    // its accumulated history and skips storing the reset event itself —
    // it's an in-band control message, not a conversation turn.
    if (msg.topic === "chat.reset") {
      history = [];
      continue;
    }
    const payload = msg.payload as TextPayload;
    history.push({
      from: msg.from,
      topic: msg.topic,
      content: payload.content,
      timestamp: msg.timestamp,
    });
  }

  // Keep last 100 messages
  if (history.length > 100) {
    ctx.state.history = history.slice(-100);
  } else {
    ctx.state.history = history;
  }

  return Promise.resolve();
};
