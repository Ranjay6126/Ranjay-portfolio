export const resolveInfoEmail = ({ infoEmail, smtpUser }) => {
  const normalizedInfoEmail = typeof infoEmail === "string" ? infoEmail.trim() : "";
  if (normalizedInfoEmail) return normalizedInfoEmail;

  const normalizedSmtpUser = typeof smtpUser === "string" ? smtpUser.trim() : "";
  if (normalizedSmtpUser) return normalizedSmtpUser;

  return "panditranjay33@gmail.com";
};
