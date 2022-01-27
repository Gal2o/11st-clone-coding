<template>
  <LNB />
  <RNB />
  <TheHeader />
  <Billboard />
  <Direct />
  <HotFocus />
</template>

<script>
import LNB from '~/components/LNB'
import RNB from '~/components/RNB'
import TheHeader from '~/components/TheHeader'
import Billboard from '~/components/Billboard'
import Direct from '~/components/Direct'
import HotFocus from '~/components/HotFocus'
export default {
  components: {
    LNB,
    RNB,
    TheHeader,
    Billboard,
    Direct,
    HotFocus,
  }
}
</script>

<style lang="scss">
@import "~/scss/main";
</style>
