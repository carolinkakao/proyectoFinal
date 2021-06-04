<template>
    <div>
        <!-- Avatar 1 -->
        <b-avatar v-b-modal.modal-1 src="https://placekitten.com/300/300" size="6rem"></b-avatar>
        <b-modal id="modal-1" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
        <!-- Avatar 2 -->
        <b-avatar v-b-modal.modal-2 src="https://placekitten.com/300/300" size="6rem"></b-avatar>
        <b-modal id="modal-2" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
        <!-- Avatar 3 -->
        <b-avatar v-b-modal.modal-3 src="https://placekitten.com/300/300" size="6rem"></b-avatar>
        <b-modal id="modal-3" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
        <!-- Avatar 4 -->
        <b-avatar v-b-modal.modal-4 src="https://placekitten.com/300/300" size="6rem"></b-avatar>
        <b-modal id="modal-4" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
        <!-- Avatar 5 -->
        <b-avatar v-b-modal.modal-5 src="https://placekitten.com/300/300" size="6rem"></b-avatar>
        <b-modal id="modal-5" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
    </div>
</template>

<script>
export default {
  name: "Avatar",
};
</script>