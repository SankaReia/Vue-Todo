<template >
    <div>
        <input type="checkbox" name="checkbox" /> 
        <span>{{ todo.task }}</span>
        <MyBtn @click="$emit('remove', todo)">Delete</MyBtn>
    </div>
</template>


<script>
export default {

    props: {
        todo: {
            type: Object,
            required: true,
        }
    }
}
</script>
