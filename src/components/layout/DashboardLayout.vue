<template>
  <div class="flex bg-[#1E1E1E]">
    <!-- Sidebar -->
    <div class="w-[16%] p-4">
      <div class="my-8 ml-6">
        <div class="flex flex-col  mt-4">
          <a-space :size="24">
            <a-badge :count="1">
              <a-avatar :src="profileImage" shape="square"  :size="64"  />
            </a-badge>
          </a-space>
          <div class=" mt-4">
            <p class="text-white text-[1.6rem] font-semibold">{{ profileName }}</p>
            <p class="text-gray-400 text-lg">{{ profileEmail }}</p>
          </div>
        </div>
      </div>
      <a-menu
        class="custom-menu"
        theme="transparent"
        mode="inline"
        :defaultSelectedKeys="['1']"
        :selectedKeys="[selectedKey]"
      >
        <a-menu-item key="1" @click="updateSelectedKey('1')">
          <router-link class="text-[1.5rem] font-bold text-[#797a7ad7]" to="/"
            >Dashboard</router-link
          >
        </a-menu-item>
        <a-menu-item key="2" @click="updateSelectedKey('2')">
          <router-link
            class="text-[1.5rem] font-bold text-[#797a7ad7]"
            to="/expenses"
            >Expenses</router-link
          >
        </a-menu-item>
        <a-menu-item key="3" @click="updateSelectedKey('3')">
          <router-link
            class="text-[1.5rem] font-bold text-[#797a7ad7]"
            to="/wallets"
            >Wallets</router-link
          >
        </a-menu-item>
        <a-menu-item key="4" @click="updateSelectedKey('4')">
          <router-link
            class="text-[1.5rem] font-bold text-[#797a7ad7]"
            to="/summary"
            >Summary</router-link
          >
        </a-menu-item>
        <a-menu-item key="5" @click="updateSelectedKey('5')">
          <router-link
            class="text-[1.5rem] font-bold text-[#797a7ad7]"
            to="/accounts"
            >Accounts</router-link
          >
        </a-menu-item>
        <a-menu-item key="6" @click="updateSelectedKey('6')">
          <router-link
            class="text-[1.5rem] font-bold text-[#797a7ad7]"
            to="/settings"
            >Settings</router-link
          >
        </a-menu-item>
      </a-menu>
    </div>
    <!-- Main Content -->
    <div class="w-[84%] p-4 overflow-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Menu } from "ant-design-vue";

export default defineComponent({
  components: {
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
  },
  setup() {
    const selectedKey = ref("2");

    const updateSelectedKey = (key) => {
      selectedKey.value = key;
    };

    const profileImage = "/image/Profile.png";
    const profileName = "Samantha";
    const profileEmail = "samantha@email.com";

    return {
      selectedKey,
      updateSelectedKey,
      profileImage,
      profileName,
      profileEmail
    };
  },
});
</script>

<style scoped>
.custom-menu .ant-menu-item-selected a {
  color: white !important;
}
</style>
