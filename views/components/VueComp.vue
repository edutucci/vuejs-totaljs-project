<template>
    <div id="vuecomp">

        <div class="vueoverlay">

            <div class="vuecomp">
                <li><a href="#" @click="vercomp('vuetools')">VUETOOLS</a></li>
                </br>
                <li><a href="#" @click="vercomp('vueapp')"> VUEAPP </a></li>
            </div>
            <div class="vuecomplist">
                <div v-show="comp == 'vuetools'">
                    <vuetools/>
                </div>
                <div v-show="comp == 'vueapp'">
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
                comp: ''
            }
        },
        methods: {
            vercomp: function (nome) {
                this.comp = nome;
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