export interface User {
  username: string,
  email: string,
  role: string[],
}

export function createUser(username: string, email: string, role: string) {
    const roles = role.split(";");
    const user : User ={
        username,
        email,
        role: roles,
    }
    
    return user;
} 