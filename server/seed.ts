import { storage } from "./storage";
import { hash } from "bcrypt";

const SALT_ROUNDS = 10;

export async function seedAdmin() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  
  // Only seed if admin credentials are provided
  if (!adminEmail || !adminPassword) {
    console.log("No admin credentials found in environment. Skipping admin seed.");
    return;
  }

  // Check if admin already exists
  const existingAdmin = await storage.getUserByEmail(adminEmail);
  if (existingAdmin) {
    console.log("Admin user already exists. Skipping admin seed.");
    return;
  }

  // Create admin user
  const hashedPassword = await hash(adminPassword, SALT_ROUNDS);
  await storage.createUser({
    email: adminEmail,
    password: hashedPassword,
    name: "Admin",
    role: "admin",
  });

  console.log(`Admin user created successfully: ${adminEmail}`);
}
