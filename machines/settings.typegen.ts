// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  'eventsCausingActions': {
    setContext: 'STORE_RESPONSE';
    updateName: 'UPDATE_NAME';
    storeContext: 'UPDATE_NAME' | 'UPDATE_VC_LABEL' | 'STORE_RESPONSE';
    updateVcLabel: 'UPDATE_VC_LABEL';
    requestStoredContext: 'xstate.init';
  };
  'internalEvents': {
    'xstate.init': { type: 'xstate.init' };
  };
  'invokeSrcNameMap': {};
  'missingImplementations': {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  'eventsCausingServices': {};
  'eventsCausingGuards': {
    hasData: 'STORE_RESPONSE';
  };
  'eventsCausingDelays': {};
  'matchesStates': 'init' | 'storingDefaults' | 'idle';
  'tags': never;
}
