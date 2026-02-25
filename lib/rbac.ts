export type Role = 'OWNER' | 'ADMIN' | 'ESTIMATOR' | 'PM' | 'MEMBER' | 'CLIENT';

const permissions: Record<Role, string[]> = {
  OWNER: ['*'],
  ADMIN: ['projects:read', 'projects:write', 'tasks:write', 'boq:write', 'users:manage'],
  ESTIMATOR: ['projects:read', 'boq:write', 'tasks:read'],
  PM: ['projects:write', 'tasks:write', 'boq:read'],
  MEMBER: ['projects:read', 'tasks:write', 'boq:read'],
  CLIENT: ['projects:read', 'tasks:read', 'boq:read']
};

export function can(role: Role, permission: string) {
  const allowed = permissions[role] ?? [];
  return allowed.includes('*') || allowed.includes(permission);
}
