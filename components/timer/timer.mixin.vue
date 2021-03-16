/*
 * @Author: zhaoye 
 * @Date: 2017-01-12 17:32:30 
 * @Last Modified by:   zhaoye 
 * @Last Modified time: 2017-01-12 17:32:30 
 */
<script>
const singleToDouble = (val) => {
    if(val < 10){
        val = '0'+val
    }
    return val
}
export default ({
    props:['timeStart','timeEnd','timeLeft'],
    data (){
        return {
            day: 0,
            hour: 0,
            minitue: 0,
            second: 0,
            interval: null,
            startTime: 0,
            endTime: 0,
            status: 'pending',
        }
    },
    created () {
        if(this.timeEnd){
            this.endTime = this.timeEnd
        }
        if(this.timeStart){
            this.startTime = this.timeStart
        }
        if(this.timeLeft){
            this.startTime = Number(new Date().getTime())
            this.endTime = Number(this.startTime) + Number(this.timeLeft)
        }
        if(this.startTime && !this.endTime){
            this.countToStart(this.timeStart);
        }else if (this.startTime && this.endTime){
            this.start()
        }else{
            this.$watch('startTime',this.start)
        }
    },
    methods: {
        countToStart () {
            const now = this.startTime ? new Date(this.startTime) : new Date();
            const end = new Date(this.endTime);
            const delta = end.getTime() - now.getTime();
            //1000 * 60 * 60 * 24 
            //1天的毫秒数
            if(delta <= 86400000){
                setTimeout(() => {
                    this.start();
                },delta);
            }
        },
        start () {
            this.status = 'start'
            //加1秒时间才对
            this.endTime += 1000 
            this.counter()
            this.interval = setInterval( () => {
                this.status = 'counting'
                this.counter();
            },1000)
        },
        counter () {
            this.$nextTick(function(){
                const end = new Date(this.endTime)
                const now = new Date()
                let delta = end.getTime() - now.getTime()
                this.day = Math.floor(delta/1000/60/60/24)
                if(this.day > 3){
                    this.day = 3
                }
                this.hour = Math.floor(delta/1000/60/60%24)
                if(this.type == 'under3'){
                    this.hour += 24 * 2
                }
                this.minitue = Math.floor(delta/1000/60%60)
                this.second = Math.floor(delta/1000%60)
                if(this.hour <= 0 && this.minitue <= 0 && this.second <= 0 && this.day < 1){
                    clearInterval(this.interval)
                    console.log('timerENd')
                    this.status = 'end'
                    this.$emit('timerEnd')
                }
                this.hour = singleToDouble(this.hour)
                this.minitue = singleToDouble(this.minitue)
                this.second = singleToDouble(this.second)
            })
            
        }
    }
})
</script>
