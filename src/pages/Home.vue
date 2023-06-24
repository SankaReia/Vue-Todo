<template lang="">
  <div class="box">
    <h1>Организуйте работу и жизнь</h1>
    <p>
      Todo List – список дел и таск-менеджер. Он поможет вам обрести
      концентрацию, организованность и покой.
    </p>

    <MyBtn style="background: green" @click="$router.push('/todos')"
      >Начать</MyBtn
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  margin: 100px auto 0 auto;
  width: 100%;
  max-width: 300px;
  text-align: center;
}
p {
  padding: 30px 0;
  font-size: 24px;
}
</style>
