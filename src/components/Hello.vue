<style scoped>
h1 {
    color: #42b983;
}
</style>

<template>
<div class="hello">
    <h1>{{ msg }}</h1>
</div>
</template>

<script>
import jquery from 'jquery';

export default {
        data() {
            return {
                // note: changing this line won't causes changes
                // with hot-reload because the reloaded component
                // preserves its current state and we are modifying
                // its initial state.
                msg: 'Hello World!'
            }
        }
}
</script>
