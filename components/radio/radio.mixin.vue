/*
 * @Author: zhaoye 
 * @Date: 2017-01-12 17:29:15 
 * @Last Modified by: liuhuan
 * @Last Modified time: 2017-10-24 16:27:25
 */
<script>
    export default {
        methods: {
            onRadioClick (data, index) {
                if(data[index].isDisable)return;
                data.forEach((_item, idx) => {
                    if(index != idx)
                        data[idx].isActive = false;
                });
                if(data[index].isCancel){ //单选支持当前取消操作
                    if(data[index].isActive){
                        data[index].isActive = false
                    }else{
                        data[index].isActive = true
                    }
                }else{
                    data[index].isActive = true
                }
            }
        }
    }
</script>