// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)');

// KubeJS Day Counter Script
// Place this in kubejs/server_scripts/

PlayerEvents.tick(event => {
    const player = event.player
    const level = event.level
    // const overworld = server.getLevel('minecraft:overworld')
    
    const dayTime = level.dayTime() % 24000
    const totalDays = Math.floor(level.dayTime() / 24000)
    
    // Check if it's 6:00 (time 0 - first tick of MC day)
    if (dayTime === 2) {
        // Check if day number is divisible by 5 (5, 10, 15, etc.)
        if (totalDays % 5 === 0) {
            Client.gui.setTitle("")
            Client.gui.setSubtitle(Component.of([{"text": `第 ${totalDays} 天`,"color": "gold", "bold": true}]))
        }
    }
    
    // Check if it's 18:00 (time 12000)
    if (dayTime === 12000) {
        const nextDay = totalDays + 1
        // Check if tomorrow will be divisible by 5 (today is 4, 9, 14, etc.)
        if (nextDay % 5 === 0) {
            player.displayClientMessage(
                Component.of([{"text": `明天将是第${nextDay}天！`,"color": "yellow"}]), 
                true
            )
        }
    }
})