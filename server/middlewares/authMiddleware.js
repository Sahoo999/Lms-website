import { clerkClient } from "@clerk/express";

// Middleware to protect educator-only routes
export const protectEducator = async (req, res, next) => {
  try {
    const userId = req.auth.userId;

    // Ensure userId exists
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const response = await clerkClient.users.getUser(userId);

    // Check role
    if (response.publicMetadata.role !== "educator") {
      return res.status(403).json({ success: false, message: "Access Denied: Not an educator" });
    }

    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
