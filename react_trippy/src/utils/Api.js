import { Config } from "../../src/Config";

class Api {
  getHome() {
    return fetch(`${Config.host}/api/home`)
      .then((res) => res.json())
      .then((json) => json);

    {
    }
  }
}
export default new Api();
