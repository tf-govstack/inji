// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  'internalEvents': {
    '': { type: '' };
    'done.invoke.request.reviewing.verifyingVp:invocation[0]': {
      type: 'done.invoke.request.reviewing.verifyingVp:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.after(CANCEL_TIMEOUT)#request.cancelling': {
      type: 'xstate.after(CANCEL_TIMEOUT)#request.cancelling';
    };
    'xstate.after(CLEAR_DELAY)#request.clearingConnection': {
      type: 'xstate.after(CLEAR_DELAY)#request.clearingConnection';
    };
    'xstate.after(CONNECTION_TIMEOUT)#request.exchangingDeviceInfo.inProgress': {
      type: 'xstate.after(CONNECTION_TIMEOUT)#request.exchangingDeviceInfo.inProgress';
    };
    'xstate.after(SHARING_TIMEOUT)#request.waitingForVc.inProgress': {
      type: 'xstate.after(SHARING_TIMEOUT)#request.waitingForVc.inProgress';
    };
    'xstate.init': { type: 'xstate.init' };
    'xstate.stop': { type: 'xstate.stop' };
  };
  'invokeSrcNameMap': {
    advertiseDevice: 'done.invoke.request.waitingForConnection:invocation[0]';
    checkBluetoothService: 'done.invoke.request.checkingBluetoothService.checking:invocation[0]';
    checkNetwork: 'done.invoke.request.checkingNetwork:invocation[0]';
    exchangeDeviceInfo: 'done.invoke.request.exchangingDeviceInfo:invocation[0]';
    monitorConnection: 'done.invoke.request:invocation[0]';
    receiveVc: 'done.invoke.request.waitingForVc:invocation[0]';
    requestBluetooth: 'done.invoke.request.checkingBluetoothService.requesting:invocation[0]';
    sendDisconnect: 'done.invoke.request.cancelling:invocation[0]';
    sendVcResponse:
      | 'done.invoke.request.reviewing.accepted:invocation[0]'
      | 'done.invoke.request.reviewing.rejected:invocation[0]';
    verifyVp: 'done.invoke.request.reviewing.verifyingVp:invocation[0]';
  };
  'missingImplementations': {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  'eventsCausingActions': {
    clearShouldVerifyPresence:
      | 'ACCEPT'
      | 'CANCEL'
      | 'FACE_INVALID'
      | 'FACE_VALID'
      | 'REJECT'
      | 'SCREEN_BLUR'
      | 'SCREEN_FOCUS'
      | 'SWITCH_PROTOCOL'
      | 'xstate.stop';
    disconnect:
      | ''
      | 'DISCONNECT'
      | 'DISMISS'
      | 'SCREEN_BLUR'
      | 'SCREEN_FOCUS'
      | 'SWITCH_PROTOCOL'
      | 'xstate.after(CANCEL_TIMEOUT)#request.cancelling'
      | 'xstate.stop';
    generateConnectionParams:
      | 'DISMISS'
      | 'xstate.after(CLEAR_DELAY)#request.clearingConnection';
    logReceived: 'CANCEL' | 'REJECT' | 'STORE_RESPONSE';
    mergeIncomingVc: 'STORE_RESPONSE';
    openSettings: 'GOTO_SETTINGS';
    prependReceivedVc: 'VC_RESPONSE';
    registerLoggers:
      | 'DISMISS'
      | 'xstate.after(CLEAR_DELAY)#request.clearingConnection';
    removeLoggers:
      | 'DISMISS'
      | 'SCREEN_BLUR'
      | 'xstate.after(CLEAR_DELAY)#request.clearingConnection'
      | 'xstate.init';
    requestExistingVc: 'VC_RESPONSE';
    requestReceivedVcs:
      | 'ACCEPT'
      | 'DISMISS'
      | 'FACE_VALID'
      | 'done.invoke.request.reviewing.verifyingVp:invocation[0]';
    requestReceiverInfo: 'CONNECTED';
    setIncomingVc: 'VC_RECEIVED';
    setPairId: 'CONNECTED';
    setReceiveLogTypeDiscarded: 'CANCEL' | 'REJECT';
    setReceiveLogTypeRegular: 'ACCEPT';
    setReceiveLogTypeUnverified: 'FACE_INVALID';
    setReceiveLogTypeVerified: 'FACE_VALID';
    setReceiverInfo: 'RECEIVE_DEVICE_INFO';
    setSenderInfo: 'EXCHANGE_DONE';
    storeVc: 'STORE_RESPONSE';
    switchProtocol: 'SWITCH_PROTOCOL';
    updateReceivedVcs: 'STORE_RESPONSE';
  };
  'eventsCausingDelays': {
    CANCEL_TIMEOUT: 'CANCEL';
    CLEAR_DELAY: '';
    CONNECTION_TIMEOUT: 'RECEIVE_DEVICE_INFO';
    SHARING_TIMEOUT: 'EXCHANGE_DONE';
  };
  'eventsCausingGuards': {
    hasExistingVc: 'VC_RESPONSE';
    isModeOnline: 'SCREEN_FOCUS' | 'SWITCH_PROTOCOL';
  };
  'eventsCausingServices': {
    advertiseDevice:
      | 'DISMISS'
      | 'xstate.after(CLEAR_DELAY)#request.clearingConnection';
    checkBluetoothService:
      | 'ONLINE'
      | 'SCREEN_FOCUS'
      | 'SWITCH_PROTOCOL'
      | 'xstate.after(CANCEL_TIMEOUT)#request.cancelling';
    checkNetwork: 'APP_ACTIVE' | 'SCREEN_FOCUS' | 'SWITCH_PROTOCOL';
    exchangeDeviceInfo: 'RECEIVE_DEVICE_INFO';
    monitorConnection: 'xstate.init';
    receiveVc: 'EXCHANGE_DONE';
    requestBluetooth: 'BLUETOOTH_DISABLED';
    sendDisconnect: 'CANCEL';
    sendVcResponse: 'CANCEL' | 'REJECT' | 'STORE_RESPONSE';
    verifyVp: never;
  };
  'matchesStates':
    | 'bluetoothDenied'
    | 'cancelling'
    | 'checkingBluetoothService'
    | 'checkingBluetoothService.checking'
    | 'checkingBluetoothService.enabled'
    | 'checkingBluetoothService.requesting'
    | 'checkingNetwork'
    | 'clearingConnection'
    | 'disconnected'
    | 'exchangingDeviceInfo'
    | 'exchangingDeviceInfo.inProgress'
    | 'exchangingDeviceInfo.timeout'
    | 'inactive'
    | 'offline'
    | 'preparingToExchangeInfo'
    | 'reviewing'
    | 'reviewing.accepted'
    | 'reviewing.accepting'
    | 'reviewing.accepting.mergingIncomingVc'
    | 'reviewing.accepting.prependingReceivedVc'
    | 'reviewing.accepting.requestingExistingVc'
    | 'reviewing.accepting.requestingReceivedVcs'
    | 'reviewing.accepting.storingVc'
    | 'reviewing.idle'
    | 'reviewing.invalidIdentity'
    | 'reviewing.navigatingToHome'
    | 'reviewing.rejected'
    | 'reviewing.verifyingIdentity'
    | 'reviewing.verifyingVp'
    | 'waitingForConnection'
    | 'waitingForVc'
    | 'waitingForVc.inProgress'
    | 'waitingForVc.timeout'
    | {
        checkingBluetoothService?: 'checking' | 'enabled' | 'requesting';
        exchangingDeviceInfo?: 'inProgress' | 'timeout';
        reviewing?:
          | 'accepted'
          | 'accepting'
          | 'idle'
          | 'invalidIdentity'
          | 'navigatingToHome'
          | 'rejected'
          | 'verifyingIdentity'
          | 'verifyingVp'
          | {
              accepting?:
                | 'mergingIncomingVc'
                | 'prependingReceivedVc'
                | 'requestingExistingVc'
                | 'requestingReceivedVcs'
                | 'storingVc';
            };
        waitingForVc?: 'inProgress' | 'timeout';
      };
  'tags': never;
}
