

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
export default {
    init() {
            jquery.ajax({
                url: '/api/users',
                method: 'GET'
            }).then(users => {
                this.$data.users = users;
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
