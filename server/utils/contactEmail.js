export const resolveRecipientEmail = ({ contactEmail, smtpUser }) => {
  const normalizedContactEmail = typeof contactEmail === "string" ? contactEmail.trim() : "";
  if (normalizedContactEmail) return normalizedContactEmail;

  const normalizedSmtpUser = typeof smtpUser === "string" ? smtpUser.trim() : "";
  if (normalizedSmtpUser) return normalizedSmtpUser;

  return "panditranjay33@gmail.com";
};
