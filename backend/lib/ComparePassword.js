import bcrypt from 'bcryptjs';
export default async function ComparePassword(password, UserPassword){
    const matched = await bcrypt.compare(password, UserPassword); 
    return matched;
}