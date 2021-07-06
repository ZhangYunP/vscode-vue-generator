/*
 * @Author: zypolo
 * @Date: 2020-09-11 10:31:23
 * @FilePath: \vscode-react-generator\src\extension.ts
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { generateComponent, generateService, generateModule, generatePage } from "./generate";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vue-generator.generator-component",
      generateComponent
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vue-generator.generator-service",
      generateService
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vue-generator.generator-module",
      generateModule
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vue-generator.generator-page",
      generatePage
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
