<template>
  <div class="flex h-full p-6">
    <div class="bg-white w-[65%] flex flex-col gap-6 p-[4rem] rounded-l-[1rem]">
      <div class="flex justify-between items-center gap-3">
        <div>
          <h1 class="text-[2.4rem] font-bold">Expenses</h1>
          <p class="text-gray-400 text-[1.3rem]">01 - 25 March, 2020</p>
        </div>
        <div>
          <a-avatar-group>
            <a-avatar
              src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
            />
            <a href="https://www.antdv.com">
              <a-avatar style="background-color: #f56a00">K</a-avatar>
            </a>
            <a-tooltip title="Ant User" placement="top">
              <a-avatar style="background-color: #87d068">
                <template #icon>
                  <UserOutlined />
                </template>
              </a-avatar>
            </a-tooltip>
            <a-avatar style="background-color: #1890ff">
              <template #icon>
                <AntDesignOutlined />
              </template>
            </a-avatar>
          </a-avatar-group>
        </div>
      </div>

      <div class="my-6">
        <img
          class="w-full h-full"
          src="/image/Stats.png"
          alt="Statistics Image"
        />
      </div>

      <div v-if="todayExpenses.length > 0">
        <div class="flex justify-between items-center gap-4">
          <h1 class="font-bold text-[1.5rem]">Today</h1>
          <img src="/icons/Dots.png" alt="Dots Icon" />
        </div>
        <hr />
        <div v-for="(todayExpense, index) in todayExpenses" :key="index">
          <div class="flex justify-between my-6 items-center gap-4">
            <div class="flex gap-4 items-center">
              <img
                :src="todayExpense.icon"
                alt="Expense Icon"
                class="w-8 h-8"
              />
              <div>
                <h1>{{ todayExpense.name }}</h1>
                <p>{{ todayExpense.details }}</p>
              </div>
            </div>
            <h1 class="font-bold text-[1.5rem]">{{ todayExpense.amount }}</h1>
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-between items-center gap-4">
          <h1 class="font-bold text-[1.5rem]">Monday, 23 March 2020</h1>
          <img src="/icons/Dots.png" alt="Dots Icon" />
        </div>
        <hr />
        <div v-if="expenses.length > 0">
          <div v-for="(expense, index) in expenses" :key="index">
            <div class="flex justify-between my-6 items-center gap-4">
              <div class="flex gap-4 items-center">
                <img :src="expense.icon" alt="Expense Icon" class="w-8 h-8" />
                <div>
                  <h1>{{ expense.name }}</h1>
                  <p>{{ expense.details }}</p>
                </div>
              </div>
              <h1 class="font-bold text-[1.5rem]">{{ expense.amount }}</h1>
            </div>
          </div>
        </div>
        <div v-else>
          <p>No past expenses found.</p>
        </div>
      </div>
    </div>

    <div
      class="bg-[#979797] w-[35%] p-[4rem] rounded-r-[1rem] flex flex-col justify-center items-center"
    >
      <h1 class="text-[1.7rem] font-bold">Where does your money go?</h1>

      <div class="my-6 w-full flex flex-col gap-6">
        <div v-for="(category, index) in expenseCategories" :key="index">
          <div class="flex text-[#273240] justify-between items-center gap-2">
            <h1 class="font-semibold text-[1.3rem]">{{ category.name }}</h1>
            <h3 class="text-[1.3rem]">{{ category.amount }}</h3>
          </div>
          <div class="w-full bg-white h-3 rounded-full mt-2">
            <div
              class="h-full bg-[#31BA96] rounded-full"
              :style="{ width: category.percentage }"
            ></div>
          </div>
        </div>
      </div>

      <div class="flex flex-col relative items-center gap-3 mt-4">
        <img
          class="w-[30rem] h-full"
          src="/image/BoxTips.png"
          alt="Box Tips Image"
        />
        <div class="absolute bottom-[15%] left-0 right-0 p-6">
          <div class="flex flex-col gap-4">
            <h1 class="font-bold text-[1.6rem]">Save more money</h1>
            <p class="text-[1.2rem] text-gray-400">
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
            <button
              class="bg-black px-10 py-2 text-white rounded font-bold text-[1.4rem]"
            >
              VIEW TIPS
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Avatar, AvatarGroup, Tooltip } from "ant-design-vue";
import { UserOutlined, AntDesignOutlined } from "@ant-design/icons-vue";
import { todayExpenses, expenses, expenseCategories } from "@/data/expensesData";
import { IExpense, IExpenseCategories, ITodayExpense } from "@/types/commonType";

export default defineComponent({
  components: {
    "a-avatar": Avatar,
    "a-avatar-group": AvatarGroup,
    "a-tooltip": Tooltip,
    UserOutlined,
    AntDesignOutlined,
  },
  data() {
    return {
      todayExpenses: [] as ITodayExpense[],
      expenses: [] as IExpense[],
      expenseCategories: [] as IExpenseCategories[],
    };
  },
  created() {
    this.todayExpenses = todayExpenses;
    this.expenses = expenses;
    this.expenseCategories = expenseCategories;
  },
 
});
</script>
