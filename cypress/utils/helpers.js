export default{
    getRandomAgentType(){
        const arr = [2, 3, 4];
        const whereType = arr[Math.floor(Math.random() * arr.length)];
        return whereType
    }
}