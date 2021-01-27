import Vue from "vue";

import AppButton from "@/components/UI/Controls/Button.vue";
import AppInput from "@/components/UI/Controls/Input.vue";
import AppTextarea from "@/components/UI/Controls/Textarea.vue";
import Message from "@/components/UI/Message.vue";
import Intro from "@/components/UI/Intro.vue";
import PostsList from "@/components/Blog/PostsList.vue";

Vue.component("AppButton", AppButton);
Vue.component("AppInput", AppInput);
Vue.component("AppTextarea", AppTextarea);
Vue.component("Message", Message);
Vue.component("Intro", Intro);
Vue.component("PostsList", PostsList);
