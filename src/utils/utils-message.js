import { MessageBox, Message } from "element-ui";

const utils = {
  confirm(text = "此操作将永久删除该文件, 是否继续?", title = "提示") {
    return new Promise((resolve, reject) => {
      MessageBox(text, title, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          Message.info("已取消删除");
          reject(false);
        });
    });
  },
};
export default utils;
