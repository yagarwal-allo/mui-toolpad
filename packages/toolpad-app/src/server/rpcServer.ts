import { createMethod, MethodsOf } from './rpc';
import type { ToolpadProject } from './localMode';

// Methods exposed to the Toolpad editor
export function createRpcServer(project: ToolpadProject) {
  return {
    query: {
      dataSourceFetchPrivate: createMethod<typeof project.dataManager.dataSourceFetchPrivate>(
        ({ params }) => {
          return project.dataManager.dataSourceFetchPrivate(...params);
        },
      ),
      execQuery: createMethod<typeof project.dataManager.execDataNodeQuery>(({ params }) => {
        return project.dataManager.execDataNodeQuery(...params);
      }),
      loadDom: createMethod<typeof project.loadDom>(({ params }) => {
        return project.loadDom(...params);
      }),
      getVersionInfo: createMethod<typeof project.getVersionInfo>(({ params }) => {
        return project.getVersionInfo(...params);
      }),
    },
    mutation: {
      saveDom: createMethod<typeof project.saveDom>(({ params }) => {
        return project.saveDom(...params);
      }),
      applyDomDiff: createMethod<typeof project.applyDomDiff>(({ params }) => {
        return project.applyDomDiff(...params);
      }),
      openCodeEditor: createMethod<typeof project.openCodeEditor>(({ params }) => {
        return project.openCodeEditor(...params);
      }),
      createComponent: createMethod<typeof project.createComponent>(({ params }) => {
        return project.createComponent(...params);
      }),
      deletePage: createMethod<typeof project.deletePage>(({ params }) => {
        return project.deletePage(...params);
      }),
      dataSourceExecPrivate: createMethod<typeof project.dataManager.dataSourceExecPrivate>(
        ({ params }) => {
          return project.dataManager.dataSourceExecPrivate(...params);
        },
      ),
    },
  } as const;
}

export type ServerDefinition = MethodsOf<ReturnType<typeof createRpcServer>>;
