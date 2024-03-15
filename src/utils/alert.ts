export enum DropdownAlertType {
  info = 'info',
  warn = 'warn',
  error = 'error',
  success = 'success',
}

export type FnOnClose = () => void;

export default class AlertHelper {
  static dropDown: any;
  static onClose: FnOnClose;

  static setDropDown(dropDown: any) {
    AlertHelper.dropDown = dropDown;
  }

  static show(
    type: keyof typeof DropdownAlertType,
    title: string,
    message: string,
    payload = {},
  ) {
    const { dropDown } = AlertHelper;
    if (dropDown) {
      dropDown.closeAction();
      dropDown.alertWithType(type, title, message, payload);
    }
  }

  static success(title: string, message: string) {
    if (!message) {
      message = title;
      title = 'Successfully';
    }
    AlertHelper.show('success', title, message, { successButtonText: 'OK' });
  }

  static error(title: string, message: string) {
    if (!message) {
      message = title;
      title = 'Ooop';
    }
    AlertHelper.show('error', title, message);
  }

  static warn(title: string, message: string) {
    if (!message) {
      message = title;
      title = 'Warning';
    }
    AlertHelper.show('warn', title, message);
  }

  static info(title: string, message: string, payload: any) {
    AlertHelper.show('info', title, message, payload);
  }

  static setOnClose(onClose: FnOnClose) {
    AlertHelper.onClose = onClose;
  }

  static invokeOnClose() {
    const { onClose } = AlertHelper;
    if (typeof onClose === 'function') {
      onClose();
    }
  }
}
