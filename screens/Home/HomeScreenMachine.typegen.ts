// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  'internalEvents': {
    'xstate.after(100)#HomeScreen.tabs.init': {
      type: 'xstate.after(100)#HomeScreen.tabs.init';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  'invokeSrcNameMap': {};
  'missingImplementations': {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  'eventsCausingActions': {
    resetSelectedVc: 'DISMISS_MODAL' | 'xstate.init';
    setSelectedVc: 'VIEW_VC';
    spawnTabActors: 'xstate.init';
  };
  'eventsCausingDelays': {};
  'eventsCausingGuards': {};
  'eventsCausingServices': {};
  'matchesStates':
    | 'modals'
    | 'modals.none'
    | 'modals.viewingVc'
    | 'tabs'
    | 'tabs.history'
    | 'tabs.init'
    | 'tabs.myVcs'
    | 'tabs.receivedVcs'
    | {
        modals?: 'none' | 'viewingVc';
        tabs?: 'history' | 'init' | 'myVcs' | 'receivedVcs';
      };
  'tags': never;
}
