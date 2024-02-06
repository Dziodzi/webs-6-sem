import Role from './role';

interface User {
  id: string;
  username: string;
  password: string;
  balance: number;
  created_at: Date;
  role: Role;
}

export default User;
