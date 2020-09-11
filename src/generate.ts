import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

import { moduleFile } from "./text/module";
import { componentFile } from "./text/component";
import { serviceFile } from "./text/service";

export const findDir = (filePath: string) => {
  if (fs.statSync(filePath).isFile()) {
    return path.dirname(filePath);
  }

  return filePath;
};

export const makeDirSync = (dir: string) => {
  if (fs.existsSync(dir)) {
    return;
  }

  if (!fs.existsSync(path.dirname(dir))) {
    makeDirSync(path.dirname(dir));
  }

  fs.mkdirSync(dir);
};

export const makeFileSync = (filename: string, content: any) => {
  if (!fs.existsSync(filename)) {
    makeDirSync(path.dirname(filename));

    fs.createWriteStream(filename).write(content);
  }
};

export const generateComponent = (file: vscode.Uri) => {
  vscode.window
    .showInputBox({
      value: "",
      prompt: "Component name",
      ignoreFocusOut: true,
      valueSelection: [-1, -1],
    })
    .then((name) => {
      if (!name) {
        return;
      }

      const componentName = name.charAt(0).toUpperCase() + name.slice(1);

      const dir = findDir(file.fsPath);

      makeFileSync(
        `${dir}/${componentName}.vue`,
        componentFile.replace(/{componentName}/g, componentName)
      );
    });
};

export const generateService = (file: vscode.Uri) => {
  vscode.window
    .showInputBox({
      value: "",
      prompt: "service name",
      ignoreFocusOut: true,
      valueSelection: [-1, -1],
    })
    .then((name) => {
      if (!name) {
        return;
      }

      const dir = findDir(file.fsPath);

      const targetPath = path.join(dir, name);

      makeFileSync(
        `${targetPath}/${name}.tsx`,
        serviceFile.replace(/{serviceName}/g, name)
      );
    });
};

export const generateModule = (file: vscode.Uri) => {
  vscode.window
    .showInputBox({
      value: "",
      prompt: "module name",
      ignoreFocusOut: true,
      valueSelection: [-1, -1],
    })
    .then((name) => {
      if (!name) {
        return;
      }

      const dir = findDir(file.fsPath);

      makeFileSync(`${dir}/${name}.js`, moduleFile);
    });
};
