require("express")().get("/",(a,r)=>r.end("ok")).listen(8080)
//because its hosted in replit
const Discord = require("discord.js")
const client = new Discord.Client({intents:[Discord.Intents.FLAGS.GUILD_MESSAGES]})//任意に変更してください(intents)
client.on("mssageCreate",message=>{
	if(message.author.id === "832614051514417202" && message.embeds[0] && message.embeds[0].title === "GlowBoard - 色々できるサーバー掲示板" && message.embeds[0].color === 3447003){
		message.channel.send({embeds:[new Discord.MessageEmbed().setTitle("tossしました!!").setDescription("90分後に通知します")]})
		setTimeout(()=>{message.channel.send({embeds:[new Discord.MessageEmbed().setTitle("tossできます").setDescription("`g.toss`と送信してtossしてください")]})},5400000)
	}
})
setInterval(()=>{
	client.user.setActivity(`tossサンプルin${client.guilds.cache.size}guilds`, { type: 'WATCHING' })
},10000)
client.login(process.env.token)//任意に変更してください(token)