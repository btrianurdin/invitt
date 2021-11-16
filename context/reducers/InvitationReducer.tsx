/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function InvitationReducer(tasks: any, action: any): any {
  switch (action.type) {
    case 'added':
      return {};
    case 'changed':
      return {
        ...tasks,
        action,
      };
    default:
      return {};
  }
}
