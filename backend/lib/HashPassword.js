import bcrypt from 'bcryptjs';

export default async function HashPassword (password){

const passwordHash = await bcrypt.hash(
    password,10
  );
    return passwordHash;
}