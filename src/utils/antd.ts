import type { MessageInstance } from "antd/es/message/interface";
import type { ModalStaticFunctions } from "antd/es/modal/confirm";
import type { NotificationInstance } from "antd/es/notification/interface";

type ModalInstance = Omit<ModalStaticFunctions, 'warn'>;
class AntdUtils {
  message!: MessageInstance;
  notification!: NotificationInstance;
  modal!: ModalInstance;


  // constructor(
  //   message: MessageInstance,
  //   notification: NotificationInstance,
  //   modal: ModalInstance
  // ) {
  //   this.message = message;
  //   this.notification = notification;
  //   this.modal = modal;
  // }


  setMessageInstance(message: MessageInstance) {
    this.message = message;
    this.message.success
  }


  setNotificationInstance(notification: NotificationInstance) {
    this.notification = notification;
  }

  setModalInstance(modal: ModalInstance) {
    this.modal = modal;
  }
}


export const antdUtil = new AntdUtils()