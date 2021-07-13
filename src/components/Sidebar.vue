<template>
  <div id="nav">
    <div class="list-container">
      <ul class="uk-nav-primary uk-nav-parent-icon" uk-nav>
        <li class="uk-active"><router-link to="/">現正閱讀</router-link></li>
        <li class="uk-parent">
          <a href="#">已閱讀書單</a>
          <ul class="uk-nav-sub">
            <li><a href="#">2021</a></li>
            <li class="disabled"><a href="#">2022</a></li>
          </ul>
        </li>
        <li class="uk-active">
          <router-link to="/wish-list">願望書單</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  width: 15%;
  background-color: $midnight;
  .list-container {
    padding: 1rem;
    a {
      font-size: 1.2rem;
      color: $beach;
    }
    a.router-link-exact-active {
      color: $pink;
    }
  }
}
</style>