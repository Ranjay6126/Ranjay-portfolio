import { Router } from "express";
import { createContact, getContacts } from "../controllers/contactController.js";
import { validateContactForm, handleValidationErrors } from "../middleware/validation.js";
import { contactRateLimiter } from "../middleware/security.js";

const router = Router();

// Apply rate limiting and validation to contact form submission
router.post("/", contactRateLimiter, validateContactForm, handleValidationErrors, createContact);

// Get all contacts (admin only in production - currently no auth required)
router.get("/", getContacts);

export default router;
