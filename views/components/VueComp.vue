<template>
    <div id="vuecomp">
        <div class="divflex">
                <div>
                        <a href="#" style="color:blue;" @click="vercomp('vuetools')">VUETOOLS</a>
                        <a href="#" style="color:blue;" @click="vercomp('vueapp')"> VUEAPP </a>
                </div>
                <div class="divflex" >
                    <div v-show="comp == 'vuetools'" class="divframe">
                        <vuetools/>
                     </div>
                    <div v-show="comp == 'vueapp'" class= " divframe">
                         <app/>
                    </div> 
                </div>
        </div>        
    </div>
</template>

<script>
    import VueTools from './VueTools.vue'
    import VueApp from './App.vue'

    export default {
        data() {
            return {
                comp: 'vuetools'
            }
        },
        methods: {
            vercomp: function (name) {
                this.comp = name;
            }
        },
        components: {
            vuetools: VueTools,
            app: VueApp
        }
    }

</script>

<style>

</style>