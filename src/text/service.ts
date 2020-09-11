/*
 * @Author: zypolo
 * @Date: 2020-09-11 10:31:23
 * @FilePath: \vscode-react-generator\src\text\service.ts
 */
export const serviceFile = `
import ServiceController from '@/{serviceName}/ServiceController'
import { serviceConfig } from '@/config';

const namespace = '{serviceName}'

const api = {
  post: {
    
  },
  get: {
 
  },
}

export default ServiceController.build(api, serviceConfig[namespace])

`;
