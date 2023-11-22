import { describe, it, expect, vi } from "vitest";
import HelloWord from "../src/components/HelloWorld.vue";
import { flushPromises, mount } from "@vue/test-utils";
import axios from "axios";
const mockLists = {
  data: [
    { id: 1, name: "Romaric" },
    { id: 2, name: "Adeline" },
    { id: 3, name: "Leatitia" },
  ],
};

vi.spyOn(axios, "get").mockResolvedValue(mockLists);

describe("API", () => {
  it("can retrive users", async () => {
    const wrapper = mount(HelloWord, {
      props: {
        msg: "Hello world",
        alert: "Alert!",
      },
    });

    expect(axios.get).toHaveBeenCalledOnce();

    await flushPromises();

    const users = wrapper.findAll('[data-test="user"]');

    expect(users).toHaveLength(3);
    expect(users[0].text()).toContain("Romaric");
    expect(users[1].text()).toContain("Adeline");
  });
});

describe("Hello world component", () => {
  it("mount components with props", () => {
    const wrapper = mount(HelloWord, {
      props: {
        msg: "Hello world",
        alert: "Alert!",
      },
    });

    expect(wrapper.vm.msg).toContain("Hello world"); //acceder directement aux elements avec vm(props)
    expect(wrapper.text()).toContain("Alert");
  });
});
