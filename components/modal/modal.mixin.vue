<script>
    import Vue from 'vue'
    import base from '../base.vue';
    export default Vue.extend({
        mixins: [base],
        mounted () {
            this.$nextTick( () => {
                this.show = true;
            })
        },
        data () {
            return {
                show: false,
                title: '',
                content: '',
                htmlContent: '',
                cancel: '',
                ok: '',
                hasClose: false,
                className: ''
            }
        },
    })
</script>