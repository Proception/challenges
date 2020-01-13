import 'babel-polyfill';
import swal from 'sweetalert';

/**
* @description class notifies users using alerts
*
* @class Notify
*/
class Notify {
  /**
  * @method notifyError
  * @memberof Notify
  * @static
  * @param {string} error
  *
  * @returns {void}
  */
  static notifyError(error) {
    swal('', error, 'error');
  }

  /**
  * @method notifySuccess
  * @memberof Notify
  * @static
  * @param {string} message
  *
  * @returns {void}
  */
  static async notifySuccess(message) {
    await swal('', message, 'success');
    // window.location.reload();
  }

  /**
  * @method warning
  * @memberof Notify
  * @static
  * @param {string} message
  *
  * @returns {void}
  */
  static async warning(message, action, buttonOptions) {
    swal({
      title: 'Are you sure?',
      text: message,
      icon: 'warning',
      buttons: buttonOptions,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          action();
        }
      });
  }

  /**
    * @method warning
    * @memberof Notify
    * @static
    * @param {string} message
    *
    * @returns {void}
    */
  static async update(message, action, buttonOptions) {
    swal({
      title: 'Email already has Consent!',
      text: message,
      icon: 'warning',
      buttons: buttonOptions,
      dangerMode: true,
    })
      .then((willUpdate) => {
        if (willUpdate) {
          action();
        }
      });
  }
}

export default Notify;
