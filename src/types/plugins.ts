import { PackageJson } from 'type-fest';
import { PluginConfiguration, WorkspaceConfiguration } from './config.js';

type IsPluginEnabledCallbackOptions = { manifest: PackageJson; dependencies: Set<string> };

export type IsPluginEnabledCallback = (options: IsPluginEnabledCallbackOptions) => boolean;

type GenericPluginCallbackOptions = {
  cwd: string;
  manifest: PackageJson;
  config: PluginConfiguration;
  workspaceConfig: WorkspaceConfiguration;
  isProduction: boolean;
};

export type GenericPluginCallback = (
  configFilePath: string,
  { cwd, manifest, config, workspaceConfig, isProduction }: GenericPluginCallbackOptions
) => Promise<string[]> | string[];
