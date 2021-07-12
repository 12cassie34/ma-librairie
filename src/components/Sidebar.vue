<template>
  <div id="nav">
    <a href="#offcanvas-slide" class="uk-button uk-button-default" uk-toggle>Open</a>

    <div id="offcanvas-slide" class="uk-offcanvas uk-open" uk-offcanvas>
      <div class="uk-width-1-2@s">
        <ul class="uk-nav-primary uk-nav-parent-icon" uk-nav>
          <li class="uk-active"><router-link to="/">現正閱讀</router-link></li>
          <li class="uk-parent">
            <a href="#">已閱讀書單</a>
            <ul class="uk-nav-sub">
              <li><a href="#">2021</a></li>
              <li class="disabled"><a href="#">2022</a></li>
            </ul>
          </li>
          <li class="uk-active"><router-link to="/">願望書單</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>