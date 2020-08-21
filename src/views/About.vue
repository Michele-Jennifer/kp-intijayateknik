<template>
  <div class="about">
    
    <ul v-for="user in users" :key="user.id">
      <li>
      <span>{{user.name}}</span> &#160;
      </li>
    </ul>
  
  </div>
</template>
