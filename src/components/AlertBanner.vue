<template>
<div class="alert-banner">
    Нажаль, коворкінга Merge Place більше не існує. <a href="https://mergeplace.notion.site/1052c0596ebe41f0a126b54d7ec5a506" target="_blank">Читати детальніше ↗</a>
</div>
</template>

<script>

export default {
    name: 'AlertBanner'
}
</script>

<style lang="scss">
.alert-banner {
    font-family: $base-font;
    font-size: 16px;
    font-weight: 700;
    background: rgba(255, 0, 0, 0.5); 
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    padding: 30px;
    color: white;
    text-align: center;
    & a:link, a:visited {
        color: white;
        text-decoration: underline;
    }
}
</style>
