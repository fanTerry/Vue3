<template>
    <div class="btn" @click="addCount">计数器{{ tripleCounter }}--{{ counterStore.counter }}<a></a></div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useCounter } from '../store/counter'

const counterStore = useCounter()
const addCount = () => { counterStore.counter++}
const tripleCounter = computed(()=> {
    return useCounter().counter * 3
})

</script>

<style lang="scss">
.btn{
    border-color: red;
    .a{
        font-size: 10px;
    }
}
</style>