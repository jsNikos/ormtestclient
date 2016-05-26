

<template>

<div>
    <select v-model="selectedUser">
        <option v-for="user in users" v-bind:value="user">
            {{ user.firstName + ' ' + user.lastName }}
        </option>
    </select>
    <span v-if="selectedUser">Selected: {{ selectedUser.firstName }}</span>
</div>

</template>

<script>

import jquery from 'jquery';
import chosen from 'imports?jQuery=jquery!../../bower_components/chosen/chosen.jquery.js';
import '../../bower_components/chosen/chosen.css';
export default {
    init() {
            jquery.ajax({
                    url: '/api/users',
                    method: 'GET'
                })
                .then(users => {
                    this.$data.users = users;
                })
                .then(() => {
                    this.$nextTick(() => {
                        jquery(this.$el).find('select').chosen();
                    });
                });
        },
        data() {
            return {
                users: undefined,
                selectedUser: undefined
            }
        }
}

</script>
