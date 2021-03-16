/*
 * @Author: zhaoye 
 * @Date: 2017-01-12 17:28:44 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-02-13 16:36:34
 */
<script>
    export default {
        methods: {
            onOptionClick (data, index) {
                if(data[index].isDisable)return;
                data[index].isActive = data[index].isActive ? false : true;
            },
        }
    }
</script>