module.exports = {
    name: 'ping',
    aliases: ["ping", "latency"],
    category: "information",
    description: "Returns latency and API ping",
    usage: "",
    private: false,
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        const msg = await message.channel.send(`🏓 Pinging...`);
        msg.edit(`🏓 Pong\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency is ${Math.round(client.ws.ping)}ms`);
    }
}